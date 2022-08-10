// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";

describe("java full integration", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupJavaProject();
  });

  test("debug command", async () => {
    driver.setEnv("CDKTF_LOG_LEVEL", "debug");
    const debug = await driver.exec(`cdktf debug --json`);
    driver.setEnv("CDKTF_LOG_LEVEL", "warning");
    console.log("debug", debug);
    const { stdout } = await driver.exec(`cdktf debug --json`);
    console.log(stdout);
    const { cdktf, constructs } = JSON.parse(stdout);
    expect(cdktf.length).not.toBe(0);
    expect(constructs.length).not.toBe(0);
  });

  test("synth generates JSON", async () => {
    await driver.synth();
    expect(driver.synthesizedStack("java-simple").toString()).toMatchSnapshot();
  });
});
