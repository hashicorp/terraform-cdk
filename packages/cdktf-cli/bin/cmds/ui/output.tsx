/* eslint-disable no-control-regex */
import React from "react";
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
  const { status, logEntries, done, outputs } = useCdktfProject(
    { outDir, synthCommand, onOutputsRetrieved },
    (project) => project.fetchOutputs({ stackName: targetStack })
  );

  const bottomBar = done ? (
    <OutputsBottomBar outputs={outputs} outputsFile={outputsPath} />
  ) : (
    <StatusBottomBar status={status} />
  );

  return <StreamView logs={logEntries}>{bottomBar}</StreamView>;
};
