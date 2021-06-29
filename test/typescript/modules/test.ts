/**
 * Testing interaction with Terraform Cloud
 *
 * @group typescript
 */

import { TestDriver } from "../../test-helper";
import * as fs from "fs-extra";
import * as path from "path";

const onWindows = process.platform === "win32" ? it : it.skip;
const onPosix = process.platform !== "win32" ? it : it.skip;

describe("full integration test", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    driver.switchToTempDir();
    await driver.init("typescript");
    driver.copyFiles("main.ts", "cdktf.json");
    fs.copySync(
      path.join(__dirname, "local-module"),
      path.join(driver.workingDirectory, "local-module")
    );
    await driver.get();
  });

  onPosix("build modules posix", async () => {
    await driver.synth();
    expect(driver.synthesizedStack("hello-modules")).toMatchSnapshot();
  });

  onWindows("build modules windows", async () => {
    await driver.synth();
    expect(driver.synthesizedStack("hello-modules")).toMatchSnapshot();
  });
});
