// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

/**
 * Types for extending Vitest's expect function with CDKTF specific matchers.
 * Should be referenced via the `types` field in the user's `tsconfig.json` if they are using Vitest.
 * Works for both global expect and expect imported from vitest.
 */
import { CdktfExpectMatchers } from "../lib/testing/expect";

declare module 'vitest' {
  interface Assertion<T = any> extends CdktfExpectMatchers<T> {}
  interface AsymmetricMatchersContaining extends CdktfExpectMatchers {}
}
