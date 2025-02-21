/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
export type CodeMarker = {
  byte: number;
  line: number;
  column: number;
};

export type CodeRange = {
  end: CodeMarker;
  start: CodeMarker;
};

export type TerraformTraversalPartCommon = {
  segment: string;
  range: CodeRange;
};

export type TerraformNameTraversalPart = TerraformTraversalPartCommon & {
  type: "nameTraversal";
};
export type TerraformIndexTraversalPart = TerraformTraversalPartCommon & {
  type: "indexTraversal";
};

export type TerraformTraversalPart =
  | TerraformNameTraversalPart
  | TerraformIndexTraversalPart;

// Expression Meta Types
export type ExpressionMeta = {
  value: string;
};

export type ForExpressionMeta = ExpressionMeta & {
  keyVar: string;
  valVar: string;
  collectionExpression: string;
  conditionalExpression: string;
  valueExpression: string;
  keyExpression: string;
  groupedValue: boolean;
  openRange: CodeRange;
  openRangeValue: string;
  closeRange: CodeRange;
  closeRangeValue: string;
};

export type FunctionCallMeta = ExpressionMeta & {
  name: string;
  expandedFinalArgument: string;
  nameRange: CodeRange;
  openParenRange: CodeRange;
  closeParenRange: CodeRange;
  argsRanges: CodeRange[];
};

export type ScopeTraversalExpressionMeta = ExpressionMeta & {
  fullAccessor: string;
  traversal: TerraformTraversalPart[];
};

export type RelativeTraversalExpressionMeta = ExpressionMeta & {
  fullAccessor: string;
  traversal: TerraformTraversalPart[];
  sourceExpression: string;
};

export type LiteralValueExpressionMeta = ExpressionMeta & {
  type: string;
};

export type IndexExpressionMeta = ExpressionMeta & {
  keyExpression: string;
  collectionExpression: string;
};

export type SplatExpressionMeta = ExpressionMeta & {
  sourceExpression: string;
  eachExpression: string;
  anonSymbolExpression: string;
  markerRange: CodeRange;
};

export type ConditionalExpressionMeta = ExpressionMeta & {
  conditionExpression: string;
  trueExpression: string;
  falseExpression: string;
};

export type UnaryOpExpressionMeta = ExpressionMeta & {
  operator: string;
  valueExpression: string;
  symbolRange: CodeRange;
  returnType: string;
};

export type BinaryOpExpressionMeta = ExpressionMeta & {
  operator: string;
  returnType: string;
  lhsExpression: string;
  rhsExpression: string;
};

export type ObjectExpressionMeta = ExpressionMeta & {
  items: Record<string, string>;
};

export type MetaType =
  | ExpressionMeta
  | ScopeTraversalExpressionMeta
  | ForExpressionMeta
  | FunctionCallMeta
  | RelativeTraversalExpressionMeta
  | LiteralValueExpressionMeta
  | IndexExpressionMeta
  | SplatExpressionMeta
  | ConditionalExpressionMeta
  | UnaryOpExpressionMeta
  | BinaryOpExpressionMeta
  | ObjectExpressionMeta;

export type CommonExpressionAst = {
  children: ExpressionType[];
  range: CodeRange;
};

export type ExpressionAst = CommonExpressionAst & {
  type: string;
  meta: MetaType;
};

export type TemplateWrapExpression = CommonExpressionAst & {
  type: "templateWrap";
  meta: ExpressionMeta; // Doesn't have any special meta attributes
};

export type TemplateExpression = CommonExpressionAst & {
  type: "template";
  meta: ExpressionMeta; // Doesn't have any special meta attributes
};

export type TupleExpression = CommonExpressionAst & {
  type: "tuple";
  meta: ExpressionMeta; // Doesn't have any special meta attributes
};

export type ForExpression = CommonExpressionAst & {
  type: "for";
  meta: ForExpressionMeta;
};

export type FunctionCallExpression = CommonExpressionAst & {
  type: "function";
  meta: FunctionCallMeta;
};

