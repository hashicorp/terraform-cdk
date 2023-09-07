/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as t from "@babel/types";
import generate from "@babel/generator";
import { AttributeType } from "@cdktf/commons";
import { coerceType } from "../coerceType";
import { functionsMap } from "../function-bindings/functions";
import { ProgramScope } from "../types";

type BaseThing = {
  type: string;
  children: Thing[];
  meta?: object;
  range?: unknown; // optional as we don't care about it
};

type FunctionCall = BaseThing & {
  type: "function";
  meta: {
    name: string;
    expandedFinalArgument?: boolean; // optional as we don't care about it
    closeParenRange?: unknown; // optional as we don't care about it
    openParenRange?: unknown; // optional as we don't care about it
    nameRange?: unknown; // optional as we don't care about it
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
    value: string; // this is available in other "Things" too but we only need it here yet
  };
};

type ScopeTraversal = BaseThing & {
  type: "ScopeTraversal";
  meta: {
    traversal: {
      segment: string;
      range?: unknown; // optional as we don't care about it
    }[];
  };
};

const scope: ProgramScope = {
  providerSchema: {},
  providerGenerator: {},
  constructs: new Set(),
  variables: {},
  hasTokenBasedTypeCoercion: false,
  nodeIds: [],
  importables: [],
  topLevelConfig: {},
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
                value: "-",
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
      generate(terraformThingToTs(scope, dummy2, "dynamic")).code
    ).toMatchInlineSnapshot(
      `"Fn.replace(TodoReference-module-foo-output, "-", TodoReference-var-bar)"`
    );
  });

  it("should convert Terraform AST into TS AST for overriden function name", () => {
    expect(
      generate(
        terraformThingToTs(
          scope,
          {
            type: "function",
            meta: {
              name: "length",
            },
            children: [
              {
                type: "ScopeTraversal",
                meta: {
                  traversal: [
                    {
                      segment: "var",
                    },
                    {
                      segment: "list",
                    },
                  ],
                },
                children: [],
              },
            ],
          },
          "number"
        )
      ).code
    ).toMatchInlineSnapshot(`"Fn.lengthOf(TodoReference-var-list)"`);
  });

  it("should convert Terraform AST into TS AST for overriden function with variadic args for optional params", () => {
    expect(
      generate(
        terraformThingToTs(
          scope,
          {
            type: "function",
            meta: {
              name: "bcrypt",
            },
            children: [
              {
                type: "ScopeTraversal",
                meta: {
                  traversal: [
                    {
                      segment: "var",
                    },
                    {
                      segment: "str",
                    },
                  ],
                },
                children: [],
              },
              {
                type: "ScopeTraversal",
                meta: {
                  traversal: [
                    {
                      segment: "var",
                    },
                    {
                      segment: "cost",
                    },
                  ],
                },
                children: [],
              },
            ],
          },
          "string"
        )
      ).code
    ).toMatchInlineSnapshot(
      `"Fn.bcrypt(TodoReference-var-str, TodoReference-var-cost)"`
    );
  });

  it("should convert Terraform AST into TS AST for overriden function with variadic args for optional params that are not passed", () => {
    expect(
      generate(
        terraformThingToTs(
          scope,
          {
            type: "function",
            meta: {
              name: "bcrypt",
            },
            children: [
              {
                type: "ScopeTraversal",
                meta: {
                  traversal: [
                    {
                      segment: "var",
                    },
                    {
                      segment: "str",
                    },
                  ],
                },
                children: [],
              },
            ],
          },
          "string"
        )
      ).code
    ).toMatchInlineSnapshot(`"Fn.bcrypt(TodoReference-var-str)"`);
  });

  it("should convert Terraform AST into TS AST for function with variadic param", () => {
    expect(
      generate(
        terraformThingToTs(
          scope,
          {
            type: "function",
            meta: {
              name: "try",
            },
            children: [
              {
                type: "ScopeTraversal",
                meta: {
                  traversal: [
                    {
                      segment: "var",
                    },
                    {
                      segment: "strA",
                    },
                  ],
                },
                children: [],
              },
              {
                type: "ScopeTraversal",
                meta: {
                  traversal: [
                    {
                      segment: "var",
                    },
                    {
                      segment: "strB",
                    },
                  ],
                },
                children: [],
              },
            ],
          },
          "dynamic"
        )
      ).code
    ).toMatchInlineSnapshot(
      `"Fn.try([TodoReference-var-strA, TodoReference-var-strB])"`
    );
  });

  it("should convert Terraform AST into TS AST for join function with single list param", () => {
    expect(
      generate(
        terraformThingToTs(
          scope,
          {
            type: "function",
            meta: {
              name: "join",
            },
            children: [
              {
                type: "ScopeTraversal",
                meta: {
                  traversal: [
                    {
                      segment: "var",
                    },
                    {
                      segment: "str",
                    },
                  ],
                },
                children: [],
              },
              {
                type: "ScopeTraversal",
                meta: {
                  traversal: [
                    {
                      segment: "var",
                    },
                    {
                      segment: "list",
                    },
                  ],
                },
                children: [],
              },
            ],
          },
          "string"
        )
      ).code
    ).toMatchInlineSnapshot(
      `"Fn.join(TodoReference-var-str, TodoReference-var-list)"`
    );
  });

  it("should convert Terraform AST into TS AST for join function with multiple list params", () => {
    expect(
      generate(
        terraformThingToTs(
          scope,
          {
            type: "function",
            meta: {
              name: "join",
            },
            children: [
              {
                type: "ScopeTraversal",
                meta: {
                  traversal: [
                    {
                      segment: "var",
                    },
                    {
                      segment: "str",
                    },
                  ],
                },
                children: [],
              },
              {
                type: "ScopeTraversal",
                meta: {
                  traversal: [
                    {
                      segment: "var",
                    },
                    {
                      segment: "listA",
                    },
                  ],
                },
                children: [],
              },
              {
                type: "ScopeTraversal",
                meta: {
                  traversal: [
                    {
                      segment: "var",
                    },
                    {
                      segment: "listB",
                    },
                  ],
                },
                children: [],
              },
            ],
          },
          "string"
        )
      ).code
    ).toMatchInlineSnapshot(
      `"Fn.join(TodoReference-var-str, Token.asList(Fn.concat([TodoReference-var-listA, TodoReference-var-listB])))"`
    );
  });

  it("should throw if not enough parameters were passed", () => {
    expect(
      () =>
        generate(
          terraformThingToTs(
            scope,
            {
              type: "function",
              meta: {
                name: "bcrypt",
              },
              children: [],
            },
            "string"
          )
        ).code
    ).toThrowErrorMatchingInlineSnapshot(
      `"Terraform function call to "bcrypt" is not valid! Parameter at index 0 of type string is not optional but received no value. The following parameters were passed: []"`
    );
  });

  // TODO: tests for type coercion
});

