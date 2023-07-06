/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import React from "react";

import { useCdktfProject } from "./hooks/cdktf-project";
import { StreamView, StatusBottomBar } from "./components";

interface DiffConfig {
  outDir: string;
  targetStack?: string;
  synthCommand: string;
  refreshOnly?: boolean;
  terraformParallelism?: number;
  vars?: string[];
  varFiles?: string[];
  noColor?: boolean;
  migrateState?: boolean;
  skipSynth?: boolean;
}

export const Diff = ({
  outDir,
  targetStack,
  synthCommand,
  refreshOnly,
  terraformParallelism,
  vars,
  varFiles,
  noColor,
  migrateState,
  skipSynth,
}: DiffConfig): React.ReactElement => {
  const { status, logEntries } = useCdktfProject(
    { outDir, synthCommand },
    (project) =>
      project.diff({
        stackName: targetStack,
        refreshOnly,
        terraformParallelism,
        vars,
        varFiles,
        noColor,
        migrateState,
        skipSynth,
      })
  );

  return (
    <StreamView logs={logEntries}>
      <StatusBottomBar status={status} />
    </StreamView>
  );
};
