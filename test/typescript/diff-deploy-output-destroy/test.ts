// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
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
    expect(driver.diff()).toContain(`1 to add, 0 to change, 0 to destroy.`);
  });

  test("deploy", async () => {
    const output = await driver.deploy();
    expect(output).toContain(`null_resource.test (test) will be created`);
    expect(output).not.toContain(`"world"`);
    expect(output).toContain(`output  = "hello"`);
    expect(output).toContain(`output2 = <sensitive>`);
  });

  test("output", () => {
    const output = driver.output();
    expect(output).not.toContain(`"world"`);
    expect(output).toContain(`output = hello`);
    expect(output).toContain(`output2 = <sensitive>`);
  });

  it("deploy and output write the same outputs file", async () => {
    const deployOutputsPath = path.resolve(
      driver.workingDirectory,
      "deploy.outputs.json"
    );
    const outputOutputsPath = path.resolve(
      driver.workingDirectory,
      "output.outputs.json"
    );

    await driver.deploy(undefined, deployOutputsPath);
    const deployOutput = JSON.parse(fs.readFileSync(deployOutputsPath, "utf8"));
    await driver.output(undefined, outputOutputsPath);
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
    const output = driver.destroy();
    expect(output).toContain(`null_resource.test (test) will be destroyed`);
    expect(output).toContain(`Destroy complete! Resources: 1 destroyed.`);
  });
});
