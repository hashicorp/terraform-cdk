import React, { Fragment } from "react";
import { Text, Box } from "ink";
import Spinner from "ink-spinner";
import { useRunSynth, Status } from "./terraform-context";

interface ListConfig {
  targetDir: string;
  synthCommand: string;
}

export const List = ({
  targetDir,
  synthCommand,
}: ListConfig): React.ReactElement => {
  const { status, errors, stacks } = useRunSynth({ targetDir, synthCommand });

  const isSynthesizing: boolean = status != Status.SYNTHESIZED;
  const statusText = `${status}...`;

  if (errors) return <Box>{errors}</Box>;

  return (
    <Box>
      {isSynthesizing ? (
        <Fragment>
          <Text color="green">
            <Spinner type="dots" />
          </Text>
          <Box paddingLeft={1}>
            <Text>{statusText}</Text>
          </Box>
        </Fragment>
      ) : (
        <Fragment>
          <Box flexDirection="column" width={80}>
            <Box>
              <Box width="40%">
                <Text bold>Stack name</Text>
              </Box>
              <Box width="60%">
                <Text bold>Path</Text>
              </Box>
            </Box>
            {stacks?.map((stack) => (
              <Box key={stack.name}>
                <Box width="40%">
                  <Text>{stack.name}</Text>
                </Box>
                <Box width="60%">
                  <Text>{stack.workingDirectory}</Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Fragment>
      )}
    </Box>
  );
};
