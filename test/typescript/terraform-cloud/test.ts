import { TestDriver, onPosix } from "../../test-helper";
import { TerraformCloud } from "@skorfmann/terraform-cloud";
import * as crypto from "crypto";
const { TERRAFORM_CLOUD_TOKEN, GITHUB_RUN_NUMBER, TERRAFORM_VERSION } =
  process.env;
const withAuth = TERRAFORM_CLOUD_TOKEN ? onPosix : it.skip;

if (!TERRAFORM_CLOUD_TOKEN) {
  console.log("TERRAFORM_CLOUD_TOKEN is undefined, skipping authed tests");
}

// Below tests are disabled on windows because they fail due to networking issues
describe("full integration test", () => {
  let driver: TestDriver;
  let sourceWorkspaceName: string;
  let consumerWorkspaceName: string;
  const orgName = "cdktf";

  beforeEach(async () => {
    const baseName = `${GITHUB_RUN_NUMBER}-${crypto
      .randomBytes(10)
      .toString("hex")}`;
    sourceWorkspaceName = `${baseName}-source`;
    consumerWorkspaceName = `${baseName}-consumer`;
    driver = new TestDriver(__dirname, {
      TERRAFORM_CLOUD_SOURCE_WORKSPACE_NAME: sourceWorkspaceName,
      TERRAFORM_CLOUD_CONSUMER_WORKSPACE_NAME: consumerWorkspaceName,
      TERRAFORM_CLOUD_ORGANIZATION: orgName,
    });
    await driver.setupTypescriptProject();
    driver.copyFolders("fixtures");
  });

  withAuth("deploy in Terraform Cloud", async () => {
    const client = new TerraformCloud(TERRAFORM_CLOUD_TOKEN);

    await client.Workspaces.create(orgName, {
      data: {
        attributes: {
          name: sourceWorkspaceName,
          executionMode: "remote",
          terraformVersion: TERRAFORM_VERSION,
        },
        type: "workspaces",
      },
    });

    expect(driver.deploy("source-stack")).toMatchSnapshot();
    await client.Workspaces.deleteByName(orgName, sourceWorkspaceName);
  });

  withAuth("deploy locally and then in Terraform Cloud", async () => {
    const client = new TerraformCloud(TERRAFORM_CLOUD_TOKEN);

    await client.Workspaces.create(orgName, {
      data: {
        attributes: {
          name: sourceWorkspaceName,
          executionMode: "remote",
          terraformVersion: TERRAFORM_VERSION,
        },
        type: "workspaces",
      },
    });

    process.env.TF_EXECUTE_SOURCE_LOCAL = "true";
    driver.deploy("source-stack");
    process.env.TF_EXECUTE_SOURCE_LOCAL = undefined;
    driver.deploy("source-stack");

    await client.Workspaces.deleteByName(orgName, sourceWorkspaceName);
  });

  withAuth(
    "deploy with cross stack reference origin in Terraform Cloud and consumer locally",
    async () => {
      const client = new TerraformCloud(TERRAFORM_CLOUD_TOKEN);

      await client.Workspaces.create(orgName, {
        data: {
          attributes: {
            name: sourceWorkspaceName,
            executionMode: "remote",
            terraformVersion: TERRAFORM_VERSION,
          },
          type: "workspaces",
        },
      });

      driver.deploy("source-stack");
      process.env.TF_EXECUTE_CONSUMER_LOCAL = "true";
      driver.deploy("consumer-stack");
      process.env.TF_EXECUTE_CONSUMER_LOCAL = undefined;

      await client.Workspaces.deleteByName(orgName, sourceWorkspaceName);

      expect(driver.readLocalFile("origin-file.txt")).toEqual(
        driver.readLocalFile("consumer-file.txt")
      );
    }
  );

  withAuth(
    "deploy with cross stack reference origin and consumer in Terraform Cloud",
    async () => {
      const client = new TerraformCloud(TERRAFORM_CLOUD_TOKEN);

      await client.Workspaces.create(orgName, {
        data: {
          attributes: {
            name: sourceWorkspaceName,
            executionMode: "remote",
            terraformVersion: TERRAFORM_VERSION,
            globalRemoteState: true,
          } as any,
          type: "workspaces",
        },
      });

      await client.Workspaces.create(orgName, {
        data: {
          attributes: {
            name: consumerWorkspaceName,
            executionMode: "remote",
            terraformVersion: TERRAFORM_VERSION,
          },
          type: "workspaces",
        },
      });

      driver.deploy("source-stack");
      driver.deploy("consumer-stack");

      await client.Workspaces.deleteByName(orgName, sourceWorkspaceName);
      await client.Workspaces.deleteByName(orgName, consumerWorkspaceName);
    }
  );
});
