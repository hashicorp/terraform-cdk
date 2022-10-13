// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";

describe("full integration test synth", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupTypescriptProject();
  });

  test("synth prints error message on failure", async () => {
    try {
      await driver.synth();
      fail("Expected synth to fail but no error was thrown");
    } catch (e) {
      expect(e.code).toBe(1);
      const stdout = e.stdout.toString();
      console.log(stdout);
      expect(stdout).toContain("INFO [hello-terra/dummy]: info annotation");
      expect(stdout).toContain("WARN [hello-terra/dummy]: warning annotation");
      expect(stdout).toContain("ERROR [hello-terra/dummy]: error annotation");
      const errorString = e.stderr.toString();
      expect(errorString).toContain(
        `While synthesizing one or more error annotations have been encountered. Please check the log output above.`
      );
    }
  });
});
