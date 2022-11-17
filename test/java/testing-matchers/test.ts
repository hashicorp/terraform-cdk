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
    const out = await driver.exec('mvn test -Dtest="MainTest"');
    console.log(out.stdout);
    return out;
  }

  test("run java testing suite", async () => {
    const output = await runTests();
    expect(output.stdout).toEqual(expect.stringContaining("Errors: 0"));
    expect(output.stdout).toEqual(expect.stringContaining("Tests run: 11"));
  }, 6000000);
});
