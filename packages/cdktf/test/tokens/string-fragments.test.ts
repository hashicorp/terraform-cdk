// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TokenizedStringFragments } from "../../lib/tokens/string-fragments";
import { IFragmentConcatenator } from "../../lib/tokens/resolvable";

describe("TokenizedStringFragments", () => {
  test("concat method should merge fragments correctly", () => {
    // Arrange: Create two instances with literals
    const fragments1 = new TokenizedStringFragments();
    fragments1.addLiteral("Hello");
    fragments1.addLiteral(", ");

    const fragments2 = new TokenizedStringFragments();
    fragments2.addLiteral("World");
    fragments2.addLiteral("!");

    // Act: Concatenate fragments2 into fragments1
    fragments1.concat(fragments2);

    // Assert: Check the length and combined result
    expect(fragments1.length).toBe(4); // Verify total number of fragments

    const result = fragments1.join({
      join(left: any, right: any): string {
        return `${left}${right}`;
      },
    } as IFragmentConcatenator);

    expect(result).toBe("Hello, World!"); // Verify merged content
  });
});
