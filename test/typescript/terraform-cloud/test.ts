// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver, onPosix } from "../../test-helper";
import { TerraformCloud } from "@skorfmann/terraform-cloud";
import * as crypto from "crypto";
import { readFileSync } from "fs-extra";

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
describe("full integration test", () => {
  let driver: TestDriver;
  let workspaceName: string;
  const orgName = "cdktf";

  async function createWorkspace(token: string, name: string) {
    const response = await fetch(
      `https://app.terraform.io/api/v2/organizations/${orgName}/workspaces`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/vnd.api+json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          data: {
            attributes: {
              name,
              executionMode: "remote",
              terraformVersion: TERRAFORM_VERSION,
            },
          },
          type: "workspaces",
        }),
      },
    );
    const res = await response.json();

    return res.data.id;
  }

  async function deleteWorkspace(token: string, name: string) {
    const response = await fetch(
      `https://app.terraform.io/api/v2/organizations/${orgName}/workspaces/${name}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/vnd.api+json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const res = await response.json();

    return res.data.id;
  }

  beforeEach(async () => {
    workspaceName = `${GITHUB_RUN_NUMBER}-${crypto
      .randomBytes(10)
      .toString("hex")}`;
    driver = new TestDriver(__dirname, {
      TERRAFORM_CLOUD_WORKSPACE_NAME: workspaceName,
      TERRAFORM_CLOUD_ORGANIZATION: orgName,
    });
    await driver.setupTypescriptProject();
    driver.copyFolders("fixtures");
    console.log(driver.workingDirectory);
  });

  withAuth("deploy in Terraform Cloud", async () => {
    await createWorkspace(TERRAFORM_CLOUD_TOKEN, workspaceName);

    expect(await driver.deploy(["source-stack"])).toContain("Apply complete!");

    await deleteWorkspace(TERRAFORM_CLOUD_TOKEN, workspaceName);
  });

  withAuth("deploy locally and then in Terraform Cloud", async () => {
    await createWorkspace(TERRAFORM_CLOUD_TOKEN, workspaceName);

    process.env.TF_EXECUTE_LOCAL = "true";
    await driver.deploy(["source-stack"], "before-migration.json");
    process.env.TF_EXECUTE_LOCAL = undefined;
    await driver.deploy(["source-stack"], "after-migration.json", [
      "--migrate-state",
    ]);

    expect(readFileSync("before-migration.json")).toEqual(
      readFileSync("after-migration.json"),
    );

    await deleteWorkspace(TERRAFORM_CLOUD_TOKEN, workspaceName);
  });

  // Only the origin stack is in TFC, the consumer stack is local
  withAuth(
    "deploy with cross stack reference origin in Terraform Cloud",
    async () => {
      await createWorkspace(TERRAFORM_CLOUD_TOKEN, workspaceName);

      await driver.deploy(["source-stack", "consumer-stack"]);
      driver.output("source-stack", "outputs.tmp.json", true);
      const outputs = JSON.parse(readFileSync("outputs.tmp.json").toString());

      await deleteWorkspace(TERRAFORM_CLOUD_TOKEN, workspaceName);

      expect(driver.readLocalFile("consumer-file.txt")).toEqual(
        outputs["source-stack"].password_output,
      );
    },
  );
});
