// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver, onPosix, onWindows } from "../../test-helper";

describe("provider add command", () => {
  describe("pre-built", () => {
    let driver: TestDriver;
    beforeEach(async () => {
      driver = new TestDriver(__dirname, {
        CDKTF_DIST: "",
        DISABLE_VERSION_CHECK: "true",
      }); // reset CDKTF_DIST set by run-against-dist script & disable version check as we have to use an older version of cdktf-cli
      await driver.setupTypescriptProject({
        init: { additionalOptions: "--cdktf-version 0.10.4" },
      });
    }, 500_000);

    it("detects correct cdktf version", async () => {
      const res = await driver.exec("cdktf", ["debug"]);
      expect(res.stdout).toContain("cdktf: 0.10.4");
    });

    test("installs pre-built provider using npm", async () => {
      const res = await driver.exec("cdktf", [
        "provider",
        "add",
        "random@=3.1.3", // this is not the latest version, but theres v0.2.55 of the pre-built provider resulting in exactly this package
      ]);
      expect(res.stdout).toContain(
        `Checking whether pre-built provider exists for the following constraints:`
      );
      expect(res.stdout).toContain(`provider: random`);
      expect(res.stdout).toContain(`version : =3.1.3`);
      expect(res.stdout).toContain(`language: typescript`);
      expect(res.stdout).toContain(`cdktf   : 0.10.4`);
      expect(res.stdout).toContain(`Found pre-built provider.`);
      expect(res.stdout).toContain(
        `Adding package @cdktf/provider-random @ 0.2.55`
      );
      expect(res.stdout).toContain(
        `Installing package @cdktf/provider-random @ 0.2.55 using npm.`
      );
      expect(res.stdout).toContain(`Package installed.`);

      const packageJson = JSON.parse(driver.readLocalFile("package.json"));

      expect(packageJson.dependencies).toEqual(
        expect.objectContaining({
          "@cdktf/provider-random": expect.any(String),
        })
      );
    }, 120_000);
  });

  describe("local", () => {
    let driver: TestDriver;
    beforeEach(async () => {
      driver = new TestDriver(__dirname);
      await driver.setupTypescriptProject();
    }, 500_000);

    onPosix(
      "adds local provider on posix",
      async () => {
        const res = await driver.exec("cdktf", [
          "provider",
          "add",
          "local@=2.2.3",
          "--force-local",
        ]);
        const config = JSON.parse(driver.readLocalFile("cdktf.json"));
        expect(config.terraformProviders).toMatchInlineSnapshot(`
        Array [
          "null@ ~> 3.1.0",
          "hashicorp/local@=2.2.3",
        ]
      `);

        expect(res.stdout).toContain(
          `Local providers have been updated. Running cdktf get to update...`
        );

        const genVersionsFile = JSON.parse(
          driver.readLocalFile(".gen/versions.json")
        );

        expect(
          genVersionsFile["registry.terraform.io/hashicorp/local"]
        ).toEqual("2.2.3");
      },
      240_000
    );

    onWindows(
      "adds local provider on windows",
      async () => {
        const res = await driver.exec("cdktf", [
          "provider",
          "add",
          "local@=2.2.3",
          "--force-local",
        ]);
        const config = JSON.parse(driver.readLocalFile("cdktf.json"));
        expect(config.terraformProviders).toMatchInlineSnapshot(`
        Array [
          "null@ ~> 3.1.0",
          "hashicorp/local@=2.2.3",
        ]
      `);

        expect(res.stdout).toContain(
          `Local providers have been updated. Running cdktf get to update...`
        );

        const genVersionsFile = JSON.parse(
          driver.readLocalFile(".gen/versions.json")
        );

        expect(
          genVersionsFile["registry.terraform.io/hashicorp/local"]
        ).toEqual("2.2.3");
      },
      120_000
    );
  });
});
