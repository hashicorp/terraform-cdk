import { parseConfig } from "../lib/config";
import * as fs from "fs-extra";
import * as os from "os";
import * as path from "path";

export async function mkdtemp(closure: (dir: string) => Promise<void>) {
  const workdir = await fs.mkdtemp(path.join(os.tmpdir(), "cdktf."));
  try {
    await closure(workdir);
  } finally {
    await fs.remove(workdir);
  }
}

describe("parseConfig", () => {
  it("provides default with no input", async () => {
    expect(parseConfig()).toMatchInlineSnapshot(`
      Object {
        "checkCodeMakerOutput": false,
        "codeMakerOutput": ".gen",
        "output": "cdktf.out",
      }
    `);
  });

  describe("providers", () => {
    it("parses provider string", async () => {
      const input = {
        terraformProviders: ["aws@~> 2.0"],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformProviders": Array [
            TerraformProviderConstraint {
              "fqn": "aws",
              "name": "aws",
              "namespace": undefined,
              "source": "aws",
              "version": "~> 2.0",
            },
          ],
        }
      `);
    });

    it("parses provider string with namespace", async () => {
      const input = {
        terraformProviders: ["hashicorp/aws@~> 2.0"],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformProviders": Array [
            TerraformProviderConstraint {
              "fqn": "hashicorp/aws",
              "name": "aws",
              "namespace": "hashicorp",
              "source": "hashicorp/aws",
              "version": "~> 2.0",
            },
          ],
        }
      `);
    });

    it("parses complex provider config", async () => {
      const input = {
        terraformProviders: [
          {
            name: "aws",
            version: "~> 2.0",
          },
        ],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformProviders": Array [
            TerraformProviderConstraint {
              "fqn": "aws",
              "name": "aws",
              "namespace": undefined,
              "source": undefined,
              "version": "~> 2.0",
            },
          ],
        }
      `);
    });
  });

  describe("modules", () => {
    it("parses module string", async () => {
      const input = {
        terraformModules: ["terraform-aws-modules/vpc/aws@2.39.0"],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "fqn": "terraform-aws-modules/vpc/aws",
              "name": "vpc",
              "namespace": "terraform-aws-modules/aws",
              "source": "terraform-aws-modules/vpc/aws",
              "version": "2.39.0",
            },
          ],
        }
      `);
    });

    it("parses module for local module for module generator", async () => {
      const input = {
        terraformModules: [
          {
            name: "local-module",
            source: "./foo",
          },
        ],
      };
      const parsed: any = parseConfig(JSON.stringify(input));
      expect(parsed.terraformModules[0].localSource).toMatch(
        "/packages/@cdktf/provider-generator/foo"
      );
    });

    it("parses sub module registry string", async () => {
      const input = {
        terraformModules: [
          "terraform-aws-modules/iam/aws//modules/iam-account@3.12.0",
        ],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "fqn": "terraform-aws-modules/iam/aws/modules/iam-account",
              "name": "iam-account",
              "namespace": "terraform-aws-modules/aws/iam/modules",
              "source": "terraform-aws-modules/iam/aws//modules/iam-account",
              "version": "3.12.0",
            },
          ],
        }
      `);
    });

    it("takes complex config", async () => {
      const input = {
        terraformModules: [
          {
            name: "customAWSVpc",
            source:
              "https://github.com/terraform-aws-modules/terraform-aws-vpc",
            version: "~> v2.0",
          },
        ],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "fqn": "customAWSVpc",
              "name": "customAWSVpc",
              "namespace": undefined,
              "source": "https://github.com/terraform-aws-modules/terraform-aws-vpc",
              "version": "~> v2.0",
            },
          ],
        }
      `);
    });

    it("takes complex and string config", async () => {
      const input = {
        terraformModules: [
          "terraform-aws-modules/vpc/aws@2.39.0",
          {
            name: "customAWSVpc",
            source:
              "https://github.com/terraform-aws-modules/terraform-aws-vpc",
            version: "~> v2.0",
          },
        ],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "fqn": "terraform-aws-modules/vpc/aws",
              "name": "vpc",
              "namespace": "terraform-aws-modules/aws",
              "source": "terraform-aws-modules/vpc/aws",
              "version": "2.39.0",
            },
            TerraformModuleConstraint {
              "fqn": "customAWSVpc",
              "name": "customAWSVpc",
              "namespace": undefined,
              "source": "https://github.com/terraform-aws-modules/terraform-aws-vpc",
              "version": "~> v2.0",
            },
          ],
        }
      `);
    });

    it("parses local path", async () => {
      const input = {
        terraformModules: ["./consul"],
      };

      const parsed: any = parseConfig(JSON.stringify(input));
      expect(parsed.terraformModules[0].localSource).toMatch(
        "/packages/@cdktf/provider-generator/consul"
      );

      expect(parsed.terraformModules[0].name).toMatch("consul");
    });

    it("parses registry", async () => {
      const input = {
        terraformModules: ["hashicorp/consul/aws@0.1.0"],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "fqn": "hashicorp/consul/aws",
              "name": "consul",
              "namespace": "hashicorp/aws",
              "source": "hashicorp/consul/aws",
              "version": "0.1.0",
            },
          ],
        }
      `);
    });

    it("parses private registry", async () => {
      const input = {
        terraformModules: [
          "app.terraform.io/example-corp/k8s-cluster/azurerm@1.1.0",
        ],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "fqn": "app-terraform-io/example-corp/k8s-cluster/azurerm",
              "name": "k8s-cluster",
              "namespace": "example-corp/azurerm",
              "source": "app.terraform.io/example-corp/k8s-cluster/azurerm",
              "version": "1.1.0",
            },
          ],
        }
      `);
    });

    it("parses github", async () => {
      const input = {
        terraformModules: ["github.com/hashicorp/example"],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "fqn": "hashicorp/example",
              "name": "example",
              "namespace": "hashicorp",
              "source": "github.com/hashicorp/example",
              "version": undefined,
            },
          ],
        }
      `);
    });

    it("parses github ssh", async () => {
      const input = {
        terraformModules: ["git@github.com:hashicorp/example.git"],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "fqn": "hashicorp/example",
              "name": "example",
              "namespace": "hashicorp",
              "source": "git@github.com:hashicorp/example.git",
              "version": undefined,
            },
          ],
        }
      `);
    });

    it("parses bitbucket", async () => {
      const input = {
        terraformModules: ["bitbucket.org/hashicorp/terraform-consul-aws"],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "fqn": "hashicorp/terraform-consul-aws",
              "name": "terraform-consul-aws",
              "namespace": "hashicorp",
              "source": "bitbucket.org/hashicorp/terraform-consul-aws",
              "version": undefined,
            },
          ],
        }
      `);
    });

    it("parses generic git", async () => {
      const input = {
        terraformModules: ["git::https://example.com/vpc.git"],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "fqn": "vpc",
              "name": "vpc",
              "namespace": undefined,
              "source": "git::https://example.com/vpc.git",
              "version": undefined,
            },
          ],
        }
      `);
    });

    it("parses git ssh", async () => {
      const input = {
        terraformModules: ["git::ssh://username@example.com/storage.git"],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "fqn": "storage",
              "name": "storage",
              "namespace": undefined,
              "source": "git::ssh://username@example.com/storage.git",
              "version": undefined,
            },
          ],
        }
      `);
    });

    it("parses revision", async () => {
      const input = {
        terraformModules: [
          "git::https://example.com/infra/main-vpc.git?ref=v1.2.0",
        ],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "fqn": "infra/main-vpc",
              "name": "main-vpc",
              "namespace": "infra",
              "source": "git::https://example.com/infra/main-vpc.git?ref=v1.2.0",
              "version": undefined,
            },
          ],
        }
      `);
    });

    it("parses scp", async () => {
      const input = {
        terraformModules: ["git::username@example.com:storage.git"],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "fqn": "storage",
              "name": "storage",
              "namespace": undefined,
              "source": "git::username@example.com:storage.git",
              "version": undefined,
            },
          ],
        }
      `);
    });

    it("parses mercurial", async () => {
      const input = {
        terraformModules: ["hg::http://example.com/vpc.hg"],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "fqn": "vpc",
              "name": "vpc",
              "namespace": undefined,
              "source": "hg::http://example.com/vpc.hg",
              "version": undefined,
            },
          ],
        }
      `);
    });

    it("parses hg revision", async () => {
      const input = {
        terraformModules: ["hg::http://example.com/vpc.hg?ref=v1.2.0"],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "fqn": "vpc",
              "name": "vpc",
              "namespace": undefined,
              "source": "hg::http://example.com/vpc.hg?ref=v1.2.0",
              "version": undefined,
            },
          ],
        }
      `);
    });

    it("parses http", async () => {
      const input = {
        terraformModules: ["https://example.com/vpc-module.zip"],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "fqn": "vpc-module",
              "name": "vpc-module",
              "namespace": undefined,
              "source": "https://example.com/vpc-module.zip",
              "version": undefined,
            },
          ],
        }
      `);
    });

    it("parses archive type", async () => {
      const input = {
        terraformModules: ["https://example.com/vpc-module?archive=zip"],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "fqn": "vpc-module",
              "name": "vpc-module",
              "namespace": undefined,
              "source": "https://example.com/vpc-module?archive=zip",
              "version": undefined,
            },
          ],
        }
      `);
    });

    it("parses s3", async () => {
      const input = {
        terraformModules: [
          "s3::https://s3-eu-west-1.amazonaws.com/examplecorp-terraform-modules/vpc.zip",
        ],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "fqn": "examplecorp-terraform-modules/vpc",
              "name": "vpc",
              "namespace": "examplecorp-terraform-modules",
              "source": "s3::https://s3-eu-west-1.amazonaws.com/examplecorp-terraform-modules/vpc.zip",
              "version": undefined,
            },
          ],
        }
      `);
    });

    it("parses gcs", async () => {
      const input = {
        terraformModules: [
          "gcs::https://www.googleapis.com/storage/v1/modules/foomodule.zip",
        ],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "fqn": "storage/v1/modules/foomodule",
              "name": "foomodule",
              "namespace": "modules",
              "source": "gcs::https://www.googleapis.com/storage/v1/modules/foomodule.zip",
              "version": undefined,
            },
          ],
        }
      `);
    });

    it("parses submodule registry", async () => {
      const input = {
        terraformModules: ["hashicorp/consul/aws//modules/consul-cluster"],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "fqn": "hashicorp/consul/aws/modules/consul-cluster",
              "name": "consul-cluster",
              "namespace": "hashicorp/aws/consul/modules",
              "source": "hashicorp/consul/aws//modules/consul-cluster",
              "version": undefined,
            },
          ],
        }
      `);
    });

    it("parses submodule git", async () => {
      const input = {
        terraformModules: ["git::https://example.com/network.git//modules/vpc"],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "fqn": "network/modules/vpc",
              "name": "vpc",
              "namespace": "network/modules",
              "source": "git::https://example.com/network.git//modules/vpc",
              "version": undefined,
            },
          ],
        }
      `);
    });

    it("parses submodule http", async () => {
      const input = {
        terraformModules: [
          "https://example.com/network-module.zip//modules/vpc",
        ],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "fqn": "network-module/modules/vpc",
              "name": "vpc",
              "namespace": "network-module/modules",
              "source": "https://example.com/network-module.zip//modules/vpc",
              "version": undefined,
            },
          ],
        }
      `);
    });

    it("parses submodule s3", async () => {
      const input = {
        terraformModules: [
          "s3::https://s3-eu-west-1.amazonaws.com/examplecorp-terraform-modules/network.zip//modules/vpc",
        ],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "fqn": "examplecorp-terraform-modules/network/modules/vpc",
              "name": "vpc",
              "namespace": "examplecorp-terraform-modules/network/modules",
              "source": "s3::https://s3-eu-west-1.amazonaws.com/examplecorp-terraform-modules/network.zip//modules/vpc",
              "version": undefined,
            },
          ],
        }
      `);
    });

    it("parses submodule ref", async () => {
      const input = {
        terraformModules: [
          "git::https://example.com/network.git//modules/vpc?ref=v1.2.0",
        ],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "fqn": "network/modules/vpc",
              "name": "vpc",
              "namespace": "network/modules",
              "source": "git::https://example.com/network.git//modules/vpc?ref=v1.2.0",
              "version": undefined,
            },
          ],
        }
      `);
    });

    it("parses ref with /", async () => {
      const input = {
        terraformModules: [
          "git::https://github.com/cloudposse/terraform-null-label.git?ref=tags/0.14.1",
        ],
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "fqn": "cloudposse/terraform-null-label",
              "name": "terraform-null-label",
              "namespace": "cloudposse",
              "source": "git::https://github.com/cloudposse/terraform-null-label.git?ref=tags/0.14.1",
              "version": undefined,
            },
          ],
        }
      `);
    });
  });
});
