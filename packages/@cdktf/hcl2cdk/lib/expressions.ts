// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as t from "@babel/types";
import reservedWords from "reserved-words";
import { camelCase, logger, pascalCase } from "./utils";
import { TerraformResourceBlock, ProgramScope, ResourceScope } from "./types";
import { getReferencesInExpression, getExpressionAst } from "@cdktf/hcl2json";
import { getFullProviderName } from "./provider";
import { TFExpressionSyntaxTree as tex } from "@cdktf/hcl2json";
import { functionsMap, tsFunctionsMap } from "./function-bindings/functions";
import { coerceType } from "./coerceType";
import {
  AttributeType,
  sanitizeClassOrNamespaceName,
} from "@cdktf/provider-generator";
import { getTypeAtPath } from "./terraformSchema";
import { toSnakeCase } from "codemaker";

export type Reference = {
  start: number;
  end: number;
  referencee: { id: string; full: string }; // identifier for resource
  useFqn?: boolean;
  isVariable?: boolean;
};

const leaveCommentText = `Please leave a comment at https://cdk.tf/bugs/convert-expressions if you run into this issue.`;

function wrapTerraformExpression(input: string): string {
  if (!isNaN(parseInt(input, 10))) {
    return input;
  }
  if (
    input.startsWith("[") ||
    input.startsWith("{") ||
    input.startsWith(`"`) ||
    input.startsWith("'")
  ) {
    return input;
  }

  if (input.startsWith("<<")) {
    // For Heredocs, we need to ensure that the string ends with an empty newline as
    // the HCL parser doesn't find the ending token otherwise
    if (!input.endsWith("\n")) {
      return input + "\n";
    }

    return input;
  }

  return `"${input}"`;
}

const tfBinaryOperatorsToCdktf = {
  logicalOr: "or",
  logicalAnd: "and",
  greaterThan: "gt",
  greaterThanOrEqual: "gte",
  lessThan: "lt",
  lessThanOrEqual: "lte",
  equal: "eq",
  notEqual: "neq",
  add: "add",
  subtract: "sub",
  multiply: "mul",
  divide: "div",
  modulo: "mod",
};

const tfUnaryOperatorsToCdktf = {
  logicalNot: "not",
  negative: "negate",
};

type supportedBinaryOperators = keyof typeof tfBinaryOperatorsToCdktf;
type supportedUnaryOperators = keyof typeof tfUnaryOperatorsToCdktf;

function traversalPartsToString(
  traversals: tex.TerraformTraversalPart[],
  asSuffix = false
) {
  let seed = "";
  if (asSuffix && tex.isNameTraversalPart(traversals[0])) {
    seed = ".";
  }
  return traversals.reduce((acc, part) => {
    if (part.type === "nameTraversal") {
      if (acc === seed) {
        return `${acc}${part.segment}`;
      }
      return `${acc}.${part.segment}`;
    }
    return `${acc}[${part.segment}]`;
  }, seed);
}

function canUseFqn(expression: tex.ExpressionType) {
  if (!tex.isScopeTraversalExpression(expression)) {
    return false;
  }

  const rootSegment = expression.meta.traversal[0].segment;

  return !["var", "local"].includes(rootSegment);
}

function containsReference(expression: tex.ExpressionType) {
  if (!tex.isScopeTraversalExpression(expression)) {
    return false;
  }

  const segments = expression.meta.traversal;
  const rootSegment = segments[0].segment;
  const fullAccessor = expression.meta.fullAccessor;

  if (
    rootSegment === "count" || // count variable
    rootSegment === "each" || // each variable
    // https://www.terraform.io/docs/language/expressions/references.html#filesystem-and-workspace-info
    fullAccessor.startsWith("path.module") ||
    fullAccessor.startsWith("path.root") ||
    fullAccessor.startsWith("path.cwd") ||
    fullAccessor.startsWith("terraform.workspace") ||
    fullAccessor.startsWith("self.") // block local value
  ) {
    logger.debug(`skipping ${fullAccessor}`);
    return false;
  }

  return true;
}

