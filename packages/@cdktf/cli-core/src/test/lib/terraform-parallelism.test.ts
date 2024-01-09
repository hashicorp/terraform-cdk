/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import path from "path";
import * as fs from "fs-extra";
import os from "os";
import { CdktfProject, init, get } from "../../lib/index";
import { spawn } from "@cdktf/node-pty-prebuilt-multiarch";
import { exec, Language } from "@cdktf/commons";

// this is required for the get() call in beforeAll() to work
let execMockActive = false;

jest.mock("@cdktf/commons", () => {
  const originalModule = jest.requireActual("@cdktf/commons");

  return {
    __esmodule: true,
    ...originalModule,
    exec: jest.fn().mockImplementation(async (...args: any[]) => {
      // Fake all commands that we invoke

      if (execMockActive) return Promise.resolve(JSON.stringify({}));
      return originalModule.exec(...args);
    }),
  };
});

jest.mock("@cdktf/node-pty-prebuilt-multiarch", () => {
  return {
    spawn: jest.fn().mockImplementation((_file, _args) => {
      return {
        onData: () => undefined,
        onExit: (listener: any) => listener({ exitCode: 0 }), // immediately fake a successful termination
        write: () => undefined,
      };
    }),
  };
});

let inNewWorkingDirectory: () => {
  workingDirectory: string;
  outDir: string;
};

jest.setTimeout(120_000);
const projectName = `cdktf-api-test`;

const stackWithName = (name: string) => {
  return {
    name,
    constructPath: name,
    workingDirectory: `cdktf.out/stacks/${name}`,
    synthesizedStackPath: `stacks/${name}/cdk.tf.json`,
    stackMetadataPath: `stacks/${name}/metadata.json`,
    annotations: [],
    dependencies: [],
    content: JSON.stringify({
      name,
      backend: {
        type: "local",
        config: {
          path: `${name}.tfstate`,
        },
      },
      config: {
        required_providers: {
          null: {
            source: "hashicorp/null",
            version: "3.1.0",
          },
        },
      },
      terraformVersion: "1.6.5",
      variables: {},
      outputs: {},
      resources: [
        {
          name,
          type: "null_resource",
          config: {
            triggers: {
              foo: "bar",
            },
          },
        },
      ],
    }),
  };
};

