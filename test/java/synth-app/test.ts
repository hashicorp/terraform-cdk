/**
 *
 * @group java
 */

import { TestDriver } from "../../test-helper";

describe("java full integration", () => {
  let driver: TestDriver;
  jest.setTimeout(60_000);

  beforeAll(async () => {
    driver = new TestDriver(__dirname)
    await driver.setupJavaProject()
  });

  test("synth generates JSON", async () => {
    await driver.synth()
    expect(driver.synthesizedStack()).toMatchSnapshot()
  })
})