import React from "react";

import { useCdktfProject } from "./hooks/cdktf-project";
import { StreamView } from "./components/stream-view";
import { StatusBottomBar } from "./components/bottom-bars/status";

interface DiffConfig {
  outDir: string;
  targetStack?: string;
  synthCommand: string;
}

export const Diff = ({
  outDir,
  targetStack,
  synthCommand,
}: DiffConfig): React.ReactElement => {
  const { projectUpdate, logEntries, done, errorMessage } = useCdktfProject(
    { outDir, synthCommand },
    (project) => project.diff(targetStack)
  );

  return (
    <StreamView logs={logEntries}>
      <StatusBottomBar
        latestUpdate={projectUpdate}
        done={done}
        errorMessage={errorMessage}
      />
    </StreamView>
  );
};
