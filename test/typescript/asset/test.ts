/**
 * Testing synthing typescript to json
 *
 * @group typescript
 * @group asset
 */
import { TestDriver } from "../../test-helper";
import * as path from "path";
import * as fs from "fs";

describe("full integration test", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupTypescriptProject();
    driver.copyFiles("local-asset.txt");
    driver.copyFolders("fixtures");
  });

  test("synth", async () => {
    await driver.synth();
    expect(driver.synthesizedStack("stack")).toMatchSnapshot();
  });

  test("file asset copied", async () => {
    await driver.synth();
    expect(
      fs.readFileSync(
        path.resolve(
          driver.stackDirectory("stack"),
          "localasset/local-asset.txt"
        ),
        "utf-8"
      )
    ).toMatchSnapshot();
  });

  test("folder asset copied", async () => {
    await driver.synth();
    expect(
      fs.readFileSync(
        path.resolve(driver.stackDirectory("stack"), "fixtures/a.txt"),
        "utf-8"
      )
    ).toMatchSnapshot();
    expect(
      fs.readFileSync(
        path.resolve(driver.stackDirectory("stack"), "fixtures/b.txt"),
        "utf-8"
      )
    ).toMatchSnapshot();
    expect(
      fs.readFileSync(
        path.resolve(driver.stackDirectory("stack"), "fixtures/foo/bar/c.txt"),
        "utf-8"
      )
    ).toMatchSnapshot();
  });

  test("zip file created", async () => {
    await driver.synth();

    const stat = fs.statSync(
      path.resolve(driver.stackDirectory("stack"), "zippedfixtures/archive.zip")
    );
    expect(stat.isFile()).toBe(true);
    expect(stat.size).toBe(1799);
  });
});
