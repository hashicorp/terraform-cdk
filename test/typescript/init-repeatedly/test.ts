// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver, onPosix } from "../../test-helper";
import path from "node:path";
import fs from "fs-extra";

// Since chalk auto-detects the capabilities, colored output is
// deactivated by default in non-tty environments. We had an issue
// in the past, where this turned out to be a problem
// see https://github.com/hashicorp/terraform-cdk/issues/139

describe("test with colors", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    driver.switchToTempDir();
    await driver.init("typescript");
    driver.copyFiles("main.ts", "cdktf.json");
    fs.copySync(
      path.join(__dirname, "local-module"),
      path.join(driver.workingDirectory, "local-module")
    );
    await driver.get();
  });

  it("doesn't repeat init on subsequent diff", async () => {
    const output = await driver.synth();
    console.log(output);
  });
});
