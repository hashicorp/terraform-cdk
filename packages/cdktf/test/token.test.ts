import { Token } from "../lib/tokens";
import { resolve } from "../lib/_tokens";
import { Testing, TerraformStack, TerraformElement } from "../lib";

export class Foo {
  public aString?: string;
}

test("Token as string with string", () => {
  const token = Token.asString("I'm a string");
  expect(token).toEqual("I'm a string");
});

test("Token string is resolved", () => {
  const token = Token.asString("I'm a string");
  expect(Token.isUnresolved(token)).toBe(false)
});

test("Token as string", () => {
  const foo = {
    yeah: "I'm a string"
  };

  const token = Token.asString(foo);
  expect(token).toEqual("${Token[TOKEN.0]}");
});

test("Token is unresolved", () => {
  const foo = {
    yeah: "I'm a string"
  };

  const token = Token.asString(foo);
  expect(Token.isUnresolved(token)).toBe(true)
});

test("Token as string resolved", () => {
  const foo = {
    yeah: "I'm a string"
  };
  const token = Token.asString(foo);

  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  expect(resolve(new TerraformElement(stack, "element"), token))
    .toMatchInlineSnapshot(`
    Object {
      "yeah": "I'm a string",
    }
  `);
});
