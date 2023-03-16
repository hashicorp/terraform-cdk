/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as t from "@babel/types";
import generate from "@babel/generator";
import { AttributeType } from "@cdktf/provider-generator";
import { coerceType } from "../coerceType";

type BaseThing = {
  type: string;
  children: Thing[];
  meta?: object;
  range: unknown;
};

type FunctionCall = BaseThing & {
  type: "function";
  meta: {
    name: "replace";
    expandedFinalArgument: boolean;
    closeParenRange: unknown;
    openParenRange: unknown;
    nameRange: unknown;
  };
};

type TemplateWrap = BaseThing & {
  type: "TemplateWrap";
};

type Template = BaseThing & {
  type: "Template";
};

type LiteralValue = BaseThing & {
  type: "LiteralValue";
  meta: {
    type: "string";
  };
};

type ScopeTraversal = BaseThing & {
  type: "ScopeTraversal";
  meta: { traversal: { segment: string; range: unknown }[] };
};

type Thing =
  | FunctionCall
  | TemplateWrap
  | Template
  | ScopeTraversal
  | LiteralValue;

// '${replace(module.foo.output, "-", var.bar)}'
// from https://github.com/hashicorp/terraform-cdk/pull/2729
const dummy2: Thing = {
  children: [
    {
      children: [
        {
          children: [],
          meta: {
            traversal: [
              {
                range: {
                  End: {
                    Byte: 16,
                    Column: 16,
                    Line: 0,
                  },
                  Filename: "",
                  Start: {
                    Byte: 10,
                    Column: 10,
                    Line: 0,
                  },
                },
                segment: "module",
              },
              {
                range: {
                  End: {
                    Byte: 20,
                    Column: 20,
                    Line: 0,
                  },
                  Filename: "",
                  Start: {
                    Byte: 16,
                    Column: 16,
                    Line: 0,
                  },
                },
                segment: "foo",
              },
              {
                range: {
                  End: {
                    Byte: 27,
                    Column: 27,
                    Line: 0,
                  },
                  Filename: "",
                  Start: {
                    Byte: 20,
                    Column: 20,
                    Line: 0,
                  },
                },
                segment: "output",
              },
            ],
          },
          range: {
            end: {
              byte: 27,
              column: 27,
              line: 0,
            },
            start: {
              byte: 10,
              column: 10,
              line: 0,
            },
          },
          type: "ScopeTraversal",
        },
        {
          children: [
            {
              children: [],
              meta: {
                type: "string",
              },
              range: {
                end: {
                  byte: 31,
                  column: 31,
                  line: 0,
                },
                start: {
                  byte: 30,
                  column: 30,
                  line: 0,
                },
              },
              type: "LiteralValue",
            },
          ],
          range: {
            end: {
              byte: 31,
              column: 31,
              line: 0,
            },
            start: {
              byte: 30,
              column: 30,
              line: 0,
            },
          },
          type: "Template",
        },
        {
          children: [],
          meta: {
            traversal: [
              {
                range: {
                  End: {
                    Byte: 37,
                    Column: 37,
                    Line: 0,
                  },
                  Filename: "",
                  Start: {
                    Byte: 34,
                    Column: 34,
                    Line: 0,
                  },
                },
                segment: "var",
              },
              {
                range: {
                  End: {
                    Byte: 41,
                    Column: 41,
                    Line: 0,
                  },
                  Filename: "",
                  Start: {
                    Byte: 37,
                    Column: 37,
                    Line: 0,
                  },
                },
                segment: "bar",
              },
            ],
          },
          range: {
            end: {
              byte: 41,
              column: 41,
              line: 0,
            },
            start: {
              byte: 34,
              column: 34,
              line: 0,
            },
          },
          type: "ScopeTraversal",
        },
      ],
      meta: {
        closeParenRange: {
          end: {
            byte: 42,
            column: 42,
            line: 0,
          },
          start: {
            byte: 41,
            column: 41,
            line: 0,
          },
        },
        expandedFinalArgument: false,
        name: "replace",
        nameRange: {
          end: {
            byte: 9,
            column: 9,
            line: 0,
          },
          start: {
            byte: 2,
            column: 2,
            line: 0,
          },
        },
        openParenRange: {
          end: {
            byte: 10,
            column: 10,
            line: 0,
          },
          start: {
            byte: 9,
            column: 9,
            line: 0,
          },
        },
      },
      range: {
        end: {
          byte: 10,
          column: 10,
          line: 0,
        },
        start: {
          byte: 2,
          column: 2,
          line: 0,
        },
      },
      type: "function",
    },
  ],
  range: {
    end: {
      byte: 43,
      column: 43,
      line: 0,
    },
    start: {
      byte: 0,
      column: 0,
      line: 0,
    },
  },
  type: "TemplateWrap",
};

