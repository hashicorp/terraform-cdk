// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

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

export type ExpressionAst = {
  type: string;
  meta: ExpressionMeta | ScopeTraversalExpressionMeta | ForExpressionMeta;
  children: ExpressionAst[];
  range: CodeRange;
};

export type Reference = {
  value: string;
  startPosition: number;
  endPosition: number;
};

function findChildWithValue(expr: ExpressionAst, value: string) {
  return expr.children.find((child) => {
    return child.meta.value === value;
  });
}

export function traversalToReference(
  traversalExpression: ExpressionAst,
  localVariables?: string[]
): Reference | null {
  const meta = traversalExpression.meta as ScopeTraversalExpressionMeta;

  // We do not want to include property access through brackets here
  // although it is technically a traversal / reference
  function onlyTakeTraversalPartsUntilFirstBracketPropertyAccess(
    traversals: TerraformTraversalPart[]
  ) {
    let filtered = [];
    let index = 0;

    for (const traversal of traversals) {
      if ("segment" in traversal) {
        if (index === 0) {
          // We are at the first traversal, check if it is a local variable
          if (localVariables?.includes(traversal.segment)) {
            // We reached a local variable, stop
            return [];
          }
        }
        filtered.push(traversal);
      } else {
        // We reached a bracket, stop
        return filtered;
      }
    }

    return filtered;
  }

  const filteredParts = onlyTakeTraversalPartsUntilFirstBracketPropertyAccess(
    meta.traversal
  );

  if (filteredParts.length === 0) {
    return null;
  }

  const startPosition = filteredParts[0].range.start.byte;
  const endPosition = filteredParts[filteredParts.length - 1].range.end.byte;

  return {
    value: filteredParts.map((part) => part.segment).join("."),
    startPosition,
    endPosition,
  };
}

export function findAllReferencesInAst(
  input: string,
  entry: ExpressionAst | undefined | null,
  localVariables?: string[]
): Reference[] {
  if (!entry) {
    return [];
  }

  switch (entry.type) {
    case "scopeTraversal":
      // For traversals within a for expression,
      // we want to ignore the local variables of the for expression
      const reference = traversalToReference(entry, localVariables);
      if (reference) return [reference];
      return [];

    case "for": {
      const meta = entry.meta as ForExpressionMeta;
      const additionalLocalVariables = [
        meta.keyVar,
        meta.valVar,
        ...(localVariables || []),
      ];

      return [
        ...findAllReferencesInAst(
          input,
          findChildWithValue(entry, meta.collectionExpression),
          additionalLocalVariables
        ),
        ...findAllReferencesInAst(
          input,
          findChildWithValue(entry, meta.conditionalExpression),
          additionalLocalVariables
        ),
      ];
    }
    default:
      return entry.children
        .map((child) => findAllReferencesInAst(input, child, localVariables))
        .flat();
  }
}
