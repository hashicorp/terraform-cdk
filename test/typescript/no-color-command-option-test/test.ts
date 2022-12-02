// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as execa from "execa";
import * as hasAnsi from "has-ansi";
import { TestDriver } from "../../test-helper";

describe("no-color option for cdktf deploy, diff, destroy", () => {
  let driver: TestDriver;
  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupTypescriptProject();
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
    expect(hasAnsi(result.stdout)).toBe(false);
  });
  it("contains no color formatting in cdktf diff", async () => {
    const result = await execa("cdktf", ["diff", "--no-color"], {
      env: driver.env,
      cwd: driver.workingDirectory,
    });
    expect(hasAnsi(result.stdout)).toBe(false);
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
    expect(hasAnsi(result.stdout)).toBe(false);
  });
});
