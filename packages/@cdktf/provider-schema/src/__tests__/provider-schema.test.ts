// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

import * as path from "path";
import stableStringify from "json-stable-stringify";
import {
  TerraformModuleConstraint,
  TerraformProviderConstraint,
  ConstructsMakerModuleTarget,
  ConstructsMakerProviderTarget,
  Language,
  ProviderSchema,
} from "@cdktf/commons";
import {
  readModuleSchema,
  readProviderSchema,
  sanitizeProviderSchema,
} from "../provider-schema";

function sanitizeJson(value: any) {
  value["format_version"] = "STUBBED VERSION";
  return stableStringify(value, {
    space: 2,
  });
}

describe("readSchema", () => {
  it("generates a single provider schema", async () => {
    const provider = new TerraformProviderConstraint("hashicorp/null@3.1.0");
    const target = new ConstructsMakerProviderTarget(
      provider,
      Language.TYPESCRIPT,
    );
    const result = await readProviderSchema(target);
    expect(sanitizeJson(result)).toMatchSnapshot();
  }, 120000);

  it("generates a single module schema", async () => {
    const module = new TerraformModuleConstraint(
      "terraform-aws-modules/iam/aws//modules/iam-account@3.12.0",
    );
    const target = new ConstructsMakerModuleTarget(module, Language.TYPESCRIPT);
    const result = await readModuleSchema(target);
    expect(sanitizeJson(result)).toMatchSnapshot();
  }, 120000);

  it("generates a more complex schema", async () => {
    const module = new TerraformModuleConstraint(
      "terraform-aws-modules/eks/aws@7.0.1",
    );
    const target = new ConstructsMakerModuleTarget(module, Language.TYPESCRIPT);
    const result = await readModuleSchema(target);
    expect(sanitizeJson(result)).toMatchSnapshot();
  }, 120000);

  it("generates a local module", async () => {
    const module = new TerraformModuleConstraint({
      name: "local_module",
      fqn: "local_module",
      source: path.resolve(__dirname, "fixtures", "local-module"),
    });
    const target = new ConstructsMakerModuleTarget(module, Language.TYPESCRIPT);
    const result = await readModuleSchema(target);
    expect(sanitizeJson(result)).toMatchSnapshot();
  }, 120000);

  it("generates a local json module", async () => {
    const module = new TerraformModuleConstraint({
      name: "local_module",
      fqn: "local_module",
      source: path.resolve(__dirname, "fixtures", "local-json-module"),
    });
    const target = new ConstructsMakerModuleTarget(module, Language.TYPESCRIPT);
    const result = await readModuleSchema(target);
    expect(sanitizeJson(result)).toMatchSnapshot();
  }, 120000);
});

describe("sanitizeProviderSchema", () => {
  it("sanitizes a provider schema", () => {
    const schema: ProviderSchema = {
      format_version: "0.1" as const,
      provider_versions: {
        "registry.terraform.io/hashicorp/null": "3.1.0",
      },
      provider_schemas: {
        "registry.terraform.io/hashicorp/null": {
          provider: {
            version: 0,
            block: {
              attributes: {
                version: {
                  type: "string",
                  required: true,
                },
                correct: {
                  type: ["list", "string"],
                },
                incorrect: {
                  type: ["list", "string", "list", "string"] as any,
                },
              },
              block_types: {
                triggers: {
                  nesting_mode: "single",
                  block: {
                    attributes: {
                      correct: {
                        type: ["list", "string"],
                      },
                      incorrect: {
                        type: ["list", "string", "list", "string"] as any,
                      },
                    },
                    block_types: {},
                  },
                },
              },
            },
          },
          resource_schemas: {
            null_resource: {
              version: 0,
              block: {
                attributes: {
                  id: {
                    type: "string",
                    computed: true,
                  },
                  correct: {
                    type: ["list", "string"],
                  },
                  incorrect: {
                    type: ["list", "string", "list", "string"] as any,
                  },
                },
                block_types: {
                  triggers: {
                    nesting_mode: "single",
                    block: {
                      attributes: {
                        triggers: {
                          type: "string",
                          optional: true,
                        },
                        correct: {
                          type: ["list", "string"],
                        },
                        incorrect: {
                          type: ["list", "string", "list", "string"] as any,
                        },
                      },
                      block_types: {},
                    },
                  },
                },
              },
            },
          },
          data_source_schemas: {},
        },
      },
    };

    const result = sanitizeProviderSchema(schema);
    expect(result).toMatchSnapshot();
  });
});
