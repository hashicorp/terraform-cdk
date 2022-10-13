// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";

describe("Go full integration test synth", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupGoProject();
  });

  test("debug command", async () => {
    const { stdout } = await driver.exec(`cdktf debug --json`);
    const { cdktf, constructs } = JSON.parse(stdout);
    expect(cdktf.length).not.toBe(0);
    expect(constructs.length).not.toBe(0);
  });

  test("synth generates JSON", async () => {
    await driver.synth();
    expect(driver.synthesizedStack("go-simple").toString()).toMatchSnapshot();
  });
});
