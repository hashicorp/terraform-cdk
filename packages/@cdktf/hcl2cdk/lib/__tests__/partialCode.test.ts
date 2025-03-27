/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { fillWithConfigAccessors } from "../partialCode";
import { ProgramScope } from "../types";

const getScope = () =>
  ({
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
                block_types: {
                  c: {
                    nesting_mode: "single",
                    block: {
                      attributes: {
                        d: {
                          type: "string",
                          description_kind: "plain",
                          optional: true,
                          required: true,
                        },
                      },
                      block_types: {},
                    },
                  },
                  d: {
                    nesting_mode: "list",
                    block: {
                      attributes: {
                        e: {
                          type: "string",
                          description_kind: "plain",
                          optional: true,
                          required: true,
                        },
                      },
                      block_types: {},
                    },
                    min_items: 1,
                  },
                  timeouts: {
                    nesting_mode: "single",
                    block: {
                      attributes: {
                        read: {
                          type: "string",
                          description_kind: "plain",
                          optional: true,
                        },
                      },
                      block_types: {},
                      description_kind: "plain",
                    },
                  },
                },
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
    importables: [],

    // This should be mutated
    topLevelConfig: {},
  }) as ProgramScope;

describe("fillWithConfigAccessors", () => {
  it("adds a missing required attributes", () => {
    const scope = getScope();
    const result = fillWithConfigAccessors(
      scope,
      {
        a: "a",
        c: {
          d: "d",
        },
        timeouts: {
          read: "20m",
        },
        d: [{ e: "e" }],
      },
      "aws.image",
    );
    expect(scope.topLevelConfig.b).toEqual("aws.image.b");
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
        "c": {
          "d": "d",
        },
        "d": [
          {
            "e": "e",
          },
        ],
        "timeouts": {
          "read": "20m",
        },
      }
    `);
  });

  it("ignores missing unrequired set block types", () => {
    const scope = getScope();
    const result = fillWithConfigAccessors(
      scope,
      {
        a: "a",
        b: "b",
        c: {
          d: "d",
        },
        d: [{ e: "e" }],
      },
      "aws.image",
    );
    expect(scope.topLevelConfig).toEqual({});
    expect(result).toMatchInlineSnapshot(`
      {
        "a": "a",
        "b": "b",
        "c": {
          "d": "d",
        },
        "d": [
          {
            "e": "e",
          },
        ],
      }
    `);
  });

  it("fills within a single block type", () => {
    const scope = getScope();
    const result = fillWithConfigAccessors(
      scope,
      {
        a: "a",
        b: "b",
        c: {},
        d: [{ e: "e" }],
      },
      "aws.image",
    );
    expect(scope.topLevelConfig).toEqual({
      d: "aws.image.c.d",
    });
    expect(result).toMatchInlineSnapshot(`
      {
        "a": "a",
        "b": "b",
        "c": {
          "d": {
            "computed": false,
            "object": {
              "name": "config",
              "type": "Identifier",
            },
            "optional": null,
            "property": {
              "name": "d",
              "type": "Identifier",
            },
            "type": "MemberExpression",
          },
        },
        "d": [
          {
            "e": "e",
          },
        ],
      }
    `);
  });

  it("fills an entire single block type", () => {
    const scope = getScope();
    const result = fillWithConfigAccessors(
      scope,
      {
        a: "a",
        b: "b",
        d: [{ e: "e" }],
      },
      "aws.image",
    );
    expect(scope.topLevelConfig).toEqual({
      c: "aws.image.c",
    });
    expect(result).toMatchInlineSnapshot(`
      {
        "a": "a",
        "b": "b",
        "c": {
          "computed": false,
          "object": {
            "name": "config",
            "type": "Identifier",
          },
          "optional": null,
          "property": {
            "name": "c",
            "type": "Identifier",
          },
          "type": "MemberExpression",
        },
        "d": [
          {
            "e": "e",
          },
        ],
      }
    `);
  });

  it("fills within a list block type", () => {
    const scope = getScope();
    const result = fillWithConfigAccessors(
      scope,
      {
        a: "a",
        b: "b",
        c: { d: "d" },
        d: [{}],
      },
      "aws.image",
    );
    expect(scope.topLevelConfig).toEqual({
      e: "aws.image.d.[].e",
    });
    expect(result).toMatchInlineSnapshot(`
      {
        "a": "a",
        "b": "b",
        "c": {
          "d": "d",
        },
        "d": [
          {
            "e": {
              "computed": false,
              "object": {
                "name": "config",
                "type": "Identifier",
              },
              "optional": null,
              "property": {
                "name": "e",
                "type": "Identifier",
              },
              "type": "MemberExpression",
            },
          },
        ],
      }
    `);
  });

  it("fills an entire list block type", () => {
    const scope = getScope();
    const result = fillWithConfigAccessors(
      scope,
      {
        a: "a",
        b: "b",
        c: { d: "d" },
      },
      "aws.image",
    );
    expect(scope.topLevelConfig).toEqual({
      d: "aws.image.d",
    });
    expect(result).toMatchInlineSnapshot(`
      {
        "a": "a",
        "b": "b",
        "c": {
          "d": "d",
        },
        "d": {
          "computed": false,
          "object": {
            "name": "config",
            "type": "Identifier",
          },
          "optional": null,
          "property": {
            "name": "d",
            "type": "Identifier",
          },
          "type": "MemberExpression",
        },
      }
    `);
  });

  it("can handle multiple fills with the same name", () => {
    const scope = getScope();
    const result = fillWithConfigAccessors(
      scope,
      {
        a: "a",
        b: "b",
        c: {},
      },
      "aws.image",
    );
    expect(scope.topLevelConfig).toEqual({
      d: "aws.image.c.d",
      d1: "aws.image.d",
    });
    expect(result).toMatchInlineSnapshot(`
      {
        "a": "a",
        "b": "b",
        "c": {
          "d": {
            "computed": false,
            "object": {
              "name": "config",
              "type": "Identifier",
            },
            "optional": null,
            "property": {
              "name": "d",
              "type": "Identifier",
            },
            "type": "MemberExpression",
          },
        },
        "d": {
          "computed": false,
          "object": {
            "name": "config",
            "type": "Identifier",
          },
          "optional": null,
          "property": {
            "name": "d1",
            "type": "Identifier",
          },
          "type": "MemberExpression",
        },
      }
    `);
  });

  it("fills lists with min_items > 0", () => {
    const scope = getScope();
    const result = fillWithConfigAccessors(
      scope,
      {
        a: "a",
        b: "b",
        c: { d: "d" },
        d: [],
      },
      "aws.image",
    );
    expect(scope.topLevelConfig).toEqual({
      d: "aws.image.d",
    });
    expect(result).toMatchInlineSnapshot(`
      {
        "a": "a",
        "b": "b",
        "c": {
          "d": "d",
        },
        "d": {
          "computed": false,
          "object": {
            "name": "config",
            "type": "Identifier",
          },
          "optional": null,
          "property": {
            "name": "d",
            "type": "Identifier",
          },
          "type": "MemberExpression",
        },
      }
    `);
  });
});
