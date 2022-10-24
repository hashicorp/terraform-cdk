// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { readFileSync } from "fs-extra";
import * as path from "path";
import { CODE_MARKER } from "@cdktf/hcl2cdk";

describe("Templates", () => {
  describe("Typescript", () => {
    it("main.ts should contain the '// define resources here' mark", () => {
      expect(
        readFileSync(
          path.resolve(
            __dirname,
            "..",
            "..",
            "templates",
            "typescript",
            "main.ts"
          ),
          "utf8"
        )
      ).toContain(CODE_MARKER);
    });
  });
});
