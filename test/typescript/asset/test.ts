import { TestDriver } from "../../test-helper";
import * as path from "path";
import * as fs from "fs";
import { App, TerraformHclModule, TerraformStack, Testing } from "cdktf";

describe("full integration test", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupTypescriptProject();
    driver.copyFiles("local-asset.txt", "relative-asset.txt");
    driver.copyFolders("fixtures", "relative");
  });

  test("synth", async () => {
    await driver.synth("fixed");
    expect(driver.synthesizedStack("fixed").toString()).toMatchSnapshot();
  });

  test("file asset copied", async () => {
    await driver.synth("fixed");
    expect(
      fs.readFileSync(
        path.resolve(
          driver.stackDirectory("fixed"),
          "assets/localasset/hash/local-asset.txt"
        ),
        "utf-8"
      )
    ).toMatchSnapshot();
  });

  test("folder asset copied", async () => {
    await driver.synth("fixed");
    expect(
      fs.readFileSync(
        path.resolve(
          driver.stackDirectory("fixed"),
          "assets/fixtures/hash/a.txt"
        ),
        "utf-8"
      )
    ).toMatchSnapshot();
    expect(
      fs.readFileSync(
        path.resolve(
          driver.stackDirectory("fixed"),
          "assets/fixtures/hash/b.txt"
        ),
        "utf-8"
      )
    ).toMatchSnapshot();
    expect(
      fs.readFileSync(
        path.resolve(
          driver.stackDirectory("fixed"),
          "assets/fixtures/hash/foo/bar/c.txt"
        ),
        "utf-8"
      )
    ).toMatchSnapshot();
  });

  test("zip file created", async () => {
    await driver.synth("fixed");

    const stat = fs.statSync(
      path.resolve(
        driver.stackDirectory("fixed"),
        "assets/zippedfixtures/hash/archive.zip"
      )
    );
    expect(stat.isFile()).toBe(true);
  });

  test("relative file asset copied", async () => {
    await driver.synth("fixed");
    expect(
      fs.readFileSync(
        path.resolve(
          driver.stackDirectory("fixed"),
          "assets/relativeasset/hash/relative-asset.txt"
        ),
        "utf-8"
      )
    ).toMatchSnapshot();
  });

  test("relative folder asset copied", async () => {
    await driver.synth("fixed");
    expect(
      fs.readFileSync(
        path.resolve(
          driver.stackDirectory("fixed"),
          "assets/relative/hash/a.txt"
        ),
        "utf-8"
      )
    ).toMatchSnapshot();
    expect(
      fs.readFileSync(
        path.resolve(
          driver.stackDirectory("fixed"),
          "assets/relative/hash/b.txt"
        ),
        "utf-8"
      )
    ).toMatchSnapshot();
    expect(
      fs.readFileSync(
        path.resolve(
          driver.stackDirectory("fixed"),
          "assets/relative/hash/bar/c.txt"
        ),
        "utf-8"
      )
    ).toMatchSnapshot();
  });

  test("without asset changes there should be no redeployment", async () => {
    expect(await driver.diff("normal")).toContain(
      "1 to add, 0 to change, 0 to destroy"
    );
    await driver.deploy(["normal"]);
    expect(await driver.diff("normal")).toContain("No changes");
  });
});

describe("createAssetsFromLocalModules test", () => {
  test("remote source without createAssetsFromLocalModules", () => {
    const remoteSource = "terraform-aws-modules/eks/aws";

    const app = Testing.stubVersion(new App({ stackTraces: false }));
    const stack = new TerraformStack(app, "MyStack");

    const moduleOptionsNotExists = new TerraformHclModule(
      stack,
      "moduleOptionsNotExists",
      {
        source: remoteSource,
      }
    );

    expect(moduleOptionsNotExists.source).toEqual(remoteSource);
  });

  test("remote source with createAssetsFromLocalModules set to true", () => {
    const remoteSource = "terraform-aws-modules/eks/aws";

    const app = Testing.stubVersion(new App({ stackTraces: false }));
    const stack = new TerraformStack(app, "MyStack");

    const moduleOptionsTrue = new TerraformHclModule(
      stack,
      "moduleOptionsTrue",
      {
        source: remoteSource,
        createAssetsFromLocalModules: true,
      }
    );

    expect(moduleOptionsTrue.source).toEqual(remoteSource);
  });

  test("remote source with createAssetsFromLocalModules set to false", () => {
    const remoteSource = "terraform-aws-modules/eks/aws";

    const app = Testing.stubVersion(new App({ stackTraces: false }));
    const stack = new TerraformStack(app, "MyStack");

    const moduleOptionsFalse = new TerraformHclModule(
      stack,
      "moduleOptionsFalse",
      {
        source: remoteSource,
        createAssetsFromLocalModules: false,
      }
    );

    expect(moduleOptionsFalse.source).toEqual(remoteSource);
  });

  test("local source without createAssetsFromLocalModules", () => {
    const localSource = "../";
    const assetRegex =
      /^.\/assets\/MyStack_localmoduleid_[a-zA-z\d]{8}\/[a-zA-z\d]+$/;

    const app = Testing.stubVersion(new App({ stackTraces: false }));
    const stack = new TerraformStack(app, "MyStack");

    const moduleOptionsNotExists = new TerraformHclModule(
      stack,
      "moduleOptionsNotExists",
      {
        source: localSource,
      }
    );

    expect(moduleOptionsNotExists.source).toMatch(assetRegex);
  });

  test("local source with createAssetsFromLocalModules set to true", () => {
    const localSource = "../";
    const assetRegex =
      /^.\/assets\/MyStack_localmoduleid_[a-zA-z\d]{8}\/[a-zA-z\d]+$/;

    const app = Testing.stubVersion(new App({ stackTraces: false }));
    const stack = new TerraformStack(app, "MyStack");

    const moduleOptionsTrue = new TerraformHclModule(
      stack,
      "moduleOptionsTrue",
      {
        source: localSource,
        createAssetsFromLocalModules: true,
      }
    );

    expect(moduleOptionsTrue.source).toMatch(assetRegex);
  });

  test("local source with createAssetsFromLocalModules set to false", () => {
    const localSource = "../";

    const app = Testing.stubVersion(new App({ stackTraces: false }));
    const stack = new TerraformStack(app, "MyStack");

    const moduleOptionsFalse = new TerraformHclModule(
      stack,
      "moduleOptionsFalse",
      {
        source: localSource,
        createAssetsFromLocalModules: false,
      }
    );

    expect(moduleOptionsFalse.source).toEqual(localSource);
  });
});
