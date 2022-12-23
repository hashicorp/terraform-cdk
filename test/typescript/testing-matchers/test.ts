// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";

describe("typescript testing assertions", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupTypescriptProject();
    await driver.copyFiles("__tests__");
  }, 600_000);

  test("run typescript testing suite", async () => {
    const res = await driver.exec("yarn test");
    console.log(res.stderr);
    console.log(res.stdout);
    expect(res.stderr).toContain("2 passed, 2 total");
  }, 600_000);
});
