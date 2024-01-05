// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver, onlyHcl, onlyJson } from "../../test-helper";

describe("python terraform functions test synth", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupPythonProject();
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
      driver.synthesizedStackContentsRaw("python-simple")
    ).toMatchSnapshot();
  });
});
