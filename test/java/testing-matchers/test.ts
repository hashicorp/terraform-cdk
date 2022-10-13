// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";

describe("java testing assertions", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupJavaProject();
    await driver.copyFile(
      "MainTest.java",
      "src/main/java/com/mycompany/app/MainTest.java"
    );
  }, 6000000);

  async function runTests() {
    await driver.exec('mvn test -Dtest="MainTest"');
  }

  test("run java testing suite", async () => {
    await expect(runTests()).resolves.not.toThrow();
  }, 6000000);
});
