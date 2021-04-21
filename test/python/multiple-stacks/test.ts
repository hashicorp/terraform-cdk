/**
 *
 * @group python
 */

import { TestDriver } from "../../test-helper";

describe("python full integration test synth", () => {
  let driver: TestDriver;

  beforeAll(() => {
    driver = new TestDriver(__dirname)
    driver.setupPythonProject()
  });

  test("synth generates JSON for both stacks", async () => {
    driver.synth()
    expect(driver.synthesizedStack('python-simple-one')).toMatchSnapshot()
    expect(driver.synthesizedStack('python-simple-two')).toMatchSnapshot()
  })
})