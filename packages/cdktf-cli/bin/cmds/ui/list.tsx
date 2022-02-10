import React, { Fragment, useState, useEffect } from "react";
import { Text, Box } from "ink";
import Spinner from "ink-spinner";
import { CdktfProject, Status, SynthesizedStack } from "../../../lib";
import { ErrorComponent } from "./components/error";

interface ListConfig {
  targetDir: string;
  synthCommand: string;
}

export const List = ({
  targetDir,
  synthCommand,
}: ListConfig): React.ReactElement => {
  const [projectStatus, setProjectStatus] = useState<Status>();
  const [stacks, setStacks] = useState<SynthesizedStack[] | undefined>(
    undefined
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const project = new CdktfProject({
      targetDir,
      synthCommand,
      onUpdate: () => {
        setProjectStatus(project.status);
      },
    });

    project.synth().then(() => setStacks(project.stacks), setError);
  }, [setStacks, setError]);

  if (stacks !== undefined) {
    return (
      <Box>
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
      </Box>
    );
  }

  if (error) return <ErrorComponent error={error} />;

  return (
    <Box>
      <Fragment>
        <Text color="green">
          <Spinner type="dots" />
        </Text>
        <Box paddingLeft={1}>
          <Text>{projectStatus}...</Text>
        </Box>
      </Fragment>
    </Box>
  );
};
