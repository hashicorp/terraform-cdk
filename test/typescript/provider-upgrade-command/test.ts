// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  TestDriver,
  onPosix,
  onWindows,
  packageJsonWithDependency,
} from "../../test-helper";

describe("provider upgrade command", () => {
  let driver: TestDriver;
  beforeEach(async () => {
    driver = new TestDriver(__dirname, {
      CDKTF_DIST: "",
      DISABLE_VERSION_CHECK: "true",
      CI: "1",
    }); // reset CDKTF_DIST set by run-against-dist script & disable version check as we have to use an older version of cdktf-cli
    await driver.setupTypescriptProject({
      init: { additionalOptions: "--cdktf-version 0.10.4" },
    });
  }, 500_000);

  describe("pre-built", () => {
    beforeEach(async () => {
      await driver.exec("cdktf", [
        "provider",
        "add",
        "random@=3.1.3", // this is not the latest version, but theres v0.2.55 of the pre-built provider resulting in exactly this package
      ]);
    });

    it("can update withing the same cdktf version to a specific version", async () => {
      expect(driver.packageJson()).toEqual(
        packageJsonWithDependency("@cdktf/provider-random", "0.2.55")
      );

      await driver.exec("cdktf", ["provider", "upgrade", "random@=3.2.0"]);

      expect(driver.packageJson()).toEqual(
        packageJsonWithDependency("@cdktf/provider-random", "0.2.64")
      );
    });

    it("can update within the same cdktf version to the latest version", async () => {
      expect(driver.packageJson()).toEqual(
        packageJsonWithDependency("@cdktf/provider-random", "0.2.55")
      );

      await driver.exec("cdktf", ["provider", "upgrade", "random"]);

      // Assert that we have version 0.2.64
      expect(driver.packageJson()).toEqual(
        packageJsonWithDependency("@cdktf/provider-random", "0.2.64")
      );
    });

    it("can update withing the same cdktf version to the latest version in yarn", async () => {
      // Pin random provider version so that the upgrade can do anything
      await driver.exec("yarn", ["add", "@cdktf/provider-random@0.2.55"]);
      expect(driver.packageJson()).toEqual(
        packageJsonWithDependency("@cdktf/provider-random", "0.2.55")
      );
      await driver.exec("rm", ["-rf", "node_modules"]);
      await driver.exec("rm", ["package-lock.json"]);
      await driver.exec("yarn", ["install"]); // yarn install to update the lockfile
      await driver.exec("cdktf", ["provider", "upgrade", "random"]);

      // Assert that we have version 0.2.64
      expect(driver.packageJson()).toEqual(
        packageJsonWithDependency("@cdktf/provider-random", "0.2.64")
      );
    });
  });

  describe("local", () => {
    beforeEach(async () => {
      await driver.exec("cdktf", [
        "provider",
        "add",
        "random@=3.1.3", // this is not the latest version, but theres v0.2.55 of the pre-built provider resulting in exactly this package
        "--force-local",
      ]);
    });

    onPosix("can update to a specific version", async () => {
      await driver.exec("cdktf", ["provider", "upgrade", "random@=3.2.0"]);

      // Assert that we have version 3.2.0 in the cdktf.json and get ran
      const genVersionsFile = JSON.parse(
        driver.readLocalFile(".gen/versions.json")
      );

      expect(genVersionsFile["registry.terraform.io/hashicorp/random"]).toEqual(
        "3.2.0"
      );
    });

    onWindows(
      "upgrade local provider on windows",
      async () => {
        await driver.exec("cdktf", ["provider", "upgrade", "random@=3.2.0"]);
        const config = JSON.parse(driver.readLocalFile("cdktf.json"));
        expect(config.terraformProviders).toMatchInlineSnapshot(`
        [
          "hashicorp/random@=3.2.0",
        ]
      `);

        // Assert that we have version 3.2.0 in the cdktf.json and get ran
        const genVersionsFile = JSON.parse(
          driver.readLocalFile(".gen/versions.json")
        );

        expect(
          genVersionsFile["registry.terraform.io/hashicorp/random"]
        ).toEqual("3.2.0");
      },
      120_000
    );
  });
});