function traversalToVariableName(
  scope: ProgramScope,
  node: tex.ExpressionType
) {
  if (!tex.isScopeTraversalExpression(node)) {
    logger.error(
      `Unexpected expression type ${node.type} with value ${node.meta.value} passed to convert to a variable. 
        Please leave a comment at https://cdk.tf/bugs/convert-expressions if you run into this issue`
    );
    return "";
  }

  const segments = node.meta.traversal;
  const rootSegment = segments[0].segment;
  const resource =
    rootSegment === "data"
      ? `${segments[0].segment}.${segments[1].segment}`
      : rootSegment;
  const name =
    rootSegment === "data" ? segments[2].segment : segments[1].segment;

  return variableName(scope, resource, name);
}

function expressionForSerialStringConcatenation(nodes: t.Expression[]) {
  const reducedNodes = nodes.reduce((acc, node) => {
    const prev = acc[acc.length - 1];
    if (!prev) return [node];

    if (t.isStringLiteral(prev) && t.isStringLiteral(node)) {
      acc.pop();
      acc.push(t.stringLiteral(prev.value + node.value));
      return acc;
    }

    acc.push(node);
    return acc;
  }, [] as t.Expression[]);

  return reducedNodes.reduce(
    (acc: t.Expression | undefined, node: t.Expression) => {
      if (!acc) {
        return node;
      }

      return t.binaryExpression("+", acc as t.Expression, node);
    }
  );
}

