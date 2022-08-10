// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";
import * as fs from "fs";
import * as path from "path";

describe("python full integration test assets", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupPythonProject();
    driver.copyFiles("fixture.txt");
    driver.copyFolders("fixtures");
  });

  test("synth generates JSON and copies files", async () => {
    await driver.synth();
    expect(
      driver.synthesizedStack("python-assets").toString()
    ).toMatchSnapshot();
    const stack = driver.synthesizedStack("python-assets");

    expect(
      fs.readFileSync(
        path.resolve(
          driver.stackDirectory("python-assets"),
          stack.output("fixtureoutput")
        ),
        "utf-8"
      )
    ).toMatchSnapshot();

    const stat = fs.statSync(
      path.resolve(
        driver.stackDirectory("python-assets"),
        stack.output("fixtureoutput")
      )
    );
    expect(stat.isFile()).toBe(true);
  });
});
