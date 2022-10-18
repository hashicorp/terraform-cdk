// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";

describe("provider upgrade command", () => {
  describe("pre-built", () => {
    let driver: TestDriver;

    beforeEach(async () => {
      driver = new TestDriver(__dirname, {
        CDKTF_DIST: "",
        DISABLE_VERSION_CHECK: "true",
      }); // reset CDKTF_DIST set by run-against-dist script & disable version check as we have to use an older version of cdktf-cli
      await driver.setupGoProject({
        init: { additionalOptions: "--cdktf-version 0.13.0" },
      });
    });

    // This test can not work since new release could have come in the mean time.
    // We can not use an older provider version since the org move made older versions unusable.
    // This can be set with better values once 0.14 releases.
    test.skip("installs pre-built provider using go get", async () => {
      await driver.exec("go", [
        "get",
        "github.com/cdktf/cdktf-provider-random-go/random/v3@v3.0.2",
      ]);

      expect(driver.readLocalFile("go.mod")).toContain(
        "github.com/cdktf/cdktf-provider-random-go/random/v3 v3.0.2"
      );
      await driver.exec("cdktf", ["provider", "upgrade", "random@=3.4.3"]);
      expect(driver.readLocalFile("go.mod")).not.toContain(
        "github.com/cdktf/cdktf-provider-random-go/random/v3 v3.0.0"
      );
      expect(driver.readLocalFile("go.mod")).toContain(
        "github.com/cdktf/cdktf-provider-random-go/random/v3 v3.0.11"
      );
    }, 180_000);
  });
});
