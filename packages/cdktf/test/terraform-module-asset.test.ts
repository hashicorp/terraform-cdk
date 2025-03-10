/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { findLowestCommonPath } from "../lib/terraform-module-asset";

describe("TerraformModuleAsset", () => {
  describe("findLowestCommonPath", () => {
    it.each([
      { paths: [], expected: undefined },
      { paths: ["./"], expected: "." },
      { paths: ["./foo/bar", "./foo/baz", "./foo"], expected: "foo" },
      { paths: ["../fuzz", "./foo/baz", "./foo/"], expected: ".." },
    ])(
      "should find the lowest common path for $paths expecting $expected",
      ({
        paths,
        expected,
      }: {
        paths: string[];
        expected: string | undefined;
      }) => {
        expect(findLowestCommonPath(paths)).toEqual(expected);
      },
    );
  });
});
