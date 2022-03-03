/* eslint-disable no-control-regex */
import React from "react";

import { useCdktfProject } from "./hooks/cdktf-project";
import { StreamView, StatusBottomBar, ApproveBottomBar } from "./components";

interface DestroyConfig {
  outDir: string;
  targetStack?: string;
  synthCommand: string;
  autoApprove: boolean;
}

export const Destroy = ({
  outDir,
  targetStack,
  synthCommand,
  autoApprove,
}: DestroyConfig): React.ReactElement => {
  const { projectUpdate, logEntries, done } = useCdktfProject(
    { outDir, synthCommand },
    (project) => project.destroy({ stackName: targetStack, autoApprove })
  );

  const bottomBar =
    projectUpdate?.type === "waiting for approval" ? (
      <ApproveBottomBar onApprove={projectUpdate.approve} />
    ) : (
      <StatusBottomBar latestUpdate={projectUpdate} done={done} />
    );

  return <StreamView logs={logEntries}>{bottomBar}</StreamView>;
};
