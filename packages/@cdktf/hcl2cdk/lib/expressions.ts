import * as t from "@babel/types";
import { camelCase } from "change-case";

export type Reference = {
  start: number;
  end: number;
  referencee: { id: string; full: string }; // identifier for resource
};

export function extractReferencesFromExpression(input: string): Reference[] {
  if (input.includes(".*")) {
    throw new Error(
      `Unsupported Terraform feature found: Splat operations (resource.name.*.property) are not yet supported: ${input}`
    );
  }

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

    const [start, ...referenceParts] = spot.split(".");

    const id = (
      start === "data"
        ? [start, referenceParts[0], referenceParts[1]]
        : [start, referenceParts[0]]
    ).join(".");

    const ref: Reference = {
      start: input.indexOf(spot),
      end: input.indexOf(spot) + spot.length,
      referencee: { id, full: spot },
    };
    return [...carry, ref];
  }, [] as Reference[]);
}

function referenceToAst(ref: Reference) {
  const [resource, name, ...selector] = ref.referencee.full.split(".");

  const variableReference = t.identifier(
    camelCase(
      ["var", "local", "module"].includes(resource)
        ? name
        : [resource, name].join("_")
    )
  );

  return selector.reduce(
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
}

export function referencesToAst(
  input: string,
  refs: Reference[]
): t.Expression {
  if (refs.length === 0) {
    return t.stringLiteral(input);
  }

  const refAsts = refs
    .sort((a, b) => a.start - b.start)
    .map((ref) => ({ ref, ast: referenceToAst(ref) }));

  if (refs.length === 1) {
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
        t.templateElement({ raw: input.substring(lastEnd, ref.start - 1) })
      );
    }

    expressions.push(ast);

    lastEnd = ref.end;
  });

  // trailing quasi
  quasis.push(
    t.templateElement({ raw: input.substring(lastEnd, input.length - 1) }, true)
  );

  return t.templateLiteral(quasis, expressions);
}
