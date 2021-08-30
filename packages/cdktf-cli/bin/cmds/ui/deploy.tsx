/* eslint-disable no-control-regex */
import React, { Fragment, useState } from "react";
import { Text, Box } from "ink";
import Spinner from "ink-spinner";
import ConfirmInput from "@skorfmann/ink-confirm-input";
import { DeployingElement } from "./components";
import {
  DeployingResource,
  TerraformOutput,
  PlannedResourceAction,
} from "./models/terraform";
import { Status, useTerraformState, useRunDeploy } from "./terraform-context";
import { Plan } from "./diff";

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

interface OutputConfig {
  output: { [key: string]: TerraformOutput };
}
function sanitize(value: any) {
  if (typeof value === "object") {
    return JSON.stringify(value, null, 2);
  }

  return value;
}
export const Output = ({ output }: OutputConfig): React.ReactElement => {
  return (
    <Box flexDirection="column">
      {Object.keys(output).map((key) => (
        <Box key={key}>
          <Text>
            {key} ={" "}
            {output[key].sensitive
              ? "<sensitive>"
              : sanitize(output[key].value)}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

interface ConfirmConfig {
  callback: (value: any) => any;
}

const Confirm = ({ callback }: ConfirmConfig): React.ReactElement => {
  const [value, setValue] = useState("");

  return (
    <Box flexDirection="column" marginTop={1}>
      <Text bold>Do you want to perform these actions?</Text>
      <Text> CDK for Terraform will perform the actions described above.</Text>
      <Text> Only 'yes' will be accepted to approve.</Text>

      <Box flexDirection="row" marginTop={1}>
        <Text bold> Enter a value:</Text>
        <ConfirmInput value={value} onChange={setValue} onSubmit={callback} />
      </Box>
    </Box>
  );
};

interface ApplyableResourcesConfig {
  resources: DeployingResource[];
  stackName: string;
}
const ApplyableResources = ({
  resources,
  stackName,
}: ApplyableResourcesConfig): React.ReactElement => {
  if (!resources.length) {
    return <></>;
  }

  return (
    <>
      <Text bold>Resources</Text>
      {resources.map((resource: any) => (
        <Box key={resource.id} marginLeft={1}>
          <DeployingElement resource={resource} stackName={stackName} />
        </Box>
      ))}
      <Box marginTop={1}>
        <Text bold>Summary: </Text>
        <DeploySummary resources={resources} />
        <Text>.</Text>
      </Box>
    </>
  );
};

export const Apply = (): React.ReactElement => {
  const { resources, status, currentStack, output } = useTerraformState();
  const applyActions = [
    PlannedResourceAction.UPDATE,
    PlannedResourceAction.CREATE,
    PlannedResourceAction.DELETE,
    PlannedResourceAction.READ,
  ];
  const applyableResources = resources.filter((resource) =>
    applyActions.includes(resource.action)
  );
  return (
    <Fragment>
      <Box flexDirection="column">
        <Box>
          {Status.DEPLOYING == status ? (
            <>
              <Text color="green">
                <Spinner type="dots" />
              </Text>
              <Box paddingLeft={1}>
                <Text>Deploying Stack: </Text>
                <Text bold>{currentStack.name}</Text>
              </Box>
            </>
          ) : (
            <>
              <Text>Deploying Stack: </Text>
              <Text bold>{currentStack.name}</Text>
            </>
          )}
        </Box>
        <ApplyableResources
          resources={applyableResources}
          stackName={currentStack.name}
        />
        {output && Object.keys(output).length > 0 && (
          <Box marginTop={1}>
            <Text bold>Output: </Text>
            <Output output={output} />
          </Box>
        )}
      </Box>
    </Fragment>
  );
};

interface DeployConfig {
  targetDir: string;
  targetStack?: string;
  synthCommand: string;
  autoApprove: boolean;
}

export const Deploy = ({
  targetDir,
  targetStack,
  synthCommand,
  autoApprove,
}: DeployConfig): React.ReactElement => {
  const {
    state: { status, currentStack, errors, plan },
    confirmation,
    isConfirmed,
  } = useRunDeploy({
    targetDir,
    targetStack,
    synthCommand,
    autoApprove,
  });

  const planStages = [
    Status.INITIALIZING,
    Status.PLANNING,
    Status.SYNTHESIZING,
    Status.SYNTHESIZED,
    Status.STARTING,
  ];
  const isPlanning = planStages.includes(status);
  const statusText =
    currentStack.name === "" ? (
      <Text>{status}...</Text>
    ) : (
      <Text>
        {status}
        <Text bold>&nbsp;{currentStack.name}</Text>...
      </Text>
    );

  if (errors) return <Box>{errors.map((e: any) => e.message)}</Box>;
  if (plan && !plan.needsApply)
    return (
      <>
        <Text>
          No changes for Stack: <Text bold>{currentStack.name}</Text>
        </Text>
      </>
    );

  return (
    <Box>
      {isPlanning ? (
        <Fragment>
          <Text color="green">
            <Spinner type="dots" />
          </Text>
          <Box paddingLeft={1}>
            <Text>{statusText}</Text>
          </Box>
        </Fragment>
      ) : (
        <>
          {!isConfirmed && (
            <Box flexDirection="column">
              <Plan />
              <Confirm callback={confirmation} />
            </Box>
          )}
          {isConfirmed && <Apply />}
        </>
      )}
    </Box>
  );
};
