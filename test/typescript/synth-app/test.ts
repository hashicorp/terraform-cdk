/**
 * Testing synthing typescript to json
 *
 * @group typescript
 */

import { TestDriver } from "../../test-helper";

describe("full integration test synth", () => {
  let driver: TestDriver;

  beforeAll(() => {
    driver = new TestDriver(__dirname)
    driver.setupTypescriptProject()
  });

  test("synth generates JSON", async () => {
    driver.synth()
    expect(driver.synthesizedStack()).toMatchSnapshot()
  })
})