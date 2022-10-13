// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";

describe("csharp full integration test synth", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupCsharpProject();
  });

  test("debug command", async () => {
    const { stdout } = await driver.exec(`cdktf debug --json`);
    const { cdktf, jsii, constructs } = JSON.parse(stdout);
    expect(cdktf).toBeDefined();
    expect(jsii).toBeDefined();
    expect(constructs).toBeDefined();
  });

  test("synth generates JSON", async () => {
    await driver.synth();
    expect(
      driver.synthesizedStack("csharp-simple").toString()
    ).toMatchSnapshot();
  });
});
