/**
 *
 * @group java
 */

import { TestDriver } from "../../test-helper";

describe("java full integration", () => {
  let driver: TestDriver;

  beforeAll(() => {
    driver = new TestDriver(__dirname)
    driver.setupJavaProject()
  });

  test("synth generates JSON", async () => {
    driver.synth()
    expect(driver.synthesizedStack('java-simple')).toMatchSnapshot()
  })
})