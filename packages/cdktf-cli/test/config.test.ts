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
        terraformProviders: ["aws@~> 2.0"]
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformProviders": Array [
            TerraformProviderConstraint {
              "name": "aws",
              "source": "aws",
              "version": "~> 2.0",
            },
          ],
        }
      `);
    });

    it("parses provider string with namespace", async () => {
      const input = {
        terraformProviders: ["hashicorp/aws@~> 2.0"]
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformProviders": Array [
            TerraformProviderConstraint {
              "name": "aws",
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
            version: "~> 2.0"
          }
        ]
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformProviders": Array [
            TerraformProviderConstraint {
              "name": "aws",
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
        terraformModules: ["terraform-aws-modules/vpc/aws@2.39.0"]
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "name": "aws",
              "source": "terraform-aws-modules/vpc/aws",
              "version": "2.39.0",
            },
          ],
        }
      `);
    });

    it("parses sub module registry string", async () => {
      const input = {
        terraformModules: [
          "terraform-aws-modules/iam/aws//modules/iam-account@3.12.0"
        ]
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "name": "iam-account",
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
            version: "~> v2.0"
          }
        ]
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "name": "customAWSVpc",
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
            version: "~> v2.0"
          }
        ]
      };

      expect(parseConfig(JSON.stringify(input))).toMatchInlineSnapshot(`
        Object {
          "checkCodeMakerOutput": true,
          "codeMakerOutput": ".gen",
          "output": "cdktf.out",
          "terraformModules": Array [
            TerraformModuleConstraint {
              "name": "aws",
              "source": "terraform-aws-modules/vpc/aws",
              "version": "2.39.0",
            },
            TerraformModuleConstraint {
              "name": "customAWSVpc",
              "source": "https://github.com/terraform-aws-modules/terraform-aws-vpc",
              "version": "~> v2.0",
            },
          ],
        }
      `);
    });
  });
});