export type ScopeTraversalExpression = CommonExpressionAst & {
  type: "scopeTraversal";
  meta: ScopeTraversalExpressionMeta;
};

export type RelativeTraversalExpression = CommonExpressionAst & {
  type: "relativeTraversal";
  meta: RelativeTraversalExpressionMeta;
};

export type LiteralValueExpression = CommonExpressionAst & {
  type: "literalValue";
  meta: LiteralValueExpressionMeta;
};

export type IndexExpression = CommonExpressionAst & {
  type: "index";
  meta: IndexExpressionMeta;
};

export type SplatExpression = CommonExpressionAst & {
  type: "splat";
  meta: SplatExpressionMeta;
};

export type ConditionalExpression = CommonExpressionAst & {
  type: "conditional";
  meta: ConditionalExpressionMeta;
};

export type UnaryOpExpression = CommonExpressionAst & {
  type: "unaryOp";
  meta: UnaryOpExpressionMeta;
};

export type BinaryOpExpression = CommonExpressionAst & {
  type: "binaryOp";
  meta: BinaryOpExpressionMeta;
};

export type ObjectExpression = CommonExpressionAst & {
  type: "object";
  meta: ObjectExpressionMeta;
};

export type ExpressionType =
  | ForExpression
  | TemplateWrapExpression
  | TemplateExpression
  | FunctionCallExpression
  | TupleExpression
  | ScopeTraversalExpression
  | RelativeTraversalExpression
  | LiteralValueExpression
  | IndexExpression
  | SplatExpression
  | ConditionalExpression
  | UnaryOpExpression
  | BinaryOpExpression
  | ObjectExpression;

export function isForExpression(ast: ExpressionType): ast is ForExpression {
  return ast.type === "for";
}

export function isTemplateWrapExpression(
  ast: ExpressionType,
): ast is TemplateWrapExpression {
  return ast.type === "templateWrap";
}

export function isTemplateExpression(
  ast: ExpressionType,
): ast is TemplateExpression {
  return ast.type === "template";
}

export function isFunctionCallExpression(
  ast: ExpressionType,
): ast is FunctionCallExpression {
  return ast.type === "function";
}

export function isScopeTraversalExpression(
  ast: ExpressionType,
): ast is ScopeTraversalExpression {
  return ast.type === "scopeTraversal";
}

export function isRelativeTraversalExpression(
  ast: ExpressionType,
): ast is RelativeTraversalExpression {
  return ast.type === "relativeTraversal";
}

export function isLiteralValueExpression(
  ast: ExpressionType,
): ast is LiteralValueExpression {
  return ast.type === "literalValue";
}

export function isIndexExpression(ast: ExpressionType): ast is IndexExpression {
  return ast.type === "index";
}

export function isSplatExpression(ast: ExpressionType): ast is SplatExpression {
  return ast.type === "splat";
}

export function isConditionalExpression(
  ast: ExpressionType,
): ast is ConditionalExpression {
  return ast.type === "conditional";
}

export function isUnaryOpExpression(
  ast: ExpressionType,
): ast is UnaryOpExpression {
  return ast.type === "unaryOp";
}

export function isBinaryOpExpression(
  ast: ExpressionType,
): ast is BinaryOpExpression {
  return ast.type === "binaryOp";
}

export function isTupleExpression(ast: ExpressionType): ast is TupleExpression {
  return ast.type === "tuple";
}

export function isObjectExpression(
  part: ExpressionType,
): part is ObjectExpression {
  return part.type === "object";
}

export function isNameTraversalPart(
  part: TerraformTraversalPart,
): part is TerraformNameTraversalPart {
  return part.type === "nameTraversal";
}

export function isIndexTraversalPart(
  part: TerraformTraversalPart,
): part is TerraformIndexTraversalPart {
  return part.type === "indexTraversal";
}

export function getChildWithValue(node: ExpressionAst, value: string) {
  if (!node.children) {
    return null;
  }

  return node.children.find((child) => {
    if (!child.meta) return false;
    return child.meta.value === value;
  });
}
