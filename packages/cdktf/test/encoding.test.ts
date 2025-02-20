// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { IResolvable, IResolveContext } from "../lib";
import { TokenString } from "../lib/tokens/private/encoding";

class TestResolvable implements IResolvable {
  creationStack: string[];
  resolve(_context: IResolveContext) {}
  toString(): string {
    return "test";
  }

  constructor() {
    this.creationStack = [];
  }
}

test("extract one token", () => {
  const tokenString = TokenString.forString("${TfToken[TOKEN.0]}", false);
  const resolvable = new TestResolvable();

  const splitTokens = tokenString.split(() => resolvable);
  expect(splitTokens.firstToken).toEqual(resolvable);
});

test("extract literals and token", () => {
  const tokenString = TokenString.forString(
    "foo-${TfToken[TOKEN.0]}-bar",
    false,
  );
  const resolvable = new TestResolvable();

  const splitTokens = tokenString.split(() => resolvable);

  expect(splitTokens.tokens[0]).toEqual(resolvable);
  expect(splitTokens.literals).toEqual(
    expect.arrayContaining(["foo-", "-bar"]),
  );
});

test("extract escapes without tokens", () => {
  const tokenString = TokenString.forString("${10}", true);
  const resolvable = new TestResolvable();

  const splitTokens = tokenString.split(() => resolvable);

  expect(splitTokens.tokens).toHaveLength(0);
  expect(splitTokens.escapes).toEqual(expect.arrayContaining(["${", "}"]));
  expect(splitTokens.literals).toEqual(expect.arrayContaining(["10"]));
});

test("extract multiple escapes without tokens", () => {
  const tokenString = TokenString.forString('${"test-${10}"}', true);
  const resolvable = new TestResolvable();

  const splitTokens = tokenString.split(() => resolvable);

  expect(splitTokens.tokens).toHaveLength(0);
  expect(splitTokens.escapes).toEqual(
    expect.arrayContaining(["${", "${", "}", "}"]),
  );
  expect(splitTokens.literals).toEqual(
    expect.arrayContaining(['"test-', "10", '"']),
  );
});

test("extract escape sequences", () => {
  const tokenString = TokenString.forString(
    "${foo-${TfToken[TOKEN.0]}-bar}",
    true,
  );
  const resolvable = new TestResolvable();

  const splitTokens = tokenString.split(() => resolvable);

  expect(splitTokens.tokens[0]).toEqual(resolvable);
  expect(splitTokens.literals).toEqual(
    expect.arrayContaining(["foo-", "-bar"]),
  );
});

test("extract escape sequences followed directly by tokens", () => {
  const tokenString = TokenString.forString("${${TfToken[TOKEN.0]}-bar}", true);
  const resolvable = new TestResolvable();

  const splitTokens = tokenString.split(() => resolvable);

  expect(splitTokens.tokens[0]).toEqual(resolvable);
  expect(splitTokens.literals).toEqual(expect.arrayContaining(["-bar"]));
});
