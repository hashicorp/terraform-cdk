// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { onPosix, TestDriver, onWindows } from "../../test-helper";

describe("provider upgrade command", () => {
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

    onPosix(
      "installs pre-built provider using nuget",
      async () => {
        await driver.exec("cdktf", [
          "provider",
          "add",
          "random@=3.4.2", // this is not the latest version, but theres v2.0.52 of the pre-built provider resulting in exactly this package
        ]);

        expect(driver.readLocalFile("MyTerraformStack.csproj")).toContain(
          '<PackageReference Include="HashiCorp.Cdktf.Providers.Random" Version="2.0.52" />'
        );

        await driver.exec("cdktf", ["provider", "upgrade", "random@=3.4.3"]);

        expect(driver.readLocalFile("MyTerraformStack.csproj")).not.toContain(
          '<PackageReference Include="HashiCorp.Cdktf.Providers.Random" Version="2.0.52" />'
        );
        expect(driver.readLocalFile("MyTerraformStack.csproj")).toContain(
          '<PackageReference Include="HashiCorp.Cdktf.Providers.Random" Version="2.0.79" />'
        );
      },
      500_000
    );

    onWindows(
      "installs pre-built provider using nuget",
      async () => {
        await driver.exec("cdktf", [
          "provider",
          "add",
          "random@=3.4.2", // this is not the latest version, but theres v2.0.52 of the pre-built provider resulting in exactly this package
        ]);

        expect(driver.readLocalFile("MyTerraformStack.csproj")).toContain(
          '<PackageReference Include="HashiCorp.Cdktf.Providers.Random" Version="2.0.52" />'
        );

        await driver.exec("cdktf", ["provider", "upgrade", "random@=3.4.3"]);

        expect(driver.readLocalFile("MyTerraformStack.csproj")).not.toContain(
          '<PackageReference Include="HashiCorp.Cdktf.Providers.Random" Version="2.0.52" />'
        );
        expect(driver.readLocalFile("MyTerraformStack.csproj")).toContain(
          '<PackageReference Include="HashiCorp.Cdktf.Providers.Random" Version="2.0.79" />'
        );
      },
      500_000
    );
  });
});
