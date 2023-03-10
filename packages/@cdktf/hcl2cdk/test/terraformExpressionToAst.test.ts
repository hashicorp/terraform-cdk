/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import generate from "@babel/generator";
import { stringToTs } from "../lib/expressions";
import { Scope } from "../lib/types";

const mockScope: Scope = {
  constructs: new Set(),
  providerGenerator: {},
  providerSchema: {},
  variables: {},
  hasTokenBasedTypeCoercion: false,
};

const mockPath = "";

const defaults = {
  scope: mockScope,
  path: mockPath,
  nodeIds: [],
};

describe("terraformExpressionToAst", () => {
  it.only("should use Fn.element for function call", async () => {
    expect(
      generate(
        await stringToTs({
          ...defaults,
          input: "${element(var.list, 0)}",
          nodeIds: ["var.list"],
        })
      ).code
    ).toEqual("cdktf.Fn.element(var.list, 0)");
  });
  it("should use Op.add for operator usage", async () => {
    expect(
      generate(
        await stringToTs({
          ...defaults,
          input: `\${1 + 2}`,
        })
      ).code
    ).toEqual(`cdktf.Op.add("1", "2")`);
  });
  it("should return literal value as is", async () => {
    expect(
      generate(
        await stringToTs({
          ...defaults,
          input: `\${"abc"}`,
        })
      ).code
    ).toEqual(`"\${\\"abc\\"}"`);
  });
  it.skip("should resolve references", async () => {
    // TODO: figure out how to invoke this so we'll actually see something here
    expect(
      generate(
        await stringToTs({
          ...defaults,
          input: `\${var.list}`,
        })
      ).code
    ).toEqual(`\${"abc"}`);
  });
  it.todo("should resolve nested functions and operations using references");
});
