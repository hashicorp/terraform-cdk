// Copyright (c) HashiCorp, Inc
// Licensed under the Mozilla Public License 2.0
import { TestDriver } from "../../test-helper";

describe("python full integration test synth", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupPythonProject();
  });

  test("synth generates JSON for both stacks", async () => {
    await driver.synth();
    expect(
      driver.synthesizedStack("python-simple-one").toString()
    ).toMatchSnapshot();
    expect(
      driver.synthesizedStack("python-simple-two").toString()
    ).toMatchSnapshot();
  });
});
