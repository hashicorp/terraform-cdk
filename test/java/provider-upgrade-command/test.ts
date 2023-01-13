// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";

describe("provider upgrade command", () => {
  let driver: TestDriver;

  describe("pre-built", () => {
    beforeEach(async () => {
      driver = new TestDriver(__dirname, {
        CDKTF_DIST: "",
        DISABLE_VERSION_CHECK: "true",
      }); // reset CDKTF_DIST set by run-against-dist script & disable version check as we have to use an older version of cdktf-cli
      await driver.setupJavaProject({
        init: { additionalOptions: "--cdktf-version 0.10.4" },
      });
    });

    test("installs pre-built provider using maven", async () => {
      await driver.exec("cdktf", [
        "provider",
        "add",
        "random@=3.1.3", // this is not the latest version, but theres v0.2.55 of the pre-built provider resulting in exactly this package
      ]);

      await driver.exec("cdktf", ["provider", "upgrade", "random@=3.2.0"]);

      expect(driver.readLocalFile("pom.xml")).not.toContain(
        "<version>0.2.55</version>"
      );
      expect(driver.readLocalFile("pom.xml")).toContain(
        "<version>0.2.63</version>"
      );
    }, 500_000);
  });
});
