import {
  DeployingResourceApplyState,
  PlannedResourceAction,
} from "../../bin/cmds/ui/models/terraform";
import { mapWatchState, readGitignore } from "../../lib/server/util";
import {
  TimestampedDeployingResource,
  WatchState,
} from "../../lib/server/WatchClient";
import { mkdtemp } from "../../lib/util";
import { promises as fs } from "fs";
import path from "path";

const defaultTimestamp = 1627476017438;

describe("util", () => {
  describe("readGitignore", () => {
    it("reads .gitignore file from tmp directory root", async () => {
      await mkdtemp(async (root) => {
        await fs.writeFile(
          path.join(root, ".gitignore"),
          `# test comment
dist/
node_modules
*.js
!package.json
**/.terraform`
        );

        const result = await readGitignore(root);
        expect(result).toMatchInlineSnapshot(`
          Array [
            "dist/",
            "node_modules",
            "*.js",
            "!package.json",
            "**/.terraform",
          ]
        `);
      });
    });
  });

  describe("mapWatchState", () => {
    it("maps correctly to GraphQL watch state", () => {
      const resources: Record<string, TimestampedDeployingResource> = {
        resource_1: {
          id: "resource_1",
          action: PlannedResourceAction.CREATE,
          applyState: DeployingResourceApplyState.CREATING,
          changedAt: defaultTimestamp,
        },
        resource_2: {
          id: "resource_2",
          action: PlannedResourceAction.UPDATE,
          applyState: DeployingResourceApplyState.UPDATING,
          changedAt: defaultTimestamp,
        },
        resource_3: {
          id: "resource_3",
          action: PlannedResourceAction.DELETE,
          applyState: DeployingResourceApplyState.DESTROYED,
          changedAt: defaultTimestamp,
        },
        resource_4: {
          id: "resource_4",
          action: PlannedResourceAction.READ,
          applyState: DeployingResourceApplyState.WAITING,
          changedAt: defaultTimestamp,
        },
      };

      const state: WatchState = {
        resources: new Map(Object.entries(resources)),
        status: "INITIALIZING",
        stacks: [
          {
            name: "StackA",
            constructPath: "/a/dir",
            content: '{ "the": "actual json as string"}',
            synthesizedStackPath: "/another/dir",
            workingDirectory: "/some/dir",
            json: {
              "//": { metadata: { stackName: "StackA", version: "1" } },
              resource: {},
            },
            annotations: [],
            dependencies: [],
          },
        ],
        error: {
          message: "Error",
          origin: "SYNTHESIZING",
          recoverable: true,
          timestamp: defaultTimestamp,
        },
      };
      const result = mapWatchState(state);
      expect(result).toMatchInlineSnapshot(`
        Object {
          "error": Object {
            "message": "Error",
            "origin": "SYNTHESIZING",
            "recoverable": true,
            "timestamp": 1627476017438,
          },
          "resources": Array [
            Object {
              "action": "CREATE",
              "changedAt": 1627476017438,
              "deployState": "CREATING",
              "id": "resource_1",
            },
            Object {
              "action": "UPDATE",
              "changedAt": 1627476017438,
              "deployState": "UPDATING",
              "id": "resource_2",
            },
            Object {
              "action": "DELETE",
              "changedAt": 1627476017438,
              "deployState": "DESTROYED",
              "id": "resource_3",
            },
            Object {
              "action": "READ",
              "changedAt": 1627476017438,
              "deployState": "WAITING",
              "id": "resource_4",
            },
          ],
          "stacks": Array [
            Object {
              "constructPath": "/a/dir",
              "name": "StackA",
              "synthesizedStackPath": "/another/dir",
              "workingDirectory": "/some/dir",
            },
          ],
          "status": "INITIALIZING",
        }
      `);
    });
  });
});
