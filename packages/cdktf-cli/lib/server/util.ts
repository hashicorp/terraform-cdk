import parseGitignore from "parse-gitignore";
import * as path from "path";
import { promises as fs } from "fs";
import { WatchErrorOrigin, WatchState } from "./WatchClient";
import {
  DeployingResourceApplyState,
  PlannedResourceAction,
} from "../models/terraform";

export async function readGitignore(directory: string): Promise<string[]> {
  const content = await fs.readFile(path.join(directory, ".gitignore"));
  return parseGitignore(content);
}

// todo: generate this via some graphql tool
export type GraphQLWatchState = {
  status: WatchState["status"];
  stacks: Array<{
    name: string;
    constructPath: string;
    synthesizedStackPath: string;
    workingDirectory: string;
  }>;
  resources: Array<{
    id: string;
    action: "CREATE" | "UPDATE" | "DELETE" | "READ" | "NO_OP";
    deployState:
      | "WAITING"
      | "UPDATING"
      | "UPDATED"
      | "CREATING"
      | "CREATED"
      | "DESTROYING"
      | "DESTROYED"
      | "SUCCESS"
      | "ERROR";
    changedAt: number;
  }>;
  error?: {
    message: string;
    recoverable: boolean;
    origin: WatchErrorOrigin | "SERVER";
    timestamp: number;
  };
};

export function mapWatchState(state: WatchState): GraphQLWatchState {
  return {
    status: state.status,
    stacks: state.stacks.map((s) => ({
      constructPath: s.constructPath,
      name: s.name,
      synthesizedStackPath: s.synthesizedStackPath,
      workingDirectory: s.workingDirectory,
    })),
    resources: Array.from(state.resources.values()).map((r) => ({
      id: r.id,
      action: plannedResourceActionReverseMap[r.action],
      deployState: deployingResourceApplyStateReverseMap[r.applyState],
      changedAt: r.changedAt,
    })),
    error: state.error
      ? {
          message: state.error.message,
          origin: state.error.origin,
          recoverable: state.error.recoverable,
          timestamp: state.error.timestamp,
        }
      : undefined,
  };
}

const plannedResourceActionReverseMap: Record<
  PlannedResourceAction,
  GraphQLWatchState["resources"][number]["action"]
> = {
  "no-op": "NO_OP",
  create: "CREATE",
  delete: "DELETE",
  read: "READ",
  update: "UPDATE",
};

const deployingResourceApplyStateReverseMap: Record<
  DeployingResourceApplyState,
  GraphQLWatchState["resources"][number]["deployState"]
> = {
  waiting: "WAITING",
  updating: "UPDATING",
  updated: "UPDATED",
  creating: "CREATING",
  created: "CREATED",
  destroying: "DESTROYING",
  destroyed: "DESTROYED",
  success: "SUCCESS",
  error: "ERROR",
};
