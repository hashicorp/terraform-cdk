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
import { AttributeType } from "@cdktf/provider-generator";
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
  node: tex.LiteralValueExpression,
  _scope: ResourceScope
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
  node: tex.ScopeTraversalExpression,
  scope: ResourceScope
) {
  const hasReference = containsReference(node);

  const segments = node.meta.traversal;

  if (segments[0].segment === "each" && scope.forEachIteratorName) {
    return dynamicVariableToAst(node, scope.forEachIteratorName);
  }

  if (segments[0].segment === "count" && scope.countIteratorName) {
    return dynamicVariableToAst(node, scope.countIteratorName, "count");
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
      return t.callExpression(
        t.memberExpression(
          t.identifier("cdktf"),
          t.identifier("propertyAccess")
        ),
        [
          variableAccessor,
          t.arrayExpression(
            segments.slice(2).map((s) => t.stringLiteral(s.segment))
          ),
        ]
      );
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

  return t.callExpression(
    t.memberExpression(t.identifier("cdktf"), t.identifier("propertyAccess")),
    [
      ref,
      t.arrayExpression(nonRefSegments.map((s) => t.stringLiteral(s.segment))),
    ]
  );
}

function convertUnaryOpExpressionToTs(
  node: tex.UnaryOpExpression,
  scope: ResourceScope
) {
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

  const opClass = t.memberExpression(t.identifier("cdktf"), t.identifier("Op"));
  const fn = t.memberExpression(opClass, t.identifier(fnName));

  return t.callExpression(fn, [operand]);
}

function convertBinaryOpExpressionToTs(
  node: tex.BinaryOpExpression,
  scope: ResourceScope
) {
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

  const opClass = t.memberExpression(t.identifier("cdktf"), t.identifier("Op"));
  const fn = t.memberExpression(opClass, t.identifier(fnName));

  return t.callExpression(fn, [left, right]);
}

function convertTemplateExpressionToTs(
  node: tex.TemplateExpression | tex.TemplateWrapExpression,
  scope: ResourceScope
) {
  const parts = node.children.map((child) => ({
    node: child,
    expr: convertTFExpressionAstToTs(child, scope),
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
      expressions.push(
        template.expression(`cdktf.Token.asString(%%expr%%)`)({ expr })
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

  return expressionForSerialStringConcatenation(expressions);
}

function convertObjectExpressionToTs(
  node: tex.ObjectExpression,
  scope: ResourceScope
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
          convertTFExpressionAstToTs(valueChild, scope)
        );
      })
      .filter((s) => s !== null) as t.ObjectProperty[]
  );
}

function convertFunctionCallExpressionToTs(
  node: tex.FunctionCallExpression,
  scope: ResourceScope
) {
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

function convertIndexExpressionToTs(
  node: tex.IndexExpression,
  scope: ResourceScope
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
    collectionExpressionChild!,
    scope
  );
  const keyExpression = convertTFExpressionAstToTs(keyExpressionChild!, scope);

  return t.callExpression(
    t.memberExpression(t.identifier("cdktf"), t.identifier("propertyAccess")),
    [collectionExpression, t.arrayExpression([keyExpression])]
  );
}

function convertSplatExpressionToTs(
  node: tex.SplatExpression,
  scope: ResourceScope
) {
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

  const segments = relativeExpression.split(/\.|\[|\]/).filter((s) => s);

  return t.callExpression(
    t.memberExpression(t.identifier("cdktf"), t.identifier("propertyAccess")),
    [
      sourceExpression,
      t.arrayExpression([
        // we don't need to use the anonSymbolExpression here because
        // it only changes between .* and [*] which we don't care about
        t.stringLiteral("*"),
        ...segments.map(t.stringLiteral),
      ]),
    ]
  );
}

function convertConditionalExpressionToTs(
  node: tex.ConditionalExpression,
  scope: ResourceScope
) {
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

function convertTupleExpressionToTs(
  node: tex.TupleExpression,
  scope: ResourceScope
) {
  const expressions = node.children.map((child) =>
    convertTFExpressionAstToTs(child, scope)
  );

  return t.arrayExpression(expressions);
}

function convertRelativeTraversalExpressionToTs(
  node: tex.RelativeTraversalExpression,
  scope: ResourceScope
) {
  const segments = node.meta.traversal;

  // The left hand side / source of a relative traversal is not a proper
  // object / resource / data thing that is being referenced
  const source = convertTFExpressionAstToTs(
    tex.getChildWithValue(node, node.meta.sourceExpression)!,
    scope
  );

  return t.callExpression(
    t.memberExpression(t.identifier("cdktf"), t.identifier("propertyAccess")),
    [source, t.arrayExpression(segments.map((s) => t.stringLiteral(s.segment)))]
  );
}

function convertForExpressionToTs(
  node: tex.ForExpression,
  scope: ResourceScope
) {
  const collectionChild = tex.getChildWithValue(
    node,
    node.meta.collectionExpression
  )!;

  let collectionExpression = convertTFExpressionAstToTs(collectionChild, scope);

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

function convertTFExpressionAstToTs(
  node: tex.ExpressionType,
  scope: ResourceScope
): t.Expression {
  if (tex.isLiteralValueExpression(node)) {
    return convertLiteralValueExpressionToTs(node, scope);
  }

  if (tex.isScopeTraversalExpression(node)) {
    return convertScopeTraversalExpressionToTs(node, scope);
  }

  if (tex.isUnaryOpExpression(node)) {
    return convertUnaryOpExpressionToTs(node, scope);
  }

  if (tex.isBinaryOpExpression(node)) {
    return convertBinaryOpExpressionToTs(node, scope);
  }

  if (tex.isTemplateExpression(node) || tex.isTemplateWrapExpression(node)) {
    return convertTemplateExpressionToTs(node, scope);
  }

  if (tex.isObjectExpression(node)) {
    return convertObjectExpressionToTs(node, scope);
  }

  if (tex.isFunctionCallExpression(node)) {
    return convertFunctionCallExpressionToTs(node, scope);
  }

  if (tex.isIndexExpression(node)) {
    return convertIndexExpressionToTs(node, scope);
  }

  if (tex.isSplatExpression(node)) {
    return convertSplatExpressionToTs(node, scope);
  }

  if (tex.isConditionalExpression(node)) {
    return convertConditionalExpressionToTs(node, scope);
  }

  if (tex.isTupleExpression(node)) {
    return convertTupleExpressionToTs(node, scope);
  }

  if (tex.isRelativeTraversalExpression(node)) {
    return convertRelativeTraversalExpressionToTs(node, scope);
  }

  if (tex.isForExpression(node)) {
    return convertForExpressionToTs(node, scope);
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
  input: string,
  scope: ResourceScope,
  targetType: () => AttributeType
): Promise<t.Expression> {
  logger.debug(`convertTerraformExpressionToTs(${input})`);
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
