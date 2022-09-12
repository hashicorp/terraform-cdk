// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";

describe("full integration test synth", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    process.env.TF_VAR_myvar =
      "If you see this value we pass runtime information into the synth";
    driver = new TestDriver(__dirname);
    await driver.setupTypescriptProject();
    await driver.synth();
  });

  test("debug command", async () => {
    const { stdout } = await driver.exec(`cdktf debug --json`);
    const { cdktf, constructs } = JSON.parse(stdout);
    expect(cdktf.length).not.toBe(0);
    expect(constructs.length).not.toBe(0);
  });

  test("synth generates JSON", () => {
    expect(driver.synthesizedStack("hello-terra").toString()).toMatchSnapshot();
  });

  test("should not pass TF_VAR environment variables", () => {
    expect(
      driver.synthesizedStack("hello-terra").output("tfenvvaroutput")
    ).toBe("no-value-found");
  });
});
