// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  onPosix,
  onWindows,
  sanitizeTimestamps,
  TestDriver,
} from "../../test-helper";

describe("provider add command", () => {
  describe("local", () => {
    let driver: TestDriver;
    beforeEach(async () => {
      driver = new TestDriver(__dirname);
      await driver.setupGoProject();
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
                    "hashicorp/null@~> 3.1.0",
                    "hashicorp/local@=2.2.3",
                  ]
              `);

        expect(res.stdout).toContain(
          `Local providers have been updated. Running cdktf get to update...`
        );

        // This file currently is only created for TypeScript targets
        // we need to make "generateJsiiLanguage" copy that file to
        // the target directory for this to work
        // const genVersionsFile = JSON.parse(
        //   driver.readLocalFile("generated/versions.json")
        // );
        // expect(
        //   genVersionsFile["registry.terraform.io/hashicorp/local"]
        // ).toEqual("2.2.3");
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
                    "hashicorp/null@~> 3.1.0",
                    "hashicorp/local@=2.2.3",
                  ]
              `);

        expect(res.stdout).toContain(
          `Local providers have been updated. Running cdktf get to update...`
        );

        // This file currently is only created for TypeScript targets
        // we need to make "generateJsiiLanguage" copy that file to
        // the target directory for this to work
        // const genVersionsFile = JSON.parse(
        //   driver.readLocalFile("generated/versions.json")
        // );
        // expect(
        //   genVersionsFile["registry.terraform.io/hashicorp/local"]
        // ).toEqual("2.2.3");
      },
      120_000
    );
  });

  describe.skip("pre-built", () => {
    let driver: TestDriver;

    beforeEach(async () => {
      driver = new TestDriver(__dirname, {
        CDKTF_DIST: "",
        DISABLE_VERSION_CHECK: "true",
      }); // reset CDKTF_DIST set by run-against-dist script & disable version check as we have to use an older version of cdktf-cli
      await driver.setupGoProject({
        init: { additionalOptions: "--cdktf-version 0.12.0" },
      });
    });

    it("detects correct cdktf version", async () => {
      const res = await driver.exec("cdktf", ["debug"]);
      expect(res.stdout).toContain("cdktf: 0.12.0");
    });

    test("installs pre-built provider using go get", async () => {
      const res = await driver.exec("cdktf", [
        "provider",
        "add",
        "random@=3.3.2", // this won't always be the latest version, but theres v2.0.12 of the pre-built provider resulting in exactly this package
      ]);
      // TODO: this will fail as soon as we release a new pre-built provider version for that exact version of the TF provider
      // until there is a newer version of that TF provider, cdktf provider add will always pick the latest and hence v2.0.12 will change
      // this will settle as soon as we release cdktf 0.13 or a "random@>3.3.2" comes out and no newer pre-built provider versions will
      // be published for v3.3.2. We could skip this test in the meantime. Unfortunately we can't test against an older version as Go pre-built
      // providers where only supported as of cdktf 0.12 🙈
      // Update: this now fails and is disabled for a bit.

      // no snapshot, as the output also contains logs from Go upgrading JSII dependencies which might
      // change in the future and would break this test
      expect(sanitizeTimestamps(res.stdout))
        .toContain(`Checking whether pre-built provider exists for the following constraints:
  provider: random
  version : =3.3.2
  language: go
  cdktf   : 0.12.0


Found pre-built provider.

Adding package github.com/hashicorp/cdktf-provider-random-go/random @ 2.0.12`);

      expect(sanitizeTimestamps(res.stdout)).toContain(
        "go get: added github.com/hashicorp/cdktf-provider-random-go/random/v2 v2.0.12"
      );
      expect(sanitizeTimestamps(res.stdout)).toContain("Package installed.");

      // go also prints to stderr, weird but 🤷
      expect(res.stderr).toContain(
        "go get: added github.com/hashicorp/cdktf-provider-random-go/random/v2 v2.0.12"
      );

      const goMod = driver.readLocalFile("go.mod");

      expect(goMod).toContain(
        "github.com/hashicorp/cdktf-provider-random-go/random/v2 v2.0.12"
      );
    }, 180_000);
  });
});
