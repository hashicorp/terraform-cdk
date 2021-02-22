/**
 *
 * @group python
 */

import { TestDriver } from "../../test-helper";

describe("python full integration 3rd party", () => {
  let driver: TestDriver;

  beforeAll(() => {
    driver = new TestDriver(__dirname)
    driver.setupPythonProject()
  });

  test("synth generates JSON", async () => {
    driver.synth()
    expect(driver.synthesizedStack()).toMatchSnapshot()
  })
})