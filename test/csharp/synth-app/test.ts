/**
 *
 * @group csharp
 */

import { TestDriver } from "../../test-helper";

describe("csharp full integration test synth", () => {
  let driver: TestDriver;

  beforeAll(() => {
    driver = new TestDriver(__dirname)
    driver.setupCsharpProject()
  });

  test("synth generates JSON", async () => {
    driver.synth()
    expect(driver.synthesizedStack('csharp-simple')).toMatchSnapshot()
  })
})