// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import path from "path";
import {
  CdktfProject,
  CdktfProjectOptions,
  MutationOptions,
} from "./cdktf-project";
import { Errors } from "./errors";
import * as fs from "fs";
import * as chokidar from "chokidar";
import { logger } from "./logging";
import { CdktfStack } from "./cdktf-stack";

// In this very first iteration we will find out which files to watch by asking the user to provide the files
// We default to something reasonable per language and write it into the cdkt.json file
// Mid-Term we might want to add a WatchFile / WatchDir construct that we can use (e.g. in assets) and that a user can use to specify their watch behaviour
// See https://github.com/hashicorp/terraform-cdk/issues/1668
function getOrWriteDefaultWatchConfig(projectPath = process.cwd()) {
  const cdktfJsonPath = path.resolve(projectPath, "cdktf.json");
  logger.debug(`Getting files to watch from cdktf.json at ${cdktfJsonPath}`);

  let cdktfJson;
  try {
    cdktfJson = require(cdktfJsonPath);
  } catch (err) {
    throw Errors.Internal(`Could not find cdktf.json file in ${projectPath}`);
  }

  if (cdktfJson.watchPattern) {
    logger.debug(`Found watchPattern in cdktf.json: ${cdktfJson.watchPattern}`);
    return cdktfJson.watchPattern;
  }
  const language:
    | "typescript"
    | "python"
    | "java"
    | "csharp"
    | "go"
    | undefined = cdktfJson.language;

  if (!language) {
    throw Errors.Usage(
      `No language specified in cdktf.json, please either specify a language or watchPattern to use the watch command`
    );
  }

  const defaultWatchPattern = {
    typescript: ["./**/*.ts"],
    python: ["./**/*.py"],
    java: ["src/**/*.java"],
    csharp: ["./**/*.cs"],
    go: ["./**/*.go"],
  }[language];

  fs.writeFileSync(
    cdktfJsonPath,
    JSON.stringify({ ...cdktfJson, watchPattern: defaultWatchPattern }, null, 2)
  );
  logger.debug(`Write default watchPattern for ${language} in cdktf.json.`);

  return defaultWatchPattern;
}

const projectStatus = (project?: CdktfProject) => {
  if (!project?.stacksToRun.length) {
    return {
      inProgress: [],
      finished: [],
      pending: [],
    };
  }

  const inProgress = project.stacksToRun.filter((s) => s.isRunning);
  const finished = project.stacksToRun.filter((s) => s.isDone);
  const pending = project.stacksToRun.filter((s) => s.isPending);
  return { inProgress, finished, pending };
};

export type State =
  | {
      type: "waiting";
    }
  | {
      type: "running";
      nextRunQueued: boolean;
      currentRun: Promise<void>;
      inProgress: CdktfStack[];
      finished: CdktfStack[];
      pending: CdktfStack[];
    }
  | { type: "stopped" };

export async function watch(
  projectOptions: CdktfProjectOptions,
  mutationOptions: MutationOptions,
  abortSignal: AbortSignal,
  onStateChange: (newState: State) => void
) {
  const patterns = getOrWriteDefaultWatchConfig();
  const watcher = chokidar.watch(patterns, {
    ignoreInitial: true,
  });
  let state: State = { type: "waiting" };
  const changeState = (newState: State) => {
    state = newState;
    onStateChange(state);
  };

  async function run() {
    logger.debug("Running cdktf deploy");
    const project = new CdktfProject({
      ...projectOptions,
      onLog: (log) => {
        if (projectOptions.onLog) {
          projectOptions.onLog(log);
        }
        if (state.type === "running") {
          changeState({ ...state, ...projectStatus(project) });
        }
      },
    });
    const abort = () => project.hardAbort();
    abortSignal.addEventListener("abort", abort);
    await project.deploy(mutationOptions);
    abortSignal.removeEventListener("abort", abort);
    logger.debug("cdktf deploy finished");

    if (state.type !== "running") {
      throw Errors.Internal(
        "Watch was in a state where the state was not running in the run phase"
      );
    }

    if (state.nextRunQueued) {
      logger.debug("Next run was queued, starting it now");
      changeState({
        ...state,
        nextRunQueued: false,
        currentRun: run(),
        ...projectStatus(project),
      });
    } else {
      logger.debug("Nothing queued, waiting for changes");
      changeState({ type: "waiting" });
    }
  }

  abortSignal.addEventListener("abort", () => {
    logger.debug("Abort signal received, stopping watch");
    watcher.close();
    changeState({ type: "stopped" });
  });

  const onFileChange = () => {
    if (state.type === "stopped") {
      return;
    }

    if (state.type === "running") {
      changeState({ ...state, nextRunQueued: true });
      return;
    }

    changeState({
      type: "running",
      nextRunQueued: false,
      currentRun: run(),
      ...projectStatus(),
    });
  };

  watcher.on("all", onFileChange);
  // initially run once
  onFileChange();
}
