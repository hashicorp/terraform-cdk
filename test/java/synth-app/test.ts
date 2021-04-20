/**
 *
 * @group java
 */

import { TestDriver } from "../../test-helper";

describe("java full integration", () => {
  let driver: TestDriver;
  jest.setTimeout(120_000);

  beforeAll(async () => {
    driver = new TestDriver(__dirname)
    await driver.setupJavaProject()
  }, 120_000);

  test("synth generates JSON", async () => {
    await driver.synth()
    expect(driver.synthesizedStack()).toMatchSnapshot()
  })
})