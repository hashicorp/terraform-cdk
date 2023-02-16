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
    {
      code: `"['foo', 'bar']"`,
      type: "string",
      targetType: ["list", "string"],
      expectedCode: `cdktf.Token.asList("['foo', 'bar']")`,
    },
    {
      code: `"[1,2,3]"`,
      type: "string",
      targetType: ["list", "number"],
      expectedCode: `cdktf.Token.asNumberList("[1,2,3]")`,
    },
    // We don't have a token function for boolean lists, so we need to take an asAny
    {
      code: `"[true,false,true]"`,
      type: "string",
      targetType: ["list", "bool"],
      expectedCode: `cdktf.Token.asAny("[true,false,true]")`,
    },
    {
      code: `"{ foo: 'bar' }"`,
      type: "string",
      targetType: ["map", "string"],
      expectedCode: `cdktf.Token.asStringMap("{ foo: 'bar' }")`,
    },
    {
      code: `"{ foo: 1 }"`,
      type: "string",
      targetType: ["map", "number"],
      expectedCode: `cdktf.Token.asNumberMap("{ foo: 1 }")`,
    },

    {
      code: `"{ foo: true }"`,
      type: "string",
      targetType: ["map", "bool"],
      expectedCode: `cdktf.Token.asBooleanMap("{ foo: true }")`,
    },

    {
      code: `"{ foo: {bar: true} }"`,
      type: "string",
      targetType: ["map", ["map", "boolean"]],
      expectedCode: `cdktf.Token.asAnyMap("{ foo: {bar: true} }")`,
    },
  ])(
    "should use Token functions %p",
    ({ code, type, targetType, expectedCode }) => {
      expect(
        generateCode(
          coerceType(expressionify(code), type as any, targetType as any)
        )
      ).toEqual(expectedCode);
    }
  );

  it.each([
    {
      code: `aUserDefinedVariable.value`,
      type: "dynamic",
      targetType: "string",
      expectedCode: `aUserDefinedVariable.stringValue`,
    },
    {
      code: `aUserDefinedVariable.value`,
      type: "dynamic",
      targetType: "number",
      expectedCode: `aUserDefinedVariable.numberValue`,
    },
    {
      code: `aUserDefinedVariable.value`,
      type: "dynamic",
      targetType: ["list", "string"],
      expectedCode: `aUserDefinedVariable.listValue`,
    },
    {
      code: `aUserDefinedVariable.value`,
      type: "dynamic",
      targetType: "bool",
      expectedCode: `aUserDefinedVariable.booleanValue`,
    },
  ])(
    "should use TerraformVariables accessors %p",
    ({ code, type, targetType, expectedCode }) => {
      expect(
        generateCode(
          coerceType(expressionify(code), type as any, targetType as any)
        )
      ).toEqual(expectedCode);
    }
  );

  it.each([
    {
      code: `aUserDefinedTerraformLocal.value`,
      type: "dynamic",
      targetType: "string",
      expectedCode: `aUserDefinedTerraformLocal.stringValue`,
    },
    {
      code: `aUserDefinedTerraformLocal.value`,
      type: "dynamic",
      targetType: "number",
      expectedCode: `aUserDefinedTerraformLocal.numberValue`,
    },
    {
      code: `aUserDefinedTerraformLocal.value`,
      type: "dynamic",
      targetType: ["list", "string"],
      expectedCode: `aUserDefinedTerraformLocal.listValue`,
    },
    {
      code: `aUserDefinedTerraformLocal.value`,
      type: "dynamic",
      targetType: "bool",
      expectedCode: `aUserDefinedTerraformLocal.booleanValue`,
    },
  ])(
    "should use TerraformLocal accessors %p",
    ({ code, type, targetType, expectedCode }) => {
      expect(
        generateCode(
          coerceType(expressionify(code), type as any, targetType as any)
        )
      ).toEqual(expectedCode);
    }
  );
});
