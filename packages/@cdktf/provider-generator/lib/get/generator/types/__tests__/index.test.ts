// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { parse } from "..";

const schema = {
  resource_schemas: {},
  data_source_schemas: {},
  provider: {
    version: 0,
    block: {
      attributes: {
        access_key: {
          type: "string",
          description:
            "The access key for API operations. You can retrieve this\nfrom the 'Security & Credentials' section of the AWS console.",
          optional: true,
        },
        allowed_account_ids: {
          type: ["set", "string"],
          optional: true,
        },
        permanent_deletion_time_in_days: {
          type: "number",
          description_kind: "plain",
          optional: true,
        },
      },
      block_types: {
        assume_role: {
          nesting_mode: "set",
          block: {
            attributes: {
              external_id: {
                type: "string",
                description:
                  "The external ID to use when assuming the role. If omitted, no external ID is passed to the AssumeRole call.",
                optional: true,
              },
            },
          },
          max_items: 1,
        },
        ignore_tags: {
          nesting_mode: "list",
          block: {
            attributes: {
              key_prefixes: {
                type: ["set", "string"],
                description:
                  "Resource tag key prefixes to ignore across all resources.",
                optional: true,
              },
            },
          },
        },
      },
    },
  },
};

describe("new generator types", () => {
  it("should parse a simple schema", () => {
    expect(parse(schema)).toMatchInlineSnapshot(`
      Object {
        "provider": Object {
          "attributes": Object {
            "access_key": Object {
              "__type": "settable",
              "description": "The access key for API operations. You can retrieve this
      from the 'Security & Credentials' section of the AWS console.",
              "optionality": true,
              "type": "string",
            },
            "allowed_account_ids": Object {
              "__type": "settable",
              "description": undefined,
              "optionality": true,
              "type": Object {
                "__type": "list",
                "type": "string",
              },
            },
            "assume_role": Object {
              "__type": "settable",
              "optionality": false,
              "type": Object {
                "__type": "list",
                "type": Object {
                  "__type": "object",
                  "attributes": Object {
                    "external_id": Object {
                      "__type": "settable",
                      "description": "The external ID to use when assuming the role. If omitted, no external ID is passed to the AssumeRole call.",
                      "optionality": true,
                      "type": "string",
                    },
                  },
                },
              },
            },
            "ignore_tags": Object {
              "__type": "settable",
              "optionality": false,
              "type": Object {
                "__type": "list",
                "type": Object {
                  "__type": "object",
                  "attributes": Object {
                    "key_prefixes": Object {
                      "__type": "settable",
                      "description": "Resource tag key prefixes to ignore across all resources.",
                      "optionality": true,
                      "type": Object {
                        "__type": "list",
                        "type": "string",
                      },
                    },
                  },
                },
              },
            },
            "permanent_deletion_time_in_days": Object {
              "__type": "settable",
              "description": undefined,
              "optionality": true,
              "type": "number",
            },
          },
        },
      }
    `);
  });
});
