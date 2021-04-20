/**
 * Testing interaction remote templates
 *
 * @group typescript
 */

import { TestDriver } from "../../test-helper";
const fs = require('fs').promises;

describe("remote templates", () => {
  let driver: TestDriver;

  test("can init", async () => {
    driver = new TestDriver(__dirname)
    await driver.setupRemoteTemplateProject();
    const files = await fs.readdir(driver.workingDirectory);
    expect(files).toEqual(['.gen', '.gitignore', '.npmrc', 'cdktf.json', 'help', 'main.ts', 'package.json', 'tsconfig.json']);
  })

  test("handles invalid url", async () => {
    driver = new TestDriver(__dirname)
    
    try {
      await driver.setupRemoteTemplateProject('invalid_url');
      fail('Expected init to throw an error');
    } catch (e) {
      expect(e.stderr).toContain('Could not download template: the supplied url is invalid');
    }
  })
})