/**
 *
 * @group csharp
 */

import { TestDriver } from "../../test-helper";

describe("csharp full integration test synth", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupCsharpProject();
  });

  test("synth generates JSON", async () => {
    await driver.synth();
    expect(driver.synthesizedStack("csharp-simple")).toMatchSnapshot();
  });
});
