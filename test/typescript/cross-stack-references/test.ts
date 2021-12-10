import * as fs from "fs-extra";
import * as path from "path";
import { TestDriver } from "../../test-helper";

describe("cross stack references", () => {
  let driver: TestDriver;

  function readLocalFile(fileName: string): string {
    return fs.readFileSync(
      path.join(driver.workingDirectory, fileName),
      "utf8"
    );
  }

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupTypescriptProject();
    console.log(driver.workingDirectory);
    await driver.synth();
  });

  test("synth generates JSON", () => {
    expect(driver.manifest()).toMatchSnapshot();
  });

  describe("deployed", () => {
    beforeAll(async () => {
      await driver.deploy("source");
      await driver.deploy("passthrough");
      // await driver.deploy("sink");
    });

    it("references primitive values", () => {
      expect(readLocalFile("originNum")).toBe(readLocalFile("passthroughNum"));
      expect(readLocalFile("originStr")).toBe(readLocalFile("passthroughStr"));
    });

    it.todo("references can be passed through stacks");
    it.todo("can use reference in terraform function");

    it.todo("references terraform function output");

    it.todo("references complex values");
    it.todo("references nested values");
  });
});
