import React from "react";
import { Text, Box } from "ink";
import Spinner from "ink-spinner";
import { Status } from "../../hooks/cdktf-project";

type Props = {
  status: Status;
  errorMessage?: string;
  children?: any;
  actionName: "deploying" | "destroying";
};

export function StatusBottomBar({
  status,
  children,
}: Omit<Props, "actionName">) {
  switch (status.type) {
    case "done": {
      if (children) {
        return children;
      }
      return <></>;
    }

    case "waiting for approval of stack":
      return <Text>Not implemented yet</Text>;

    case "starting":
      return (
        <Box>
          <Box marginRight={2}>
            <Text>
              <Spinner type="dots" />
            </Text>
          </Box>
          <Box>
            <Text bold>Starting</Text>
          </Box>
        </Box>
      );

    case "synthesizing":
      return (
        <Box>
          <Box marginRight={2}>
            <Text>
              <Spinner type="dots" />
            </Text>
          </Box>
          <Box>
            <Text bold>Synthesizing</Text>
          </Box>
        </Box>
      );

    case "running":
      return (
        <Box>
          <Box marginRight={2}>
            <Text>
              <Spinner type="dots" />
            </Text>
          </Box>
          <Box>
            <Text bold>Processing</Text>
          </Box>
        </Box>
      );
  }
}

export function ExecutionStatusBottomBar({
  status,
  children,
  actionName,
}: Props) {
  if (status?.type !== "running") {
    return <StatusBottomBar status={status}>{children}</StatusBottomBar>;
  }
  const { inProgress, finished, pending } = status;

  return (
    <Box marginTop={1}>
      <Box marginRight={5}>
        <Text>
          {inProgress.length} Stacks {actionName}
        </Text>
      </Box>
      <Box marginRight={5}>
        <Text>{finished.length} Stacks done</Text>
      </Box>
      <Box>
        <Text>{pending.length} Stacks waiting</Text>
      </Box>
    </Box>
  );
}
