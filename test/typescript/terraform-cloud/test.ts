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
  function getTestEnvironmentVariables(
    sourceExecutionType,
    consumerExecutionType
  ) {
    return {
      TERRAFORM_CLOUD_SOURCE_WORKSPACE_NAME: sourceWorkspaceName,
      TERRAFORM_CLOUD_SOURCE_EXECUTION_TYPE: sourceExecutionType,
      TERRAFORM_CLOUD_CONSUMER_WORKSPACE_NAME: consumerWorkspaceName,
      TERRAFORM_CLOUD_CONSUMER_EXECUTION_TYPE: consumerExecutionType,
      TERRAFORM_CLOUD_ORGANIZATION: orgName,
    };
  }

  function ifNotLocal(executionType, promiseThunk) {
    return executionType === "local" ? Promise.resolve() : promiseThunk();
  }

  async function createWorkspaces(sourceExecutionType, consumerExecutionType) {
    const client = new TerraformCloud(TERRAFORM_CLOUD_TOKEN);

    await Promise.all([
      ifNotLocal(sourceExecutionType, () =>
        client.Workspaces.create(orgName, {
          data: {
            attributes: {
              name: sourceWorkspaceName,
              executionMode:
                sourceExecutionType === "tfc-remote" ? "remote" : "local",
              terraformVersion: TERRAFORM_VERSION,
              // the consumer needs access
              globalRemoteState: true,
            },
            type: "workspaces",
          },
        })
      ),
      ifNotLocal(consumerExecutionType, () =>
        client.Workspaces.create(orgName, {
          data: {
            attributes: {
              name: consumerWorkspaceName,
              executionMode:
                consumerExecutionType === "tfc-remote" ? "remote" : "local",
              terraformVersion: TERRAFORM_VERSION,
              // the consumer needs access
              globalRemoteState: true,
            },
            type: "workspaces",
          },
        })
      ),
    ]);
  }

  async function deleteWorkspaces(sourceExecutionType, consumerExecutionType) {
    const client = new TerraformCloud(TERRAFORM_CLOUD_TOKEN);

    return await Promise.all([
      ifNotLocal(sourceExecutionType, () =>
        client.Workspaces.deleteByName(orgName, sourceWorkspaceName)
      ),
      ifNotLocal(consumerExecutionType, () =>
        client.Workspaces.deleteByName(orgName, consumerWorkspaceName)
      ),
    ]);
  }

  beforeEach(async () => {
    const baseName = `${GITHUB_RUN_NUMBER}-${crypto
      .randomBytes(10)
      .toString("hex")}`;
    sourceWorkspaceName = `${baseName}-source`;
    consumerWorkspaceName = `${baseName}-consumer`;
    driver = new TestDriver(__dirname);
    await driver.setupTypescriptProject();
    console.log(driver.workingDirectory);
    driver.copyFolders("fixtures");
  });

  describe("single stack", () => {
    beforeEach(async () => {
      await createWorkspaces("tfc-remote", "local");
    });

    afterEach(async () => {
      await deleteWorkspaces("tfc-remote", "local");
    });

    withAuth("deploy in Terraform Cloud", async () => {
      driver.env = {
        ...driver.env,
        ...getTestEnvironmentVariables("tfc-remote", "local"),
      };
      expect(driver.deploy("source-stack")).toMatchSnapshot();
    });

    withAuth("deploy locally and then in Terraform Cloud", async () => {
      driver.env = {
        ...driver.env,
        ...getTestEnvironmentVariables("local", "local"),
      };
      driver.deploy("source-stack");
      driver.env = {
        ...driver.env,
        ...getTestEnvironmentVariables("tfc-remote", "local"),
      };
      driver.deploy("source-stack");
    });
  });

  describe("multiple stacks", () => {
    withAuth.each([
      // ["source-mode", "consumer-mode"],
      ["tfc-remote", "local"],
      ["tfc-remote", "tfc-local"],
      ["tfc-remote", "tfc-remote"],
      ["tfc-local", "tfc-remote"],
      ["tfc-local", "tfc-local"],
      // ["local", "tfc-*"], is not supported as it would require accessing local state from within TFC
    ])(
      "cross-stack reference from %s to %s",
      async (sourceExecutionType, consumerExecutionType) => {
        await createWorkspaces(sourceExecutionType, consumerExecutionType);

        driver.env = {
          ...driver.env,
          ...getTestEnvironmentVariables(
            sourceExecutionType,
            consumerExecutionType
          ),
        };
        driver.deploy("source-stack");
        driver.deploy("consumer-stack");

        await deleteWorkspaces(sourceExecutionType, consumerExecutionType);
      }
    );
  });
});
