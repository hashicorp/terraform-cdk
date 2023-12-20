/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { findLowestCommonPath } from "../lib/terraform-module-asset";

describe("TerraformModuleAsset", () => {
  describe("findLowestCommonPath", () => {
    it.each([
      { paths: ["./foo/bar", "./foo/baz", "./foo"], expected: "./foo/" },
      { paths: ["../fuzz", "./foo/baz", "./foo/"], expected: "../" },
    ])(
      "should find the lowest common path",
      ({ paths, expected }: { paths: string[]; expected: string }) => {
        expect(findLowestCommonPath(paths)).toEqual(expected);
      }
    );
  });
});
