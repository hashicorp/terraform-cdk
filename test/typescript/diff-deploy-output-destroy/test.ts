import { TestDriver } from "../../test-helper";
import * as path from "path";
import * as fs from "fs";

describe("full integration test", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupTypescriptProject();
  });

  test("diff", () => {
    expect(driver.diff()).toMatchInlineSnapshot(`
      "Stack: hello-deploy
      Resources
       + NULL_RESOURCE       test                null_resource.test


      Diff: 1 to create, 0 to update, 0 to delete.
      "
    `);
  });

  test("deploy", () => {
    expect(driver.deploy()).toMatchInlineSnapshot(`
      "Deploying Stack: hello-deploy
      Resources
       ✔ NULL_RESOURCE       test                null_resource.test


      Summary: 1 created, 0 updated, 0 destroyed.

      Output: output = hello
              output2 = <sensitive>
      "
    `);
  });

  test("output", () => {
    expect(driver.output()).toMatchInlineSnapshot(`
      "
      Output: output = hello
              output2 = <sensitive>
      "
    `);
  });

  it("deploy and output write the same outputs file", () => {
    const deployOutputsPath = path.resolve(
      driver.workingDirectory,
      "deploy.outputs.json"
    );
    const outputOutputsPath = path.resolve(
      driver.workingDirectory,
      "output.outputs.json"
    );

    driver.deploy(undefined, deployOutputsPath);
    const deployOutput = JSON.parse(fs.readFileSync(deployOutputsPath, "utf8"));
    driver.output(undefined, outputOutputsPath);
    const outputOutput = JSON.parse(fs.readFileSync(outputOutputsPath, "utf8"));

    expect(deployOutput).toMatchInlineSnapshot(`
      Object {
        "hello-deploy": Object {
          "output": "hello",
        },
      }
    `);
    expect(outputOutput).toEqual(deployOutput);
  });

  test("destroy", () => {
    expect(driver.destroy()).toMatchInlineSnapshot(`
      "Destroying Stack: hello-deploy
      Resources
       ✔ NULL_RESOURCE       test                null_resource.test


      Summary: 1 destroyed.
      "
    `);
  });
});
