// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";
import * as fs from "fs-extra";
import * as path from "path";

describe("modules with relative paths", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    driver.switchToTempDir();

    // run in a subdir
    fs.mkdirSync("cdktf-project");
    process.chdir(path.join(driver.workingDirectory, "cdktf-project"));
    await driver.init("typescript");
    process.chdir(driver.workingDirectory);
    driver.copyFiles("cdktf-project/main.ts", "cdktf-project/cdktf.json");

    // copy modules
    fs.copySync(
      path.join(__dirname, "terraform-modules"),
      path.join(driver.workingDirectory, "terraform-modules")
    );

    // generate bindings
    process.chdir(path.join(driver.workingDirectory, "cdktf-project"));
    await driver.get();
  });

  it("should be valid Terraform", async () => {
    await driver.synth();
    await driver.validate(
      "modules-relative-paths",
      path.join(driver.workingDirectory, "cdktf-project")
    );
  }, 120_000);
});
