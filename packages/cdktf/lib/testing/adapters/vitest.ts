/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { ExpectLike, extendExpect } from "../expect";

/**
 * Extends vitest's expect with CDKTF specific matchers.
 * @param vitestExpect The expect object from vitest. `global.expect` will be used if not provided.
 */
export function setupVitest(vitestExpect?: ExpectLike): void {
  const expect =
    vitestExpect || ((global as any).expect as ExpectLike | undefined);

  if (!expect) {
    throw new Error(
      "setupVitest called, but no expect function was provided or globally accessible."
    );
  }

  extendExpect(expect);
}
