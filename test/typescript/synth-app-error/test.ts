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

  test("synth prints error message on failure", async () => {
    try {
      driver.synth();
      fail('Expected synth to fail but no error was thrown');
    } catch (e) {
      expect(e.status).toBe(1);
      expect(e.stderr.toString()).toContain(`cdktf encountered an error while synthesizing

Synth command: npm run --silent compile && node thisFileDoesNotExist.js
Error:         non-zero exit code 1`);
    }
  })
})