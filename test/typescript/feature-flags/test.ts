// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";
import * as fs from "fs";
import * as path from "path";

describe("full integration test", () => {
  let driver: TestDriver;
  const cdktfJSON = {
    language: "typescript",
    app: "npm run --silent compile && node main.js",
    terraformProviders: ["null"],
  };

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    driver.switchToTempDir();
    await driver.init("typescript");
    driver.copyFiles("main.ts");
    writeConfig(driver.workingDirectory, cdktfJSON);
    await driver.get();
  });

  test("with excludeStackIdFromLogicalIds feature", async () => {
    writeConfig(
      driver.workingDirectory,
      jsonWithContext({ excludeStackIdFromLogicalIds: "true" })
    );
    await driver.synth();
    expect(
      loadStackJson(driver.workingDirectory, "hello-deploy")
    ).toMatchSnapshot();
  });

  test("with allowSepCharsInLogicalIds feature", async () => {
    writeConfig(
      driver.workingDirectory,
      jsonWithContext({ allowSepCharsInLogicalIds: "true" })
    );
    await driver.synth();
    expect(
      loadStackJson(driver.workingDirectory, "hello-deploy")
    ).toMatchSnapshot();
  });

  test("without features", async () => {
    writeConfig(driver.workingDirectory, cdktfJSON);
    await driver.synth();
    expect(
      loadStackJson(driver.workingDirectory, "hello-deploy")
    ).toMatchSnapshot();
  });

  const jsonWithContext = (context) => {
    return Object.assign({}, cdktfJSON, { context });
  };

  const loadStackJson = (workingDir, stackName) => {
    return fs.readFileSync(
      path.join(workingDir, "cdktf.out", "stacks", stackName, "cdk.tf.json"),
      "utf-8"
    );
  };

  const writeConfig = (workingDir, json) => {
    fs.writeFileSync(
      path.join(workingDir, "cdktf.json"),
      JSON.stringify(json, null, 2)
    );
  };
});
