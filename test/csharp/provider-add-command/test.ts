// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { onPosix, TestDriver, onWindows } from "../../test-helper";

describe("provider add command", () => {
  describe("pre-built", () => {
    let driver: TestDriver;
    beforeEach(async () => {
      driver = new TestDriver(__dirname, {
        CDKTF_DIST: "",
        DISABLE_VERSION_CHECK: "true",
      }); // reset CDKTF_DIST set by run-against-dist script & disable version check as we have to use an older version of cdktf-cli
      await driver.setupCsharpProject({
        init: { additionalOptions: "--cdktf-version 0.12.2" },
      });
    }, 500_000);

    it("detects correct cdktf version", async () => {
      const res = await driver.exec("cdktf", ["debug"]);
      expect(res.stdout).toContain("cdktf: 0.12.2");
    });

    onPosix(
      "installs pre-built provider using nuget",
      async () => {
        const res = await driver.exec("cdktf", [
          "provider",
          "add",
          "random@=3.4.2", // this is not the latest version, but theres v3.0.52 of the pre-built provider resulting in exactly this package
        ]);
        expect(res.stdout).toMatchInlineSnapshot(`
          "Checking whether pre-built provider exists for the following constraints:
            provider: random
            version : =3.4.2
            language: csharp
            cdktf   : 0.12.2


          Found pre-built provider.

          Installing package HashiCorp.Cdktf.Providers.Random @ 2.0.52 using \\"dotnet add package HashiCorp.Cdktf.Providers.Random --version 2.0.52\\".

          Package installed.
          "
        `);
        expect(res.stderr).toBe("");

        const proj = driver.readLocalFile("MyTerraformStack.csproj");

        expect(proj).toContain(
          '<PackageReference Include="HashiCorp.Cdktf.Providers.Random" Version="2.0.52" />'
        );
      },
      500_000
    );

    onWindows(
      "installs pre-built provider using nuget",
      async () => {
        const res = await driver.exec("cdktf", [
          "provider",
          "add",
          "random@=3.4.2", // this is not the latest version, but theres v2.0.52 of the pre-built provider resulting in exactly this package
        ]);
        expect(res.stdout).toMatchInlineSnapshot(`
                  "Checking whether pre-built provider exists for the following constraints:
                    provider: random
                    version : =3.4.2
                    language: csharp
                    cdktf   : 0.12.2


                  Found pre-built provider.

                  Installing package HashiCorp.Cdktf.Providers.Random @ 2.0.52 using \\"dotnet add package HashiCorp.Cdktf.Providers.Random --version 2.0.52\\".

                  Package installed.
                  "
              `);
        expect(res.stderr).toBe("");

        const proj = driver.readLocalFile("MyTerraformStack.csproj");

        expect(proj).toContain(
          '<PackageReference Include="HashiCorp.Cdktf.Providers.Random" Version="2.0.52" />'
        );
      },
      500_000
    );
  });
});
