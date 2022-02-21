import * as fs from "fs";
import * as path from "path";
import * as os from "os";
import { execSync } from "child_process";
import { CdktfProject } from "../../lib/index";

jest.setTimeout(30000);
describe("CdktfProject", () => {
  let workingDirectory: string;
  let outDir: string;
  beforeAll(() => {
    workingDirectory = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf."));
    execSync(
      `cdktf init --template typescript --project-name="typescript-test" --project-description="typescript test app" --local`,
      {
        cwd: workingDirectory,
      }
    );

    fs.copyFileSync(
      path.resolve(__dirname, "fixtures/main.ts.fixture"),
      path.resolve(workingDirectory, "main.ts")
    );
    fs.copyFileSync(
      path.resolve(__dirname, "fixtures/cdktf.json"),
      path.resolve(workingDirectory, "cdktf.json")
    );

    execSync(`cdktf get`, {
      cwd: workingDirectory,
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

      expect(events.map((event) => event.type)).toEqual(
        expect.arrayContaining(["synthesizing", "synthesized"])
      );
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

      await cdktfProject.diff("first");

      expect(events.map((event) => event.type)).toEqual(
        expect.arrayContaining([
          "synthesizing",
          "synthesized",
          "planning",
          "planned",
        ])
      );
      return expect(cdktfProject.currentPlan?.resources.length).toEqual(1);
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

      return expect(cdktfProject.diff()).rejects.toMatchInlineSnapshot(`
                "terraform plan errored with: 
                Error: Usage Error: Found more than one stack, please specify a target stack. Run cdktf <verb> <stack> with one of these stacks: first, second "
              `);
    });
  });

  describe("deploy", () => {
    it("runs synth and diff once and waits in for approval", async () => {
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

      await cdktfProject.deploy("first");

      return expect(events.map((event) => event.type)).toEqual(
        expect.arrayContaining([
          "synthesizing",
          "synthesized",
          "planning",
          "planned",
          "deploying",
          "waiting for approval",
          "deployed",
        ])
      );
    });

    it("runs synth and diff once and deploys on autoApprove", async () => {
      const events: any[] = [];
      const cdktfProject = new CdktfProject({
        synthCommand: "npx ts-node ./main.ts",
        outDir,
        workingDirectory,
        autoApprove: true,
        onUpdate: (event) => {
          events.push(event);
        },
      });

      await cdktfProject.deploy("first");

      const eventTypes = events.map((event) => event.type);
      expect(eventTypes).toEqual(
        expect.arrayContaining([
          "synthesizing",
          "synthesized",
          "planning",
          "planned",
          // "deploying", // WHYYYY??
          "deployed",
        ])
      );
      return expect(eventTypes.includes("waiting for approval")).toBeFalsy();
    });
  });

  describe("destroy", () => {
    it("runs synth and diff once and waits in for approval", async () => {
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

      await cdktfProject.destroy("first");

      return expect(events.map((event) => event.type)).toEqual(
        expect.arrayContaining([
          "synthesizing",
          "synthesized",
          "planning",
          "planned",
          "destroying",
          "waiting for approval",
          "destroyed",
        ])
      );
    });

    it("runs synth and diff once and destroys on autoApprove", async () => {
      const events: any[] = [];
      const cdktfProject = new CdktfProject({
        synthCommand: "npx ts-node ./main.ts",
        outDir,
        workingDirectory,
        autoApprove: true,
        onUpdate: (event) => {
          events.push(event);
        },
      });

      await cdktfProject.destroy("first");

      const eventTypes = events.map((event) => event.type);
      expect(eventTypes).toEqual(
        expect.arrayContaining([
          "synthesizing",
          "synthesized",
          "planning",
          "planned",
          "destroying",
          "destroyed",
        ])
      );
      return expect(eventTypes.includes("waiting for approval")).toBeFalsy();
    });
  });
});
