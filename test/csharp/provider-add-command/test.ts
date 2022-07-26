// Copyright (c) HashiCorp, Inc
// Licensed under the Mozilla Public License 2.0
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
        init: { additionalOptions: "--cdktf-version 0.10.4" },
      });
    }, 500_000);

    it("detects correct cdktf version", async () => {
      const res = await driver.exec("cdktf", ["debug"]);
      expect(res.stdout).toContain("cdktf: 0.10.4");
    });

    onPosix(
      "installs pre-built provider using nuget",
      async () => {
        const res = await driver.exec("cdktf", [
          "provider",
          "add",
          "random@=3.1.3", // this is not the latest version, but theres v0.2.55 of the pre-built provider resulting in exactly this package
        ]);
        expect(res.stdout).toMatchInlineSnapshot(`
                  "Checking whether pre-built provider exists for the following constraints:
                    provider: random
                    version : =3.1.3
                    language: csharp
                    cdktf   : 0.10.4


                  Found pre-built provider.

                  Installing package HashiCorp.Cdktf.Providers.Random @ 0.2.55 using \\"dotnet add package HashiCorp.Cdktf.Providers.Random --version 0.2.55\\".

                  Package installed.
                  "
              `);
        expect(res.stderr).toBe("");

        const proj = driver.readLocalFile("MyTerraformStack.csproj");

        expect(proj).toContain(
          '<PackageReference Include="HashiCorp.Cdktf.Providers.Random" Version="0.2.55" />'
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
          "random@=3.1.3", // this is not the latest version, but theres v0.2.55 of the pre-built provider resulting in exactly this package
        ]);
        expect(res.stdout).toMatchInlineSnapshot(`
                  "Checking whether pre-built provider exists for the following constraints:
                    provider: random
                    version : =3.1.3
                    language: csharp
                    cdktf   : 0.10.4


                  Found pre-built provider.

                  Installing package HashiCorp.Cdktf.Providers.Random @ 0.2.55 using \\"dotnet add package HashiCorp.Cdktf.Providers.Random --version 0.2.55\\".

                  Package installed.
                  "
              `);
        expect(res.stderr).toBe("");

        const proj = driver.readLocalFile("MyTerraformStack.csproj");

        expect(proj).toContain(
          '<PackageReference Include="HashiCorp.Cdktf.Providers.Random" Version="0.2.55" />'
        );
      },
      500_000
    );
  });
});
