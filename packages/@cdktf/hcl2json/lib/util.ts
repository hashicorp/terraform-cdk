/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

/**
 * This function is used to escape quotes within a string.
 *  Note: This is a really naive implmentation that will not be able to work with
 *    nested templates. However, nested templates require parsing, so we will
 *    only handle strings without nested templates for the moment
 * @param input The string to escape
 */
export function replaceQuotes(input: string): string {
  const fullyQuotedMatch = /^(\s*")(.*)("\s*)$/.exec(input);
  const hasTemplate = /(?<!\$)\$\{/.test(input);

  if (fullyQuotedMatch !== null && !hasTemplate) {
    return `${fullyQuotedMatch[1]}${fullyQuotedMatch[2].replace(/"/g, `\\"`)}${
      fullyQuotedMatch[3]
    }`;
  }

  return input;
}

/**
 * This function is used to wrap a string in quotes conditionally.
 *  - If the string is already quoted, it will be returned as-is.
 *  - If the string contains a newline, it will be wrapped in a heredoc.
 *  - If the string is a number, it will be returned as-is.
 *  - If the string is a boolean, it will be returned as-is.
 *  - If the string is a list or map, it will be returned as-is.
 *
 * @param input The string to wrap
 * @returns The wrapped string, and the offset of the cursor within the string
 *
 * @example
 * wrapTerraformExpression("foo") // { wrap: '"foo"', wrapOffset: 1 }
 * wrapTerraformExpression("foo\nbar") // { wrap: '<<EOE\nfoo\nbar\nEOE\n', wrapOffset: 5 }
 * wrapTerraformExpression("22") // { wrap: '22', wrapOffset: 0 }
 * wrapTerraformExpression("true") // { wrap: 'true', wrapOffset: 0 }
 * wrapTerraformExpression("[22, 10]") // { wrap: '[22, 10]', wrapOffset: 0 }
 * wrapTerraformExpression("{ foo = 22 }") // { wrap: '{ foo = 22 }', wrapOffset: 0 }
 */
export function wrapTerraformExpression(input: string): {
  wrap: string;
  wrapOffset: number;
} {
  input = replaceQuotes(input);

  if (!isNaN(Number(input))) {
    return { wrap: input, wrapOffset: 0 };
  }
  if (input === "true" || input === "false") {
    return { wrap: input, wrapOffset: 0 };
  }

  if (input.startsWith(`"`)) {
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
