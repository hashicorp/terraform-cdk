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
    await driver.synth("fixed");
    expect(driver.synthesizedStack("fixed").toString()).toMatchSnapshot();
  });

  test("file asset copied", async () => {
    await driver.synth("fixed");
    expect(
      fs.readFileSync(
        path.resolve(
          driver.stackDirectory("fixed"),
          "assets/localasset/hash/local-asset.txt"
        ),
        "utf-8"
      )
    ).toMatchSnapshot();
  });

  test("folder asset copied", async () => {
    await driver.synth("fixed");
    expect(
      fs.readFileSync(
        path.resolve(
          driver.stackDirectory("fixed"),
          "assets/fixtures/hash/a.txt"
        ),
        "utf-8"
      )
    ).toMatchSnapshot();
    expect(
      fs.readFileSync(
        path.resolve(
          driver.stackDirectory("fixed"),
          "assets/fixtures/hash/b.txt"
        ),
        "utf-8"
      )
    ).toMatchSnapshot();
    expect(
      fs.readFileSync(
        path.resolve(
          driver.stackDirectory("fixed"),
          "assets/fixtures/hash/foo/bar/c.txt"
        ),
        "utf-8"
      )
    ).toMatchSnapshot();
  });

  test("zip file created", async () => {
    await driver.synth("fixed");

    const stat = fs.statSync(
      path.resolve(
        driver.stackDirectory("fixed"),
        "assets/zippedfixtures/hash/archive.zip"
      )
    );
    expect(stat.isFile()).toBe(true);
  });

  test("without asset changes there should be no redeployment", async () => {
    expect(await driver.diff("normal")).toContain(
      "1 to create, 0 to update, 0 to delete"
    );
    await driver.deploy("normal");
    expect(await driver.diff("normal")).toContain(
      "0 to create, 0 to update, 0 to delete"
    );
  });
});
