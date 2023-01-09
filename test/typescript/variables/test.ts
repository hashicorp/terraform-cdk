// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver, onPosix } from "../../test-helper";
import { TerraformCloud } from "@skorfmann/terraform-cloud";
import * as crypto from "crypto";
import { readFileSync } from "fs-extra";
import * as fs from "fs-extra";
import * as path from "path";

const { TERRAFORM_CLOUD_TOKEN, GITHUB_RUN_NUMBER, TERRAFORM_VERSION } =
  process.env;
const withAuth = TERRAFORM_CLOUD_TOKEN ? onPosix : it.skip;

if (!TERRAFORM_CLOUD_TOKEN) {
  console.log("TERRAFORM_CLOUD_TOKEN is undefined, skipping authed tests");
}

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

// Below tests are disabled on windows because they fail due to networking issues
describe("variables", () => {
  let driver: TestDriver;
  let workspaceName: string;
  const orgName = "cdktf";

  const deployFlags = [
    "--var='explicitlyset=via-variable'",
    "--var-file=explicit.tfvars",
  ];

  beforeEach(async () => {
    workspaceName = `${GITHUB_RUN_NUMBER}-${crypto
      .randomBytes(10)
      .toString("hex")}`;
    driver = new TestDriver(__dirname, {
      TERRAFORM_CLOUD_WORKSPACE_NAME: workspaceName,
      TERRAFORM_CLOUD_ORGANIZATION: orgName,
    });
    await driver.setupTypescriptProject();
    driver.copyFiles(
      "explicit.tfvars",
      "terraform.tfvars.json",
      "testing.auto.tfvars"
    );
    console.log(driver.workingDirectory);
  });

  withAuth("deploy in Terraform Cloud", async () => {
    const client = new TerraformCloud(TERRAFORM_CLOUD_TOKEN);

    await client.Workspaces.create(orgName, {
      data: {
        attributes: {
          name: workspaceName,
          executionMode: "remote",
          terraformVersion: TERRAFORM_VERSION,
        },
        type: "workspaces",
      },
    });

    expect(await driver.deploy(["stack"], undefined, deployFlags)).toContain(
      "Apply complete!"
    );
    await client.Workspaces.deleteByName(orgName, workspaceName);
  });

  it("deploys locally", async () => {
    expect(await driver.deploy(["stack"], undefined, deployFlags)).toContain(
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
