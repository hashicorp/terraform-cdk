/* eslint-disable no-control-regex */
import React, { useState } from "react";
import { NestedTerraformOutputs } from "../../../lib/output";
import { useCdktfProject } from "./hooks/cdktf-project";
import { StreamView, OutputsBottomBar, StatusBottomBar } from "./components";

type OutputConfig = {
  outDir: string;
  targetStack?: string;
  synthCommand: string;
  onOutputsRetrieved: (outputs: NestedTerraformOutputs) => void;
  outputsPath?: string;
};

export const Output = ({
  outDir,
  targetStack,
  synthCommand,
  onOutputsRetrieved,
  outputsPath,
}: OutputConfig): React.ReactElement => {
  const [outputs, setOutputs] = useState<NestedTerraformOutputs>();
  const { status, logEntries } = useCdktfProject(
    { outDir, synthCommand },
    async (project) => {
      const out = await project.fetchOutputs({ stackName: targetStack });
      setOutputs(out);
      if (out && onOutputsRetrieved) {
        onOutputsRetrieved(out);
      }
    }
  );

  const bottomBar =
    status.type === "done" ? (
      <OutputsBottomBar outputs={outputs} outputsFile={outputsPath} />
    ) : (
      <StatusBottomBar status={status} />
    );

  return <StreamView logs={logEntries}>{bottomBar}</StreamView>;
};
