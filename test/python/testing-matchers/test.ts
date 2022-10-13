// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";

describe("python testing assertions", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupPythonProject();
    await driver.copyFiles("test_assertions.py");
    await driver.exec("pipenv install pytest");
  }, 6000000);

  test("run python testing suite", async () => {
    const res = await driver.exec("pipenv run pytest -q test_assertions.py");
    expect(res.stdout).toContain("10 passed");
  }, 6000000);
});
