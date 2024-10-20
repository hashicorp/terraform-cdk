// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";
const fs = require("fs").promises;
const path = require("path");

describe("local templates", () => {
  test("can init", async () => {
    const driver = new TestDriver(__dirname);
    driver.switchToTempDir();
    const templateDir = path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "packages/@cdktf/cli-core/templates/typescript"
    );
    await driver.init(templateDir);
    const files = await fs.readdir(driver.workingDirectory);
    expect(files).toEqual(
      expect.arrayContaining([
        ".gen",
        ".gitignore",
        ".npmrc",
        "cdktf.json",
        "help",
        "jest.config.js",
        "main.ts",
        "package.json",
        "setup.js",
        "tsconfig.json",
        "__tests__",
      ])
    );
  });
});
