// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";

describe("provider add command", () => {
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

      it("detects correct cdktf version", async () => {
        const res = await driver.exec("cdktf", ["debug"]);
        expect(res.stdout).toContain("cdktf: 0.10.4");
      });

      test("installs pre-built provider using pipenb", async () => {
        const res = await driver.exec("cdktf", [
          "provider",
          "add",
          "random@=3.1.3", // this is not the latest version, but theres v0.2.55 of the pre-built provider resulting in exactly this package
        ]);
        expect(res.stdout).toContain(
          `Installing package cdktf-cdktf-provider-random @ 0.2.55 using pipenv.`
        );
        expect(res.stderr).toBe("");

        const pipfile = driver.readLocalFile("Pipfile");

        expect(pipfile).toContain(`cdktf-cdktf-provider-random = "~=0.2.55"`);
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

      it("detects correct cdktf version", async () => {
        const res = await driver.exec("cdktf", ["debug"]);
        expect(res.stdout).toContain("cdktf: 0.10.4");
      });

      test("installs pre-built provider using pipenb", async () => {
        const res = await driver.exec("cdktf", [
          "provider",
          "add",
          "random@=3.1.3", // this is not the latest version, but theres v0.2.55 of the pre-built provider resulting in exactly this package
        ]);
        expect(res.stdout).toContain(
          `Installing package cdktf-cdktf-provider-random @ 0.2.55 using pip.`
        );
        expect(res.stderr).toBe("");

        const requirements = driver.readLocalFile("requirements.txt");

        expect(requirements).toContain(`cdktf-cdktf-provider-random~=0.2.55`);
      });
    });
  });
});
