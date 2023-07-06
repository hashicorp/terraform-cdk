/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

/* eslint-disable no-control-regex */
import React from "react";
import { NestedTerraformOutputs } from "@cdktf/cli-core";
import { useCdktfProject } from "./hooks/cdktf-project";
import { StreamView, OutputsBottomBar, StatusBottomBar } from "./components";

type OutputConfig = {
  outDir: string;
  targetStacks?: string[];
  synthCommand: string;
  onOutputsRetrieved: (outputs: NestedTerraformOutputs) => void;
  outputsPath?: string;
  skipSynth?: boolean;
};

export const Output = ({
  outDir,
  targetStacks,
  synthCommand,
  onOutputsRetrieved,
  outputsPath,
  skipSynth,
}: OutputConfig): React.ReactElement => {
  const { status, logEntries, returnValue } = useCdktfProject(
    { outDir, synthCommand },
    async (project) => {
      const outputs = await project.fetchOutputs({
        stackNames: targetStacks,
        skipSynth,
      });
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
