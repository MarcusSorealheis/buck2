/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use buck2_cli_proto::new_generic::ExplainRequest;
use buck2_cli_proto::new_generic::ExplainResponse;
use buck2_common::dice::cells::HasCellResolver;
use buck2_core::target::label::label::TargetLabel;
use buck2_node::nodes::configured::ConfiguredTargetNode;
use buck2_node::nodes::configured_frontend::ConfiguredTargetNodeCalculation;
use buck2_node::target_calculation::ConfiguredTargetCalculation;
use buck2_query::query::syntax::simple::eval::label_indexed::LabelIndexedSet;
use buck2_server_ctx::ctx::ServerCommandContextTrait;
use buck2_server_ctx::partial_result_dispatcher::NoPartialResult;
use buck2_server_ctx::partial_result_dispatcher::PartialResultDispatcher;
use buck2_server_ctx::template::run_server_command;
use buck2_server_ctx::template::ServerCommandTemplate;
use dice::DiceTransaction;
use dupe::Dupe;
use dupe::IterDupedExt;
use tonic::async_trait;

pub(crate) async fn explain_command(
    ctx: &dyn ServerCommandContextTrait,
    partial_result_dispatcher: PartialResultDispatcher<NoPartialResult>,
    req: ExplainRequest,
) -> anyhow::Result<ExplainResponse> {
    run_server_command(ExplainServerCommand { req }, ctx, partial_result_dispatcher).await
}

struct ExplainServerCommand {
    req: ExplainRequest,
}

#[async_trait]
impl ServerCommandTemplate for ExplainServerCommand {
    type StartEvent = buck2_data::ExplainCommandStart;
    type EndEvent = buck2_data::ExplainCommandEnd;
    type Response = buck2_cli_proto::new_generic::ExplainResponse;
    type PartialResult = NoPartialResult;

    async fn command(
        &self,
        _server_ctx: &dyn ServerCommandContextTrait,
        _partial_result_dispatcher: PartialResultDispatcher<Self::PartialResult>,
        ctx: DiceTransaction,
    ) -> anyhow::Result<Self::Response> {
        explain(ctx, &self.req).await
    }

    fn is_success(&self, _response: &Self::Response) -> bool {
        // No response if we failed.
        true
    }

    fn exclusive_command_name(&self) -> Option<String> {
        Some("explain".to_owned())
    }
}

pub(crate) async fn explain(
    mut ctx: DiceTransaction,
    req: &ExplainRequest,
) -> anyhow::Result<ExplainResponse> {
    let configured_target = {
        let cell_resolver = ctx.get_cell_resolver().await?;
        let cell_alias_resolver = ctx
            .get_cell_alias_resolver(cell_resolver.root_cell())
            .await?;
        let target_label = TargetLabel::parse(
            &req.target,
            cell_resolver.root_cell(),
            &cell_resolver,
            &cell_alias_resolver,
        )?;

        let configured_target = ctx.get_default_configured_target(&target_label).await?;
        ctx.get_configured_target_node(&configured_target)
            .await?
            .require_compatible()? // TODO iguridi: not sure about this, make things simpler for now
    };

    let all_deps = {
        let mut stack = vec![configured_target];
        let mut visited = LabelIndexedSet::new();
        while let Some(node) = stack.pop() {
            if visited.insert(node.dupe()) {
                stack.extend(node.deps().duped());
            }
        }
        visited.into_iter().collect::<Vec<ConfiguredTargetNode>>()
    };

    // TODO iguridi: make it work for OSS
    #[cfg(fbcode_build)]
    {
        buck2_explain::main(
            all_deps,
            req.output.as_ref(),
            req.fbs_dump.as_ref(),
            req.allow_vpnless,
            req.manifold_path.as_deref(),
        )
        .await?;
    }
    #[cfg(not(fbcode_build))]
    {
        // just "using" unused variables
        let _all_deps = all_deps;
    }

    Ok(ExplainResponse {})
}
