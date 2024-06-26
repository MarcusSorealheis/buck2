/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use std::sync::Arc;

use allocative::Allocative;
use async_trait::async_trait;
use buck2_common::pattern::parse_from_cli::parse_patterns_from_cli_args_typed;
use buck2_core::pattern::pattern::ParsedPatternPredicate;
use buck2_core::pattern::pattern_type::ConfiguredProvidersPatternExtra;
use buck2_core::pattern::pattern_type::TargetPatternExtra;
use buck2_core::pattern::unparsed::UnparsedPatterns;
use buck2_core::target::configured_target_label::ConfiguredTargetLabel;
use buck2_futures::cancellation::CancellationContext;
use dice::DiceComputations;
use dice::DiceProjectionComputations;
use dice::DiceTransactionUpdater;
use dice::InjectedKey;
use dice::Key;
use dice::ProjectionKey;
use dupe::Dupe;
use starlark::eval::ProfileMode;

use crate::starlark_profiler::mode::StarlarkProfileMode;

#[derive(Debug, buck2_error::Error)]
enum StarlarkProfilerError {
    #[error("profiler is not configured to profile last element (internal error)")]
    ProfilerConfigurationNotLast,
}

/// Global profiling configuration.
#[derive(PartialEq, Eq, Clone, Debug, Allocative)]
#[derive(Default)]
pub enum StarlarkProfilerConfiguration {
    /// No profiling.
    #[default]
    None,
    /// Profile loading of one `BUCK`, everything else is instrumented.
    ProfileLastLoading(ProfileMode),
    /// Profile analysis of the last target, everything else is instrumented.
    ProfileLastAnalysis(
        ProfileMode,
        UnparsedPatterns<ConfiguredProvidersPatternExtra>,
    ),
    /// Profile analysis targets recursively.
    ProfileAnalysisRecursively(ProfileMode),
    /// Profile BXL
    ProfileBxl(ProfileMode),
}

impl StarlarkProfilerConfiguration {
    pub fn profile_last_loading(&self) -> anyhow::Result<&ProfileMode> {
        match self {
            StarlarkProfilerConfiguration::None
            | StarlarkProfilerConfiguration::ProfileLastAnalysis(..)
            | StarlarkProfilerConfiguration::ProfileAnalysisRecursively(_)
            | StarlarkProfilerConfiguration::ProfileBxl(_) => {
                Err(StarlarkProfilerError::ProfilerConfigurationNotLast.into())
            }
            StarlarkProfilerConfiguration::ProfileLastLoading(profile_mode) => Ok(profile_mode),
        }
    }
}

#[derive(PartialEq, Eq, Clone, Debug, Allocative)]
enum StarlarkProfilerConfigurationResolved {
    None,
    ProfileLastLoading(ProfileMode),
    ProfileAnalysis(ProfileMode, ParsedPatternPredicate<TargetPatternExtra>),
    ProfileBxl(ProfileMode),
}

#[derive(
    Debug,
    derive_more::Display,
    Copy,
    Clone,
    Dupe,
    Eq,
    PartialEq,
    Hash,
    Allocative
)]
#[display(fmt = "{:?}", self)]
struct StarlarkProfilerConfigurationResolvedKey;

#[async_trait]
impl Key for StarlarkProfilerConfigurationResolvedKey {
    type Value = buck2_error::Result<Arc<StarlarkProfilerConfigurationResolved>>;

    async fn compute(
        &self,
        ctx: &mut DiceComputations,
        _cancellations: &CancellationContext,
    ) -> Self::Value {
        let configuration = ctx.compute(&StarlarkProfilerConfigurationKey).await?;
        let new = match &*configuration {
            StarlarkProfilerConfiguration::None => StarlarkProfilerConfigurationResolved::None,
            StarlarkProfilerConfiguration::ProfileLastLoading(mode) => {
                StarlarkProfilerConfigurationResolved::ProfileLastLoading(mode.dupe())
            }
            StarlarkProfilerConfiguration::ProfileLastAnalysis(mode, patterns) => {
                let patterns =
                    parse_patterns_from_cli_args_typed::<ConfiguredProvidersPatternExtra>(
                        ctx, patterns,
                    )
                    .await?;
                let patterns = patterns
                    .into_iter()
                    .map(|p| {
                        p.map(|_| {
                            // Drop the extra because:
                            // - we don't use providers when profiling analysis
                            // - configuration may create issues when there are transitions;
                            //   it might return more than user requested without
                            //   (e.g. target and host analysis), but practically this is not an issue.
                            TargetPatternExtra
                        })
                    })
                    .collect();
                StarlarkProfilerConfigurationResolved::ProfileAnalysis(
                    mode.dupe(),
                    ParsedPatternPredicate::AnyOf(patterns),
                )
            }
            StarlarkProfilerConfiguration::ProfileAnalysisRecursively(mode) => {
                StarlarkProfilerConfigurationResolved::ProfileAnalysis(
                    mode.dupe(),
                    ParsedPatternPredicate::Any,
                )
            }
            StarlarkProfilerConfiguration::ProfileBxl(mode) => {
                StarlarkProfilerConfigurationResolved::ProfileBxl(mode.dupe())
            }
        };
        Ok(Arc::new(new))
    }

