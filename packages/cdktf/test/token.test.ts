/* eslint-disable @typescript-eslint/no-unused-vars */
import { IResolveContext, Lazy, Token, IResolvable } from "../lib/tokens";
import { resolve } from "../lib/_tokens";
import { Testing, TerraformStack, TerraformElement } from "../lib";
import { captureStackTrace } from "../lib/tokens/private/stack-trace";

export class Foo {
  public aString?: string;
}
class FnJoin implements IResolvable {
  public readonly creationStack: string[];

  private readonly delimiter: string;
  private readonly listOfValues: any[];

  constructor(delimiter: string, listOfValues: any[]) {
    if (listOfValues.length === 0) {
      throw new Error('FnJoin requires at least one value to be provided');
    }

    this.delimiter = delimiter;
    this.listOfValues = listOfValues;
    this.creationStack = captureStackTrace();
  }

  public resolve(context: IResolveContext): any {
    if (Token.isUnresolved(this.listOfValues)) {
      return `join("${this.delimiter}", ${this.listOfValues})`;
    }
    const resolved = this.resolveValues(context);
    if (resolved.length === 1) {
      return resolved[0];
    }
    return `join("${this.delimiter}", [${resolved}])`;
  }

  public toString() {
    return Token.asString(this, { displayHint: 'Fn::Join' });
  }

  public toJSON() {
    return '<Fn::Join>';
  }

  private resolveValues(context: IResolveContext) {
    return this.listOfValues.map(x => context.resolve(x));
  }
}

test("Token as string with string", () => {
  const token = Token.asString("I'm a string");
  expect(token).toEqual("I'm a string");
});

test("Token string is resolved", () => {
  const token = Token.asString("I'm a string");
  expect(Token.isUnresolved(token)).toBe(false);
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
  expect(Token.isUnresolved(token)).toBe(true);
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

test("Token as list computed", () => {
  const token = Token.asList("${split(foo.bar.baz, ',')}");
  expect(token).toEqual(["#{Token[TOKEN.3]}"]);
});

test("Token as list of strings", () => {
  const token = Token.asList(["a", "b", "c"]);
  expect(token).toEqual(["a", "b", "c"]);
});

test("Token as mixed list", () => {
  const token = Token.asList(["a", 1, { foo: "bar" }]);
  expect(token).toEqual(["#{Token[TOKEN.4]}"]);
});

test("Token as number", () => {
  const token = Token.asNumber(1354235);
  expect(token).toEqual(1354235);
});

test("Token as number", () => {
  const token = Token.asNumber(1354235);
  expect(token).toEqual(1354235);
});

test("Token as computed number", () => {
  const token = Token.asNumber("${foo.bar.c}");
  expect(token).toEqual(-1.888154589708751e289);
});

test("Token as embedded string", () => {
  const foo = {
    yeah: "I'm a string"
  };

  const token = Token.asString(foo);
  expect(`A text enclosing the ${token}.`).toEqual(
    "A text enclosing the ${Token[TOKEN.6]}."
  );
});

test("Token as token list string", () => {
  const foo = {
    yeah: "I'm a string"
  };

  const token = Token.asString(foo);
  expect(Token.asList(["a", token])).toEqual(["a", "${Token[TOKEN.7]}"]);
});

test("Token as token list mixed", () => {
  const foo = {
    yeah: "I'm a string"
  };

  const token = Token.asString(foo);
  expect(Token.asList(["a", token, 1])).toEqual(["#{Token[TOKEN.9]}"]);
});

test("Resolve Token as token list mixed", () => {
  const foo = {
    yeah: "I'm a string"
  };

  const token = Token.asString(foo);

  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  expect(resolve(stack, Token.asList(["a", token, 1]))).toMatchInlineSnapshot(`
    Array [
      "a",
      Object {
        "yeah": "I'm a string",
      },
      1,
    ]
  `);
});

test("Resolved lazy list", () => {
  const lazyToken = Lazy.anyValue({
    produce: (_context: IResolveContext) => ({ some: "return value" })
  });

  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  expect(resolve(stack, lazyToken)).toMatchInlineSnapshot(`
    Object {
      "some": "return value",
    }
  `);
});

test("Lazy list", () => {
  const lazyToken = Lazy.anyValue({
    produce: () => ({ some: "another return value" })
  });

  expect(lazyToken.toString()).toEqual('${Token[TOKEN.12]}')
});

test("Token as any", () => {
  const foo = {
    yeah: "I'm anything"
  };

  const token = Token.asAny(foo)
  expect(token.toString()).toEqual('${Token[TOKEN.13]}');
  // Stacktrace where this was created - not the TerraformStack
  expect(token.creationStack).toBeInstanceOf(Array)
});

test("Boolean tokens are not really possible", () => {
  // urgh :)
  const token = Token.asAny(false) as any as boolean

  // just `token` doesn't work for some reason - "serializes to the same string"
  expect(token.toString()).toEqual('${Token[TOKEN.14]}')
});

test("Combine an Intrinsic Function with tokens", () => {
  const token = Lazy.stringValue({
    produce: () => ('${my.computed.attribute}')
  });

  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  expect(resolve(stack, new FnJoin(',', ["a", token, 1]))).toEqual('join(",", [a,${my.computed.attribute},1])')
});

test("Combine an Intrinsic Function with tokens as string", () => {
  const token = Lazy.stringValue({
    produce: () => ('${my.computed.attribute}')
  });

  expect(new FnJoin(',', ["a", token, 1]).toString()).toEqual('${Token[Fn::Join.17]}')
});

test("unexpected list behaviour since one can mess it up", () => {
  const foo = {
    yeah: "I'm a string"
  };

  const token = Token.asString(foo);

  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  const list = Token.asList(["a", token, 1])

  list.push('yueah')
  const newList = list.map((i => Token.isUnresolved(i) ? i : 'replaced value'))

  expect(resolve(stack, newList)).toMatchInlineSnapshot(`
    Array [
      "replaced value",
      "replaced value",
    ]
  `);
});

test("throw an errr", () => {
  const foo = {
    yeah: "I'm a string"
  };

  const token = Token.asString(foo);

  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  const list = Token.asList(["a", token, 1])

  list.push('yueah')

  expect(() => resolve(stack, list)).toThrowError("Cannot add elements to list token, got: #{Token[TOKEN.21]},yueah")
});