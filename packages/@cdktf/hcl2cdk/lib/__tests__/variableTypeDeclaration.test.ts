// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import generate from "@babel/generator";
import { variableTypeDeclaration } from "../generation";

function generateCode(ast: any) {
  return generate(ast).code;
}

describe("variableTypeDeclaration", () => {
  it("should work with string", () => {
    expect(
      generateCode(variableTypeDeclaration("string"))
    ).toMatchInlineSnapshot(`"cdktf.VariableType.STRING;"`);
  });
  it("should work with numbers", () => {
    expect(
      generateCode(variableTypeDeclaration("number"))
    ).toMatchInlineSnapshot(`"cdktf.VariableType.NUMBER;"`);
  });
  it("should work with booleans", () => {
    expect(generateCode(variableTypeDeclaration("bool"))).toMatchInlineSnapshot(
      `"cdktf.VariableType.BOOL;"`
    );
  });
  it("should work with any type", () => {
    expect(generateCode(variableTypeDeclaration("any"))).toMatchInlineSnapshot(
      `"cdktf.VariableType.ANY;"`
    );
  });

  it("should work with lists of numbers, string, bool", () => {
    expect(
      generateCode(variableTypeDeclaration("list(number)"))
    ).toMatchInlineSnapshot(`"cdktf.VariableType.LIST_NUMBER;"`);
  });
  it("should work with maps of numbers, string, bool", () => {
    expect(
      generateCode(variableTypeDeclaration("map(bool)"))
    ).toMatchInlineSnapshot(`"cdktf.VariableType.MAP_BOOL;"`);
  });
  it("should work with sets of numbers string, bool", () => {
    expect(
      generateCode(variableTypeDeclaration("set(string)"))
    ).toMatchInlineSnapshot(`"cdktf.VariableType.SET_STRING;"`);
  });
  it("does some complex stuff", () => {
    expect(
      generateCode(
        variableTypeDeclaration(`
        list(list(string))`)
      )
    ).toMatchInlineSnapshot(
      `"cdktf.VariableType.list(cdktf.VariableType.LIST_STRING);"`
    );
  });
  it("does some complex stuff with sets", () => {
    expect(
      generateCode(
        variableTypeDeclaration(`
        set(list(string))`)
      )
    ).toMatchInlineSnapshot(
      `"cdktf.VariableType.set(cdktf.VariableType.LIST_STRING);"`
    );
  });
  it("does some complex stuff with maps", () => {
    expect(
      generateCode(
        variableTypeDeclaration(`
        map(list(string))`)
      )
    ).toMatchInlineSnapshot(
      `"cdktf.VariableType.map(cdktf.VariableType.LIST_STRING);"`
    );
  });
  it("does some complex stuff with tuples", () => {
    expect(
      generateCode(
        variableTypeDeclaration(`
        tuple([string, bool, bool])`)
      )
    ).toMatchInlineSnapshot(
      `"cdktf.VariableType.tuple(cdktf.VariableType.STRING, cdktf.VariableType.BOOL, cdktf.VariableType.BOOL);"`
    );
  });
  it.only("does some complex stuff with tuples of a tuple", () => {
    expect(
      generateCode(
        variableTypeDeclaration(`
        tuple([tuple([string, bool, bool]), number])`)
      )
    ).toMatchInlineSnapshot(
      `"cdktf.VariableType.tuple(cdktf.VariableType.tuple(cdktf.VariableType.STRING, cdktf.VariableType.BOOL, cdktf.VariableType.BOOL), cdktf.VariableType.NUMBER);"`
    );
  });
});
