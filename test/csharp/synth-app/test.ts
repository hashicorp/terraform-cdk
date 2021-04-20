/**
 *
 * @group csharp
 */

import { TestDriver } from "../../test-helper";

describe("csharp full integration test synth", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname)
    await driver.setupCsharpProject()
  }, 180_000);

  test("synth generates JSON", async () => {
    await driver.synth()
    expect(driver.synthesizedStack()).toMatchSnapshot()
  }, 180_000);
})