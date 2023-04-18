export function wrapTerraformExpression(input: string): {
  wrap: string;
  wrapOffset: number;
} {
  if (!isNaN(Number(input))) {
    return { wrap: input, wrapOffset: 0 };
  }
  if (input === "true" || input === "false") {
    return { wrap: input, wrapOffset: 0 };
  }

  if (input.startsWith(`"`) || input.startsWith("'")) {
    if (input.indexOf("\n") >= 0) {
      const trimWrapped = input.substring(1, input.length - 1);
      return {
        wrap: `<<EOE\n${trimWrapped}\nEOE\n`,
        wrapOffset: 5,
      };
    }
    return { wrap: input, wrapOffset: 0 };
  }

  if (input.startsWith("[") || input.startsWith("{")) {
    return { wrap: input, wrapOffset: 0 };
  }

  if (input.startsWith("<<")) {
    // For Heredocs, we need to ensure that the string ends with an empty newline as
    // the HCL parser doesn't find the ending token otherwise
    if (!input.endsWith("\n")) {
      return { wrap: input + "\n", wrapOffset: 0 };
    }

    return { wrap: input, wrapOffset: 0 };
  }

  return { wrap: `"${input}"`, wrapOffset: 1 };
}