function terraformThingToTs(
  scope: ProgramScope,
  tfAst: Thing,
  targetType: AttributeType | undefined
): t.Expression {
  switch (tfAst.type) {
    case "function": {
      return terraformFunctionCallToTs(scope, tfAst, targetType);
    }
    case "TemplateWrap": {
      // If there's just one child, we can skip them
      if (tfAst.children.length === 1) {
        return terraformThingToTs(scope, tfAst.children[0], targetType);
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
      return terraformTemplateToTs(scope, tfAst, targetType);
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
  scope: ProgramScope,
  tfAst: Template,
  targetType: AttributeType | undefined
): t.Expression {
  if (tfAst.children.length === 1) {
    return terraformThingToTs(scope, tfAst.children[0], targetType);
  }
  throw new Error("Template currently only supports exactly one child");
}

function terraformLiteralValueToTs(
  tfAst: LiteralValue,
  targetType: AttributeType | undefined
): t.Expression {
  const literalExpression = t.stringLiteral(tfAst.meta.value);
  return coerceType(
    // TODO: scope should be passed instead, even if coerceType won't need it probably
    {
      constructs: new Set(),
      hasTokenBasedTypeCoercion: false,
      providerGenerator: {},
      providerSchema: {},
      variables: {},
      nodeIds: [],
      importables: [],
      topLevelConfig: {},
    },
    literalExpression,
    tfAst.meta.type,
    targetType
  );
}

function terraformFunctionCallToTs(
  scope: ProgramScope,
  tfAst: FunctionCall,
  targetType: AttributeType | undefined
): t.Expression {
  const { name } = tfAst.meta;

  const mapping = functionsMap[name];
  if (!mapping) {
    throw new Error(`Mapping not found for function: ${name}`);
  }

  if (mapping.transformer) {
    const newTfAst = mapping.transformer(tfAst);
    if (newTfAst !== tfAst)
      return terraformFunctionCallToTs(scope, newTfAst, targetType);
  }

  scope.importables.push({
    constructName: "Fn",
    provider: "cdktf",
  });

  const callee = t.memberExpression(
    t.identifier("Fn"),
    t.identifier(mapping.name)
  );

  const args: t.Expression[] = [];
  mapping.parameters.forEach((param, idx) => {
    if (param.variadic) {
      // return an array with all remaining children (each mapped accordingly)
      args.push(
        t.arrayExpression(
          tfAst.children
            .slice(idx)
            .map((child) => terraformThingToTs(scope, child, param.type))
        )
      );
    } else {
      const child = tfAst.children[idx];
      if (child) {
        args.push(terraformThingToTs(scope, child, param.type));
      } else if (!param.optional) {
        throw new Error(
          `Terraform function call to "${name}" is not valid! Parameter at index ${idx} of type ${
            param.type
          } is not optional but received no value. The following parameters were passed: ${JSON.stringify(
            tfAst.children
          )}`
        );
      }
    }
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
      nodeIds: [],
      importables: [],
      topLevelConfig: {},
    },
    callExpression,
    returnType,
    targetType
  );
}
