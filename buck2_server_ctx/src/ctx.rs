/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use std::collections::HashMap;
use std::future::Future;

use async_trait::async_trait;
use buck2_common::result::SharedResult;
use buck2_core::fs::project::ProjectRelativePath;
use buck2_core::fs::project::ProjectRoot;
use buck2_events::dispatch::EventDispatcher;
use dice::DiceTransaction;
use dice::UserComputationData;
use gazebo::prelude::*;

use crate::concurrency::ConcurrencyHandler;
use crate::concurrency::DiceUpdater;
use crate::raw_output::RawOuputGuard;

#[async_trait]
pub trait ServerCommandContextTrait: Send + Sync + 'static {
    fn working_dir(&self) -> &ProjectRelativePath;

    fn project_root(&self) -> &ProjectRoot;

    /// exposes the dice for scoped access, but isn't intended to be callable by anyone
    async fn dice_accessor(&self, private: PrivateStruct) -> SharedResult<DiceAccessor>;

    fn events(&self) -> &EventDispatcher;

    fn stdout(&mut self) -> anyhow::Result<RawOuputGuard<'_>>;

    async fn request_metadata(&self) -> anyhow::Result<HashMap<String, String>>;

    async fn canonicalize_patterns_for_logging(
        &self,
        patterns: &[buck2_data::TargetPattern],
    ) -> anyhow::Result<Vec<buck2_data::TargetPattern>>;
}

pub struct PrivateStruct(());

pub struct DiceAccessor {
    pub dice_handler: ConcurrencyHandler,
    pub data: UserComputationData,
    pub setup: Box<dyn DiceUpdater>,
}

#[async_trait]
pub trait ServerCommandDiceContext {
    async fn with_dice_ctx<F, Fut, R>(self, exec: F) -> anyhow::Result<R>
    where
        F: FnOnce(Box<dyn ServerCommandContextTrait>, DiceTransaction) -> Fut + Send,
        Fut: Future<Output = anyhow::Result<R>> + Send;
}

#[async_trait]
impl ServerCommandDiceContext for Box<dyn ServerCommandContextTrait> {
    /// Allows running a section of code that uses the shared DiceTransaction
    async fn with_dice_ctx<F, Fut, R>(self, exec: F) -> anyhow::Result<R>
    where
        F: FnOnce(Box<dyn ServerCommandContextTrait>, DiceTransaction) -> Fut + Send,
        Fut: Future<Output = anyhow::Result<R>> + Send,
    {
        let dice_accessor = self.dice_accessor(PrivateStruct(())).await?;

        dice_accessor
            .dice_handler
            .enter(
                self.events().trace_id().dupe(),
                dice_accessor.data,
                &*dice_accessor.setup,
                |dice| async move { exec(self, dice).await },
            )
            .await?
    }
}
