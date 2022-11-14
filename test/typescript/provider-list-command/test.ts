// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";

describe("provider list command", () => {
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

  describe("lists both local and prebuilt providers", () => {
    beforeEach(async () => {
      await driver.exec("cdktf", [
        "provider",
        "add",
        "random@=3.1.3", // this is not the latest version, but theres v0.2.55 of the pre-built provider resulting in exactly this package
        "Backblaze/b2@=0.8.1",
      ]);
    });

    test("with json output", async () => {
      const res = await driver.exec("cdktf", ["provider", "list", "--json"]);

      const output = JSON.parse(res.stdout);

      expect(output).toHaveProperty("local");
      expect(output).toHaveProperty("prebuilt");
      expect(output.local).toHaveLength(1);
      expect(output.prebuilt).toHaveLength(1);

      expect(output.local[0]).toEqual(
        expect.objectContaining({
          providerName: "Backblaze/b2",
          providerConstraint: "=0.8.1",
          providerVersion: "0.8.1",
        })
      );

      expect(output.prebuilt[0]).toEqual(
        expect.objectContaining({
          packageName: "@cdktf/provider-random",
          packageVersion: "0.2.55",
          providerName: "random",
          providerVersion: "3.1.3",
          cdktfVersion: "^0.10.3",
        })
      );
    }, 120_000);

    test("with tabular output", async () => {
      const res = await driver.exec("cdktf", ["provider", "list"]);

      expect(res.stdout).toMatchSnapshot();
    }, 120_000);
  });
});
