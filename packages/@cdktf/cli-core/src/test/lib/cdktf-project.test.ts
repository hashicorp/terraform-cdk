// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as fs from "fs-extra";
import * as path from "path";
import * as os from "os";
import { CdktfProject, get, init } from "../../lib/index";
import { Language } from "@cdktf/commons";
import { SynthesizedStack } from "../../lib/synth-stack";
import { getMultipleStacks } from "../../lib/helpers/stack-helpers";
import { LogMessage } from "../../lib/cdktf-project";

function eventNames(events: any[]) {
  return events
    .map((event) => event.type)
    .filter((name) => !name.includes("update"));
}

function installFixturesInWorkingDirectory(
  {
    outDir,
    workingDirectory,
  }: {
    outDir: string;
    workingDirectory: string;
  },

  fixtureName: string
) {
  fs.copyFileSync(
    path.resolve(__dirname, `fixtures/${fixtureName}/main.ts.fixture`),
    path.resolve(workingDirectory, "main.ts")
  );
  return { outDir, workingDirectory };
}

jest.setTimeout(300_000);
describe("CdktfProject", () => {
  let inNewWorkingDirectory: () => {
    workingDirectory: string;
    outDir: string;
  };
  beforeAll(async () => {
    const workingDirectory = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf."));
    await init({
      destination: workingDirectory,
      templatePath: path.join(__dirname, "../../../templates/typescript"),
      projectId: "test",
      projectInfo: {
        Description: "cdktf-api-test",
        Name: "cdktf-api-test",
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
    });

    inNewWorkingDirectory = function inNewWorkspace() {
      const wd = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf."));
      const outDir = path.resolve(wd, "out");

      fs.copySync(workingDirectory, wd);

      return {
        workingDirectory: wd,
        outDir,
      };
    };
  }, 200_000);

  it("should be able to create a CdktfProject", () => {
    const cdktfProject = new CdktfProject({
      synthCommand: "npx ts-node main.ts",
      ...inNewWorkingDirectory(),
      onUpdate: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
    });
    expect(cdktfProject).toBeTruthy();
  });

  describe("synth", () => {
    it("runs synth command in the target dir and is done", async () => {
      const events: any[] = [];
      const cdktfProject = new CdktfProject({
        synthCommand: "npx ts-node ./main.ts",
        ...inNewWorkingDirectory(),
        onUpdate: (event) => {
          events.push(event);
        },
      });

      await cdktfProject.synth();

      expect(eventNames(events)).toEqual(["synthesizing", "synthesized"]);
    });
  });

  describe("diff", () => {
    it("diffs successfully", async () => {
      expect.assertions(2);
      const events: any[] = [];
      const logs: LogMessage[] = [];
      const cdktfProject = new CdktfProject({
        synthCommand: "npx ts-node ./main.ts",
        ...inNewWorkingDirectory(),
        onUpdate: (event) => {
          events.push(event);
        },
        onLog: (msg) => logs.push(msg),
      });

      await cdktfProject.diff({ stackName: "first" });

      expect(eventNames(events)).toEqual([
        "synthesizing",
        "synthesized",
        "planning",
        "planned",
      ]);

      expect(logs).toContainEqual(
        expect.objectContaining({
          message: expect.stringContaining(
            "1 to add, 0 to change, 0 to destroy"
          ),
        })
      );
    });

    it("fails if no stack specified", () => {
      const events: any[] = [];
      const cdktfProject = new CdktfProject({
        synthCommand: "npx ts-node ./main.ts",
        ...inNewWorkingDirectory(),
        onUpdate: (event) => {
          events.push(event);
        },
      });

      return expect(cdktfProject.diff()).rejects.toMatchInlineSnapshot(
        `[Error: Usage Error: Found more than one stack, please specify a target stack. Run cdktf diff <stack> with one of these stacks: first, second, third, fourth, fifth ]`
      );
    });
  });

  describe("deploy", () => {
    it("runs synth once and waits for approval", async () => {
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

      await cdktfProject.deploy({ stackNames: ["first"], parallelism: 1 });

      return expect(eventNames(events)).toEqual([
        "synthesizing",
        "synthesized",
        "planning",
        "deploying",
        "waiting for approval",
        "deploying",
        "deployed",
      ]);
    });

    it("runs synth once and deploys on autoApprove", async () => {
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

      await cdktfProject.deploy({
        stackNames: ["first"],
        autoApprove: true,
        parallelism: 1,
      });

      const eventTypes = eventNames(events);
      expect(eventTypes).toEqual([
        "synthesizing",
        "synthesized",
        "planning",
        "deploying",
        "deployed",
      ]);
      return expect(eventTypes.includes("waiting for approval")).toBeFalsy();
    });
  });

  describe("destroy", () => {
    it("runs synth once and waits for approval", async () => {
      let events: any[] = [];
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

      // we need to deploy first to have something to destroy
      // (else TF CLI wouldn't ask us to confirm as there's nothing)
      await cdktfProject.deploy({ stackNames: ["second"] });
      const lastEvent = events.pop();
      expect(lastEvent).toHaveProperty("type", "deployed");
      expect(lastEvent).toHaveProperty("stackName", "second");

      // clear events before next invocation
      events = [];

      await cdktfProject.destroy({ stackNames: ["second"], parallelism: 1 });

      return expect(eventNames(events)).toEqual([
        "synthesizing",
        "synthesized",
        "planning",
        "destroying",
        "waiting for approval",
        "destroying",
        "destroyed",
      ]);
    });

    it("runs synth once and destroys on autoApprove", async () => {
      const events: any[] = [];
      const cdktfProject = new CdktfProject({
        synthCommand: "npx ts-node ./main.ts",
        ...inNewWorkingDirectory(),
        onUpdate: (event) => {
          events.push(event);
        },
      });

      await cdktfProject.destroy({
        stackNames: ["second"],
        autoApprove: true,
        parallelism: 1,
      });

      const eventTypes = eventNames(events);
      expect(eventTypes).toEqual([
        "synthesizing",
        "synthesized",
        "planning",
        "destroying",
        "destroyed",
      ]);
      return expect(eventTypes.includes("waiting for approval")).toBeFalsy();
    });
  });

  describe("multi-stack", () => {
    it("Errors if a stack can not be found", async () => {
      const events: any[] = [];
      const cdktfProject = new CdktfProject({
        synthCommand: "npx ts-node ./main.ts",
        ...inNewWorkingDirectory(),
        onUpdate: (event) => {
          events.push(event);
        },
      });

      await expect(
        cdktfProject.deploy({ stackNames: ["not-found"], parallelism: 1 })
      ).rejects.toMatchInlineSnapshot(
        `[Error: Usage Error: Could not find stack for pattern 'not-found']`
      );
    });

    it("Errors if a dependent stack can not be found", async () => {
      const events: any[] = [];
      const cdktfProject = new CdktfProject({
        synthCommand: "npx ts-node ./main.ts",
        ...inNewWorkingDirectory(),
        onUpdate: (event) => {
          events.push(event);
        },
      });

      await expect(
        cdktfProject.deploy({ stackNames: ["third"], parallelism: 1 })
      ).rejects.toMatchInlineSnapshot(
        `[Error: Usage Error: The following dependencies are not included in the stacks to run: first. Either add them or add the --ignore-missing-stack-dependencies flag.]`
      );
    });

    it("Does not error if a dependent stack can not be found but the ignore option is passed", async () => {
      const events: any[] = [];
      const cdktfProject = new CdktfProject({
        synthCommand: "npx ts-node ./main.ts",
        ...inNewWorkingDirectory(),
        onUpdate: (event) => {
          events.push(event);
        },
      });

      await cdktfProject.deploy({
        stackNames: ["third"],
        autoApprove: true,
        ignoreMissingStackDependencies: true,
        parallelism: 1,
      });

      return expect(events.length).toBeGreaterThan(3);
    });

    it("deploys stacks in the right order", async () => {
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

      // Random order to implicitly test out sorting
      await cdktfProject.deploy({
        stackNames: ["third", "first", "second"],
        parallelism: 1,
      });

      expect(
        events
          .filter((e) => !e.type.includes("update"))
          .map((e) => `${e.stackName || "global"}: ${e.type}`)
      ).toEqual([
        "global: synthesizing",
        "global: synthesized",
        "first: planning",
        "first: deploying",
        "first: waiting for approval",
        "first: deploying",
        "first: deployed",
        "third: planning",
        "third: deploying",
        "third: waiting for approval",
        "third: deploying",
        "third: deployed",
        "second: planning",
        "second: deploying",
        "second: waiting for approval",
        "second: deploying",
        "second: deployed",
      ]);
    });

    it("error in an deploying stack does not abort already running stacks", async () => {
      const events: any[] = [];
      const cdktfProject = new CdktfProject({
        synthCommand: "npx ts-node ./main.ts",
        ...installFixturesInWorkingDirectory(
          inNewWorkingDirectory(),
          "parallel-error"
        ),
        onUpdate: (event) => {
          events.push(event);
        },
      });

      try {
        await cdktfProject
          .deploy({
            stackNames: ["stack1", "stack2", "stack3"],
            parallelism: 100,
            autoApprove: true,
          })
          .catch((e) => {
            console.log("deploy throws", e);
            throw e;
          });

        throw new Error("This error should not be thrown");
      } catch (e) {
        expect(e).toMatchInlineSnapshot(
          `"Invoking Terraform CLI failed with exit code 1"`
        );
      }

      const relevantEvents = events
        .filter((e) => !e.type.includes("update"))
        .map((e) => `${e.stackName || "global"}: ${e.type}`);

      // Ensure we synth and plan all stacks
      expect(relevantEvents).toContain("global: synthesizing");
      expect(relevantEvents).toContain("global: synthesized");
      expect(relevantEvents).toContain("stack1: planning");
      expect(relevantEvents).toContain("stack2: planning");
      expect(relevantEvents).toContain("stack3: planning");

      // the last 3 events also have a stable order because
      // they have timeouts that ensure the duration they take
      // to deploy / fail while deploying
      expect(relevantEvents.slice(-3)).toEqual([
        "stack1: deployed",
        "stack2: errored",
        "stack3: deployed",
      ]);

      // the middle events can occur in any order as the duration
      // they take to plan is not guaranteed
      expect(new Set(relevantEvents.slice(5, -3))).toEqual(
        new Set(["stack1: deploying", "stack2: deploying", "stack3: deploying"])
      );
    }, 120_000);

    it("deploys stacks in the right order with auto approve", async () => {
      const events: any[] = [];
      const cdktfProject = new CdktfProject({
        synthCommand: "npx ts-node ./main.ts",
        ...inNewWorkingDirectory(),
        onUpdate: (event) => {
          events.push(event);
        },
      });

      // Random order to implicitly test out sorting
      await cdktfProject.deploy({
        stackNames: ["third", "first", "second"],
        autoApprove: true,
        parallelism: 1,
      });

      expect(
        events
          .filter((e) => !e.type.includes("update"))
          .map((e) => `${e.stackName || "global"}: ${e.type}`)
      ).toEqual([
        "global: synthesizing",
        "global: synthesized",
        "first: planning",
        "first: deploying",
        "first: deployed",
        "third: planning",
        "third: deploying",
        "third: deployed",
        "second: planning",
        "second: deploying",
        "second: deployed",
      ]);
    });

    it("only aborts dependant stacks when deploying", async () => {
      const events: any[] = [];
      const cdktfProject = new CdktfProject({
        synthCommand: "npx ts-node ./main.ts",
        ...inNewWorkingDirectory(),
        onUpdate: (event) => {
          events.push(event);

          if (event.type === "waiting for approval") {
            if (event.stackName === "third") {
              event.dismiss();
            } else {
              event.approve();
            }
          }
        },
      });

      // Random order to implicitly test out sorting
      await cdktfProject.deploy({
        stackNames: ["third", "first", "second", "fourth", "fifth"],
        parallelism: 1,
      });

      expect(
        events
          .filter((e) => !e.type.includes("update"))
          .map((e) => `${e.stackName || "global"}: ${e.type}`)
      ).toEqual([
        "global: synthesizing",
        "global: synthesized",
        "first: planning",
        "first: deploying",
        "first: waiting for approval",
        "first: deploying",
        "first: deployed",
        "third: planning",
        "third: deploying",
        "third: waiting for approval",
        "third: dismissed",
        "second: planning",
        "second: deploying",
        "second: waiting for approval",
        "second: deploying",
        "second: deployed",
        "fourth: planning",
        "fourth: deploying",
        "fourth: waiting for approval",
        "fourth: deploying",
        "fourth: deployed",
      ]);
    });

    it("destroys stacks in the right order", async () => {
      const events: any[] = [];
      const cdktfProject = new CdktfProject({
        synthCommand: "npx ts-node ./main.ts",
        ...inNewWorkingDirectory(),
        onUpdate: (event) => {
          events.push(event);
        },
      });

      // To destroy sth we need to deploy first, with a different project to not polute the event list
      new CdktfProject({
        synthCommand: "npx ts-node ./main.ts",
        ...inNewWorkingDirectory(),
        onUpdate: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
      }).deploy({
        stackNames: ["third", "first", "second", "fourth", "fifth"],
        autoApprove: true,
        parallelism: 1,
      });

      // Random order to implicitly test out sorting
      await cdktfProject.destroy({
        stackNames: ["third", "first", "second", "fourth", "fifth"],
        autoApprove: true,
        parallelism: 1,
      });

      expect(
        events
          .filter((e) => !e.type.includes("update"))
          .map((e) => `${e.stackName || "global"}: ${e.type}`)
      ).toEqual([
        "global: synthesizing",
        "global: synthesized",
        "second: planning",
        "second: destroying",
        "second: destroyed",
        "fifth: planning",
        "fifth: destroying",
        "fifth: destroyed",
        "third: planning",
        "third: destroying",
        "third: destroyed",
        "fourth: planning",
        "fourth: destroying",
        "fourth: destroyed",
        "first: planning",
        "first: destroying",
        "first: destroyed",
      ]);
    });

    it("only aborts dependant when destroying", async () => {
      let events: any[] = [];
      const cdktfProject = new CdktfProject({
        synthCommand: "npx ts-node ./main.ts",
        ...inNewWorkingDirectory(),
        onUpdate: (event) => {
          events.push(event);

          if (event.type === "waiting for approval") {
            if (event.stackName === "third") {
              event.dismiss();
            } else {
              event.approve();
            }
          }
        },
      });

      // To destroy sth we need to deploy first, using the same project (= same working directory)
      await cdktfProject.deploy({
        stackNames: ["third", "first", "second", "fourth", "fifth"],
        autoApprove: true,
        parallelism: 1,
      });
      const lastEvent = events.pop();
      expect(lastEvent).toHaveProperty("type", "deployed");
      expect(lastEvent).toHaveProperty("stackName", "fifth");

      events = []; // clear events

      // Random order to implicitly test out sorting
      await cdktfProject.destroy({
        stackNames: ["third", "first", "second", "fourth", "fifth"],
        parallelism: 1,
      });

      expect(
        events
          .filter((e) => !e.type.includes("update"))
          .map((e) => `${e.stackName || "global"}: ${e.type}`)
      ).toEqual([
        "global: synthesizing",
        "global: synthesized",
        "second: planning",
        "second: destroying",
        "second: waiting for approval",
        "second: destroying",
        "second: destroyed",
        "fifth: planning",
        "fifth: destroying",
        "fifth: waiting for approval",
        "fifth: destroying",
        "fifth: destroyed",
        "third: planning",
        "third: destroying",
        "third: waiting for approval",
        "third: dismissed",
        "fourth: planning",
        "fourth: destroying",
        "fourth: waiting for approval",
        "fourth: destroying",
        "fourth: destroyed",
      ]);
    });
  });

  describe("highly parallel", () => {
    it("stalls logs and updates while waiting for approval", async () => {
      let events: any[] = [];
      let eventsDuringWaitForApprove: any[] = [];
      const cdktfProject = new CdktfProject({
        synthCommand: "npx ts-node ./main.ts",
        ...installFixturesInWorkingDirectory(
          inNewWorkingDirectory(),
          "parallel"
        ),
        onUpdate: (event) => {
          events.push(event);

          if (event.type === "waiting for approval") {
            events = [];
            setTimeout(() => {
              eventsDuringWaitForApprove = [
                ...eventsDuringWaitForApprove,
                ...events,
              ];
              event.approve();
            }, 50);
          }
        },
        onLog: (event) => {
          events.push(event);
        },
      });

      await cdktfProject.deploy({
        stackNames: new Array(5).fill(0).map((_, i) => `stack-${i}`),
        parallelism: 100,
      });

      expect(eventsDuringWaitForApprove.length).toBe(0);
    });
  });
});

describe("getMultipleStacks", () => {
  describe("no stack name selection", () => {
    it("returns the only stack if no option passed", () => {
      const synthesizedStacks = [{ name: "StackA" }] as SynthesizedStack[];

      expect(getMultipleStacks(synthesizedStacks)).toEqual(synthesizedStacks);
    });
    it("throws if multiple stacks are passed", () => {
      const synthesizedStacks = [
        { name: "StackA" },
        { name: "StackB" },
      ] as SynthesizedStack[];

      expect(() => getMultipleStacks(synthesizedStacks)).toThrow();
    });
  });

  describe("stack name selection", () => {
    it("returns the stack selected by name", () => {
      const synthesizedStacks = [
        { name: "StackA" },
        { name: "StackB" },
        { name: "StackC" },
      ] as SynthesizedStack[];

      expect(
        getMultipleStacks(synthesizedStacks, ["StackB", "StackC"])
      ).toEqual([{ name: "StackB" }, { name: "StackC" }]);
    });

    it("throws when a selected stack is not there", () => {
      const synthesizedStacks = [
        { name: "StackA" },
        { name: "StackB" },
        { name: "StackC" },
      ] as SynthesizedStack[];

      expect(() =>
        getMultipleStacks(synthesizedStacks, ["StackD", "StackC"])
      ).toThrow();
    });
  });

  // This should work similar to https://docs.aws.amazon.com/cdk/v2/guide/cli.html#cli-stacks
  describe("glob name selection", () => {
    it("?", () => {
      const synthesizedStacks = [
        { name: "StackA" },
        { name: "StackB" },
        { name: "StackC" },
        { name: "AnotherA" },
      ] as SynthesizedStack[];

      expect(getMultipleStacks(synthesizedStacks, ["Stack?"])).toEqual([
        { name: "StackA" },
        { name: "StackB" },
        { name: "StackC" },
      ]);
    });

    it("*", () => {
      const synthesizedStacks = [
        { name: "StackA" },
        { name: "StackB" },
        { name: "StackC" },
        { name: "AnotherA" },
      ] as SynthesizedStack[];

      expect(getMultipleStacks(synthesizedStacks, ["*A"])).toEqual([
        { name: "StackA" },
        { name: "AnotherA" },
      ]);
    });
  });
});
