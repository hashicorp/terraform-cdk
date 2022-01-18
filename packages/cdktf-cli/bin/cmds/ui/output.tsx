/* eslint-disable no-control-regex */
import React, { Fragment } from "react";
import { Text, Box } from "ink";
import Spinner from "ink-spinner";
import { Output as OutputComponent } from "./components";

import { Status, useRunOutput } from "./terraform-context";

type OutputConfig = {
  targetDir: string;
  targetStack?: string;
  synthCommand: string;
};

export const Output = ({
  targetDir,
  targetStack,
  synthCommand,
}: OutputConfig): React.ReactElement => {
  const { status, currentStack, errors, output } = useRunOutput({
    targetDir,
    targetStack,
    synthCommand,
  });

  const planStages = [
    Status.INITIALIZING,
    Status.SYNTHESIZING,
    Status.SYNTHESIZED,
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
          {output && Object.keys(output).length > 0 ? (
            <Box marginTop={1}>
              <Text bold>Output: </Text>
              <OutputComponent output={output} />
            </Box>
          ) : (
            <Text>No output found</Text>
          )}
        </>
      )}
    </Box>
  );
};
