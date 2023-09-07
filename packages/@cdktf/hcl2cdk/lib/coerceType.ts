// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import template from "@babel/template";
import * as t from "@babel/types";
import { logger, AttributeType } from "@cdktf/commons";
import { ProgramScope } from "./types";
import deepEqual from "deep-equal";
import { tsFunctionsMap } from "./function-bindings/functions";
import { getTypeAtPath } from "./terraformSchema";
import { toSnakeCase } from "codemaker";

function changeValueAccessor(
  ast: t.MemberExpression,
  newAccessor: string
): t.MemberExpression {
  const propertyIdentifier: t.Identifier = {
    ...(ast.property as t.Identifier),
    name: newAccessor,
  };
  return {
    ...ast,
    property: propertyIdentifier,
  };
}

export function typeForCallExpression(ast: t.CallExpression): AttributeType {
  // Find all cdktf.Fn.* calls
  if (
    t.isMemberExpression(ast.callee) &&
    t.isMemberExpression(ast.callee.object) &&
    t.isIdentifier(ast.callee.object.object) &&
    ast.callee.object.object.name === "cdktf" &&
    t.isIdentifier(ast.callee.object.property) &&
    ast.callee.object.property.name === "Fn" &&
    t.isIdentifier(ast.callee.property)
  ) {
    const meta = tsFunctionsMap[ast.callee.property.name];
    if (meta) {
      return meta.returnType;
    } else {
      return "dynamic";
    }
  }

  // cdktf.conditional, cdktf.propertyAccess, cdktf.Op.* are all dynamic
  // By default we assume dynamic
  return "dynamic";
}

export const coerceType = (
  scope: ProgramScope,
  ast: t.Expression,
  from: AttributeType,
  to: AttributeType | undefined
): t.Expression => {
  if (to === undefined) {
    return ast;
  }

  if (deepEqual(to, from)) {
    return ast;
  }

  const isTerraformVariableOrLocal =
    ast.type === "MemberExpression" &&
    ast.property.type === "Identifier" &&
    ast.property.name === "value" &&
    ast.object.type === "Identifier" &&
    Object.values(scope.variables).some(
      (knownVars) =>
        knownVars.variableName === (ast.object as t.Identifier).name &&
        ["var", "local"].includes(knownVars.resource)
    );

  const addTokenToImports = () =>
    scope.importables.push({
      constructName: "Token",
      provider: "cdktf",
    });

  if (Array.isArray(to)) {
    if (to[0] === "list" || to[0] === "set") {
      switch (to[1]) {
        case "string":
          if (isTerraformVariableOrLocal) {
            return changeValueAccessor(ast as t.MemberExpression, "listValue");
          }

          addTokenToImports();
          return template.expression(`Token.asList(%%ast%%)`)({
            ast: ast,
          });
        case "number":
          addTokenToImports();
          return template.expression(`Token.asNumberList(%%ast%%)`)({
            ast: ast,
          });
        case "bool":
          addTokenToImports();
          return template.expression(`Token.asAny(%%ast%%)`)({
            ast: ast,
          });
        default:
          addTokenToImports();
          return template.expression(`Token.asAny(%%ast%%)`)({
            ast: ast,
          });
      }
    }

    if (to[0] === "map") {
      switch (to[1]) {
        case "string":
          addTokenToImports();
          return template.expression(`Token.asStringMap(%%ast%%)`)({
            ast: ast,
          });
        case "number":
          addTokenToImports();
          return template.expression(`Token.asNumberMap(%%ast%%)`)({
            ast: ast,
          });
        case "bool":
          addTokenToImports();
          return template.expression(`Token.asBooleanMap(%%ast%%)`)({
            ast: ast,
          });
        default:
          addTokenToImports();
          return template.expression(`Token.asAnyMap(%%ast%%)`)({
            ast: ast,
          });
      }
    }
  }

  switch (to) {
    case "number":
      if (isTerraformVariableOrLocal) {
        return changeValueAccessor(ast as t.MemberExpression, "numberValue");
      }
      addTokenToImports();
      return template.expression(`Token.asNumber(%%ast%%)`)({
        ast: ast,
      });
    case "string":
      if (isTerraformVariableOrLocal) {
        return changeValueAccessor(ast as t.MemberExpression, "stringValue");
      }
      addTokenToImports();
      return template.expression(`Token.asString(%%ast%%)`)({
        ast: ast,
      });
    case "bool":
      if (isTerraformVariableOrLocal) {
        return changeValueAccessor(ast as t.MemberExpression, "booleanValue");
      }
      addTokenToImports();
      return template.expression(`Token.asBoolean(%%ast%%)`)({
        ast: ast,
      });
  }

  logger.debug(`Could not coerce from ${from} to ${to} for ${ast}`);
  return ast;
};

export function findExpressionType(
  scope: ProgramScope,
  ast: t.Expression
): AttributeType {
  const isReferenceWithoutTemplateString =
    ast.type === "MemberExpression" && ast.object.type === "Identifier";

  // If we have a property to cdktf.propertyAccess call it's dynamic
  if (ast.type === "CallExpression") {
    return typeForCallExpression(ast);
  }

  if (ast.type === "StringLiteral") {
    return "string";
  }
  if (ast.type === "NumericLiteral") {
    return "number";
  }
  if (ast.type === "BooleanLiteral") {
    return "bool";
  }

  // If we only have one reference this is a
  if (isReferenceWithoutTemplateString) {
    const destructuredAst = destructureAst(ast);
    if (!destructuredAst) {
      logger.debug(
        `Could not destructure ast: ${JSON.stringify(ast, null, 2)}`
      );
      return "dynamic";
    }

    const [astVariableName, ...attributes] = destructuredAst;
    const variable = Object.values(scope.variables).find(
      (x) => x.variableName === astVariableName
    );

    if (!variable) {
      logger.debug(
        `Could not find variable ${astVariableName} given scope: ${JSON.stringify(
          scope.variables,
          null,
          2
        )}`
      );
      // We don't know, this should not happen, but if it does we assume the worst case and make it dynamic
      return "dynamic";
    }

    if (variable.resource === "var") {
      return "dynamic";
    }

    const { resource: resourceType } = variable;
    const [provider, ...resourceNameFragments] = resourceType.split("_");
    const tfResourcePath = `${provider}.${resourceNameFragments.join(
      "_"
    )}.${attributes.map((x) => toSnakeCase(x)).join(".")}`;
    const type = getTypeAtPath(scope.providerSchema, tfResourcePath);

    // If this is an attribute type we can return it
    if (typeof type === "string" || Array.isArray(type)) {
      return type;
    }

    // Either nothing is found or it's a block type
    return "dynamic";
  }

  return "string";
}

/*
 * Transforms a babel AST into a list of string accessors
 * e.g. foo.bar.baz -> ["foo", "bar", "baz"]
 */
function destructureAst(ast: t.Expression): string[] | undefined {
  switch (ast.type) {
    case "Identifier":
      return [ast.name];
    case "MemberExpression":
      const object = destructureAst(ast.object);
      const property = destructureAst(ast.property as t.Expression);
      if (object && property) {
        return [...object, ...property];
      } else {
        return undefined;
      }
    default:
      return undefined;
  }
}
