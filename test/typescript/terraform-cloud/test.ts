// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver, onPosix } from "../../test-helper";
import { TerraformCloud } from "@skorfmann/terraform-cloud";
import * as crypto from "crypto";
import * as http from "http";
import * as net from "net";
import * as url from "url";
import { readFileSync } from "fs-extra";
import * as semver from "semver";

const { TERRAFORM_CLOUD_TOKEN, GITHUB_RUN_NUMBER, TERRAFORM_VERSION } =
  process.env;
const withAuth = TERRAFORM_CLOUD_TOKEN ? onPosix : it.skip;
const onTf1_1 = semver.gte(TERRAFORM_VERSION || "0.0.0", "1.1.0")
  ? withAuth
  : it.skip;

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

function startHttpProxy(mock: jest.Mock): Promise<{
  address: string;
  close: () => void;
}> {
  return new Promise((resolve) => {
    // Inspired by: https://nodejs.org/api/http.html#http_event_connect
    const proxyServer = http.createServer((req, res) => {
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end("OK");
    });

    proxyServer.on("connect", (req, clientSocket, head) => {
      mock(req);
      const { port, hostname } = url.parse(`http://${req.url}`);
      var serverSocket = net.connect(Number(port), hostname, () => {
        clientSocket.write(
          "HTTP/1.1 200 Connection Established\r\n" +
            "Proxy-agent: Node.js-Proxy\r\n" +
            "\r\n"
        );

        serverSocket.write(head);
        serverSocket.pipe(clientSocket);
        clientSocket.pipe(serverSocket);
        serverSocket.on("error", () => {
          // we ignore any errors
        });
        clientSocket.on("error", () => {
          // we ignore any errors
        });
      });
    });

    proxyServer.listen(0, "127.0.0.1", () => {
      const addr = proxyServer.address();
      resolve({
        address:
          typeof addr === "string" ? addr : `${addr.address}:${addr.port}`,
        close: () => {
          proxyServer.close();
        },
      });
    });
  });
}

// Below tests are disabled on windows because they fail due to networking issues
describe("full integration test", () => {
  let driver: TestDriver;
  let workspaceName: string;
  const orgName = "cdktf";

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

  onTf1_1("deploy in Terraform Cloud", async () => {
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

    expect(await driver.deploy(["source-stack"])).toContain("Apply complete!");
    await client.Workspaces.deleteByName(orgName, workspaceName);
  });

  onTf1_1("deploy locally and then in Terraform Cloud", async () => {
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

    process.env.TF_EXECUTE_LOCAL = "true";
    await driver.deploy(["source-stack"]);
    process.env.TF_EXECUTE_LOCAL = undefined;
    await driver.deploy(["source-stack"]);

    await client.Workspaces.deleteByName(orgName, workspaceName);
  });

  // Only the origin stack is in TFC, the consumer stack is local
  onTf1_1(
    "deploy with cross stack reference origin in Terraform Cloud",
    async () => {
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

      await driver.deploy(["source-stack", "consumer-stack"]);
      driver.output("source-stack", "outputs.tmp.json", true);
      const outputs = JSON.parse(readFileSync("outputs.tmp.json").toString());

      await client.Workspaces.deleteByName(orgName, workspaceName);

      expect(driver.readLocalFile("consumer-file.txt")).toEqual(
        outputs["source-stack"].password_output
      );
    }
  );

  describe("with proxy", () => {
    let proxyCalls: jest.Mock;
    let proxyAddress: string | undefined;
    let closeProxy: () => void | undefined;

    beforeEach(async () => {
      proxyCalls = jest.fn();
      const { close, address } = await startHttpProxy(proxyCalls);
      proxyAddress = address;
      closeProxy = close;
    });

    afterEach(async () => {
      closeProxy();
      proxyAddress = undefined;
    });

    onTf1_1("deploy through HTTP_PROXY in Terraform Cloud", async () => {
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

      process.env.HTTPS_PROXY = `http://${proxyAddress}`;
      // Run deploy command
      await driver.deploy(["source-stack"]);
      process.env.HTTPS_PROXY = undefined;

      await client.Workspaces.deleteByName(orgName, workspaceName);
      expect(proxyCalls).toHaveBeenCalled();
    });
  });
});
