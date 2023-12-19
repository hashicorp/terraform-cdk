// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver, onlyHcl, onlyJson } from "../../test-helper";

describe("python full integration test synth", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupPythonProject();
  });

  onlyJson("synth generates JSON for both stacks", async () => {
    await driver.synth();
    expect(
      driver.synthesizedStack("python-simple-one").toString()
    ).toMatchSnapshot();
    expect(
      driver.synthesizedStack("python-simple-two").toString()
    ).toMatchSnapshot();
  });

  onlyHcl("synth generates HCL for both stacks", async () => {
    await driver.synth();
    expect(
      driver.synthesizedStackContentsRaw("python-simple-one").toString()
    ).toMatchSnapshot();
    expect(
      driver.synthesizedStackContentsRaw("python-simple-two").toString()
    ).toMatchSnapshot();
  });
});
