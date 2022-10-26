// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import execa from "execa";
import path from "path";
import { promises as fs } from "fs";
import { mkdtemp } from "../../lib/util";

const cdktfBin = path.resolve(__dirname, "../../../bundle/bin/cdktf");
const input = `
resource "null_resource" "dummy" {}
`;

describe("convert command", () => {
  it("proposes specifying a provider version", async () => {
    await mkdtemp(async (cwd) => {
      await fs.writeFile(
        path.resolve(cwd, "cdktf.json"),
        JSON.stringify({ terraformProviders: [] })
      );
      const result = await execa(cdktfBin, ["convert"], {
        stdio: "pipe",
        cwd,
        input,
      });
      expect(result.stderr).toEqual("");
      expect(result.stdout).toContain(
        `The following providers are missing schema information and might need manual adjustments to synthesize correctly`
      );
      expect(result.stdout).toContain(
        `import * as NullProvider from "./.gen/providers/null";`
      );
      expect(result.stdout).toContain(
        `new NullProvider.resource.Resource(this, "dummy", {});`
      );
    });
  }, 30_000);
  it("reads provider version from existing cdktf.json", async () => {
    await mkdtemp(async (cwd) => {
      await fs.writeFile(
        path.resolve(cwd, "cdktf.json"),
        JSON.stringify({ terraformProviders: ["hashicorp/null@~> 2.0"] })
      );
      const result = await execa(cdktfBin, ["convert"], {
        stdio: "pipe",
        cwd,
        input,
      });
      expect(result.stderr).toEqual("");
      expect(result.stdout).not.toContain(
        `The following providers are missing schema information and might need manual adjustments to synthesize correctly`
      );
      expect(result.stdout).toContain(
        `import * as NullProvider from "./.gen/providers/null";`
      );
      expect(result.stdout).toContain(
        `new NullProvider.resource.Resource(this, "dummy", {});`
      );
    });
  }, 30_000);
  it("works if no cdktf.json could be found", async () => {
    await mkdtemp(async (cwd) => {
      const result = await execa(cdktfBin, ["convert"], {
        stdio: "pipe",
        cwd,
        input,
      });
      expect(result.stderr).toEqual("");
      expect(result.stdout).toContain(
        `The following providers are missing schema information and might need manual adjustments to synthesize correctly`
      );
      expect(result.stdout).toContain(
        `import * as NullProvider from "./.gen/providers/null";`
      );
      expect(result.stdout).toContain(
        `new NullProvider.resource.Resource(this, "dummy", {});`
      );
    });
  }, 30_000);

  it("works with a singular provider flag passed", async () => {
    await mkdtemp(async (cwd) => {
      const result = await execa(
        cdktfBin,
        ["convert", "--provider=kubernetes"],
        {
          stdio: "pipe",
          cwd,
          input: `resource "kubernetes_deployment" "myapp" {
            metadata {
              name = "myapp-frontend-dev"
              labels = {
                app = "myapp"
                component = "frontend"
                environment = "dev"
              }
            }
          
            spec {
              replicas = "1"
          
              selector {
                match_labels = {
                  app = "myapp"
                  component = "frontend"
                  environment = "dev"
                }
              }
          
              template {
                metadata {
                  labels = {
                    app = "myapp"
                    component = "frontend"
                    environment = "dev"
                  }
                }
          
                spec {
                  container {
                    image = "nginx:latest"
                    name  = "myapp-frontend-dev"
                    # ports {
                    #   containerPort = 80
                    # }
                  }
                }
              }
            }
          }`,
        }
      );
      expect(result.stderr).toEqual("");
      expect(result.stdout).not.toContain(
        `The following providers are missing schema information and might need manual adjustments to synthesize correctly`
      );
      expect(result.stdout).toContain(
        `import * as kubernetes from "./.gen/providers/kubernetes";`
      );
      expect(result.stdout).toContain(
        `new kubernetes.deployment.Deployment(this, "myapp", {`
      );
      expect(result.stdout).toContain(`template: {`);
    });
  }, 30_000);

  it("works with multiple provider flag passed", async () => {
    await mkdtemp(async (cwd) => {
      const result = await execa(
        cdktfBin,
        ["convert", "--provider=kubernetes", "--provider=null"],
        {
          stdio: "pipe",
          cwd,
          input: `resource "kubernetes_deployment" "myapp" {
            metadata {
              name = "myapp-frontend-dev"
              labels = {
                app = "myapp"
                component = "frontend"
                environment = "dev"
              }
            }
          
            spec {
              replicas = "1"
          
              selector {
                match_labels = {
                  app = "myapp"
                  component = "frontend"
                  environment = "dev"
                }
              }
          
              template {
                metadata {
                  labels = {
                    app = "myapp"
                    component = "frontend"
                    environment = "dev"
                  }
                }
          
                spec {
                  container {
                    image = "nginx:latest"
                    name  = "myapp-frontend-dev"
                    # ports {
                    #   containerPort = 80
                    # }
                  }
                }
              }
            }
          }`,
        }
      );
      expect(result.stderr).toEqual("");
      expect(result.stdout).not.toContain(
        `The following providers are missing schema information and might need manual adjustments to synthesize correctly`
      );
      expect(result.stdout).toContain(
        `import * as kubernetes from "./.gen/providers/kubernetes";`
      );
      expect(result.stdout).toContain(
        `new kubernetes.deployment.Deployment(this, "myapp", {`
      );
      expect(result.stdout).toContain(`template: {`);
    });
  }, 30_000);
});
