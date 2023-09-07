/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { ProviderSchema } from "@cdktf/commons";
import { getTypeAtPath } from "../terraformSchema";

describe("getTypeAtPath", () => {
  const schema: ProviderSchema = {
    provider_schemas: {
      test: {
        provider: {} as any,
        data_source_schemas: {},
        resource_schemas: {
          test_resource: {
            version: 1,
            block: {
              attributes: {
                stringAttribute: {
                  type: "string",
                },
                numberAttribute: {
                  type: "number",
                },
                booleanAttribute: {
                  type: "bool",
                },
                stringListAttribute: {
                  type: ["list", "string"],
                },
                stringSetAttribute: {
                  type: ["set", "string"],
                },
                stringMapAttribute: {
                  type: ["map", "string"],
                },
                stringListListAttribute: {
                  type: ["list", ["list", "string"]],
                },
                objectAttribute: {
                  type: [
                    "object",
                    {
                      stringAttribute: "string",
                    },
                  ],
                },
              },
              block_types: {
                listMode: {
                  nesting_mode: "list",
                  block: {
                    attributes: {
                      stringAttribute: {
                        type: "string",
                      },
                    },
                    block_types: {
                      listMode: {
                        nesting_mode: "list",
                        block: {
                          attributes: {
                            stringAttribute: {
                              type: "string",
                            },
                          },
                          block_types: {},
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  };

  it("should return null if it can not find the resource", () => {
    expect(getTypeAtPath(schema, "test.nonExistantResource")).toBeNull();
  });
  it("should return null if it can not find the attribute on the resource", () => {
    expect(getTypeAtPath(schema, "test.resource.ponyfoo")).toBeNull();
  });

  describe("known types", () => {
    it.each([
      ["stringAttribute", "string"],
      ["numberAttribute", "number"],
      ["booleanAttribute", "bool"],
      ["stringListAttribute", ["list", "string"]],
      ["stringSetAttribute", ["set", "string"]],
      ["stringMapAttribute", ["map", "string"]],
      ["stringMapAttribute.whateverkey", "string"],
      ["stringListListAttribute", ["list", ["list", "string"]]],
      ["stringListListAttribute.[]", ["list", "string"]],
      ["stringListListAttribute.[].[]", "string"],
      ["listMode.[].listMode.[].stringAttribute", "string"],
      ["objectAttribute.stringAttribute", "string"],
    ])(`access to %s returns %s`, (attr, res) => {
      expect(getTypeAtPath(schema, `test.resource.${attr}`)).toEqual(res);
    });
  });
});
