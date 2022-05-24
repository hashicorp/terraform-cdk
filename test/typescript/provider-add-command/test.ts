import { TestDriver, onPosix, onWindows } from "../../test-helper";

describe("provider add command", () => {
  let driver: TestDriver;

  describe("pre-built", () => {
    beforeEach(async () => {
      driver = new TestDriver(__dirname, { CDKTF_DIST: "" }); // reset CDKTF_DIST set by run-against-dist script
      await driver.setupTypescriptProject({
        init: { additionalOptions: "--cdktf-version 0.10.4" },
      });
    });

    test("installs pre-built provider using npm", async () => {
      const res = await driver.exec("cdktf", [
        "provider",
        "add",
        "random@=3.1.3", // this is not the latest version, but theres v0.2.55 of the pre-built provider resulting in exactly this package
      ]);
      expect(res.stdout).toMatchInlineSnapshot(`
        "Checking whether pre-built provider exists for the following constraints:
          provider: random
          version : =3.1.3
          language: typescript
          cdktf   : 0.10.4


        Found pre-built provider.

        Adding package @cdktf/provider-random @ 0.2.55

        Installing package @cdktf/provider-random @ 0.2.55 using npm.

        Package installed.
        "
      `);

      const packageJson = JSON.parse(driver.readLocalFile("package.json"));

      expect(packageJson.dependencies).toEqual(
        expect.objectContaining({
          "@cdktf/provider-random": expect.any(String),
        })
      );
    }, 120_000);
  });

  describe("local", () => {
    beforeEach(async () => {
      driver = new TestDriver(__dirname);
      await driver.setupTypescriptProject();
    });

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
          "null@ ~> 3.1.0",
          "hashicorp/local@=2.2.3",
        ]
      `);

        const genVersionsFile = JSON.parse(
          driver.readLocalFile(".gen/versions.json")
        );

        expect(
          genVersionsFile["registry.terraform.io/hashicorp/local"]
        ).toEqual("2.2.3");
      },
      120_000
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
          "null@ ~> 3.1.0",
          "hashicorp/local@=2.2.3",
        ]
      `);

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
