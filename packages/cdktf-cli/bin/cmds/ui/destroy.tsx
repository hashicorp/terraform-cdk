/* eslint-disable no-control-regex */
import React from "react";

import { useCdktfProject } from "./hooks/cdktf-project";
import { ApproveBottomBar } from "./components/bottom-bars/approve";
import { StatusBottomBar } from "./components/bottom-bars/status";
import { StreamView } from "./components/stream-view";

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
  const { projectUpdate, logEntries, done, errorMessage } = useCdktfProject(
    { outDir, synthCommand, autoApprove },
    (project) => project.destroy(targetStack)
  );

  const bottomBar =
    projectUpdate?.type === "waiting for approval" ? (
      <ApproveBottomBar
        onApprove={projectUpdate.approve}
        onReject={projectUpdate.reject}
      />
    ) : (
      <StatusBottomBar
        latestUpdate={projectUpdate}
        done={done}
        errorMessage={errorMessage}
      />
    );

  return <StreamView logs={logEntries}>{bottomBar}</StreamView>;
};