function convertTFExpressionAstToTs(
  node: tex.ExpressionType,
  scope: ResourceScope
): t.Expression {
  if (tex.isLiteralValueExpression(node)) {
    const literalType = node.meta.type;
    if (literalType === "number") {
      return t.numericLiteral(Number(node.meta.value));
    }
    if (literalType === "bool") {
      return t.booleanLiteral(Boolean(node.meta.value));
    }

    return t.stringLiteral(node.meta.value);
  }

  if (tex.isScopeTraversalExpression(node)) {
    const hasReference = containsReference(node);

    const segments = node.meta.traversal;

    if (segments[0].segment === "each" && scope.forEachIteratorName) {
      return dynamicVariableToAst(node, scope.forEachIteratorName);
    }

    if (segments[0].segment === "self") {
      return t.callExpression(
        t.memberExpression(
          t.memberExpression(
            t.identifier("cdktf"),
            t.identifier("TerraformSelf")
          ),
          t.identifier("getAny")
        ),

        [t.stringLiteral(traversalPartsToString(segments.slice(1)))]
      );
    }

    // setting.value, setting.value[1].id
    const dynamicBlock = scope.scopedVariables?.[segments[0].segment];
    if (dynamicBlock) {
      if (dynamicBlock === "dynamic-block") {
        return dynamicVariableToAst(
          node,
          dynamicBlock,
          traversalPartsToString(segments)
        );
      }
      return dynamicVariableToAst(node, dynamicBlock, segments[0].segment);
    }

    // This may be a variable reference that we don't understand yet, so we wrap it in a template string
    // for Terraform to handle
    let varIdentifier: t.Expression = t.stringLiteral(
      `\${${node.meta.fullAccessor}}`
    );

    if (hasReference) {
      varIdentifier = t.identifier(
        camelCase(traversalToVariableName(scope, node))
      );
    }

    if (["var", "local"].includes(segments[0].segment)) {
      const variableAccessor =
        segments[0].segment === "var"
          ? t.memberExpression(varIdentifier, t.identifier("value"))
          : varIdentifier;

      if (segments.length > 2) {
        return expressionForSerialStringConcatenation([
          t.stringLiteral("${"),
          variableAccessor,
          t.stringLiteral(
            "}" + traversalPartsToString(segments.slice(2), true)
          ),
        ]);
      }

      return variableAccessor;
    }

    if (!hasReference || scope.withinOverrideExpression) {
      return varIdentifier;
    }

    const rootSegment = segments[0].segment;
    const subSegments =
      rootSegment === "data" ? segments.slice(3) : segments.slice(2);
    const indexOfNumericAccessor = subSegments.findIndex((seg) =>
      tex.isIndexTraversalPart(seg)
    );

    const refSegments =
      indexOfNumericAccessor > -1
        ? subSegments.slice(0, indexOfNumericAccessor)
        : subSegments;

    const nonRefSegments =
      indexOfNumericAccessor > -1
        ? subSegments.slice(indexOfNumericAccessor)
        : [];

    const ref = refSegments.reduce(
      (acc: t.Expression, seg, index) =>
        t.memberExpression(
          acc,
          t.identifier(
            index === 0 && rootSegment === "module"
              ? camelCase(seg.segment + "Output")
              : camelCase(seg.segment)
          )
        ),
      varIdentifier
    );

    if (nonRefSegments.length === 0) {
      return ref;
    }

    return expressionForSerialStringConcatenation([
      t.stringLiteral("${"),
      ref,
      t.stringLiteral("}" + traversalPartsToString(nonRefSegments, true)),
    ]);
  }

  if (tex.isUnaryOpExpression(node)) {
    const operand = convertTFExpressionAstToTs(
      tex.getChildWithValue(node, node.meta.valueExpression)!,
      scope
    );

    let fnName = node.meta.operator;
    if (tfUnaryOperatorsToCdktf[fnName as supportedUnaryOperators]) {
      fnName = tfUnaryOperatorsToCdktf[fnName as supportedUnaryOperators];
    } else {
      throw new Error(`Cannot convert unknown operator ${node.meta.operator}`);
    }

    const opClass = t.memberExpression(
      t.identifier("cdktf"),
      t.identifier("Op")
    );
    const fn = t.memberExpression(opClass, t.identifier(fnName));

    return t.callExpression(fn, [operand]);
  }

  if (tex.isBinaryOpExpression(node)) {
    const left = convertTFExpressionAstToTs(
      tex.getChildWithValue(node, node.meta.lhsExpression)!,
      scope
    );
    const right = convertTFExpressionAstToTs(
      tex.getChildWithValue(node, node.meta.rhsExpression)!,
      scope
    );

    let fnName = node.meta.operator;
    if (tfBinaryOperatorsToCdktf[fnName as supportedBinaryOperators]) {
      fnName = tfBinaryOperatorsToCdktf[fnName as supportedBinaryOperators];
    } else {
      throw new Error(`Cannot convert unknown operator ${node.meta.operator}`);
    }

    const opClass = t.memberExpression(
      t.identifier("cdktf"),
      t.identifier("Op")
    );
    const fn = t.memberExpression(opClass, t.identifier(fnName));

    return t.callExpression(fn, [left, right]);
  }

  if (tex.isTemplateExpression(node) || tex.isTemplateWrapExpression(node)) {
    const parts = node.children.map((child) => ({
      node: child,
      expr: convertTFExpressionAstToTs(child, scope),
    }));

    if (parts.length === 0) {
      return t.stringLiteral(node.meta.value);
    }

    if (parts.length === 1) {
      return parts[0].expr;
    }

    let isScopedTraversal = false;
    let expressions = [];
    for (const { node, expr } of parts) {
      if (tex.isScopeTraversalExpression(node) && !t.isStringLiteral(expr)) {
        expressions.push(t.stringLiteral("${"));
        isScopedTraversal = true;
      } else {
        if (isScopedTraversal) {
          expressions.push(t.stringLiteral("}"));
          isScopedTraversal = false;
        }
      }
      expressions.push(expr);
    }

    if (isScopedTraversal) {
      expressions.push(t.stringLiteral("}"));
    }

    return expressionForSerialStringConcatenation(expressions);
  }

  if (tex.isFunctionCallExpression(node)) {
    const functionName = node.meta.name;

    const argumentExpressions = node.children.map((child) =>
      convertTFExpressionAstToTs(child, scope)
    );

    const mapping = functionsMap[functionName];
    if (!mapping) {
      logger.error(
        `Unknown function ${functionName} encountered. ${leaveCommentText}`
      );
      return t.callExpression(t.identifier(functionName), argumentExpressions);
    }

    // TODO: Insert mapping transformer here
    // Sample code that might work?
    // if (mapping.transformer) {
    //   const newTfAst = mapping.transformer(node);
    //   if (newTfAst !== node) {
    //     newTfAst.children = node.children;
    //     return convertTFExpressionAstToTs(
    //       newTfAst,
    //       scope,
    //       nodeIds,
    //       scopedIds
    //     );
    //   }
    // }

    const callee = t.memberExpression(
      t.memberExpression(t.identifier("cdktf"), t.identifier("Fn")),
      t.identifier(mapping.name)
    );

    if (mapping.parameters.length > 0 && mapping.parameters[0].variadic) {
      return t.callExpression(callee, [
        t.arrayExpression(
          argumentExpressions.map((argExpr) =>
            coerceType(
              scope,
              argExpr,
              findExpressionType(scope, argExpr),
              mapping.parameters[0].type
            )
          )
        ),
      ]);
    }

    if (mapping.parameters.length !== argumentExpressions.length) {
      logger.error(
        `Function ${functionName} expects ${mapping.parameters.length} arguments, but ${argumentExpressions.length} were provided. ${leaveCommentText}`
      );

      // No coercion in this case
      return t.callExpression(callee, argumentExpressions);
    }

    return t.callExpression(
      callee,
      argumentExpressions.map((argExpr, index) =>
        coerceType(
          scope,
          argExpr,
          findExpressionType(scope, argExpr),
          mapping.parameters[index].type
        )
      )
    );
  }

  if (tex.isSplatExpression(node)) {
    const sourceExpressionChild = tex.getChildWithValue(
      node,
      node.meta.sourceExpression
    )!;
    let sourceExpression = convertTFExpressionAstToTs(
      sourceExpressionChild,
      scope
    );

    // We don't convert the relative expression because everything after the splat is going to be
    // a string
    let relativeExpression = node.meta.eachExpression.startsWith(
      node.meta.anonSymbolExpression
    )
      ? node.meta.eachExpression.slice(node.meta.anonSymbolExpression.length)
      : node.meta.eachExpression;

    if (t.isIdentifier(sourceExpression) && canUseFqn(sourceExpressionChild)) {
      sourceExpression = t.memberExpression(
        sourceExpression,
        t.identifier("fqn")
      );
    }

    return expressionForSerialStringConcatenation([
      t.stringLiteral("${"),
      sourceExpression,
      t.stringLiteral("}"),
      t.stringLiteral(node.meta.anonSymbolExpression + relativeExpression),
    ]);
  }

  if (tex.isConditionalExpression(node)) {
    const conditionChild = tex.getChildWithValue(
      node,
      node.meta.conditionExpression
    )!;
    let condition = convertTFExpressionAstToTs(conditionChild, scope);
    if (t.isIdentifier(condition) && canUseFqn(conditionChild)) {
      // We have a resource or data source here, which we would need to
      // reference using fqn
      condition = t.memberExpression(condition, t.identifier("fqn"));
    }

    const trueExpression = convertTFExpressionAstToTs(
      tex.getChildWithValue(node, node.meta.trueExpression)!,
      scope
    );

    const falseExpression = convertTFExpressionAstToTs(
      tex.getChildWithValue(node, node.meta.falseExpression)!,
      scope
    );

    const conditionalFn = t.memberExpression(
      t.identifier("cdktf"),
      t.identifier("conditional")
    );

    return t.callExpression(conditionalFn, [
      condition,
      trueExpression,
      falseExpression,
    ]);
  }

  if (tex.isTupleExpression(node)) {
    const expressions = node.children.map((child) =>
      convertTFExpressionAstToTs(child, scope)
    );

    return t.arrayExpression(expressions);
  }

  if (tex.isRelativeTraversalExpression(node)) {
    const segments = node.meta.traversal;

    // The left hand side / source of a relative traversal is not a proper
    // object / resource / data thing that is being referenced
    const source = convertTFExpressionAstToTs(
      tex.getChildWithValue(node, node.meta.sourceExpression)!,
      scope
    );

    return t.callExpression(
      t.memberExpression(t.identifier("cdktf"), t.identifier("propertyAccess")),
      [
        source,
        t.arrayExpression(segments.map((s) => t.stringLiteral(s.segment))),
      ]
    );
  }

  if (tex.isForExpression(node)) {
    const collectionChild = tex.getChildWithValue(
      node,
      node.meta.collectionExpression
    )!;

    let collectionExpression = convertTFExpressionAstToTs(
      collectionChild,
      scope
    );

    if (t.isIdentifier(collectionExpression) && canUseFqn(collectionChild)) {
      // We have a resource or data source here, which we would need to
      // reference using fqn
      collectionExpression = t.memberExpression(
        collectionExpression,
        t.identifier("fqn")
      );
    }

    const collectionRequiresWrapping = !t.isStringLiteral(collectionExpression);
    const expressions = [];
    const conditionBody = node.meta.keyVar
      ? `${node.meta.keyVar}, ${node.meta.valVar}`
      : node.meta.valVar;

    const openBrace = node.meta.openRangeValue;
    const closeBrace = node.meta.closeRangeValue;
    const grouped = node.meta.groupedValue ? "..." : "";
    const valueExpression = `${node.meta.valueExpression}${grouped}`;

    const prefix = `\${${openBrace} for ${conditionBody} in `;
    const keyValue = node.meta.keyExpression
      ? ` : ${node.meta.keyExpression} => ${valueExpression}`
      : ` : ${valueExpression}`;
    const conditional = node.meta.conditionalExpression;
    const suffix = `${keyValue}${
      conditional ? ` if ${conditional}` : ""
    }${closeBrace}}`;

    expressions.push(t.stringLiteral(prefix));
    if (collectionRequiresWrapping) {
      expressions.push(t.stringLiteral("${"));
    }
    expressions.push(collectionExpression);
    if (collectionRequiresWrapping) {
      expressions.push(t.stringLiteral("}"));
    }
    expressions.push(t.stringLiteral(suffix));

    return expressionForSerialStringConcatenation(expressions);
  }

  return t.stringLiteral("");
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

function typeForCallExpression(ast: t.CallExpression): AttributeType {
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

export async function expressionAst(
  input: string
): Promise<tex.ExpressionType> {
  console.log("expressionAst", input);
  const sanitizedInput = wrapTerraformExpression(input);
  const isWrapped = sanitizedInput.length !== input.length;
  const ast = await getExpressionAst("main.tf", sanitizedInput);

  if (!ast) {
    throw new Error(`Unable to parse terraform expression: ${input}`);
  }

  if (isWrapped) {
    return ast.children[0];
  }
  return ast;
}

export async function convertTerraformExpressionToTs(
  input: string,
  scope: ResourceScope,
  targetType: () => AttributeType
): Promise<t.Expression> {
  logger.debug(`convertTerraformExpressionToTs(${input})`);
  console.log("convertTerraformExpressionToTs", input);
  const tsExpression = convertTFExpressionAstToTs(
    await expressionAst(input),
    scope
  );

  return coerceType(
    scope,
    tsExpression,
    findExpressionType(scope, tsExpression),
    targetType()
  );
}

export async function extractReferencesFromExpression(
  input: string,
  nodeIds: readonly string[],
  scopedIds: readonly string[] = [] // dynamics introduce new scoped variables that are not the globally accessible ids
): Promise<Reference[]> {
  logger.debug(`extractReferencesFromExpression(${input})`);
  const possibleVariableSpots = await getReferencesInExpression(
    "main.tf",
    input
  );

  logger.debug(
    `found possible variable spots: ${JSON.stringify(possibleVariableSpots)}`
  );

  return possibleVariableSpots.reduce((carry, spot) => {
    const { value, startPosition, endPosition } = spot;
    // no reference
    if (
      !value.includes(".") || // just a literal
      value.startsWith(".") || // dangling property access
      value.endsWith("...") || // spread (likely in for loop)
      value.startsWith("count.") || // count variable
      value.startsWith("each.") || // each variable
      // https://www.terraform.io/docs/language/expressions/references.html#filesystem-and-workspace-info
      value.startsWith("path.module") ||
      value.startsWith("path.root") ||
      value.startsWith("path.cwd") ||
      value.startsWith("terraform.workspace") ||
      value.startsWith("self.") // block local value
    ) {
      logger.debug(`skipping ${value}`);
      return carry;
    }

    const referenceParts = value.split(".");

    logger.debug(
      `Searching for node id '${value}' in ${JSON.stringify(nodeIds)}`
    );
    const corespondingNodeId = [...nodeIds, ...scopedIds].find((id) => {
      const parts = id.split(".");
      const matchesFirst = parts[0] === referenceParts[0];
      const matchesFirstTwo =
        matchesFirst &&
        (parts[1] === referenceParts[1] || referenceParts.length === 1);

      return (
        matchesFirstTwo &&
        (parts[0] === "data" ? parts[2] === referenceParts[2] : true)
      );
    });

    if (!corespondingNodeId) {
      // This is most likely a false positive, so we just ignore it
      // We include the log below to help debugging
      logger.error(
        `Found a reference that is unknown: ${input} has reference "${value}". The id was not found in ${JSON.stringify(
          nodeIds
        )} with temporary values ${JSON.stringify(scopedIds)}.
${leaveCommentText}`
      );
      return carry;
    }

    if (scopedIds.includes(corespondingNodeId)) {
      logger.debug(`skipping '${value}' since it's a scoped variable`);
      return carry;
    }
    logger.debug(`Found node id '${corespondingNodeId}'`);

    const spotParts = value.split(".");
    let isThereANumericAccessor = false;
    const referenceSpotParts = spotParts.filter((part) => {
      if (!Number.isNaN(parseInt(part, 10))) {
        isThereANumericAccessor = true;
        return false;
      }

      return !isThereANumericAccessor;
    });
    const fullReference = isThereANumericAccessor
      ? referenceSpotParts.slice(0, 2).join(".")
      : value;

    const isVariable = value.startsWith("var.");
    const useFqn =
      // Can not use FQN on vars
      !isVariable &&
      // Can not use FQN on locals
      !value.startsWith("local.") &&
      // If the following character is
      (input.substr(endPosition + 1, 1) === "*" || // a * (splat) we need to use the FQN
        input.substr(endPosition, 1) === "[" || // a property access
        isThereANumericAccessor); // a numeric access

    const ref: Reference = {
      start: startPosition,
      end: endPosition,
      referencee: {
        id: corespondingNodeId,
        full: fullReference,
      },
      useFqn,
      isVariable,
    };
    logger.debug(`Found reference ${JSON.stringify(ref)}`);
    return [...carry, ref];
  }, [] as Reference[]);
}

export type IteratorVariableReference = {
  start: number;
  end: number;
  value: string;
};
export async function extractIteratorVariablesFromExpression(
  input: string
): Promise<IteratorVariableReference[]> {
  const possibleVariableSpots = await getReferencesInExpression(
    "main.tf",
    input
  );

  return possibleVariableSpots
    .filter((spot) => spot.value.startsWith("each."))
    .map((spot) => ({
      start: spot.startPosition,
      end: spot.endPosition,
      value: spot.value,
    }));
}

export function referenceToVariableName(
  scope: ProgramScope,
  ref: Reference
): string {
  const parts = ref.referencee.id.split(".");
  const resource = parts[0] === "data" ? `${parts[0]}.${parts[1]}` : parts[0];
  const name = parts[0] === "data" ? parts[2] : parts[1];
  return variableName(scope, resource, name);
}

function validVarName(name: string) {
  if (reservedWords.check(name)) {
    return `${name}Var`;
  }

  if (!Number.isNaN(parseInt(name[0], 10))) {
    return `d${name}`;
  }

  return name;
}

export function variableName(
  scope: ProgramScope,
  resource: string,
  name: string
): string {
  // name collision, we need to prefix the name
  if (scope.variables[name]) {
    if (resource === scope.variables[name].resource) {
      return scope.variables[name].variableName;
    }

    // we only cache one per name
    return validVarName(camelCase([resource, name].join("_")));
  }

  const variableName = validVarName(
    camelCase(
      ["var", "local", "module"].includes(resource)
        ? name
        : [resource, name].join("_")
    )
  );

  scope.variables[name] = {
    variableName,
    resource,
  };

  return variableName;
}

export function constructAst(
  scope: ProgramScope,
  type: string,
  isModuleImport: boolean
) {
  if (isModuleImport) {
    return t.memberExpression(t.identifier(type), t.identifier(type));
  }

  function getUniqueName(provider: string, type: string) {
    // early abort on cdktf
    if (provider === "cdktf") {
      return pascalCase(type.replace("cdktf_", ""));
    }

    if (provider === "NullProvider") {
      return pascalCase(type.replace("NullProvider_", ""));
    }

    // Special handling for provider blocks, e.g. aws_AwsProvider
    if (type === `${pascalCase(provider)}Provider`) {
      return sanitizeClassOrNamespaceName(type, true);
    }

    const fullProviderName = getFullProviderName(
      scope.providerSchema,
      provider
    );
    if (fullProviderName && scope.providerGenerator[fullProviderName]) {
      return scope.providerGenerator[fullProviderName]?.getClassNameForResource(
        type
      );
    } else {
      // If we can not find the class name for a resource the caller needs to find a sensible default
      return null;
    }
  }

  function getResourceNamespace(
    provider: string,
    resource: string,
    isDataSource: boolean
  ) {
    // happens e.g. for references to cdktf.TerraformStack (and similar) in generated code
    if (provider === "cdktf") {
      return undefined;
    }

    // e.g. awsProvider -> provider
    if (
      resource === pascalCase(`${provider}_provider`) ||
      (provider === "NullProvider" && resource === "NullProvider")
    ) {
      return "provider";
    }

    const fullProviderName = getFullProviderName(
      scope.providerSchema,
      provider
    );
    if (fullProviderName && scope.providerGenerator[fullProviderName]) {
      return camelCase(
        scope.providerGenerator[fullProviderName]?.getNamespaceNameForResource(
          type.replace(/\./g, "_")
        )
      );
    }

    if (isDataSource) {
      return camelCase(
        sanitizeClassOrNamespaceName(`data_${provider}_${resource}`)
      );
    }

    return camelCase(sanitizeClassOrNamespaceName(resource));
  }

  // resources or data sources
  if (!type.includes("./") && type.includes(".")) {
    const parts = type.split(".");
    if (parts[0] === "data") {
      const [, provider, resource] = parts;

      const namespace = getResourceNamespace(provider, resource, true);
      const resourceName =
        getUniqueName(provider, parts.join("_")) ||
        pascalCase(
          sanitizeClassOrNamespaceName(`data_${provider}_${resource}`)
        );

      if (namespace) {
        return t.memberExpression(
          t.memberExpression(
            t.identifier(provider), // e.g. aws
            t.identifier(namespace) // e.g. dataAwsInstance
          ),
          t.identifier(resourceName) // e.g. DataAwsInstance
        );
      }

      return t.memberExpression(
        t.identifier(provider), // e.g. aws
        t.identifier(resourceName) // e.g. DataAwsNatGateway
      );
    }

    const [provider, resource] = parts;
    const namespace = getResourceNamespace(provider, resource, false);
    const resourceName =
      getUniqueName(provider, parts.join("_")) ||
      pascalCase(sanitizeClassOrNamespaceName(resource));

    if (namespace) {
      return t.memberExpression(
        t.memberExpression(
          t.identifier(provider), // e.g. aws
          t.identifier(namespace) // e.g. instance
        ),
        t.identifier(resourceName) // e.g. Instance
      );
    }
    return t.memberExpression(
      t.identifier(provider), // e.g. google
      t.identifier(resourceName) // e.g. BigQueryTable
    );
  }

  return t.identifier(pascalCase(type));
}

export function referenceToAst(scope: ProgramScope, ref: Reference) {
  const [resource, , ...selector] = ref.referencee.full.split(".");

  const variableReference = t.identifier(
    camelCase(referenceToVariableName(scope, ref))
  );

  if (resource === "data") {
    selector.shift(); // remove the data part so that the name is not used in the selector
  }

  const accessor = selector.reduce(
    (carry, member, index) =>
      t.memberExpression(
        carry,
        t.identifier(
          index === 0 && resource === "module"
            ? camelCase(member + "Output")
            : camelCase(member)
        )
      ),
    variableReference as t.Expression
  );

  if (ref.useFqn) {
    return t.memberExpression(accessor, t.identifier("fqn"));
  }

  if (ref.isVariable) {
    return t.memberExpression(accessor, t.identifier("value"));
  }
  return accessor;
}

// Transforms a path with segments into literals describing the path
export function getPropertyAccessPath(input: string): string[] {
  return input
    .split(/(\[|\]|\.)/g)
    .filter((p) => p.length > 0 && p !== "." && p !== "[" && p !== "]")
    .map((p) => (p.startsWith(`"`) && p.endsWith(`"`) ? p.slice(1, -1) : p));
}

export function dynamicVariableToAst(
  node: tex.ScopeTraversalExpression,
  iteratorName: string,
  block: string = "each"
): t.Expression {
  if (iteratorName === "dynamic-block") {
    return expressionForSerialStringConcatenation([
      t.stringLiteral("${"),
      t.stringLiteral(block),
      t.stringLiteral("}"),
    ]);
  }
  if (node.meta.value === `${block}.key`) {
    return t.memberExpression(t.identifier(iteratorName), t.identifier("key"));
  }
  if (node.meta.value === `${block}.value`) {
    return t.memberExpression(
      t.identifier(iteratorName),
      t.identifier("value")
    );
  }
  const segments = node.meta.traversal;

  if (
    segments.length > 2 &&
    segments[0].segment === block &&
    segments[1].segment === "value"
  ) {
    const segmentsAfterEachValue = segments.slice(2);
    return t.callExpression(
      t.memberExpression(t.identifier("cdktf"), t.identifier("propertyAccess")),
      [
        t.memberExpression(t.identifier(iteratorName), t.identifier("value")),
        t.arrayExpression(
          segmentsAfterEachValue.map((part) => {
            if (part.type === "nameTraversal") {
              return t.stringLiteral(part.segment);
            } else {
              return t.stringLiteral(`[${part.segment}]`);
            }
          })
        ),
      ]
    );
  }

  throw new Error(
    `Can not create AST for iterator variable of '${node.meta.value}'`
  );
}

export type DynamicBlock = {
  path: string;
  for_each: string;
  content: TerraformResourceBlock;
  scopedVar: string;
};
export const extractDynamicBlocks = (
  config: TerraformResourceBlock,
  path = ""
): DynamicBlock[] => {
  if (typeof config !== "object") {
    return [];
  }

  if (!config) {
    return [];
  }

  if (Array.isArray(config)) {
    return config.reduce(
      (carry, item, index) => [
        ...carry,
        ...extractDynamicBlocks(item, `${path}.${index}`),
      ],
      []
    );
  }

  if ("dynamic" in config) {
    const dynamic = (config as any).dynamic;
    const scopedVar = Object.keys(dynamic)[0];
    const { for_each, content } = dynamic[scopedVar][0];

    return [
      {
        path: `${path}.dynamic.${scopedVar}`,
        for_each,
        content,
        scopedVar,
      },
      ...extractDynamicBlocks(
        content,
        `${path}.dynamic.${scopedVar}.0.content`
      ),
    ];
  }

  return Object.entries(config).reduce((carry, [key, value]) => {
    return [...carry, ...extractDynamicBlocks(value as any, `${path}.${key}`)];
  }, [] as DynamicBlock[]);
};

export function isNestedDynamicBlock(
  dynBlocks: DynamicBlock[],
  block: DynamicBlock
): boolean {
  return dynBlocks.some(
    (dyn) => dyn.path !== block.path && block.path.startsWith(dyn.path)
  );
}

export async function findUsedReferences(
  nodeIds: string[],
  item: TerraformResourceBlock
): Promise<Reference[]> {
  logger.debug(`findUsedReferences(${nodeIds}, ${item})`);
  if (typeof item === "string") {
    return await extractReferencesFromExpression(item, nodeIds, []);
  }

  if (typeof item !== "object" || item === null || item === undefined) {
    return [];
  }

  if (Array.isArray(item)) {
    return (
      await Promise.all(item.map((i) => findUsedReferences(nodeIds, i)))
    ).flat();
  }

  if (item && "dynamic" in item) {
    const dyn = (item as any)["dynamic"];
    const { for_each, ...others } = dyn;
    const dynamicRef = Object.keys(others)[0];
    return await findUsedReferences([...nodeIds, dynamicRef], dyn);
  }

  return (
    await Promise.all(
      Object.values(item as Record<string, any>).map((i) =>
        findUsedReferences(nodeIds, i)
      )
    )
  ).flat();
}
