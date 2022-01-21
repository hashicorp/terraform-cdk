/* eslint-disable no-control-regex */
import React, { Fragment } from "react";
import { Text, Box } from "ink";
import Spinner from "ink-spinner";
import { Output as OutputComponent } from "./components";

import {
  Status,
  useRunOutput,
  NestedTerraformOutput,
} from "./terraform-context";

type OutputConfig = {
  targetDir: string;
  targetStack?: string;
  synthCommand: string;
  onOutputsRetrieved: (outputs: NestedTerraformOutput) => void;
  outputsPath?: string;
};

export const Output = ({
  targetDir,
  targetStack,
  synthCommand,
  onOutputsRetrieved,
  outputsPath,
}: OutputConfig): React.ReactElement => {
  const { status, currentStack, errors, output } = useRunOutput({
    targetDir,
    targetStack,
    synthCommand,
    onOutputsRetrieved,
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
        <Box flexDirection="column">
          {output && Object.keys(output).length > 0 ? (
            <Fragment>
              <Box marginTop={1}>
                <Text bold>Output: </Text>
                <OutputComponent output={output} />
              </Box>
            </Fragment>
          ) : (
            <Text>No output found</Text>
          )}
          <Box>
            {outputsPath && output ? (
              <Text>The outputs have been written to {outputsPath}</Text>
            ) : (
              <Text></Text>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};
