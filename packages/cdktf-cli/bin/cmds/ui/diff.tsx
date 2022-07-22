import React from "react";

import { useCdktfProject } from "./hooks/cdktf-project";
import { StreamView, StatusBottomBar } from "./components";

interface DiffConfig {
  outDir: string;
  targetStack?: string;
  synthCommand: string;
  refreshOnly?: boolean;
}

export const Diff = ({
  outDir,
  targetStack,
  synthCommand,
  refreshOnly,
}: DiffConfig): React.ReactElement => {
  const { status, logEntries } = useCdktfProject(
    { outDir, synthCommand },
    (project) => project.diff({ stackName: targetStack, refreshOnly })
  );

  return (
    <StreamView logs={logEntries}>
      <StatusBottomBar status={status} />
    </StreamView>
  );
};
