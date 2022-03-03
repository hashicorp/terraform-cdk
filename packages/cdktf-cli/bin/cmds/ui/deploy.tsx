/* eslint-disable no-control-regex */
import React from "react";
import { Text, Box } from "ink";
import { DeployingResource } from "../../../lib/models/terraform";
import { NestedTerraformOutputs } from "../../../lib/output";
import { useCdktfProject } from "./hooks/cdktf-project";
import {
  StreamView,
  StatusBottomBar,
  OutputsBottomBar,
  ApproveBottomBar,
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
  targetStack?: string;
  synthCommand: string;
  autoApprove: boolean;
  onOutputsRetrieved: (outputs: NestedTerraformOutputs) => void;
  outputsPath?: string;
}

export const Deploy = ({
  outDir,
  targetStack,
  synthCommand,
  autoApprove,
  onOutputsRetrieved,
  outputsPath,
}: DeployConfig): React.ReactElement => {
  const { projectUpdate, logEntries, done, outputs } = useCdktfProject(
    { outDir, synthCommand, onOutputsRetrieved },
    (project) => project.deploy({ stackName: targetStack, autoApprove })
  );

  const bottomBar = done ? (
    <OutputsBottomBar outputs={outputs} outputsFile={outputsPath} />
  ) : projectUpdate?.type === "waiting for approval" ? (
    <ApproveBottomBar onApprove={projectUpdate.approve} />
  ) : (
    <StatusBottomBar latestUpdate={projectUpdate} done={done} />
  );

  return <StreamView logs={logEntries}>{bottomBar}</StreamView>;
};
