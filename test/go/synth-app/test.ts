/**
 *
 * @group go
 */

import { TestDriver } from "../../test-helper";

describe("Go full integration test synth", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupGoProject();
  });

  test("synth generates JSON", async () => {
    await driver.synth();
    expect(driver.synthesizedStack("go-simple")).toMatchSnapshot();
  });
});
