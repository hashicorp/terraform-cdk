// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  TestDriver,
  onPosix,
  onWindows,
  packageJsonWithDependency,
} from "../../test-helper";

describe("provider add command", () => {
  describe("pre-built", () => {
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

    test("lists both local and prebuilt providers", async () => {
      await driver.exec("cdktf", [
        "provider",
        "add",
        "random@=3.1.3", // this is not the latest version, but theres v0.2.55 of the pre-built provider resulting in exactly this package
        "Backblaze/b2@=0.8.1",
      ]);

      const res = await driver.exec("cdktf", ["provider", "list", "--json"]);

      const output = JSON.stringify(res.stdout);

      expect(output).toContain(
        expect.objectContaining({
          local: expect.arrayContaining(
            expect.objectContaining({
              providerName: "Backblaze/b2",
              providerConstraint: "=0.8.1",
              providerVersion: "0.8.1",
            })
          ),
          prebuilt: expect.arrayContaining(
            expect.objectContaining({
              packageName: "@cdktf/cdktf-provider-random",
              packageVersion: "3.0.11",
              providerName: "random",
              providerVersion: "3.4.3",
              cdktfVersion: "0.10.4",
            })
          ),
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
