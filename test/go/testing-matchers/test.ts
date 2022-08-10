// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";

describe("go testing assertions", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupGoProject();
    await driver.copyFiles("main_test.go");
  }, 6000000);

  test("run go testing suite", async () => {
    const res = await driver.exec("go test");
    console.log(res.stdout);
    expect(res.stdout).toContain("PASS");
  }, 6000000);
});
