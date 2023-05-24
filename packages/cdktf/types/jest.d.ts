// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

/**
 * Types for extending Jest's global expect function with CDKTF specific matchers.
 * Should be referenced via the `types` field in the user's `tsconfig.json` if they are using Vitest.
 */
import { CdktfExpectMatchers } from "../lib/testing/expect";

declare global {
  namespace jest {
    interface Matchers<R> extends CdktfExpectMatchers {}
  }
}
