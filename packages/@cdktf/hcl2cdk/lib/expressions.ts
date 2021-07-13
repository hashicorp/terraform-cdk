import * as t from "@babel/types";
import { camelCase } from "change-case";

export type Reference = {
  start: number;
  end: number;
  referencee: { id: string; full: string }; // identifier for resource
  useFqn?: boolean;
};

const PROPERTY_ACCESS_REGEX = /\[.*\]/;

export function extractReferencesFromExpression(
  input: string,
  nodeIds: readonly string[],
  scopedIds: readonly string[] = [] // dynamics introduce new scoped variables that are not the globally accessible ids
): Reference[] {
  const isDoubleParanthesis = input.startsWith("${{");
  if (!input.startsWith("${")) {
    return [];
  }

  const start = isDoubleParanthesis ? 3 : 2;
  const end = isDoubleParanthesis ? input.length - 2 : input.length - 1;
  let expressionString = input.substring(start, end);

  if (
    expressionString.includes("for") &&
    expressionString.includes("in") &&
    expressionString.includes(":")
  ) {
    // for name, user in var.users : user.role => name...
    // We just want the var.users part (that could be an expression)
    expressionString = expressionString.substring(
      expressionString.indexOf("in") + 2,
      expressionString.indexOf(":")
    );
  }

  const delimiters = [
    "(",
    ",",
    ")",
    ".*",
    PROPERTY_ACCESS_REGEX,
    " ",
    "!",
    "-",
    "*",
    "/",
    "%",
    ">",
    "<",
    "=",
    "&&",
    "||",
    "?",
  ];

  let possibleVariableSpots = [expressionString];

  delimiters.forEach((delimiter) => {
    possibleVariableSpots = possibleVariableSpots.reduce(
      (carry, str) => [...carry, ...str.split(delimiter)],
      [] as string[]
    );
  });

  return possibleVariableSpots.reduce((carry, spot) => {
    // no reference
    if (
      !spot.includes(".") || // just a literal
      spot.startsWith(".") || // dangling property access
      spot.endsWith("...") || // spread (likely in for loop)
      spot.startsWith("count.") || // special count variable
      spot.startsWith("each.") // special each variable
    ) {
      return carry;
    }

    const referenceParts = spot.split(".");

    const corespondingNodeId = [...nodeIds, ...scopedIds].find((id) => {
      const parts = id.split(".");
      const matchesFirst = parts[0] === referenceParts[0];
      const matchesFirstTwo =
        matchesFirst && (parts[1] === referenceParts[1] || parts.length === 1);

      return (
        matchesFirstTwo &&
        (parts[0] === "data" ? parts[2] === referenceParts[2] : true)
      );
    });

    if (!corespondingNodeId) {
      throw new Error(
        `Found a reference that is unknown: ${input} was not found in ${JSON.stringify(
          nodeIds
        )} with temporary values ${JSON.stringify(scopedIds)}`
      );
    }

    if (scopedIds.includes(corespondingNodeId)) {
      return carry;
    }

    const start = input.indexOf(spot);
    const end = start + spot.length;

    const ref: Reference = {
      start,
      end,
      referencee: { id: corespondingNodeId, full: spot },
      useFqn: input.substr(end + 1, 1) === "*" || input.substr(end, 1) === "[", // If the following character is a * (splat) we need to use the FQN
    };
    return [...carry, ref];
  }, [] as Reference[]);
}

export function referenceToVariableName(ref: Reference): string {
  const [resource, name] = ref.referencee.full.split(".");
  return variableName(resource, name);
}

export function variableName(resource: string, name: string): string {
  return camelCase(
    ["var", "local", "module"].includes(resource)
      ? name
      : [resource, name].join("_")
  );
}

export function referenceToAst(ref: Reference) {
  const [resource, _name, ...selector] = ref.referencee.full.split(".");

  const variableReference = t.identifier(
    camelCase(referenceToVariableName(ref))
  );

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

  if (ref.useFqn || selector.length === 0) {
    return t.memberExpression(accessor, t.identifier("fqn"));
  } else {
    return accessor;
  }
}

export function referencesToAst(
  input: string,
  refs: Reference[],
  scopedIds: readonly string[] = [] // dynamics introduce new scoped variables that are not the globally accessible ids
): t.Expression {
  if (refs.length === 0) {
    return t.stringLiteral(input);
  }

  const refAsts = refs
    .sort((a, b) => a.start - b.start)
    .filter((ref) => !scopedIds.includes(ref.referencee.id))
    .map((ref) => ({ ref, ast: referenceToAst(ref) }));

  if (
    refAsts.length === 1 &&
    refAsts[0].ref.start === "${".length &&
    refAsts[0].ref.end === input.length - "}".length
  ) {
    return refAsts[0].ast;
  }

  // string parts in the template string
  const quasis: t.TemplateElement[] = [];
  // dynamic values in the template string
  const expressions: t.Expression[] = [];

  let lastEnd = 0;

  refAsts.forEach(({ ref, ast }) => {
    // leading quasi
    if (ref.start !== lastEnd) {
      quasis.push(
        t.templateElement({
          raw: input.substring(lastEnd, ref.start).replace("$", "\\$"),
        })
      );
    }

    expressions.push(ast);

    lastEnd = ref.end;
  });

  // trailing quasi
  quasis.push(
    t.templateElement({ raw: input.substring(lastEnd, input.length) }, true)
  );

  return t.templateLiteral(quasis, expressions);
}
