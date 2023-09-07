// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as t from "@babel/types";
import template from "@babel/template";
import { camelCase, leaveCommentText, logger } from "./utils";
import {
  IteratorVariableReference,
  ProgramScope,
  ResourceScope,
} from "./types";
import { getReferencesInExpression, getExpressionAst } from "@cdktf/hcl2json";
import {
  TFExpressionSyntaxTree as tex,
  wrapTerraformExpression,
} from "@cdktf/hcl2json";
import { functionsMap } from "./function-bindings/functions";
import { coerceType, findExpressionType } from "./coerceType";
import { AttributeType } from "@cdktf/commons";
import { getTypeAtPath } from "./terraformSchema";
import { containsReference } from "./references";
import { variableName } from "./variables";
import { getChildWithValue } from "@cdktf/hcl2json/lib/syntax-tree";

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
  negate: "negate",
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

function traversalToVariableName(
  scope: ProgramScope,
  node: tex.ExpressionType
) {
  if (!tex.isScopeTraversalExpression(node)) {
    logger.error(
      `Unexpected expression type ${node.type} with value ${node.meta.value} passed to convert to a variable. 
        ${leaveCommentText}`
    );
    return "";
  }

  const segments = node.meta.traversal;
  if (segments.length === 1) {
    return node.meta.fullAccessor;
  }
  const rootSegment = segments[0].segment;
  const resource =
    rootSegment === "data"
      ? `${segments[0].segment}.${segments[1].segment}`
      : rootSegment;
  const name =
    rootSegment === "data" ? segments[2].segment : segments[1].segment;

  return variableName(scope, resource, name);
}

function expressionForSerialStringConcatenation(
  scope: ResourceScope,
  nodes: t.Expression[]
) {
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

      // wrap access to dynamic blocks in Token.asString() as they return a Lazy
      // for .key and .value which can't be concatenated in languages like Python
      // because JSII currently has no support for the toString() method in
      // languages other than TypeScript: https://github.com/aws/jsii/issues/380
      // example: dynamic_iterator0.key / dynamic_iterator0.value
      if (
        t.isMemberExpression(node) &&
        t.isIdentifier(node.object) &&
        Object.values(scope.scopedVariables || {}).includes(node.object.name) &&
        t.isIdentifier(node.property) &&
        ["key", "value"].includes(node.property.name)
      ) {
        node = coerceType(scope, node, "dynamic", "string");
      }

      return t.binaryExpression("+", acc as t.Expression, node);
    }
  );
}

function getTfResourcePathFromNode(node: tex.ScopeTraversalExpression) {
  const segments = node.meta.traversal;
  let resource = segments[0].segment;
  let result = [];
  let attributes = [];

  if (segments[0].segment === "data") {
    result.push(segments[0].segment);
    resource = segments[1].segment;
    attributes = segments.slice(3); // we want to skip the variable name
  } else {
    attributes = segments.slice(2); // we want to skip the variable name
  }

  const [provider, ...resourceNameFragments] = resource.split("_");

  // Hack: This happens in the case of `external` provider
  // where the data source does not have a provider name prefix
  if (resourceNameFragments.length === 0) {
    resourceNameFragments.push(provider);
  }

  result.push(provider);
  result.push(resourceNameFragments.join("_"));
  result = [
    ...result,
    ...attributes.map((seg) => {
      if (tex.isIndexTraversalPart(seg)) {
        return `[${seg.segment}]`;
      }
      return seg.segment;
    }),
  ];

  return result.join(".");
}

function convertLiteralValueExpressionToTs(
  _scope: ResourceScope,
  node: tex.LiteralValueExpression
) {
  const literalType = node.meta.type;
  if (literalType === "number") {
    return t.numericLiteral(Number(node.meta.value));
  }
  if (literalType === "bool") {
    return t.booleanLiteral(node.meta.value === "true" ? true : false);
  }

  return t.stringLiteral(node.meta.value);
}

