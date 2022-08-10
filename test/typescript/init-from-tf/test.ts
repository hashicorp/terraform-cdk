// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";
import * as fs from "fs";
import * as path from "path";

describe("full integration test", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    driver.switchToTempDir();
    await driver.init(
      "typescript",
      `--from-terraform-project ${driver.rootDir}/tf-project`
    );

    let mainContent = fs.readFileSync(
      path.resolve(driver.workingDirectory, "main.ts"),
      "utf-8"
    );
    mainContent = mainContent.replace(
      path.parse(driver.workingDirectory).name,
      "init-from-tf"
    );
    fs.writeFileSync(
      path.resolve(driver.workingDirectory, "main.ts"),
      mainContent
    );

    await driver.get();
  });

  test("main.ts is valid", async () => {
    const mainContent = fs.readFileSync(
      path.resolve(driver.workingDirectory, "main.ts"),
      "utf-8"
    );

    expect(mainContent).toMatchSnapshot();
  });

  test("module exists", async () => {
    const originalModulePath = path.resolve(
      driver.rootDir,
      "tf-project",
      "modules",
      "test",
      "main.tf"
    );
    const expectedModulePath = path.resolve(
      driver.workingDirectory,
      "modules",
      "test",
      "main.tf"
    );
    expect(fs.readFileSync(expectedModulePath, "utf-8")).toMatch(
      fs.readFileSync(originalModulePath, "utf-8")
    );
  });
});
