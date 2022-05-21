/* eslint-disable no-control-regex */
import React from "react";
import { NestedTerraformOutputs } from "../../../lib/output";
import { useCdktfProject } from "./hooks/cdktf-project";
import { StreamView, OutputsBottomBar, StatusBottomBar } from "./components";

type OutputConfig = {
  outDir: string;
  targetStacks?: string[];
  synthCommand: string;
  onOutputsRetrieved: (outputs: NestedTerraformOutputs) => void;
  outputsPath?: string;
};

export const Output = ({
  outDir,
  targetStacks,
  synthCommand,
  onOutputsRetrieved,
  outputsPath,
}: OutputConfig): React.ReactElement => {
  const { status, logEntries, returnValue } = useCdktfProject(
    { outDir, synthCommand },
    async (project) => {
      const outputs = await project.fetchOutputs({ stackNames: targetStacks });
      onOutputsRetrieved(outputs);
      return outputs;
    }
  );

  const bottomBar =
    status.type === "done" ? (
      <OutputsBottomBar outputs={returnValue} outputsFile={outputsPath} />
    ) : (
      <StatusBottomBar status={status} />
    );

  return <StreamView logs={logEntries}>{bottomBar}</StreamView>;
};
