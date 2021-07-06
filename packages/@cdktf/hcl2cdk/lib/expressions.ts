import * as t from "@babel/types";
import { camelCase } from "change-case";

type Reference = {
  start: number;
  end: number;
  referencee: string; // identifier for resource
};

export function extractReferencesFromExpression(input: string): Reference[] {
  if (!input.startsWith("${")) {
    return [];
  }

  const start = 2;
  const end = input.length - 1;
  const expressionString = input.substring(start, end);

  const parts = expressionString.split(".");
  if (parts.length <= 1) {
    return [];
  }

  return [
    {
      start,
      end,
      referencee: expressionString,
    },
  ];
}

function referenceToAst(ref: Reference) {
  const [resource, name, ...selector] = ref.referencee.split(".");

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

  if (input.includes("(")) {
    throw new Error(
      `Unsupported Terraform feature found: Functions are not yet supported: ${input}`
    );
  }

  if (input.includes("?")) {
    throw new Error(
      `Unsupported Terraform feature found: Conditionals are not yet supported: ${input}`
    );
  }

  if (input.includes("for") && input.includes("in") && input.includes("=>")) {
    throw new Error(
      `Unsupported Terraform feature found: For expressions are not yet supported: ${input}`
    );
  }

  if (
    ["!", "-", "+", "-", ">", "<", "&&", "||"].some((op) => input.includes(op))
  ) {
    throw new Error(
      `Unsupported Terraform feature found: Arithmetics are not yet supported: ${input}`
    );
  }

  if (input.includes("*")) {
    throw new Error(
      `Unsupported Terraform feature found: Splat operations (resource.name.*.property) are not yet supported: ${input}`
    );
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

  refAsts.forEach(({ ref, ast }, index) => {
    // leading quasi
    if (index === 0 && ref.start !== lastEnd) {
      quasis.push(
        t.templateElement({ raw: input.substring(lastEnd, ref.start - 1) })
      );
    }

    expressions.push(ast);

    lastEnd = ref.end;
    // trailing quasi
    if (index === refs.length && ref.end !== input.length) {
      quasis.push(
        t.templateElement({ raw: input.substring(0, ref.start - 1) }, true)
      );
    }
  });

  return t.templateLiteral(quasis, expressions);
}
