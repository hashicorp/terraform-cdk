import React from "react";
import { Box, Static, Text } from "ink";
import { LogEntry } from "../hooks/cdktf-project";

export function StreamPrefix({ stackName }: { stackName: string }) {
  return <Text bold>{stackName}</Text>;
}

export function StreamView({
  logs,
  children,
}: {
  logs: LogEntry[];
  children: any;
}) {
  return (
    <Box>
      <Box>
        <Static items={logs}>
          {({ content, id, stackName }) => (
            <Box key={id}>
              <Box marginRight={2}>
                <StreamPrefix stackName={stackName} />
              </Box>
              <Box>
                <Text>{content.trim()}</Text>
              </Box>
            </Box>
          )}
        </Static>
      </Box>
      <Box marginTop={1}>{children}</Box>
    </Box>
  );
}
