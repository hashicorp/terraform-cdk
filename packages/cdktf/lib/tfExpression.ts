type Reference = { __type: "reference"; identifier: string };
export function ref(identifier: string): Reference {
  return { __type: "reference", identifier };
}

type FunctionCall = { __type: "call"; name: string; args: Expression[] };
export function call(name: string, args: Expression[]): FunctionCall {
  return { __type: "call", name, args };
}

export type Expression = Reference | FunctionCall | string | number | boolean;

function render(expression: Expression): string {
  if (typeof expression !== "object") {
    return expression.toString();
  }

  switch (expression.__type) {
    case "reference":
      return expression.identifier;
    case "call":
      return `${expression.name}(${expression.args.map(render).join(", ")})`;
    default:
      throw new Error("Unknown expression type: " + expression);
  }
}

export function renderExpression(expression: Expression): string {
  if (typeof expression === "object" && "__type" in expression) {
    return `\${${render(expression)}}`;
  }

  return expression.toString();
}
