/* eslint-disable no-control-regex */
import React from "react";

import { useCdktfProject } from "./hooks/cdktf-project";
import { StreamView, StatusBottomBar, ApproveBottomBar } from "./components";

interface DestroyConfig {
  outDir: string;
  targetStacks?: string[];
  synthCommand: string;
  autoApprove: boolean;
  ignoreMissingStackDependencies?: boolean;
}

export const Destroy = ({
  outDir,
  targetStacks,
  synthCommand,
  autoApprove,
  ignoreMissingStackDependencies,
}: DestroyConfig): React.ReactElement => {
  const { projectUpdate, logEntries, done } = useCdktfProject(
    { outDir, synthCommand },
    (project) =>
      project.destroy({
        stackNames: targetStacks,
        autoApprove,
        ignoreMissingStackDependencies,
      })
  );

  const bottomBar =
    projectUpdate?.type === "waiting for approval" ? (
      <ApproveBottomBar
        onApprove={projectUpdate.approve}
        onDismiss={projectUpdate.dismiss}
        onStop={projectUpdate.stop}
      />
    ) : (
      <StatusBottomBar latestUpdate={projectUpdate} done={done} />
    );

  return <StreamView logs={logEntries}>{bottomBar}</StreamView>;
};
