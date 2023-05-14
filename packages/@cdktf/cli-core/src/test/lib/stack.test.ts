import * as fs from "fs-extra";
import path from "path";
import * as os from "os";
import { addStack } from "../../lib";

describe("stack subcommand", () => {
  describe("stack add", () => {
    function generateProject(): string {
      const projectDir = fs.mkdtempSync(path.join(os.tmpdir(), "stack-test-"));

      fs.writeFileSync(
        path.resolve(projectDir, "cdktf.json"),
        JSON.stringify({ language: "typescript" }, null, 2)
      );
      fs.writeFileSync(
        path.resolve(projectDir, "main.ts"),
        `
import { Construct } from "constructs";
import { TerraformStack } from "cdktf";

export class MyStack extends TerraformStack {
    constructor(scope: Construct, name: string) {
        super(scope, name);

        // define resources here
    }
}

const app = new App();
new MyStack(app, "my-stack");
app.synth();
        `
      );
      return projectDir;
    }

    describe("typescript", () => {
      it("creates a new file & directory for stacks", async () => {
        const dir = generateProject();
        await addStack("best-stack", dir);

        expect(
          fs.readFileSync(path.join(dir, "stacks/best-stack.ts"), "utf8")
        ).toEqual(
          expect.stringContaining(
            "export class BestStack extends TerraformStack {"
          )
        );
      });

      it("logs how to add and instantiate a new stack", async () => {
        const dir = generateProject();
        const output = await addStack("best-stack", dir);

        expect(output).toMatchInlineSnapshot(`
          "Created the new Stack at ./stacks/best-stack.ts
          You can import it via 
              import { BestStack } from "./stacks/best-stack";

          and use the stack via 
              new BestStack(app, "best-stack", {});
          "
        `);
      });
    });
  });
});