describe("terraform parallelism", () => {
  beforeAll(async () => {
    const workingDirectory = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf."));
    await init({
      destination: workingDirectory,
      templatePath: path.join(__dirname, "../../../templates/typescript"),
      projectId: "test",
      projectInfo: {
        Description: projectName,
        Name: projectName,
      },
      sendCrashReports: false,
      dist: path.join(__dirname, "../../../../../../dist"),
    });

    fs.copyFileSync(
      path.resolve(__dirname, "fixtures/default/main.ts.fixture"),
      path.resolve(workingDirectory, "main.ts")
    );
    fs.copyFileSync(
      path.resolve(__dirname, "fixtures/default/cdktf.json"),
      path.resolve(workingDirectory, "cdktf.json")
    );

    await get({
      constraints: [
        {
          name: "null",
          version: "3.1.0",
          source: "null",
          fqn: "hashicorp/null",
        },
      ],
      constructsOptions: {
        codeMakerOutput: path.resolve(workingDirectory, ".gen"),
        targetLanguage: Language.TYPESCRIPT,
      },
      providerSchemaCachePath:
        process.env.CDKTF_EXPERIMENTAL_PROVIDER_SCHEMA_CACHE_PATH,
    });

    execMockActive = true;

    inNewWorkingDirectory = function inNewWorkingDirectory() {
      const wd = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf."));
      const outDir = path.resolve(wd, "out");

      fs.copySync(workingDirectory, wd);

      return {
        workingDirectory: wd,
        outDir,
      };
    };
  }, 120_000);

  beforeEach(() => {
    (exec as jest.Mock).mockClear();
    (spawn as jest.Mock).mockClear();
  });

  afterAll(() => {
    jest.resetModules();
  });

  describe("terraform parallelism flag in deploy", () => {
    it("passes the terraform parallelism flag to terraform", async () => {
      const events: any[] = [];
      const cdktfProject = new CdktfProject({
        synthCommand: "npx ts-node main.ts",
        ...inNewWorkingDirectory(),
        onUpdate: (event) => {
          events.push(event);
          if (event.type === "waiting for approval") {
            event.approve();
          }
        },
      });

      cdktfProject.synth = jest.fn().mockImplementation(async () => {
        return [
          stackWithName("first"),
          stackWithName("second"),
          stackWithName("third"),
          stackWithName("fourth"),
        ];
      });

      await cdktfProject.deploy({
        stackNames: ["first"],
        autoApprove: true,
        parallelism: 1,
        terraformParallelism: 1,
      });

      const spawnCalls = (spawn as jest.Mock).mock.calls;
      const applyCall = spawnCalls.find((call) => call[1][0] === "apply");
      expect(applyCall[1]).toContain("-parallelism=1");
    });

    it("ignores the terraform parallelism flag if negative", async () => {
      const events: any[] = [];
      const cdktfProject = new CdktfProject({
        synthCommand: "npx ts-node ./main.ts",
        ...inNewWorkingDirectory(),
        onUpdate: (event) => {
          events.push(event);
          if (event.type === "waiting for approval") {
            event.approve();
          }
        },
      });

      cdktfProject.synth = jest.fn().mockImplementation(async () => {
        return [
          stackWithName("first"),
          stackWithName("second"),
          stackWithName("third"),
          stackWithName("fourth"),
        ];
      });

      await cdktfProject.deploy({
        stackNames: ["first"],
        autoApprove: true,
        parallelism: 1,
        terraformParallelism: -1,
      });

      const spawnCalls = (spawn as jest.Mock).mock.calls;
      const applyCall = spawnCalls.find((call) => call[1][0] === "apply");
      expect(applyCall[1]).not.toContain("-parallelism=1");
    });
  });

  describe("terraform parallelism flag in destroy", () => {
    it("passes the terraform parallelism flag to terraform", async () => {
      const events: any[] = [];
      const cdktfProject = new CdktfProject({
        synthCommand: "npx ts-node ./main.ts",
        ...inNewWorkingDirectory(),
        onUpdate: (event) => {
          events.push(event);
        },
      });

      cdktfProject.synth = jest.fn().mockImplementation(async () => {
        return [
          stackWithName("first"),
          stackWithName("second"),
          stackWithName("third"),
          stackWithName("fourth"),
        ];
      });

      await cdktfProject.destroy({
        stackNames: ["second"],
        autoApprove: true,
        parallelism: 1,
        terraformParallelism: 1,
      });

      const spawnCalls = (spawn as jest.Mock).mock.calls;
      const destroyCall = spawnCalls.find((call) => call[1][0] === "destroy");
      expect(destroyCall[1]).toContain("-parallelism=1");
    });

    it("doesn't pass the terraform parallelism flag if negative", async () => {
      const events: any[] = [];
      const cdktfProject = new CdktfProject({
        synthCommand: "npx ts-node ./main.ts",
        ...inNewWorkingDirectory(),
        onUpdate: (event) => {
          events.push(event);
        },
      });

      cdktfProject.synth = jest.fn().mockImplementation(async () => {
        return [
          stackWithName("first"),
          stackWithName("second"),
          stackWithName("third"),
          stackWithName("fourth"),
        ];
      });

      await cdktfProject.destroy({
        stackNames: ["second"],
        autoApprove: true,
        parallelism: 1,
        terraformParallelism: -1,
      });

      const spawnCalls = (spawn as jest.Mock).mock.calls;
      const destroyCall = spawnCalls.find((call) => call[1][0] === "destroy");
      expect(destroyCall[1]).not.toContain("-parallelism=-1");
    });
  });

  describe("terraform parallelism flag in diff", () => {
    it("passes the terraform parallelism flag to terraform", async () => {
      const events: any[] = [];
      const cdktfProject = new CdktfProject({
        synthCommand: "npx ts-node main.ts",
        ...inNewWorkingDirectory(),
        onUpdate: (event) => {
          events.push(event);
          if (event.type === "waiting for approval") {
            event.approve();
          }
        },
      });

      cdktfProject.synth = jest.fn().mockImplementation(async () => {
        return [
          stackWithName("first"),
          stackWithName("second"),
          stackWithName("third"),
          stackWithName("fourth"),
        ];
      });

      await cdktfProject.diff({
        stackName: "first",
        terraformParallelism: 1,
      });

      const execCalls = (exec as jest.Mock).mock.calls;
      const planCall = execCalls.find((call) => call[1][0] === "plan");
      expect(planCall[1]).toContain("-parallelism=1");
    });

    it("ignores the terraform parallelism flag if negative", async () => {
      const events: any[] = [];
      const cdktfProject = new CdktfProject({
        synthCommand: "npx ts-node ./main.ts",
        ...inNewWorkingDirectory(),
        onUpdate: (event) => {
          events.push(event);
          if (event.type === "waiting for approval") {
            event.approve();
          }
        },
      });

      cdktfProject.synth = jest.fn().mockImplementation(async () => {
        return [
          stackWithName("first"),
          stackWithName("second"),
          stackWithName("third"),
          stackWithName("fourth"),
        ];
      });

      await cdktfProject.diff({
        stackName: "first",
        terraformParallelism: -1,
      });

      const execCalls = (exec as jest.Mock).mock.calls;
      const planCall = execCalls.find((call) => call[1][0] === "plan");
      expect(planCall[1]).not.toContain("-parallelism=-1");
    });
  });
});
