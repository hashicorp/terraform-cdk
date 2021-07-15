import React, { Fragment } from "react";
import { Text, Box, Static } from "ink";
import Spinner from "ink-spinner";
import { PlannedResource } from "./models/terraform";
import { PlanElement } from "./components";
import { Status, useTerraformState, useRunDiff } from "./terraform-context";

interface DiffConfig {
  targetDir: string;
  targetStack?: string;
  synthCommand: string;
}

interface PlanSummaryConfig {
  resources: PlannedResource[];
}

const PlanSummary = ({ resources }: PlanSummaryConfig): React.ReactElement => {
  const summary = resources.reduce(
    (accumulator, resource) => {
      if (accumulator[resource.action] !== undefined) {
        accumulator[resource.action] += 1;
      }

      return accumulator;
    },
    {
      create: 0,
      update: 0,
      delete: 0,
    } as any
  );

  return (
    <>
      {Object.keys(summary).map((key, i) => (
        <Box key={key}>
          {i > 0 && <Text>, </Text>}
          <Text>
            {summary[key]} to {key}
          </Text>
        </Box>
      ))}
    </>
  );
};

export const CloudRunInfo = (): React.ReactElement => {
  const { url } = useTerraformState();
  if (url == undefined) return <></>;

  const staticElements = [url];

  return (
    <Static items={staticElements}>
      {(e) => (
        <Text key={e}>
          Running plan in the remote backend. To view this run in a browser,
          visit: {e}
        </Text>
      )}
    </Static>
  );
};

export const Plan = (): React.ReactElement => {
  const { plan, currentStack } = useTerraformState();

  return (
    <Fragment>
      <Box flexDirection="column">
        <CloudRunInfo />
        <Box>
          <Text>Stack: </Text>
          <Text bold>{currentStack.name}</Text>
        </Box>
        {plan?.needsApply ? <Text bold>Resources</Text> : <></>}
        {plan?.applyableResources.map((resource) => (
          <Box key={resource.id} marginLeft={1}>
            <PlanElement resource={resource} stackName={currentStack.name} />
          </Box>
        ))}
        <Box marginTop={1}>
          <Text bold>Diff: </Text>
          <PlanSummary resources={plan?.applyableResources || []} />
          <Text>.</Text>
        </Box>
      </Box>
    </Fragment>
  );
};

export const Diff = ({
  targetDir,
  targetStack,
  synthCommand,
}: DiffConfig): React.ReactElement => {
  const { status, currentStack, errors } = useRunDiff({
    targetDir,
    targetStack,
    synthCommand,
    isSpeculative: true,
  });

  const isPlanning: boolean = status != Status.PLANNED;
  const statusText =
    currentStack.name === "" ? (
      `${status}...`
    ) : (
      <Text>
        {status}
        <Text bold>&nbsp;{currentStack.name}</Text>...
      </Text>
    );

  if (errors) return <Box>{errors}</Box>;

  return (
    <Box>
      <CloudRunInfo />
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
        <Plan />
      )}
    </Box>
  );
};
