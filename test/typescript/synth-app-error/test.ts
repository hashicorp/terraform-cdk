/**
 * Testing synthing typescript to json
 *
 * @group typescript
 */

import { TestDriver } from "../../test-helper";

describe("full integration test synth", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname)
    await driver.setupTypescriptProject()
  }, 120_000);

  test("synth prints error message on failure", async () => {
    try {
      await driver.synth();
      fail('Expected synth to fail but no error was thrown');
    } catch (e) {
      expect(e.code).toBe(1);
      expect(e.stderr.toString()).toContain(`cdktf encountered an error while synthesizing

Synth command: npm run --silent compile && node thisFileDoesNotExist.js
Error:         non-zero exit code 1`);
    }
  }, 120_000)
})