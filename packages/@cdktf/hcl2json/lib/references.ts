// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

import {
  ExpressionAst,
  ScopeTraversalExpressionMeta,
  TerraformTraversalPart,
  ForExpressionMeta,
  getChildWithValue,
} from "./syntax-tree";

export type Reference = {
  value: string;
  startPosition: number;
  endPosition: number;
};

export function traversalToReference(
  traversalExpression: ExpressionAst,
  localVariables?: string[],
): Reference | null {
  const meta = traversalExpression.meta as ScopeTraversalExpressionMeta;

  // We do not want to include property access through brackets here
  // although it is technically a traversal / reference
  function onlyTakeTraversalPartsUntilFirstBracketPropertyAccess(
    traversals: TerraformTraversalPart[],
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
    meta.traversal,
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
  localVariables?: string[],
): Reference[] {
  if (!entry) {
    return [];
  }

  switch (entry.type) {
    case "scopeTraversal": {
      // For traversals within a for expression,
      // we want to ignore the local variables of the for expression
      const reference = traversalToReference(entry, localVariables);
      if (reference) return [reference];
      return [];
    }

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
          getChildWithValue(entry, meta.collectionExpression),
          additionalLocalVariables,
        ),
        ...findAllReferencesInAst(
          input,
          getChildWithValue(entry, meta.conditionalExpression),
          additionalLocalVariables,
        ),
      ];
    }
    default:
      return entry.children
        .map((child) => findAllReferencesInAst(input, child, localVariables))
        .flat();
  }
}
