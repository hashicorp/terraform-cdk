import React from "react";

import { useCdktfProject } from "./hooks/cdktf-project";
import { StreamView, StatusBottomBar } from "./components";

interface DiffConfig {
  outDir: string;
  targetStack?: string;
  synthCommand: string;
  refreshOnly?: boolean;
  terraformParallelism?: number;
  noColor?: boolean;
}

export const Diff = ({
  outDir,
  targetStack,
  synthCommand,
  refreshOnly,
  terraformParallelism,
  noColor
}: DiffConfig): React.ReactElement => {
  const { status, logEntries } = useCdktfProject(
    { outDir, synthCommand },
    (project) =>
      project.diff({
        stackName: targetStack,
        refreshOnly,
        terraformParallelism,
        noColor
      })
  );

  return (
    <StreamView logs={logEntries}>
      <StatusBottomBar status={status} />
    </StreamView>
  );
};
