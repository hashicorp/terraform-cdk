// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { parse } from "..";

const schema = {
  provider_schemas: {
    aws: {
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
    },
  },
};

describe("new generator types", () => {
  it("should parse a simple schema", () => {
    expect(parse(schema)).toMatchInlineSnapshot(`
      Object {
        "provider_schemas": Object {
          "aws": Object {
            "provider": Object {
              "block": Object {
                "attributes": Object {
                  "access_key": Object {
                    "description": "The access key for API operations. You can retrieve this
      from the 'Security & Credentials' section of the AWS console.",
                    "optional": true,
                    "type": "string",
                  },
                  "allowed_account_ids": Object {
                    "optional": true,
                    "type": Array [
                      "set",
                      "string",
                    ],
                  },
                },
                "block_types": Object {
                  "assume_role": Object {
                    "block": Object {
                      "attributes": Object {
                        "external_id": Object {
                          "description": "The external ID to use when assuming the role. If omitted, no external ID is passed to the AssumeRole call.",
                          "optional": true,
                          "type": "string",
                        },
                      },
                    },
                    "max_items": 1,
                    "nesting_mode": "set",
                  },
                  "ignore_tags": Object {
                    "block": Object {
                      "attributes": Object {
                        "key_prefixes": Object {
                          "description": "Resource tag key prefixes to ignore across all resources.",
                          "optional": true,
                          "type": Array [
                            "set",
                            "string",
                          ],
                        },
                      },
                    },
                    "nesting_mode": "list",
                  },
                },
              },
              "version": 0,
            },
          },
        },
      }
    `);
  });
});