    fn equality(x: &Self::Value, y: &Self::Value) -> bool {
        match (x, y) {
            (Ok(x), Ok(y)) => x == y,
            _ => false,
        }
    }
}

#[derive(
    Debug,
    derive_more::Display,
    Clone,
    Dupe,
    Eq,
    PartialEq,
    Hash,
    Allocative
)]
struct StarlarkProfileModeForAnalysisKey(ConfiguredTargetLabel);

impl ProjectionKey for StarlarkProfileModeForAnalysisKey {
    type DeriveFromKey = StarlarkProfilerConfigurationResolvedKey;

    type Value = buck2_error::Result<StarlarkProfileMode>;

    fn compute(
        &self,
        configuration: &buck2_error::Result<Arc<StarlarkProfilerConfigurationResolved>>,
        _ctx: &DiceProjectionComputations,
    ) -> buck2_error::Result<StarlarkProfileMode> {
        match &**(configuration.as_ref().map_err(|e| e.dupe())?) {
            StarlarkProfilerConfigurationResolved::None => Ok(StarlarkProfileMode::None),
            StarlarkProfilerConfigurationResolved::ProfileLastLoading(_) => {
                Ok(StarlarkProfileMode::None)
            }
            StarlarkProfilerConfigurationResolved::ProfileAnalysis(mode, patterns) => {
                if patterns.matches(self.0.unconfigured()) {
                    Ok(StarlarkProfileMode::Profile(mode.dupe()))
                } else {
                    Ok(StarlarkProfileMode::None)
                }
            }
            StarlarkProfilerConfigurationResolved::ProfileBxl(_) => Ok(StarlarkProfileMode::None),
        }
    }

    fn equality(x: &Self::Value, y: &Self::Value) -> bool {
        match (x, y) {
            (Ok(x), Ok(y)) => x == y,
            _ => false,
        }
    }
}

/// Global Starlark compiler instrumentation level.
///
/// We profile only leaf computations (`BUCK` files or analysis),
/// and this key defines instrumentation of all the Starlark files,
/// regardless of whether profiled entity depends on them or not.
/// It's easier to implement with single global key,
/// the downside is we invalidate parse results when we switch
/// between normal operation/profiling.
#[derive(
    Debug,
    derive_more::Display,
    Copy,
    Clone,
    Dupe,
    Eq,
    PartialEq,
    Hash,
    Allocative
)]
#[display(fmt = "{:?}", self)]
pub struct StarlarkProfilerConfigurationKey;

impl InjectedKey for StarlarkProfilerConfigurationKey {
    type Value = Arc<StarlarkProfilerConfiguration>;

    fn equality(x: &Self::Value, y: &Self::Value) -> bool {
        x == y
    }
}

#[async_trait]
pub trait SetStarlarkProfilerInstrumentation {
    fn set_starlark_profiler_configuration(
        &mut self,
        instrumentation: StarlarkProfilerConfiguration,
    ) -> anyhow::Result<()>;
}

#[async_trait]
pub trait GetStarlarkProfilerInstrumentation {
    /// Profile mode for analysis of given target.
    async fn get_profile_mode_for_analysis(
        &mut self,
        target_label: &ConfiguredTargetLabel,
    ) -> anyhow::Result<StarlarkProfileMode>;
}

#[async_trait]
impl SetStarlarkProfilerInstrumentation for DiceTransactionUpdater {
    fn set_starlark_profiler_configuration(
        &mut self,
        configuration: StarlarkProfilerConfiguration,
    ) -> anyhow::Result<()> {
        Ok(self.changed_to([(StarlarkProfilerConfigurationKey, Arc::new(configuration))])?)
    }
}

#[async_trait]
impl GetStarlarkProfilerInstrumentation for DiceComputations<'_> {
    async fn get_profile_mode_for_analysis(
        &mut self,
        target_label: &ConfiguredTargetLabel,
    ) -> anyhow::Result<StarlarkProfileMode> {
        let cfg = self
            .compute_opaque(&StarlarkProfilerConfigurationResolvedKey)
            .await?;
        Ok(self.projection(
            &cfg,
            &StarlarkProfileModeForAnalysisKey(target_label.dupe()),
        )??)
    }
}
