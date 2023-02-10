/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

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
  const { status, logEntries, returnValue } = useCdktfProject(
    { outDir, synthCommand },
    (project) => project.synth()
  );

  return (
    <StreamView logs={logEntries}>
      <StatusBottomBar status={status}>
        {status.type === "done" ? (
          <Box>
            <Fragment>
              <Box flexDirection="column">
                <Box>
                  <Box width="40%">
                    <Text bold>Stack name</Text>
                  </Box>
                  <Box width="60%">
                    <Text bold>Path</Text>
                  </Box>
                </Box>
                {returnValue!.map((stack) => (
                  <Box key={stack.name}>
                    <Box width="40%" paddingRight={1}>
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
