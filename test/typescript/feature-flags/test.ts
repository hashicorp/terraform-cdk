/**
 * Testing a full cycle of diff, deploy and destroy
 *
 * @group typescript
 */

import { TestDriver } from "../../test-helper";
import * as fs from 'fs';
import * as path from 'path';

describe("full integration test", () => {
  let driver: TestDriver;
  const cdktfJSON = {
    language: "typescript",
    app: "npm run --silent compile && node main.js",
    terraformProviders: [
      "null"
    ]
  }

  beforeAll(() => {
    driver = new TestDriver(__dirname)
    driver.switchToTempDir()
    driver.init('typescript')
    driver.copyFiles('main.ts')
    writeConfig(driver.workingDirectory, cdktfJSON)
    driver.get()
  });

  test("with excludeStackIdFromLogicalIds feature", () => {
    writeConfig(driver.workingDirectory, jsonWithContext({ excludeStackIdFromLogicalIds: "true" }))
    driver.synth()
    expect(loadStackJson(driver.workingDirectory)).toMatchSnapshot();
  });

  test("with allowSepCharsInLogicalIds feature", () => {
    writeConfig(driver.workingDirectory, jsonWithContext({ allowSepCharsInLogicalIds: "true" }))
    driver.synth()
    expect(loadStackJson(driver.workingDirectory)).toMatchSnapshot();
  });

  test("without features", () => {
    writeConfig(driver.workingDirectory, cdktfJSON)
    driver.synth()
    expect(loadStackJson(driver.workingDirectory)).toMatchSnapshot();
  });

  const jsonWithContext = (context) => {
    return Object.assign({}, cdktfJSON, { context })
  }

  const loadStackJson = (workingDir) => {
    return fs.readFileSync(path.join(workingDir, 'cdktf.out', 'cdk.tf.json'), 'utf-8')
  }

  const writeConfig = (workingDir, json) => {
    fs.writeFileSync(path.join(workingDir, 'cdktf.json'), JSON.stringify(json, null, 2))
  }
});
