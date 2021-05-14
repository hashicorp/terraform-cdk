/**
 *
 * @group python
 * @group asset
 */

import { TestDriver } from "../../test-helper";
import * as fs from 'fs';
import * as path from 'path';

describe("python full integration test assets", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname)
    await driver.setupPythonProject()
    driver.copyFiles("fixture.txt")
    driver.copyFolders("fixtures")
  });

  test("synth generates JSON and copies files", async () => {
    await driver.synth()
    expect(
      fs.readFileSync(
        path.resolve(
          driver.stackDirectory("python-assets"),
          "assets/fixture/fixture.txt"
        ),
        "utf-8"
      )
    ).toMatchSnapshot();
    const stat = fs.statSync(
      path.resolve(driver.stackDirectory("python-assets"), "assets/fixtures/archive.zip")
    );
    expect(stat.isFile()).toBe(true);
  })
})