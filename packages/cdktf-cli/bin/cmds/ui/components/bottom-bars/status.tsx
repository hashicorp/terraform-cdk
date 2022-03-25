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

    // This is handled on the outside of this component
    case "waiting for approval of stack":
      return <></>;

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

export function localizeStacks(num: number) {
  if (num === 1) {
    return "1 Stack";
  }
  return `${num} Stacks`;
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
          {localizeStacks(inProgress.length)} {actionName}
        </Text>
      </Box>
      <Box marginRight={5}>
        <Text>{localizeStacks(finished.length)} done</Text>
      </Box>
      <Box>
        <Text>{localizeStacks(pending.length)} waiting</Text>
      </Box>
    </Box>
  );
}
