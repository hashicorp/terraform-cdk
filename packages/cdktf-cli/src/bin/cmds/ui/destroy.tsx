/* eslint-disable no-control-regex */
import React from "react";

import { useCdktfProject } from "./hooks/cdktf-project";
import {
  StreamView,
  ExecutionStatusBottomBar,
  ApproveBottomBar,
} from "./components";

interface DestroyConfig {
  outDir: string;
  targetStacks?: string[];
  synthCommand: string;
  autoApprove: boolean;
  ignoreMissingStackDependencies?: boolean;
  parallelism?: number;
  terraformParallelism?: number;
  vars?: string[];
  varFiles?: string[];
}

export const Destroy = ({
  outDir,
  targetStacks,
  synthCommand,
  autoApprove,
  ignoreMissingStackDependencies,
  parallelism,
  terraformParallelism,
  vars,
  varFiles,
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
        vars,
        varFiles,
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
    ) : (
      <ExecutionStatusBottomBar status={status} actionName="destroying" />
    );

  return <StreamView logs={logEntries}>{bottomBar}</StreamView>;
};
