import * as fs from "fs-extra";
import * as path from "path";
import { TestDriver } from "../../test-helper";

describe("cross stack references", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupTypescriptProject();
    await driver.synth();
  });

  test("synth generates JSON", () => {
    expect(driver.manifest()).toMatchSnapshot();
  });

  describe("deployed", () => {
    beforeAll(async () => {
      await driver.deploy("source");
      await driver.deploy("passthrough");
      await driver.deploy("sink");
    });

    it("references primitive values", () => {
      expect(driver.readLocalFile("originNum")).toBe(
        driver.readLocalFile("passthroughNum")
      );
      expect(driver.readLocalFile("originStr")).toBe(
        driver.readLocalFile("passthroughStr")
      );
    });

    it("references can be passed through stacks", () => {
      expect(driver.readLocalFile("originNum")).toBe(
        driver.readLocalFile("sinkNum")
      );
      expect(driver.readLocalFile("originStr")).toBe(
        driver.readLocalFile("sinkStr")
      );
    });

    it("references complex values", () => {
      expect(driver.readLocalFile("originList")).toBe(
        driver.readLocalFile("passthroughList")
      );
    });

    describe("terraform functions", () => {
      beforeAll(async () => {
        await driver.deploy("fns");
        await driver.deploy("functionOutput");
      });

      it("can use reference in terraform function", () => {
        // num: Fn.sum([src.num, src.num]),
        const originNum = parseInt(driver.readLocalFile("originNum"), 10);
        const result = parseInt(driver.readLocalFile("fnsNum"), 10);

        expect(originNum * 2).toBe(result);
      });

      it("can use references from two stacks", () => {
        // str: Fn.join(",", [src.str, passthrough.str]),
        const originStr = driver.readLocalFile("originStr");
        const passthroughStr = driver.readLocalFile("passthroughStr");

        const result = driver.readLocalFile("fnsStr");
        expect(`${originStr},${passthroughStr}`).toBe(result);
      });

      it("references terraform function output", () => {
        const originNum = parseInt(driver.readLocalFile("originNum"), 10);
        const result = parseInt(driver.readLocalFile("functionOutputNum"), 10);

        expect(originNum * 2).toBe(result);
      });
    });
  });
});
