// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";

describe("full integration test diff", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupTypescriptProject();
  });

  test("diff sets non-zero exit code on failure", async () => {
    try {
      await driver.diff();
      fail("Expected diff to fail but no error was thrown");
    } catch (e) {
      expect(e.status).toBe(1);
      const errorString = e.stderr.toString();
      expect(errorString).toContain(
        `External Error: Stack failed to plan: hello-terra. Please check the logs for more information.`
      );
    }
  });
});
