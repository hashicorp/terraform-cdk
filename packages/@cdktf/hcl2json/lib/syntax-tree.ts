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

export type TerraformTraversalPart = {
  segment: string;
  range: CodeRange;
};

// Expression Meta Types
export type ExpressionMeta = {
  value: string;
};

export type ForExpressionMeta = ExpressionMeta & {
  keyVar: string;
  valVar: string;
  collectionExpression: string;
  conditionalExpression: string;
  valueExpressionRange: CodeRange;
  valueHasEllipses: boolean;
  openRange: CodeRange;
  closeRange: CodeRange;
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
  symbolRange: CodeRange;
  returnType: string;
};

export type BinaryOpExpressionMeta = ExpressionMeta & {
  operator: string;
  returnType: string;
  lhsExpression: string;
  rhsExpression: string;
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
  | BinaryOpExpressionMeta;

export type ExpressionAst = {
  type: string;
  meta: MetaType;
  children: ExpressionAst[];
  range: CodeRange;
};
