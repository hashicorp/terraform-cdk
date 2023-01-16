// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";
import * as fs from "fs-extra";
import * as path from "path";

process.on("uncaughtException", (err) => {
  console.dir(err);
  console.log("UNHANDLED");
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.dir(err);
  console.log("UNHANDLED");
  throw err;
});

describe("variables", () => {
  let driver: TestDriver;

  const cliFlags = [
    "--var='explicitlyset=via-variable'",
    "--var-file=explicit.tfvars",
  ];

  beforeEach(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupTypescriptProject();
    driver.copyFiles(
      "explicit.tfvars",
      "terraform.tfvars.json",
      "testing.auto.tfvars"
    );
    console.log(driver.workingDirectory);
  });

  it("plans locally", async () => {
    const planOutput = await driver.diff("stack", cliFlags);

    expect(planOutput).toContain("Plan: 1 to add, 0 to change, 0 to destroy.");
    expect(planOutput).toContain("hello = world");
    expect(planOutput).toContain("explicitlyset = via-variable");
    expect(planOutput).toContain("explicitly = set-through-file");
    expect(planOutput).toContain("setthrough = auto-loading-file");
    expect(planOutput).toContain("thisextension = auto-loads");
  });

  it("deploys locally", async () => {
    expect(await driver.deploy(["stack"], undefined, cliFlags)).toContain(
      "Apply complete!"
    );
    const output = fs.readFileSync(
      path.join(driver.workingDirectory, "output.txt"),
      "utf-8"
    );

    expect(output).toContain("hello = world");
    expect(output).toContain("explicitlyset = via-variable");
    expect(output).toContain("explicitly = set-through-file");
    expect(output).toContain("setthrough = auto-loading-file");
    expect(output).toContain("thisextension = auto-loads");
  });
});
