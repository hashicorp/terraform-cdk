import { onPosix, onWindows, TestDriver } from "../../test-helper";

describe("provider add command", () => {
  describe("local", () => {
    let driver: TestDriver;
    beforeEach(async () => {
      driver = new TestDriver(__dirname);
      await driver.setupGoProject();
    }, 500_000);

    onPosix(
      "adds local provider on posix", // Don't have pre-built providers for go
      async () => {
        const res = await driver.exec("cdktf", [
          "provider",
          "add",
          "local@=2.2.3",
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
});
