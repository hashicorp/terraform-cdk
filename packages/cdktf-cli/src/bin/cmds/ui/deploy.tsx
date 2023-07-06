/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

/* eslint-disable no-control-regex */
import React, { useState } from "react";
import { Text, Box } from "ink";
import { DeployingResource, NestedTerraformOutputs } from "@cdktf/cli-core";
import { useCdktfProject } from "./hooks/cdktf-project";
import {
  StreamView,
  OutputsBottomBar,
  ApproveBottomBar,
  OverrideBottomBar,
  ExecutionStatusBottomBar,
} from "./components";
interface DeploySummaryConfig {
  resources: DeployingResource[];
}

export const DeploySummary = ({
  resources,
}: DeploySummaryConfig): React.ReactElement => {
  const summary = resources.reduce(
    (accumulator, resource) => {
      if (accumulator[resource.applyState] !== undefined) {
        accumulator[resource.applyState] += 1;
      }

      return accumulator;
    },
    {
      created: 0,
      updated: 0,
      destroyed: 0,
    } as any
  );

  return (
    <>
      {Object.keys(summary).map((key, i) => (
        <Box key={key}>
          {i > 0 && <Text>, </Text>}
          <Text>
            {summary[key]} {key}
          </Text>
        </Box>
      ))}
    </>
  );
};

interface DeployConfig {
  outDir: string;
  targetStacks?: string[];
  synthCommand: string;
  autoApprove: boolean;
  onOutputsRetrieved: (outputs: NestedTerraformOutputs) => void;
  outputsPath?: string;
  ignoreMissingStackDependencies?: boolean;
  parallelism?: number;
  refreshOnly?: boolean;
  terraformParallelism?: number;
  vars?: string[];
  varFiles?: string[];
  noColor?: boolean;
  migrateState?: boolean;
  skipSynth?: boolean;
}

export const Deploy = ({
  outDir,
  targetStacks,
  synthCommand,
  autoApprove,
  onOutputsRetrieved,
  outputsPath,
  ignoreMissingStackDependencies,
  parallelism,
  refreshOnly,
  terraformParallelism,
  vars,
  varFiles,
  noColor,
  migrateState,
  skipSynth,
}: DeployConfig): React.ReactElement => {
  const [outputs, setOutputs] = useState<NestedTerraformOutputs>();
  const { status, logEntries } = useCdktfProject(
    { outDir, synthCommand },
    async (project) => {
      await project.deploy({
        stackNames: targetStacks,
        autoApprove,
        ignoreMissingStackDependencies,
        parallelism,
        refreshOnly,
        terraformParallelism,
        vars,
        varFiles,
        noColor,
        migrateState,
        skipSynth,
      });

      if (onOutputsRetrieved) {
        onOutputsRetrieved(project.outputsByConstructId);
      }
      setOutputs(project.outputsByConstructId);
    }
  );

  const bottomBar =
    status.type === "done" ? (
      <OutputsBottomBar outputs={outputs} outputsFile={outputsPath} />
    ) : status?.type === "waiting for approval of stack" ? (
      <ApproveBottomBar
        stackName={status.stackName}
        onApprove={status.approve}
        onDismiss={status.dismiss}
        onStop={status.stop}
      />
    ) : status?.type ===
      "waiting for override of sentinel policy check failure" ? (
      <OverrideBottomBar
        stackName={status.stackName}
        onOverride={status.override}
        onReject={status.reject}
      />
    ) : (
      <ExecutionStatusBottomBar status={status} actionName="deploying" />
    );

  return <StreamView logs={logEntries}>{bottomBar}</StreamView>;
};
