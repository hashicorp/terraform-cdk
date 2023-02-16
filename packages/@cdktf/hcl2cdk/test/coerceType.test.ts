// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { coerceType } from "../lib/generation";
import template from "@babel/template";
import generate from "@babel/generator";

// TODO: look into template.expression

function expressionify(code: string) {
  return (template.ast(code) as any).expression;
}
function generateCode(ast: any) {
  return generate(ast).code;
}

describe("coerceType", () => {
  it.each([
    { code: `"hello-world"`, type: "string", targetType: undefined },
    { code: `"hello-world"`, type: "string", targetType: "string" },
  ])("should change nothing for %p ", ({ code, type, targetType }) => {
    expect(
      generateCode(
        coerceType(expressionify(code), type as any, targetType as any)
      )
    ).toEqual(code);
  });

  it.each([
    {
      code: `"300"`,
      type: "string",
      targetType: "number",
      expectedCode: `cdktf.Token.asNumber("300")`,
    },
    {
      code: `300`,
      type: "number",
      targetType: "string",
      expectedCode: `cdktf.Token.asString(300)`,
    },
  ])(
    "should use Token functions %p ",
    ({ code, type, targetType, expectedCode }) => {
      expect(
        generateCode(
          coerceType(expressionify(code), type as any, targetType as any)
        )
      ).toEqual(expectedCode);
    }
  );
});
