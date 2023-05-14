import path from "path";
import { addModule } from "../../lib";
import * as fs from "fs-extra";
import * as os from "os";

const noOp = () => Promise.resolve(undefined);

describe("addModule", () => {
  function generateProject(): string {
    const projectDir = fs.mkdtempSync(path.join(os.tmpdir(), "stack-test-"));

    fs.writeFileSync(
      path.resolve(projectDir, "cdktf.json"),
      JSON.stringify({ language: "typescript" }, null, 2)
    );

    return projectDir;
  }

  it("adds a module to the cdktf.json", async () => {
    const project = generateProject();
    await addModule("terraform-aws-modules/vpc/aws@~> 4.0.1", project, noOp);

    expect(
      JSON.parse(fs.readFileSync(path.join(project, "cdktf.json"), "utf8"))
        .terraformModules
    ).toMatchInlineSnapshot(`
      [
        {
          "name": "vpc",
          "source": "terraform-aws-modules/vpc/aws",
          "version": "~> 4.0.1",
        },
      ]
    `);
  });

  it("should generate the module bindings", async () => {
    const project = generateProject();
    await addModule("terraform-aws-modules/vpc/aws@~> 4.0.1", project);

    expect(fs.statSync(path.join(project, ".gen")).isDirectory()).toBeTruthy();
  }, 500_000);

  it("prints usage instructions", async () => {
    const project = generateProject();
    expect(
      await addModule("terraform-aws-modules/vpc/aws@~> 4.0.1", project, noOp)
    ).toMatchInlineSnapshot(`
      "Added module terraform-aws-modules/vpc/aws@~> 4.0.1.

      You can use it by importing it via

          import { Vpc } from "./.gen/modules/terraform-aws-modules/aws/vpc";

      And using it via

          new Vpc(this, "my-module", {/* Add module inputs here */});
      "
    `);
  });

  it("handles private modules", async () => {
    const project = generateProject();
    await addModule(
      "app.terraform.io/yourorg/eks/aws/modules/irsa_policy@~> 4.0.1",
      project,
      noOp
    );

    expect(
      JSON.parse(fs.readFileSync(path.join(project, "cdktf.json"), "utf8"))
        .terraformModules
    ).toMatchInlineSnapshot(`
      [
        {
          "name": "modules",
          "source": "app.terraform.io/yourorg/eks/aws/modules/irsa_policy",
          "version": "~> 4.0.1",
        },
      ]
    `);
  });

  it("handles local modules", async () => {
    const project = generateProject();

    await addModule("./my-module", project, noOp);

    expect(
      JSON.parse(fs.readFileSync(path.join(project, "cdktf.json"), "utf8"))
        .terraformModules
    ).toMatchInlineSnapshot(`
      [
        {
          "name": "my-module",
          "source": "./my-module",
        },
      ]
    `);
  });
});
