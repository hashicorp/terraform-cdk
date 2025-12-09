// Copyright IBM Corp. 2019, 2025
// SPDX-License-Identifier: MPL-2.0
//
import { replaceQuotes } from "../lib/util";

describe("replaceQuotes", () => {
  test("replaces a simple quote", () => {
    expect(replaceQuotes(`"foo\"bar"`)).toEqual(`"foo\\"bar"`);
  });
  test("replaces a simple quote twice", () => {
    expect(replaceQuotes(`"foo\"bar\""`)).toEqual(`"foo\\"bar\\""`);
  });
});
