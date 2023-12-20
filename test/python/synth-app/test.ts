// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver, onlyHcl, onlyJson } from "../../test-helper";

describe("python full integration test synth", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupPythonProject();
  });

  test("debug command", async () => {
    const { stdout } = await driver.exec(`cdktf debug --json`);
    const { cdktf, constructs } = JSON.parse(stdout);
    expect(cdktf.length).not.toBe(0);
    expect(constructs.length).not.toBe(0);
  });

  onlyJson("synth generates JSON", async () => {
    await driver.synth();
    expect(
      driver.synthesizedStack("python-simple").toString()
    ).toMatchSnapshot();
  });

  onlyHcl("synth generates HCL", async () => {
    await driver.synth();
    expect(
      driver.synthesizedStackContentsRaw("python-simple").toString()
    ).toMatchSnapshot();
  });
});
