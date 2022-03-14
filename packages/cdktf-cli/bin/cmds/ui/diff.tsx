import React from "react";

import { useCdktfProject } from "./hooks/cdktf-project";
import { StreamView, StatusBottomBar } from "./components";

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
  const { projectUpdate, logEntries, done } = useCdktfProject(
    { outDir, synthCommand },
    (project) => project.diff({ stackName: targetStack })
  );

  return (
    <StreamView logs={logEntries}>
      <StatusBottomBar latestUpdate={projectUpdate} done={done} />
    </StreamView>
  );
};
