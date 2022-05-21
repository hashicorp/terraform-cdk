import React from "react";
import { Box, Static, Text } from "ink";
import { LogEntry } from "../hooks/cdktf-project";

const possibleColors = [
  "red",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "green",
];

let colorPointer = 0;

const colorAssignments: Record<string, string> = {};

function getColor(stackName: string): string {
  if (colorAssignments[stackName]) {
    return colorAssignments[stackName];
  }

  const color = possibleColors[colorPointer];
  colorPointer = (colorPointer + 1) % possibleColors.length;
  colorAssignments[stackName] = color;
  return color;
}

export function StreamPrefix({ stackName }: { stackName: string }) {
  return (
    <Text bold color={getColor(stackName)}>
      {stackName}
    </Text>
  );
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
