import React, { Fragment } from "react";
import { Text, Box } from "ink";
import { useCdktfProject } from "./hooks/cdktf-project";
import { StreamView, StatusBottomBar } from "./components";

interface ListConfig {
  outDir: string;
  synthCommand: string;
}

export const List = ({
  outDir,
  synthCommand,
}: ListConfig): React.ReactElement => {
  const { projectUpdate, logEntries, done, errorMessage } = useCdktfProject(
    { outDir, synthCommand },
    (project) => project.synth()
  );

  return (
    <StreamView logs={logEntries}>
      <StatusBottomBar
        latestUpdate={projectUpdate}
        done={done}
        errorMessage={errorMessage}
      >
        {projectUpdate?.type === "synthesized" ? (
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
                {projectUpdate.stacks.map((stack) => (
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
        ) : (
          <></>
        )}
      </StatusBottomBar>
    </StreamView>
  );
};