function convertScopeTraversalExpressionToTs(
  scope: ResourceScope,
  node: tex.ScopeTraversalExpression
) {
  const hasReference = containsReference(node);

  const segments = node.meta.traversal;

  if (segments[0].segment === "each" && scope.forEachIteratorName) {
    return dynamicVariableToAst(scope, node, scope.forEachIteratorName);
  }

  if (segments[0].segment === "count" && scope.countIteratorName) {
    return dynamicVariableToAst(scope, node, scope.countIteratorName, "count");
  }

  if (segments[0].segment === "self") {
    scope.importables.push({
      constructName: "TerraformSelf",
      provider: "cdktf",
    });

    return t.callExpression(
      t.memberExpression(t.identifier("TerraformSelf"), t.identifier("getAny")),

      [t.stringLiteral(traversalPartsToString(segments.slice(1)))]
    );
  }

  // setting.value, setting.value[1].id
  const dynamicBlock = scope.scopedVariables?.[segments[0].segment];
  if (dynamicBlock) {
    if (dynamicBlock === "dynamic-block") {
      return dynamicVariableToAst(
        scope,
        node,
        dynamicBlock,
        traversalPartsToString(segments)
      );
    }
    return dynamicVariableToAst(scope, node, dynamicBlock, segments[0].segment);
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
      scope.importables.push({
        constructName: "Fn",
        provider: "cdktf",
      });
      const callee = t.memberExpression(
        t.identifier("Fn"),
        t.identifier("lookupNested")
      );
      return t.callExpression(callee, [
        variableAccessor,
        t.arrayExpression(
          segments.slice(2).map((s) => t.stringLiteral(s.segment))
        ),
      ]);
    }

    return variableAccessor;
  }

  if (!hasReference || scope.withinOverrideExpression) {
    return varIdentifier;
  }

  const rootSegment = segments[0].segment;
  const attributeIndex = rootSegment === "data" ? 3 : 2;
  const attributeSegments = segments.slice(attributeIndex);
  const numericAccessorIndex = attributeSegments.findIndex((seg) =>
    tex.isIndexTraversalPart(seg)
  );
  let minAccessorIndex = numericAccessorIndex;
  let mapAccessorIndex = -1;
  if (numericAccessorIndex === -1) {
    // only do this if we have to, if we already have a
    // numeric accessor, we don't have to do this additional work
    const resourcePath = getTfResourcePathFromNode(node);
    let usingSubPathType = false;
    let parts = resourcePath.split(".").filter((p) => p !== "");
    const minParts = attributeIndex; // we need to stop before data.aws.resource_name or aws.resource_name
    const originalParts = parts.length;
    let hasMapAccessor = false;
    while (parts.length >= minParts) {
      const type = getTypeAtPath(scope.providerSchema, parts.join("."));
      if (type !== null) {
        if (Array.isArray(type) && type[0] === "map" && usingSubPathType) {
          hasMapAccessor = true;
          break;
        }
      }
      parts.pop();
      usingSubPathType = true;
    }

    if (hasMapAccessor) {
      mapAccessorIndex = originalParts - parts.length - 1;
      minAccessorIndex = mapAccessorIndex;
    }
  }

  const needsPropertyAccess = minAccessorIndex >= 0;

  const refSegments = needsPropertyAccess
    ? attributeSegments.slice(0, minAccessorIndex)
    : attributeSegments;
  const nonRefSegments = needsPropertyAccess
    ? attributeSegments.slice(minAccessorIndex)
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

  scope.importables.push({
    constructName: "Fn",
    provider: "cdktf",
  });
  const callee = t.memberExpression(
    t.identifier("Fn"),
    t.identifier("lookupNested")
  );
  return t.callExpression(callee, [
    ref,
    t.arrayExpression(nonRefSegments.map((s) => t.stringLiteral(s.segment))),
  ]);
}

function convertUnaryOpExpressionToTs(
  scope: ResourceScope,
  node: tex.UnaryOpExpression
) {
  const operand = convertTFExpressionAstToTs(
    scope,
    tex.getChildWithValue(node, node.meta.valueExpression)!
  );

  let fnName = node.meta.operator;
  if (tfUnaryOperatorsToCdktf[fnName as supportedUnaryOperators]) {
    fnName = tfUnaryOperatorsToCdktf[fnName as supportedUnaryOperators];
  } else {
    throw new Error(`Cannot convert unknown operator ${node.meta.operator}`);
  }

  scope.importables.push({
    constructName: "Op",
    provider: "cdktf",
  });

  const fn = t.memberExpression(t.identifier("Op"), t.identifier(fnName));

  return t.callExpression(fn, [operand]);
}

