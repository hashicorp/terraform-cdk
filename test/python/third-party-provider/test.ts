/**
 *
 * @group python
 */

import { TestDriver } from "../../test-helper";

describe("python full integration 3rd party", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupPythonProject();
  });

  test("synth generates JSON", async () => {
    await driver.synth();
    expect(
      driver.synthesizedStack("python-third-party-provider")
    ).toMatchSnapshot();
  });
});
