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
  it("should do nothing if the target type is undefined", () => {
    const code = `"hello-world"`;
    expect(
      generateCode(coerceType(expressionify(code), "string", undefined))
    ).toEqual(code);
  });

  it("should do nothing if the target type is already correct", () => {
    const code = `"hello-world"`;
    expect(
      generateCode(coerceType(expressionify(code), "string", "string"))
    ).toEqual(code);
  });

  it("should add a Token.asNumber if a string is expected to be a number", () => {
    const code = `"300"`;
    expect(
      generateCode(coerceType(expressionify(code), "string", "number"))
    ).toEqual(`cdktf.Token.asNumber(${code})`);
  });

  it("should add a Token.asString if a number is expected to be a string", () => {
    const code = `300`;
    expect(
      generateCode(coerceType(expressionify(code), "number", "string"))
    ).toEqual(`cdktf.Token.asString(${code})`);
  });
});