describe("bindings for Terraform functions", () => {
  it("should convert Terraform AST into TS AST", () => {
    expect(
      generate(terraformThingToTs(dummy2, "dynamic")).code
    ).toMatchInlineSnapshot(
      `"cdktf.Fn.replace(TodoReference-module-foo-output, \\"-\\", TodoReference-var-bar)"`
    );
  });
});

function terraformThingToTs(
  tfAst: Thing,
  targetType: AttributeType | undefined
): t.Expression {
  switch (tfAst.type) {
    case "function": {
      return terraformFunctionCallToTs(tfAst, targetType);
    }
    case "TemplateWrap": {
      // If there's just one child, we can skip them
      if (tfAst.children.length === 1) {
        return terraformThingToTs(tfAst.children[0], targetType);
      }
      throw new Error(
        "TemplateWrap with not exactly one child is not supported yet: " +
          tfAst.children
      );
    }
    case "ScopeTraversal": {
      return terraformScopeTraversalToTs(tfAst, targetType);
    }
    case "Template": {
      return terraformTemplateToTs(tfAst, targetType);
    }
    case "LiteralValue": {
      return terraformLiteralValueToTs(tfAst, targetType);
    }
    default:
      throw new Error("Unsupported type: " + (tfAst as any).type);
  }
}

function terraformScopeTraversalToTs(
  tfAst: ScopeTraversal,
  _targetType: AttributeType | undefined
): t.Expression {
  return t.identifier(
    "TodoReference-" + tfAst.meta.traversal.map((t) => t.segment).join("-")
  );
}

function terraformTemplateToTs(
  tfAst: Template,
  targetType: AttributeType | undefined
): t.Expression {
  if (tfAst.children.length === 1) {
    return terraformThingToTs(tfAst.children[0], targetType);
  }
  throw new Error("Template currently only supports exactly one child");
}

function terraformLiteralValueToTs(
  tfAst: LiteralValue,
  targetType: AttributeType | undefined
): t.Expression {
  const literalExpression = t.stringLiteral("-"); // FIXME: this is not yet part of the schema
  return coerceType(
    // TODO: scope should be passed instead, even if coerceType won't need it probably
    {
      constructs: new Set(),
      hasTokenBasedTypeCoercion: false,
      providerGenerator: {},
      providerSchema: {},
      variables: {},
    },
    literalExpression,
    tfAst.meta.type,
    targetType
  );
}

function terraformFunctionCallToTs(
  tfAst: FunctionCall,
  targetType: AttributeType | undefined
): t.Expression {
  const { name } = tfAst.meta;

  const mapping = functionsMap[name];

  const callee = t.memberExpression(
    t.memberExpression(t.identifier("cdktf"), t.identifier("Fn")),
    t.identifier(mapping.name)
  );

  const args = tfAst.children.map((child, idx) => {
    const childTargetType = mapping.parameters[idx].type;
    return terraformThingToTs(child, childTargetType);
  });

  const returnType = mapping.returnType;

  const callExpression = t.callExpression(callee, args);

  return coerceType(
    // TODO: scope should be passed instead, even if coerceType won't need it probably
    {
      constructs: new Set(),
      hasTokenBasedTypeCoercion: false,
      providerGenerator: {},
      providerSchema: {},
      variables: {},
    },
    callExpression,
    returnType,
    targetType
  );
}

// TODO: this is going to be generated by the functions generation tooling? OR: this could be read (and parsed) from terraform-functions.ts?
// -> But that would be hard as some functions are renamed and we'd need to figure out which (requires a manual mapping already)
const functionsMap = {
  replace: {
    name: "replace", // might differ e.g. for length -> lengthOf
    returnType: "string" as AttributeType,
    parameters: [
      {
        type: "string" as AttributeType,
      },
      {
        type: "string" as AttributeType,
      },
      {
        type: "string" as AttributeType,
      },
    ],
    // TODO: there are functions that are mapped a bit differently and we need to support them too (variadic args are used in a different sense)
    // maybe it is best to model them as an explicit conversion that is required?
  },
};

/*
"replace": {
  "return_type": "string",
    "parameters": [
      { "name": "str", "type": "string" },
      { "name": "substr", "type": "string" },
      { "name": "replace", "type": "string" }
    ]
  },
*/
