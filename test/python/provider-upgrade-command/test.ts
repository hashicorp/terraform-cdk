// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";

describe("provider upgrade command", () => {
  let driver: TestDriver;

  describe("pre-built", () => {
    describe("pipenv", () => {
      beforeAll(async () => {
        driver = new TestDriver(__dirname, {
          CDKTF_DIST: "",
          DISABLE_VERSION_CHECK: "true",
        }); // reset CDKTF_DIST set by run-against-dist script & disable version check as we have to use an older version of cdktf-cli
        await driver.setupPythonProject({
          init: { additionalOptions: "--cdktf-version 0.10.4" },
        });
      });

      test("updates pre-built provider using pipenv", async () => {
        await driver.exec("pipenv", [
          "install",
          `cdktf-cdktf-provider-random==0.2.55`,
        ]);
        expect(driver.readLocalFile("Pipfile")).toContain(
          `cdktf-cdktf-provider-random = "==0.2.55"`
        );

        await driver.exec("cdktf", ["provider", "upgrade", "random@=3.2.0"]);
        expect(driver.readLocalFile("Pipfile")).toContain(
          `cdktf-cdktf-provider-random = "~=0.2.64"`
        );
      });
    });

    describe("pip", () => {
      beforeAll(async () => {
        driver = new TestDriver(__dirname, {
          CDKTF_DIST: "",
          DISABLE_VERSION_CHECK: "true",
        }); // reset CDKTF_DIST set by run-against-dist script & disable version check as we have to use an older version of cdktf-cli
        await driver.setupPythonProject({
          init: { additionalOptions: "--cdktf-version 0.10.4" },
        });

        driver.copyFile("cdktf-pip.json", "cdktf.json");
        driver.copyFiles("requirements.txt");
      });

      test("updates pre-built provider using pip", async () => {
        await driver.exec("echo", [
          "cdktf-cdktf-provider-random==0.2.55",
          ">",
          "requirements.txt",
        ]);
        expect(driver.readLocalFile("requirements.txt")).toContain(
          `cdktf-cdktf-provider-random==0.2.55`
        );
        await driver.exec("pip", ["install", "-r", "requirements.txt"]);

        await driver.exec("cdktf", ["provider", "upgrade", "random@=3.2.0"]);
        expect(driver.readLocalFile("requirements.txt")).toContain(
          `cdktf-cdktf-provider-random~=0.2.64`
        );
      });
    });
  });
});
