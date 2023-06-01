/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import React, { useEffect, useState } from "react";
import { watch, WatchState } from "@cdktf/cli-core";
import { StreamView, WatchStatusBottomBar } from "./components";
import { LogEntry } from "./hooks/cdktf-project";

interface WatchConfig {
  targetDir: string;
  targetStacks?: string[];
  parallelism?: number;
  synthCommand: string;
  autoApprove: boolean;
  terraformParallelism?: number;
}

export const Watch = ({
  targetDir,
  targetStacks,
  synthCommand,
  autoApprove,
  parallelism,
  terraformParallelism,
}: WatchConfig): React.ReactElement => {
  const [logEntryId, setLogEntryId] = useState<number>(0);
  const [logEntries, setLogEntries] = useState<LogEntry[]>([]);
  const [currentState, setCurrentState] = useState<WatchState>({
    type: "waiting",
  });

  useEffect(() => {
    const ac = new AbortController();
    const onAbort = () => {
      ac.abort();
    };
    process.on("SIGINT", onAbort);
    process.on("SIGTERM", onAbort);
    process.on("SIGQUIT", onAbort);

    watch(
      {
        synthCommand,
        outDir: targetDir,
        onUpdate: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
        onLog: ({ stackName, message, messageWithConstructPath }) => {
          setLogEntries((prev) => [
            ...prev,
            {
              id: `${stackName}-${logEntryId}`,
              stackName: stackName,
              content: messageWithConstructPath
                ? messageWithConstructPath
                : message,
            },
          ]);
          setLogEntryId((current) => current + 1);
        },
      },
      {
        autoApprove,
        stackNames: targetStacks,
        parallelism,
        terraformParallelism,
      },
      ac.signal as any,
      (state) => {
        setCurrentState(state);
      }
    );
  }, []);

  return (
    <StreamView logs={logEntries}>
      <WatchStatusBottomBar currentState={currentState} />
    </StreamView>
  );
};
