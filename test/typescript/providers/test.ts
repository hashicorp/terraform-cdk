/**
 * Testing interaction with Terraform Cloud
 *
 * @group typescript
 */

import { TestDriver } from "../../test-helper";

describe("full integration test", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupTypescriptProject();
  });

  test("build providers", () => {
    expect(driver.deploy()).toMatchSnapshot();
  });
});
