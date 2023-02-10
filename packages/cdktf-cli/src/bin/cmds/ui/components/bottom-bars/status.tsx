/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import React from "react";
import { Text, Box } from "ink";
import Spinner from "ink-spinner";
import { Status } from "../../hooks/cdktf-project";
import { WatchState, CdktfStack } from "@cdktf/cli-core";

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

function Execution({
  inProgress,
  finished,
  pending,
  actionName,
}: Pick<Props, "actionName"> & {
  inProgress: CdktfStack[];
  finished: CdktfStack[];
  pending: CdktfStack[];
}) {
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

export function ExecutionStatusBottomBar({
  status,
  children,
  actionName,
}: Props) {
  if (status?.type !== "running") {
    return <StatusBottomBar status={status}>{children}</StatusBottomBar>;
  }

  return (
    <Execution
      inProgress={status.inProgress}
      finished={status.finished}
      pending={status.pending}
      actionName={actionName}
    />
  );
}

export function WatchStatusBottomBar({
  currentState,
}: {
  currentState: WatchState;
}): React.ReactElement {
  switch (currentState.type) {
    case "waiting": {
      return (
        <Box marginTop={1}>
          <Spinner />
          <Box marginLeft={1}>
            <Text>Waiting for changes...</Text>
          </Box>
        </Box>
      );
    }
    case "stopped": {
      return (
        <Box marginTop={1}>
          <Text>Watch was stopped</Text>
        </Box>
      );
    }

    case "running": {
      if (
        currentState.inProgress.length +
          currentState.finished.length +
          currentState.pending.length ===
        0
      ) {
        return (
          <Box marginTop={1}>
            <Spinner />
            <Box marginLeft={1}>
              <Text>Synthesizing...</Text>
            </Box>
          </Box>
        );
      }

      return (
        <Execution
          inProgress={currentState.inProgress}
          finished={currentState.finished}
          pending={currentState.pending}
          actionName="deploying"
        />
      );
    }
  }
}
