// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { parse } from "..";
import { edgeSchema } from "../../../../__tests__/edge-provider-schema";

const schema = {
  resource_schemas: {
    kubernetes_service: {
      version: 1,
      block: {
        attributes: {
          status: {
            type: [
              "list",
              [
                "object",
                {
                  load_balancer: [
                    "list",
                    [
                      "object",
                      {
                        ingress: [
                          "list",
                          [
                            "object",
                            {
                              hostname: "string",
                              ip: "string",
                            },
                          ],
                        ],
                      },
                    ],
                  ],
                },
              ],
            ],
            description_kind: "plain",
            computed: true,
          },
        },
        block_types: {
          spec: {
            nesting_mode: "list",
            block: {
              block_types: {
                session_affinity_config: {
                  nesting_mode: "list",
                  block: {
                    block_types: {
                      client_ip: {
                        nesting_mode: "list",
                        block: {
                          attributes: {
                            timeout_seconds: {
                              type: "number",
                              description:
                                "Specifies the seconds of `ClientIP` type session sticky time. The value must be > 0 and <= 86400(for 1 day) if `ServiceAffinity` == `ClientIP`.",
                              description_kind: "plain",
                              optional: true,
                              computed: true,
                            },
                          },
                          description:
                            "Contains the configurations of Client IP based session affinity.",
                          description_kind: "plain",
                        },
                        max_items: 1,
                      },
                    },
                    description:
                      "Contains the configurations of session affinity. More info: https://kubernetes.io/docs/concepts/services-networking/service/#proxy-mode-ipvs",
                    description_kind: "plain",
                  },
                  max_items: 1,
                },
              },
              description:
                "Spec defines the behavior of a service. https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#spec-and-status",
              description_kind: "plain",
            },
            min_items: 1,
            max_items: 1,
          },
          timeouts: {
            nesting_mode: "single",
            block: {
              attributes: {
                create: {
                  type: "string",
                  description_kind: "plain",
                  optional: true,
                },
              },
              description_kind: "plain",
            },
          },
        },
        description_kind: "plain",
      },
    },
  },
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
        internal: {
          type: "bool",
          description_kind: "plain",
          optional: true,
          computed: true,
        },
        annotations: {
          type: ["map", "string"],
          description:
            "An unstructured key value map stored with the service that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations",
          description_kind: "plain",
          optional: true,
        },
        manifest: {
          type: "dynamic",
          description:
            "A Kubernetes manifest describing the desired state of the resource in HCL format.",
          description_kind: "plain",
          required: true,
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
              key_prefixes_number: {
                type: ["set", "number"],
                description:
                  "Resource tag key prefixes to ignore across all resources.",
                optional: true,
              },
              key_prefixes_bool: {
                type: ["set", "bool"],
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
} as any;

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
            "annotations": Object {
              "__type": "settable",
              "description": "An unstructured key value map stored with the service that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations",
              "optionality": true,
              "type": Object {
                "__type": "map",
                "valueType": "string",
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
                    "key_prefixes_bool": Object {
                      "__type": "settable",
                      "description": "Resource tag key prefixes to ignore across all resources.",
                      "optionality": true,
                      "type": Object {
                        "__type": "list",
                        "type": "bool",
                      },
                    },
                    "key_prefixes_number": Object {
                      "__type": "settable",
                      "description": "Resource tag key prefixes to ignore across all resources.",
                      "optionality": true,
                      "type": Object {
                        "__type": "list",
                        "type": "number",
                      },
                    },
                  },
                },
              },
            },
            "internal": Object {
              "__type": "settable",
              "description": undefined,
              "optionality": true,
              "type": "bool",
            },
            "manifest": Object {
              "__type": "settable",
              "description": "A Kubernetes manifest describing the desired state of the resource in HCL format.",
              "optionality": false,
              "type": Object {
                "__type": "dynamic",
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
        "resources": Object {
          "kubernetes_service": Object {
            "attributes": Object {
              "spec": Object {
                "__type": "settable",
                "optionality": true,
                "type": Object {
                  "__type": "list",
                  "type": Object {
                    "__type": "object",
                    "attributes": Object {
                      "session_affinity_config": Object {
                        "__type": "settable",
                        "optionality": false,
                        "type": Object {
                          "__type": "list",
                          "type": Object {
                            "__type": "object",
                            "attributes": Object {
                              "client_ip": Object {
                                "__type": "settable",
                                "optionality": false,
                                "type": Object {
                                  "__type": "list",
                                  "type": Object {
                                    "__type": "object",
                                    "attributes": Object {
                                      "timeout_seconds": Object {
                                        "__type": "settable",
                                        "description": "Specifies the seconds of \`ClientIP\` type session sticky time. The value must be > 0 and <= 86400(for 1 day) if \`ServiceAffinity\` == \`ClientIP\`.",
                                        "optionality": true,
                                        "type": "number",
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
                },
              },
              "status": Object {
                "__type": "settable",
                "description": undefined,
                "optionality": false,
                "type": Object {
                  "__type": "list",
                  "type": Object {
                    "__type": "object",
                    "attributes": Object {
                      "load_balancer": Object {
                        "__type": "list",
                        "type": Object {
                          "__type": "object",
                          "attributes": Object {
                            "ingress": Object {
                              "__type": "list",
                              "type": Object {
                                "__type": "object",
                                "attributes": Object {
                                  "hostname": "string",
                                  "ip": "string",
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
              "timeouts": Object {
                "__type": "settable",
                "optionality": true,
                "type": Object {
                  "__type": "object",
                  "attributes": Object {
                    "create": Object {
                      "__type": "settable",
                      "description": undefined,
                      "optionality": true,
                      "type": "string",
                    },
                  },
                },
              },
            },
          },
        },
      }
    `);
  });

  it("works with edge cases", () => {
    const optionalPrimitives = {
      optstr: {
        __type: "settable",
        type: "string",
        optionality: true,
      },
      optnum: {
        __type: "settable",
        type: "number",
        optionality: true,
      },
      optbool: {
        __type: "settable",
        type: "bool", // TODO: should we encode here that it's boolean | cdktf.IResolvable as type
        optionality: true,
      },
    };

    const requiredPrimitives = {
      reqstr: {
        __type: "settable",
        type: "string",
        optionality: false,
      },
      reqnum: {
        __type: "settable",
        type: "number",
        optionality: false,
      },
      reqbool: {
        __type: "settable",
        type: "bool", // TODO: should we encode here that it's boolean | cdktf.IResolvable as type
        optionality: false,
      },
    };

    const computedPrimitives = {
      reqstr: {
        __type: "settable",
        type: "string",
        optionality: true,
      },
      reqnum: {
        __type: "settable",
        type: "number",
        optionality: true,
      },
      reqbool: {
        __type: "settable",
        type: "bool", // TODO: should we encode here that it's boolean | cdktf.IResolvable as type
        optionality: true,
      },
    };

    // TODO: look for read-only attributes in the original types
    const expectedResult = {
      provider: {
        attributes: {
          alias: {
            __type: "settable",
            type: "string",
            optionality: true,
          },
          ...optionalPrimitives,
          ...requiredPrimitives,
          ...computedPrimitives,
        },
      },
      resources: {
        ListBlockResource: {
          attributes: {
            opt: {
              __type: "settable",
              optionality: true,
              type: {
                __type: "list",
                type: {
                  __type: "object",
                  attributes: {
                    ...optionalPrimitives,
                    ...requiredPrimitives,
                    ...computedPrimitives,
                  },
                },
              },
            },
            req: {
              __type: "settable",
              optionality: false,
              type: {
                __type: "list",
                type: {
                  __type: "object",
                  attributes: {
                    ...optionalPrimitives,
                    ...requiredPrimitives,
                    ...computedPrimitives,
                  },
                },
              },
            },
            singleopt: {
              __type: "settable",
              optionality: true,
              type: {
                __type: "object",
                attributes: {
                  ...optionalPrimitives,
                  ...requiredPrimitives,
                  ...computedPrimitives,
                },
              },
            },
            singlereq: {
              __type: "settable",
              optionality: false,
              type: {
                __type: "object",
                attributes: {
                  ...optionalPrimitives,
                  ...requiredPrimitives,
                  ...computedPrimitives,
                },
              },
            },

            singleComputedBlock: {
              __type: "settable",
              optionality: true,
              type: {
                __type: "object",
                attributes: {
                  ...optionalPrimitives,
                  ...requiredPrimitives,
                  ...computedPrimitives,
                },
              },
            },
          },
        },
        MapResource: {
          attributes: {
            optMap: {
              __type: "settable",
              optionality: true,
              type: {
                __type: "map",
                valueType: "string",
              },
            },
            reqMap: {
              __type: "settable",
              optionality: false,
              type: {
                __type: "map",
                valueType: "boolean",
              },
            },
            computedMap: {
              __type: "settable",
              optionality: true,
              type: {
                __type: "map",
                valueType: "number",
              },
            },
          },
        },
        OptionalAttributeResource: {
          attributes: {
            str: {
              __type: "settable",
              type: "string",
              optionality: true,
            },
            num: {
              __type: "settable",
              type: "number",
              optionality: true,
            },
            bool: {
              __type: "settable",
              type: "boolean",
              optionality: true,
            },
            strList: {
              __type: "settable",
              type: {
                __type: "list",
                type: "string",
              },
              optionality: true,
            },
            numList: {
              __type: "settable",
              type: {
                __type: "list",
                type: "number",
              },
              optionality: true,
            },
            boolList: {
              __type: "settable",
              type: {
                __type: "list",
                type: "boolean",
              },
              optionality: true,
            },
          },
        },
        OptionalComputedAttributeResource: {
          attributes: {
            str: {
              __type: "settable",
              type: "string",
              optionality: true,
            },
            num: {
              __type: "settable",
              type: "number",
              optionality: true,
            },
            bool: {
              __type: "settable",
              type: "boolean",
              optionality: true,
            },
            strList: {
              __type: "settable",
              type: {
                __type: "list",
                type: "string",
              },
              optionality: true,
            },
            numList: {
              __type: "settable",
              type: {
                __type: "list",
                type: "number",
              },
              optionality: true,
            },
            boolList: {
              __type: "settable",
              type: {
                __type: "list",
                type: "boolean",
              },
              optionality: true,
            },
          },
        },
        RequiredAttributeResource: {
          attributes: {
            str: {
              __type: "settable",
              type: "string",
              optionality: false,
            },
            num: {
              __type: "settable",
              type: "number",
              optionality: false,
            },
            bool: {
              __type: "settable",
              type: "boolean",
              optionality: false,
            },
            strList: {
              __type: "settable",
              type: {
                __type: "list",
                type: "string",
              },
              optionality: false,
            },
            numList: {
              __type: "settable",
              type: {
                __type: "list",
                type: "number",
              },
              optionality: false,
            },
            boolList: {
              __type: "settable",
              type: {
                __type: "list",
                type: "boolean",
              },
              optionality: false,
            },
          },
        },
        SetBlockResource: {
          attributes: {
            set: {
              __type: "settable",
              type: {
                __type: "list",
                type: {
                  __type: "object",
                  attributes: {
                    ...optionalPrimitives,
                    ...requiredPrimitives,
                    ...computedPrimitives,
                  },
                },
              },
              optionality: true,
            },
          },
        },
      },
    };

    expect(parse(edgeSchema as any)).toEqual(
      expect.objectContaining(expectedResult)
    );
  });
});
