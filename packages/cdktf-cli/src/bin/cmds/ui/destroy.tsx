/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

/* eslint-disable no-control-regex */
import React from "react";

import { useCdktfProject } from "./hooks/cdktf-project";
import {
  StreamView,
  ExecutionStatusBottomBar,
  ApproveBottomBar,
  OverrideBottomBar,
} from "./components";

interface DestroyConfig {
  outDir: string;
  targetStacks?: string[];
  synthCommand: string;
  autoApprove: boolean;
  ignoreMissingStackDependencies?: boolean;
  parallelism?: number;
  terraformParallelism?: number;
  noColor?: boolean;
  migrateState?: boolean;
  vars?: string[];
  varFiles?: string[];
  skipSynth?: boolean;
}

export const Destroy = ({
  outDir,
  targetStacks,
  synthCommand,
  autoApprove,
  ignoreMissingStackDependencies,
  parallelism,
  terraformParallelism,
  noColor,
  migrateState,
  vars,
  varFiles,
  skipSynth,
}: DestroyConfig): React.ReactElement => {
  const { status, logEntries } = useCdktfProject(
    { outDir, synthCommand },
    (project) =>
      project.destroy({
        stackNames: targetStacks,
        autoApprove,
        ignoreMissingStackDependencies,
        parallelism,
        terraformParallelism,
        noColor,
        migrateState,
        vars,
        varFiles,
        skipSynth,
      })
  );

  const bottomBar =
    status?.type === "waiting for approval of stack" ? (
      <ApproveBottomBar
        stackName={status.stackName}
        onApprove={status.approve}
        onDismiss={status.dismiss}
        onStop={status.stop}
      />
    ) : status?.type ===
      "waiting for override of sentinel policy check failure" ? (
      <OverrideBottomBar
        stackName={status.stackName}
        onOverride={status.override}
        onReject={status.reject}
      />
    ) : (
      <ExecutionStatusBottomBar status={status} actionName="destroying" />
    );

  return <StreamView logs={logEntries}>{bottomBar}</StreamView>;
};
