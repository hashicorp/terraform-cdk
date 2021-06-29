/**
 *
 * @group java
 */

import { TestDriver } from "../../test-helper";

describe("java full integration", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupJavaProject();
  });

  test("synth generates JSON", async () => {
    await driver.synth();
    expect(driver.synthesizedStack("java-simple")).toMatchSnapshot();
  });
});
