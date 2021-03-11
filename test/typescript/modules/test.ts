/**
 * Testing interaction with Terraform Cloud
 *
 * @group typescript
 */

import { TestDriver } from "../../test-helper";
import * as fs from 'fs-extra';
import * as path from 'path';

describe("full integration test", () => {
  let driver: TestDriver;

  beforeAll(() => {
    driver = new TestDriver(__dirname)
    driver.switchToTempDir()
    driver.init('typescript')
    driver.copyFiles('main.ts', 'cdktf.json')
    fs.copySync(path.join(__dirname, 'local-module'), path.join(driver.workingDirectory, 'local-module'))
    driver.get()
  });

  test("build modules", () => {
    driver.synth()
    const snapshotName = `build-modules-${process.platform === 'win32' ? 'windows' : 'posix'}`
    expect(driver.synthesizedStack()).toMatchSnapshot(snapshotName)
  })
})