/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { convertTerraformExpressionToTs } from "../expressions";
import { findExpressionType } from "../coerceType";

const s3BucketSchema = {
  format_version: "1.0",
  provider_schemas: {
    "registry.terraform.io/hashicorp/aws": {
      provider: {},
      resource_schemas: {
        aws_s3_bucket: {
          version: 0,
          block: {
            attributes: {
              bucket: {
                type: "string",
                description_kind: "plain",
                optional: true,
                computed: true,
              },
              id: {
                type: "string",
                description_kind: "plain",
                optional: true,
                computed: true,
              },
              tags: {
                type: ["map", "string"],
                description_kind: "plain",
                optional: true,
              },
              website_domain: {
                type: "string",
                description_kind: "plain",
                deprecated: true,
                computed: true,
              },
              website_endpoint: {
                type: "string",
                description_kind: "plain",
                deprecated: true,
                computed: true,
              },
            },
            block_types: {
              cors_rule: {
                nesting_mode: "list",
                block: {
                  attributes: {
                    allowed_headers: {
                      type: ["list", "string"],
                      description_kind: "plain",
                      optional: true,
                    },
                  },
                  description_kind: "plain",
                  deprecated: true,
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

const variable = (fullName: string) => {
  const [resource, variableName] = fullName.split(".");
  return {
    [variableName]: {
      resource,
      variableName,
    },
  };
};

const variables = {
  ...variable("var.test"),
  ...variable("aws_s3_bucket.examplebucket"),
};

describe("findExpressionType", () => {
  it.each([
    ['"${each.key}"', "string"],
    ['"${each.value}"', "string"],
    ['"${var.test}"', "dynamic"],
    ['"${var.test}"', "dynamic"],
    ["22", "number"],
    ["true", "bool"],
    ['"hello"', "string"],
    ['"${aws_s3_bucket.examplebucket.bucket}"', "string"],
  ])("finds type for %s as %s", async (input, expected) => {
    const scope = {
      variables,
      providerSchema: s3BucketSchema,
    };
    const ast = await convertTerraformExpressionToTs(
      scope as any,
      input,
      () => "dynamic",
    );
    const result = findExpressionType(scope as any, ast);

    expect(result).toEqual(expected);
  });
});
