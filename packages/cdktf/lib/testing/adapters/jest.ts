// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { ExpectLike, extendExpect } from "../expect";
// Import global expect matcher types, for backwards compatibility with old
// versions where this file was imported directly in test files.
import "../../../types/jest.d.ts";

/**
 * Extends Jest's global expect function with CDKTF specific matchers.
 */
export function setupJest(): void {
  const expect = (global as any).expect as ExpectLike | undefined;

  if (!expect) {
    throw new Error("setupJest called, but expect is not globally accessible");
  }

  extendExpect(expect);
}
