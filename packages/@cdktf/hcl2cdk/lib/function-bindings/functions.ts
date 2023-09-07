/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { AttributeType } from "@cdktf/commons";
import { functionsMapGenerated } from "./functions.generated";
import { TFExpressionSyntaxTree as tex } from "@cdktf/hcl2json";

type FunctionCall = any; // TODO: this will come from the types for hcl2json (aka from the Terraform AST)

type FunctionMeta = {
  name: string;
  returnType: AttributeType;
  parameters: {
    type: AttributeType;
    optional?: boolean;
    variadic?: boolean;
  }[];
  /**
   * Allows transforming the function call before it is handled. This is currently used to handle
   * different APIs between TF supporting join(sep, listA, listB) and CDKTF only supporting join(sep, list)
   * (as the alternative due to JSIIs lack of support for variadic parametes would be join(sep, lists) which
   *  would have a worse UX as most often just a single list is passed)
   * In the case of join() the transformer will convert the function call to join(sep, concat(listA, listB))
   * before handling it
   *
   * Caution: Beware of infinite recursion if the returned function call is to the same function that has this
   * transformer. Return the same instance of the passed functionCall to break out of that recursion.
   */
  transformer?: (functionCall: FunctionCall) => FunctionCall;
};

export const functionsMap: Record<string, FunctionMeta> = {
  ...(functionsMapGenerated as any),

  bcrypt: {
    name: "bcrypt", // this one is not variadic anymore after we mapped it
    returnType: "string",
    parameters: [{ type: "string" }, { type: "number", optional: true }],
  },
  join: {
    name: "join",
    returnType: "string",
    parameters: [{ type: "string" }, { type: ["list", "string"] }],
    /**
     * Terraform supports join(separator, listA, listB)
     * wheras CDKTF only supports join(separator, list) (to make it simpler to use as JSII does not support variadic parameters)
     * and we'd need to convert this to join(separator, concat(listA, listB)) if multiple variadic args are passed
     */
    transformer: (fc: tex.FunctionCallExpression) => {
      if (fc.children.length <= 2) {
        return fc; // just one child -> nothing to do
      }

      const concatFunction = {
        type: "function",
        meta: {
          name: "concat",
          expandedFinalArgument: fc.meta.expandedFinalArgument,
          nameRange: {},
          openParenRange: {},
          closeParenRange: {},
          argsRanges: [],
        },
        children: fc.children.slice(1),
      };

      return {
        type: "function",
        meta: {
          name: "join",
        },
        children: [
          fc.children[0], // the first parameter is the separator, so keep it as is
          concatFunction,
        ],
      };
    },
  },
  range: {
    name: "range",
    returnType: ["list", "string"], // TODO: Fn.range() currently returns string[] but should return number[] (according to functions.json)
    parameters: [
      { type: "number" },
      { type: "number" },
      { type: "number", optional: true },
    ],
  },
  lookup: {
    name: "lookup",
    returnType: "dynamic",
    parameters: [{ type: "dynamic" }, { type: "string" }, { type: "dynamic" }],
  },
};

export const tsFunctionsMap = Object.entries(functionsMap).reduce(
  (acc, [name, fnInfo]) => {
    // Swap the names around
    acc[fnInfo.name] = { ...fnInfo, name: name };
    return acc;
  },
  {} as Record<string, FunctionMeta>
);
