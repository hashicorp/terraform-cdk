/**
 *
 * @group python
 */

import { TestDriver } from "../../test-helper";

describe("python terraform functions test synth", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupPythonProject();
  });

  test("synth generates JSON", async () => {
    await driver.synth();
    expect(driver.synthesizedStack("python-simple")).toMatchSnapshot();
  });
});