function convertBinaryOpExpressionToTs(
  scope: ResourceScope,
  node: tex.BinaryOpExpression
) {
  const left = convertTFExpressionAstToTs(
    scope,
    tex.getChildWithValue(node, node.meta.lhsExpression)!
  );
  const right = convertTFExpressionAstToTs(
    scope,
    tex.getChildWithValue(node, node.meta.rhsExpression)!
  );

  let fnName = node.meta.operator;
  if (tfBinaryOperatorsToCdktf[fnName as supportedBinaryOperators]) {
    fnName = tfBinaryOperatorsToCdktf[fnName as supportedBinaryOperators];
  } else {
    throw new Error(`Cannot convert unknown operator ${node.meta.operator}`);
  }

  scope.importables.push({
    constructName: "Op",
    provider: "cdktf",
  });

  const fn = t.memberExpression(t.identifier("Op"), t.identifier(fnName));
  return t.callExpression(fn, [left, right]);
}

function convertTemplateExpressionToTs(
  scope: ResourceScope,
  node: tex.TemplateExpression | tex.TemplateWrapExpression
) {
  const parts = node.children.map((child) => ({
    node: child,
    expr: convertTFExpressionAstToTs(scope, child),
  }));

  const lastPart = parts[parts.length - 1];
  if (t.isStringLiteral(lastPart.expr) && lastPart.expr.value === "\n") {
    // This is a bit of a hack, but the trailing newline we add due to
    // heredocs looks ugly and unnecessary in the generated code, so we
    // try to remove it
    parts.pop();
  }

  if (parts.length === 0) {
    return t.stringLiteral(node.meta.value);
  }

  if (parts.length === 1) {
    return parts[0].expr;
  }

  let isScopedTraversal = false;
  let expressions: t.Expression[] = [];
  for (const { node, expr } of parts) {
    if (
      tex.isScopeTraversalExpression(node) &&
      !t.isStringLiteral(expr) &&
      !t.isCallExpression(expr)
    ) {
      expressions.push(t.stringLiteral("${"));
      isScopedTraversal = true;
    } else if (
      // we should ideally be doing type coercion more
      // carefully here, because it may not always be needed
      t.isCallExpression(expr)
    ) {
      scope.importables.push({
        constructName: "Token",
        provider: "cdktf",
      });

      expressions.push(
        template.expression(`Token.asString(%%expr%%)`)({ expr })
      );
      continue;
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

  return expressionForSerialStringConcatenation(scope, expressions);
}

function convertObjectExpressionToTs(
  scope: ResourceScope,
  node: tex.ObjectExpression
) {
  return t.objectExpression(
    Object.entries(node.meta.items)
      .map(([key, value]) => {
        const valueChild = getChildWithValue(node, value);
        if (!valueChild) {
          logger.error(`Unable to value for object key '${key}': ${value}`);
          return null;
        }

        return t.objectProperty(
          t.identifier(key),
          convertTFExpressionAstToTs(scope, valueChild)
        );
      })
      .filter((s) => s !== null) as t.ObjectProperty[]
  );
}

function convertFunctionCallExpressionToTs(
  scope: ResourceScope,
  node: tex.FunctionCallExpression
) {
  const functionName = node.meta.name;
  const mapping = functionsMap[functionName];

  if (!mapping) {
    logger.error(
      `Unknown function ${functionName} encountered. ${leaveCommentText}`
    );
    const argumentExpressions = node.children.map((child) =>
      convertTFExpressionAstToTs(scope, child)
    );

    return t.callExpression(t.identifier(functionName), argumentExpressions);
  }

  let transformedNode: tex.FunctionCallExpression = mapping.transformer
    ? mapping.transformer(node)
    : node;

  const argumentExpressions = transformedNode.children.map((child) =>
    convertTFExpressionAstToTs(scope, child)
  );

  scope.importables.push({
    constructName: "Fn",
    provider: "cdktf",
  });

  const callee = t.memberExpression(
    t.identifier("Fn"),
    t.identifier(mapping.name)
  );

  if (
    mapping.parameters.length > 0 &&
    mapping.parameters[mapping.parameters.length - 1].variadic
  ) {
    const lastParameterType =
      mapping.parameters[mapping.parameters.length - 1].type;
    const nonVariadicArguments = argumentExpressions.slice(
      0,
      mapping.parameters.length - 1
    );

    const fnCallArguments = [
      ...nonVariadicArguments.map((argExpr, index) =>
        coerceType(
          scope,
          argExpr,
          findExpressionType(scope, argExpr),
          mapping.parameters[index].type
        )
      ),

      t.arrayExpression(
        argumentExpressions
          .slice(mapping.parameters.length - 1)
          .map((argExpr) =>
            coerceType(
              scope,
              argExpr,
              findExpressionType(scope, argExpr),
              lastParameterType
            )
          )
      ),
    ];

    return t.callExpression(callee, fnCallArguments);
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

function convertIndexExpressionToTs(
  scope: ResourceScope,
  node: tex.IndexExpression
) {
  const collectionExpressionChild = tex.getChildWithValue(
    node,
    node.meta.collectionExpression
  );
  const keyExpressionChild = tex.getChildWithValue(
    node,
    node.meta.keyExpression
  );

  const collectionExpression = convertTFExpressionAstToTs(
    scope,
    collectionExpressionChild!
  );
  const keyExpression = convertTFExpressionAstToTs(scope, keyExpressionChild!);

  scope.importables.push({
    constructName: "Fn",
    provider: "cdktf",
  });
  const callee = t.memberExpression(
    t.identifier("Fn"),
    t.identifier("lookupNested")
  );
  return t.callExpression(callee, [
    collectionExpression,
    t.arrayExpression([keyExpression]),
  ]);
}

function convertSplatExpressionToTs(
  scope: ResourceScope,
  node: tex.SplatExpression
) {
  const sourceExpressionChild = tex.getChildWithValue(
    node,
    node.meta.sourceExpression
  )!;
  let sourceExpression = convertTFExpressionAstToTs(
    scope,
    sourceExpressionChild
  );

  // We don't convert the relative expression because everything after the splat is going to be
  // a string
  let relativeExpression = node.meta.eachExpression.startsWith(
    node.meta.anonSymbolExpression
  )
    ? node.meta.eachExpression.slice(node.meta.anonSymbolExpression.length)
    : node.meta.eachExpression;

  const segments = relativeExpression.split(/\.|\[|\]/).filter((s) => s);
  scope.importables.push({
    constructName: "Fn",
    provider: "cdktf",
  });
  const callee = t.memberExpression(
    t.identifier("Fn"),
    t.identifier("lookupNested")
  );

  return t.callExpression(callee, [
    sourceExpression,
    t.arrayExpression([
      // we don't need to use the anonSymbolExpression here because
      // it only changes between .* and [*] which we don't care about
      t.stringLiteral("*"),
      ...segments.map(t.stringLiteral),
    ]),
  ]);
}

function convertConditionalExpressionToTs(
  scope: ResourceScope,
  node: tex.ConditionalExpression
) {
  const conditionChild = tex.getChildWithValue(
    node,
    node.meta.conditionExpression
  )!;
  let condition = convertTFExpressionAstToTs(scope, conditionChild);
  if (t.isIdentifier(condition) && canUseFqn(conditionChild)) {
    // We have a resource or data source here, which we would need to
    // reference using fqn
    condition = t.memberExpression(condition, t.identifier("fqn"));
  }

  const trueExpression = convertTFExpressionAstToTs(
    scope,
    tex.getChildWithValue(node, node.meta.trueExpression)!
  );

  const falseExpression = convertTFExpressionAstToTs(
    scope,
    tex.getChildWithValue(node, node.meta.falseExpression)!
  );

  scope.importables.push({
    constructName: "conditional",
    provider: "cdktf",
  });

  return t.callExpression(t.identifier("conditional"), [
    condition,
    trueExpression,
    falseExpression,
  ]);
}

function convertTupleExpressionToTs(
  scope: ResourceScope,
  node: tex.TupleExpression
) {
  const expressions = node.children.map((child) =>
    convertTFExpressionAstToTs(scope, child)
  );

  return t.arrayExpression(expressions);
}

function convertRelativeTraversalExpressionToTs(
  scope: ResourceScope,
  node: tex.RelativeTraversalExpression
) {
  const segments = node.meta.traversal;

  // The left hand side / source of a relative traversal is not a proper
  // object / resource / data thing that is being referenced
  const source = convertTFExpressionAstToTs(
    scope,
    tex.getChildWithValue(node, node.meta.sourceExpression)!
  );

  scope.importables.push({
    constructName: "Fn",
    provider: "cdktf",
  });
  const callee = t.memberExpression(
    t.identifier("Fn"),
    t.identifier("lookupNested")
  );

  return t.callExpression(callee, [
    source,
    t.arrayExpression(segments.map((s) => t.stringLiteral(s.segment))),
  ]);
}

function convertForExpressionToTs(
  scope: ResourceScope,
  node: tex.ForExpression
) {
  const collectionChild = tex.getChildWithValue(
    node,
    node.meta.collectionExpression
  )!;

  let collectionExpression = convertTFExpressionAstToTs(scope, collectionChild);

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

  return expressionForSerialStringConcatenation(scope, expressions);
}

function convertTFExpressionAstToTs(
  scope: ResourceScope,
  node: tex.ExpressionType
): t.Expression {
  if (tex.isLiteralValueExpression(node)) {
    return convertLiteralValueExpressionToTs(scope, node);
  }

  if (tex.isScopeTraversalExpression(node)) {
    return convertScopeTraversalExpressionToTs(scope, node);
  }

  if (tex.isUnaryOpExpression(node)) {
    return convertUnaryOpExpressionToTs(scope, node);
  }

  if (tex.isBinaryOpExpression(node)) {
    return convertBinaryOpExpressionToTs(scope, node);
  }

  if (tex.isTemplateExpression(node) || tex.isTemplateWrapExpression(node)) {
    return convertTemplateExpressionToTs(scope, node);
  }

  if (tex.isObjectExpression(node)) {
    return convertObjectExpressionToTs(scope, node);
  }

  if (tex.isFunctionCallExpression(node)) {
    return convertFunctionCallExpressionToTs(scope, node);
  }

  if (tex.isIndexExpression(node)) {
    return convertIndexExpressionToTs(scope, node);
  }

  if (tex.isSplatExpression(node)) {
    return convertSplatExpressionToTs(scope, node);
  }

  if (tex.isConditionalExpression(node)) {
    return convertConditionalExpressionToTs(scope, node);
  }

  if (tex.isTupleExpression(node)) {
    return convertTupleExpressionToTs(scope, node);
  }

  if (tex.isRelativeTraversalExpression(node)) {
    return convertRelativeTraversalExpressionToTs(scope, node);
  }

  if (tex.isForExpression(node)) {
    return convertForExpressionToTs(scope, node);
  }

  return t.stringLiteral("");
}

export async function expressionAst(
  input: string
): Promise<tex.ExpressionType> {
  const { wrap, wrapOffset } = wrapTerraformExpression(input);
  const ast = await getExpressionAst("main.tf", wrap);

  if (!ast) {
    throw new Error(`Unable to parse terraform expression: ${input}`);
  }

  if (wrapOffset != 0 && tex.isTemplateWrapExpression(ast)) {
    return ast.children[0];
  }

  return ast;
}

export async function convertTerraformExpressionToTs(
  scope: ResourceScope,
  input: string,
  targetType: () => AttributeType
): Promise<t.Expression> {
  logger.debug(`convertTerraformExpressionToTs(${input})`);
  const tsExpression = convertTFExpressionAstToTs(
    scope,
    await expressionAst(input)
  );

  return coerceType(
    scope,
    tsExpression,
    findExpressionType(scope, tsExpression),
    targetType()
  );
}

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

export function dynamicVariableToAst(
  scope: ProgramScope,
  node: tex.ScopeTraversalExpression,
  iteratorName: string,
  block: string = "each"
): t.Expression {
  if (iteratorName === "dynamic-block") {
    return expressionForSerialStringConcatenation(scope, [
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

  if (block === "count" && node.meta.value === `${block}.index`) {
    return t.memberExpression(
      t.identifier(iteratorName),
      t.identifier("index")
    );
  }

  const segments = node.meta.traversal;

  if (
    segments.length > 2 &&
    segments[0].segment === block &&
    segments[1].segment === "value"
  ) {
    const segmentsAfterEachValue = segments.slice(2);
    scope.importables.push({
      constructName: "Fn",
      provider: "cdktf",
    });
    const callee = t.memberExpression(
      t.identifier("Fn"),
      t.identifier("lookupNested")
    );
    return t.callExpression(callee, [
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
    ]);
  }

  throw new Error(
    `Can not create AST for iterator variable of '${node.meta.value}'`
  );
}
