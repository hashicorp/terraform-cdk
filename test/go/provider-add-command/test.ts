import { onPosix, onWindows, TestDriver } from "../../test-helper";

describe("provider add command", () => {
  describe("pre-built", () => {
    let driver: TestDriver;
    beforeEach(async () => {
      driver = new TestDriver(__dirname, {
        CDKTF_DIST: "",
        DISABLE_VERSION_CHECK: "true",
      }); // reset CDKTF_DIST set by run-against-dist script & disable version check as we have to use an older version of cdktf-cli
      await driver.setupGoProject({
        init: { additionalOptions: "--cdktf-version 0.10.4" },
      });
    }, 500_000);

    it("detects correct cdktf version", async () => {
      const res = await driver.exec("cdktf", ["debug"]);
      expect(res.stdout).toContain("cdktf: 0.10.4");
    });

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
          "hashicorp/null@ ~> 3.1.0",
          "hashicorp/local@=2.2.3",
        ]
      `);

        expect(res.stdout).toContain(
          `Local providers have been updated. Running cdktf get to update...`
        );

        await new Promise((r) => setTimeout(r, 10000));

        const genVersionsFile = JSON.parse(
          driver.readLocalFile(".gen/versions.json")
        );

        expect(
          genVersionsFile["registry.terraform.io/hashicorp/local"]
        ).toEqual("2.2.3");
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
          "hashicorp/null@ ~> 3.1.0",
          "hashicorp/local@=2.2.3",
        ]
      `);

        expect(res.stdout).toContain(
          `Local providers have been updated. Running cdktf get to update...`
        );

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
