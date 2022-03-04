import * as fs from "fs";
import * as path from "path";
import * as os from "os";
import { CdktfProject, get, init, Language } from "../../lib/index";

function eventNames(events: any[]) {
  return events
    .map((event) => event.type)
    .filter((name) => !name.includes("update"));
}

jest.setTimeout(30000);
describe("CdktfProject", () => {
  let workingDirectory: string;
  let outDir: string;
  beforeAll(async () => {
    workingDirectory = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf."));
    await init({
      destination: workingDirectory,
      templatePath: path.join(__dirname, "../../templates/typescript"),
      projectId: "test",
      projectInfo: {
        Description: "cdktf-api-test",
        Name: "cdktf-api-test",
      },
      dist: path.join(__dirname, "../../../../dist"),
    });

    fs.copyFileSync(
      path.resolve(__dirname, "fixtures/main.ts.fixture"),
      path.resolve(workingDirectory, "main.ts")
    );
    fs.copyFileSync(
      path.resolve(__dirname, "fixtures/cdktf.json"),
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

    outDir = path.resolve(workingDirectory, "out");
  });

  it("should be able to create a CdktfProject", () => {
    const cdktfProject = new CdktfProject({
      synthCommand: "npx ts-node main.ts",
      outDir,
      workingDirectory,
      onUpdate: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
    });
    expect(cdktfProject).toBeTruthy();
  });

  describe("synth", () => {
    it("runs synth command in the target dir and is done", async () => {
      const events: any[] = [];
      const cdktfProject = new CdktfProject({
        synthCommand: "npx ts-node ./main.ts",
        outDir,
        workingDirectory,
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
        outDir,
        workingDirectory,
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
        outDir,
        workingDirectory,
        onUpdate: (event) => {
          events.push(event);
        },
      });

      return expect(cdktfProject.diff()).rejects.toMatchInlineSnapshot(
        `[Error: Usage Error: Found more than one stack, please specify a target stack. Run cdktf diff <stack> with one of these stacks: first, second ]`
      );
    });
  });

  describe("deploy", () => {
    it("runs synth and diff once and waits for approval", async () => {
      const events: any[] = [];
      const cdktfProject = new CdktfProject({
        synthCommand: "npx ts-node ./main.ts",
        outDir,
        workingDirectory,
        onUpdate: (event) => {
          events.push(event);

          if (event.type === "waiting for approval") {
            event.approve();
          }
        },
      });

      await cdktfProject.deploy({ stackName: "first" });

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
        outDir,
        workingDirectory,
        onUpdate: (event) => {
          events.push(event);
          if (event.type === "waiting for approval") {
            event.approve();
          }
        },
      });

      await cdktfProject.deploy({ stackName: "first", autoApprove: true });

      const eventTypes = eventNames(events);
      expect(eventTypes).toEqual([
        "synthesizing",
        "synthesized",
        "planning",
        "planned",
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
        outDir,
        workingDirectory,
        onUpdate: (event) => {
          events.push(event);

          if (event.type === "waiting for approval") {
            event.approve();
          }
        },
      });

      await cdktfProject.destroy({ stackName: "first" });

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
        outDir,
        workingDirectory,
        onUpdate: (event) => {
          events.push(event);
        },
      });

      await cdktfProject.destroy({ stackName: "first", autoApprove: true });

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
});
