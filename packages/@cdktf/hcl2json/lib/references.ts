// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

export type CodeMarker = {
  byte: number;
  line: number;
  column: number;
};

export type Range = {
  end: CodeMarker;
  start: CodeMarker;
};

export type TerraformTraversalPart = {
  segment: string;
  range: Range;
};

export type ExpressionMeta = {
  value: string;
};

export type ScopeTraversalExpressionMeta = ExpressionMeta & {
  fullAccessor: string;
  traversal: TerraformTraversalPart[];
};

export type ForExpressionMeta = ExpressionMeta & {
  keyVar: string;
  valVar: string;
  collectionExpression: string;
  conditionalExpression: string;
};

export type ExpressionAst = {
  type: string;
  meta: ExpressionMeta | ScopeTraversalExpressionMeta | ForExpressionMeta;
  children: ExpressionAst[];
  range: Range;
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
  input: string,
  traversalExpression: ExpressionAst,
  localVariables?: string[]
): Reference | null {
  const lines = input.split("\n");
  const lineLength = lines.map((line) => line.length);
  const meta = traversalExpression.meta as ScopeTraversalExpressionMeta;

  function position(marker: CodeMarker) {
    const newlineChar = 1;
    return (
      lineLength
        .slice(0, marker.line)
        .reduce((a, b) => a + b + newlineChar, lines.length === 1 ? 0 : -1) +
      marker.column
    );
  }

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

  const startPosition = position(filteredParts[0].range.start);
  const endPosition = position(
    filteredParts[filteredParts.length - 1].range.end
  );

  return {
    value: filteredParts.map((part) => part.segment).join("."),
    startPosition,
    endPosition,
  };
}

export function findAllReferencesInAst(
  input: string,
  entry: ExpressionAst | undefined | null,
  parent?: ExpressionAst
): Reference[] {
  if (!entry) {
    return [];
  }

  switch (entry.type) {
    case "scopeTraversal":
      // For traversals within a for expression,
      // we want to ignore the local variables of the for expression
      if (parent?.type === "for") {
        const meta = parent.meta as ForExpressionMeta;
        const reference = traversalToReference(input, entry, [
          meta.keyVar,
          meta.valVar,
        ]);
        if (reference) return [reference];
        return [];
      }
      const reference = traversalToReference(input, entry);
      if (reference) return [reference];
      return [];

    case "for": {
      const meta = entry.meta as ForExpressionMeta;
      return [
        ...findAllReferencesInAst(
          input,
          findChildWithValue(entry, meta.collectionExpression),
          entry
        ),
        ...findAllReferencesInAst(
          input,
          findChildWithValue(entry, meta.conditionalExpression),
          entry
        ),
      ];
    }
    default:
      return entry.children
        .map((child) => findAllReferencesInAst(input, child))
        .flat();
  }
}
