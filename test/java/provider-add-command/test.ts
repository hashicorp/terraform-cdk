// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";

describe("provider add command", () => {
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

    it("detects correct cdktf version", async () => {
      const res = await driver.exec("cdktf", ["debug"]);
      expect(res.stdout).toContain("cdktf: 0.10.4");
    });

    test("installs pre-built provider using maven", async () => {
      const res = await driver.exec("cdktf", [
        "provider",
        "add",
        "random@=3.1.3", // this is not the latest version, but theres v0.2.55 of the pre-built provider resulting in exactly this package
      ]);
      expect(res.stdout).toMatchInlineSnapshot(`
        "Checking whether pre-built provider exists for the following constraints:
          provider: random
          version : =3.1.3
          language: java
          cdktf   : 0.10.4


        Found pre-built provider.

        Adding com.hashicorp.cdktf-provider-random @ 0.2.55 to pom.xml

        Package installed.
        "
      `);
      expect(res.stderr).toBe("");

      const proj = driver.readLocalFile("pom.xml");

      expect(proj).toContain("<artifactId>cdktf-provider-random</artifactId>");
      expect(proj).toContain("<version>0.2.55</version>");
    }, 180_000);
  });
});
