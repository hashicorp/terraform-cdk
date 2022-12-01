// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as execa from "execa";
import { TestDriver } from "../../test-helper";

describe("no-color option for cdktf deploy, diff, destroy", () => {
  let ansiRegex =
    /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;
  let driver: TestDriver;
  beforeAll(async () => {
    driver = new TestDriver(__dirname, {
      CDKTF_DIST: "",
      DISABLE_VERSION_CHECK: "true",
    }); // reset CDKTF_DIST set by run-against-dist script & disable version check as we have to use an older version of cdktf-cli
    await driver.setupJavaProject({
      init: { additionalOptions: "--cdktf-version 0.14.1" },
    });
  }, 500_000);

  it("contains no color formatting in cdktf deploy", async () => {
    const result = await execa(
      "cdktf",
      ["deploy", "--auto-approve", "--no-color"],
      {
        env: driver.env,
        cwd: driver.workingDirectory,
      }
    );
    expect(result.stdout).not.toMatch(ansiRegex);
  });
  it("contains no color formatting in cdktf diff", async () => {
    const result = await execa("cdktf", ["diff", "--no-color"], {
      env: driver.env,
      cwd: driver.workingDirectory,
    });
    expect(result.stdout).not.toMatch(ansiRegex);
  });
  it("contains no color formatting in cdktf destroy", async () => {
    const result = await execa(
      "cdktf",
      ["destroy", "--auto-approve", "--no-color"],
      {
        env: driver.env,
        cwd: driver.workingDirectory,
      }
    );
    expect(result.stdout).not.toMatch(ansiRegex);
  });
});
