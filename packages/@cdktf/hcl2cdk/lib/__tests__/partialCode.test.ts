/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { fillWithConfigAccessors } from "../partialCode";
import { ProgramScope } from "../types";

describe("fillWithConfigAccessors", () => {
  it("adds a missing required attributes", () => {
    const scope: ProgramScope = {
      providerSchema: {
        format_version: "0.1",
        provider_schemas: {
          aws: {
            data_source_schemas: {},
            provider: {
              block: {
                attributes: {},
                block_types: {},
              },
              version: 0,
            },
            resource_schemas: {
              aws_image: {
                version: 0,
                block: {
                  block_types: {},
                  attributes: {
                    a: {
                      type: "string",
                      required: true,
                    },
                    b: {
                      type: "string",
                      required: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
      constructs: new Set(),
      hasTokenBasedTypeCoercion: false,
      nodeIds: [],
      providerGenerator: {},
      variables: {},

      // This should be mutated
      topLevelConfig: {},
    };

    const result = fillWithConfigAccessors(
      scope,
      {
        a: "a",
      },
      "aws.image"
    );
    expect(scope.topLevelConfig).toEqual({
      b: "aws.image.b",
    });
    expect(result).toMatchInlineSnapshot(`
      {
        "a": "a",
        "b": {
          "computed": false,
          "object": {
            "name": "config",
            "type": "Identifier",
          },
          "optional": null,
          "property": {
            "name": "b",
            "type": "Identifier",
          },
          "type": "MemberExpression",
        },
      }
    `);
  });
});
