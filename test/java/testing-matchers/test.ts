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
      "src/test/java/com/company/app/MainTest.java"
    );
  }, 6000000);

  async function runTests() {
    console.log(driver.workingDirectory);
    const out = await driver.exec("./gradlew test");
    console.log(out.stdout);
    return out;
  }

  test("run java testing suite", async () => {
    const output = await runTests();
    // TODO: Currently Gradle doesn't give the number of tests run.
    // We need to update that with a change to build.gradle
    expect(output.stdout).toEqual(expect.stringContaining("BUILD SUCCESSFUL"));
    expect(output.stdout).toEqual(expect.stringContaining("Task :test"));
  }, 6000000);
});
