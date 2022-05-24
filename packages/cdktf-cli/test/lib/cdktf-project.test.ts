import * as fs from "fs-extra";
import * as path from "path";
import * as os from "os";
import { CdktfProject, get, init, Language } from "../../lib/index";
import { SynthesizedStack } from "../../lib/synth-stack";
import { getMultipleStacks } from "../../lib/cdktf-project";

function eventNames(events: any[]) {
  return events
    .map((event) => event.type)
    .filter((name) => !name.includes("update"));
}

jest.setTimeout(30000);
describe("CdktfProject", () => {
  let inNewWorkingDirectory: () => {
    workingDirectory: string;
    outDir: string;
  };
  beforeAll(async () => {
    const workingDirectory = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf."));
    await init({
      destination: workingDirectory,
      templatePath: path.join(__dirname, "../../templates/typescript"),
      projectId: "test",
      projectInfo: {
        Description: "cdktf-api-test",
        Name: "cdktf-api-test",
      },
      sendCrashReports: false,
      dist: path.join(__dirname, "../../../../dist"),
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
  });

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
      const cdktfProject = new CdktfProject({
        synthCommand: "npx ts-node ./main.ts",
        ...inNewWorkingDirectory(),
        onUpdate: (event) => {
          events.push(event);
        },
      });

      const plan = await cdktfProject.diff({ stackName: "first" });

      expect(eventNames(events)).toEqual([
        "synthesizing",
        "synthesized",
        "planning",
        "planned",
      ]);
      return expect(plan!.resources.length).toEqual(1);
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
    it("runs synth and diff once and waits for approval", async () => {
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
        "planned",
        "waiting for approval",
        "deploying",
        "deployed",
      ]);
    });

    it("runs synth and diff once and deploys on autoApprove", async () => {
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
        "planned",
        "deploying",
        "deployed",
      ]);
      return expect(eventTypes.includes("waiting for approval")).toBeFalsy();
    });
  });

  describe("destroy", () => {
    it("runs synth and diff once and waits for approval", async () => {
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

      await cdktfProject.destroy({ stackNames: ["second"], parallelism: 1 });

      return expect(eventNames(events)).toEqual([
        "synthesizing",
        "synthesized",
        "planning",
        "planned",
        "waiting for approval",
        "destroying",
        "destroyed",
      ]);
    });

    it("runs synth and diff once and destroys on autoApprove", async () => {
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
        "planned",
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
        "first: planned",
        "first: waiting for approval",
        "first: deploying",
        "first: deployed",
        "third: planning",
        "third: planned",
        "third: waiting for approval",
        "third: deploying",
        "third: deployed",
        "second: planning",
        "second: planned",
        "second: waiting for approval",
        "second: deploying",
        "second: deployed",
      ]);
    });

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
        "first: planned",
        "first: deploying",
        "first: deployed",
        "third: planning",
        "third: planned",
        "third: deploying",
        "third: deployed",
        "second: planning",
        "second: planned",
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
        "first: planned",
        "first: waiting for approval",
        "first: deploying",
        "first: deployed",
        "third: planning",
        "third: planned",
        "third: waiting for approval",
        "third: dismissed",
        "second: planning",
        "second: planned",
        "second: waiting for approval",
        "second: deploying",
        "second: deployed",
        "fourth: planning",
        "fourth: planned",
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
        "second: planned",
        "second: destroying",
        "second: destroyed",
        "fifth: planning",
        "fifth: planned",
        "fifth: destroying",
        "fifth: destroyed",
        "third: planning",
        "third: planned",
        "third: destroying",
        "third: destroyed",
        "fourth: planning",
        "fourth: planned",
        "fourth: destroying",
        "fourth: destroyed",
        "first: planning",
        "first: planned",
        "first: destroying",
        "first: destroyed",
      ]);
    });

    it("only aborts dependant when destroying", async () => {
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
        "second: planned",
        "second: waiting for approval",
        "second: destroying",
        "second: destroyed",
        "fifth: planning",
        "fifth: planned",
        "fifth: waiting for approval",
        "fifth: destroying",
        "fifth: destroyed",
        "third: planning",
        "third: planned",
        "third: waiting for approval",
        "third: dismissed",
        "fourth: planning",
        "fourth: planned",
        "fourth: waiting for approval",
        "fourth: destroying",
        "fourth: destroyed",
      ]);
    });
  });

  describe("highly parallel", () => {
    let workingDirectory: string;
    let outDir: string;

    beforeEach(() => {
      const env = inNewWorkingDirectory();
      workingDirectory = env.workingDirectory;
      outDir = env.outDir;
      fs.copyFileSync(
        path.resolve(__dirname, "fixtures/parallel/main.ts.fixture"),
        path.resolve(workingDirectory, "main.ts")
      );
    });

    it("stalls logs and updates while waiting for approval", async () => {
      let events: any[] = [];
      let eventsDuringWaitForApprove: any[] = [];
      const cdktfProject = new CdktfProject({
        synthCommand: "npx ts-node ./main.ts",
        workingDirectory,
        outDir,
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
