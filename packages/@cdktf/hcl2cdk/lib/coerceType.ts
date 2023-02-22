// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import template from "@babel/template";
import * as t from "@babel/types";
import { logger } from "@cdktf/commons";
import { AttributeType } from "@cdktf/provider-generator";
import { Scope } from "./types";

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

// TODO: cdktf import becomes necessary once a type coerced
export const coerceType = (
  scope: Scope,
  ast: t.Expression,
  from: AttributeType,
  to: AttributeType | undefined
): t.Expression => {
  if (to === undefined) {
    return ast;
  }
  // TODO: add deep equality check
  if (to === from) {
    return ast;
  }

  const isTerraformVariableOrLocal =
    ast.type === "MemberExpression" &&
    ast.property.type === "Identifier" &&
    ast.property.name === "value" &&
    ast.object.type === "Identifier" &&
    Object.values(scope.variables).some(
      (knownVars) =>
        knownVars.variableName === (ast.object as t.Identifier).name
    );

  if (Array.isArray(to)) {
    if (to[0] === "list" || to[0] === "set") {
      switch (to[1]) {
        case "string":
          if (isTerraformVariableOrLocal) {
            return changeValueAccessor(ast as t.MemberExpression, "listValue");
          }

          scope.hasTokenBasedTypeCoercion = true;
          return template.expression(`cdktf.Token.asList(%%ast%%)`)({
            ast: ast,
          });
        case "number":
          scope.hasTokenBasedTypeCoercion = true;
          return template.expression(`cdktf.Token.asNumberList(%%ast%%)`)({
            ast: ast,
          });
        case "bool":
          scope.hasTokenBasedTypeCoercion = true;
          return template.expression(`cdktf.Token.asAny(%%ast%%)`)({
            ast: ast,
          });
      }
    }

    if (to[0] === "map") {
      switch (to[1]) {
        case "string":
          scope.hasTokenBasedTypeCoercion = true;
          return template.expression(`cdktf.Token.asStringMap(%%ast%%)`)({
            ast: ast,
          });
        case "number":
          scope.hasTokenBasedTypeCoercion = true;
          return template.expression(`cdktf.Token.asNumberMap(%%ast%%)`)({
            ast: ast,
          });
        case "bool":
          scope.hasTokenBasedTypeCoercion = true;
          return template.expression(`cdktf.Token.asBooleanMap(%%ast%%)`)({
            ast: ast,
          });
        default:
          scope.hasTokenBasedTypeCoercion = true;
          return template.expression(`cdktf.Token.asAnyMap(%%ast%%)`)({
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
      scope.hasTokenBasedTypeCoercion = true;
      return template.expression(`cdktf.Token.asNumber(%%ast%%)`)({
        ast: ast,
      });
    case "string":
      if (isTerraformVariableOrLocal) {
        return changeValueAccessor(ast as t.MemberExpression, "stringValue");
      }
      scope.hasTokenBasedTypeCoercion = true;
      return template.expression(`cdktf.Token.asString(%%ast%%)`)({
        ast: ast,
      });
    case "bool":
      if (isTerraformVariableOrLocal) {
        return changeValueAccessor(ast as t.MemberExpression, "booleanValue");
      }
      scope.hasTokenBasedTypeCoercion = true;
      return template.expression(`cdktf.Token.asBoolean(%%ast%%)`)({
        ast: ast,
      });
  }

  logger.debug(`Could not coerce from ${from} to ${to} for ${ast}`);
  return ast;
};
