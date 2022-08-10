// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";
const fs = require("fs").promises;

describe("remote templates", () => {
  test("can init", async () => {
    const driver = new TestDriver(__dirname);
    await driver.setupRemoteTemplateProject();
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

  test("handles invalid url", async () => {
    const driver = new TestDriver(__dirname);

    try {
      await driver.setupRemoteTemplateProject("invalid_url");
      fail("Expected init to throw an error");
    } catch (e) {
      expect(e.stderr).toContain(
        "Could not download template: the supplied url is invalid"
      );
    }
  });
});
