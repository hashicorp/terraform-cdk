/**
 * Testing interaction with Terraform Cloud
 *
 * @group typescript
 */

import { TestDriver } from "../../test-helper";
import * as fs from 'fs-extra';
import * as path from 'path';

const onWindows = process.platform === 'win32' ? it.skip : it.skip
const onPosix = process.platform !== 'win32' ? it : it.skip

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

  onPosix("build modules posix", () => {
    driver.synth()
    expect(driver.synthesizedStack()).toMatchSnapshot()
  })

  onWindows("build modules windows", () => {
    driver.synth()
    expect(driver.synthesizedStack()).toMatchSnapshot()
  })
})