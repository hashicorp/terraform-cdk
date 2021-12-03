import * as fs from "fs";
import { mkdtemp, withTempDir } from "../../util";
import { Language, ConstructsMaker } from "../constructs-maker";
import * as path from "path";
import {
  TerraformDependencyConstraint,
  TerraformModuleConstraint,
} from "../../config";

export function expectImportMatchSnapshot(
  constraint: TerraformDependencyConstraint
) {
  jest.setTimeout(240_000);

  test(constraint.name, async () => {
    await mkdtemp(async (workdir) => {
      const jsiiPath = path.join(workdir, ".jsii");

      const maker = new ConstructsMaker(
        {
          codeMakerOutput: workdir,
          outputJsii: jsiiPath,
          targetLanguage: Language.TYPESCRIPT,
        },
        [constraint]
      );

      await maker.generate();

      const manifest = JSON.parse(
        await fs.promises.readFile(jsiiPath, "utf-8")
      );

      // patch versions in manifest because they're not stable
      manifest.dependencies.cdktf = "999.999.999";
      manifest.fingerprint = "<fingerprint>";
      manifest.jsiiVersion = "<jsiiVersion>";

      expect(manifest).toMatchSnapshot();
    });
  });
}

export function expectModuleToMatchSnapshot(
  testName: string,
  testCategory: string,
  fixtureNames: string[]
) {
  test(testName, async () => {
    await withTempDir(`${testName.replace(/\s*/, "-")}.test`, async () => {
      const curdir = process.cwd();
      fs.mkdirSync("module");

      fixtureNames.forEach((fixtureName) => {
        fs.copyFileSync(
          path.join(__dirname, testCategory, "fixtures", fixtureName),
          path.join(curdir, "module", fixtureName)
        );
      });

      const constraint = new TerraformModuleConstraint({
        source: "./module",
        name: "module",
        fqn: "module",
      });

      fs.mkdirSync("work");
      const workdir = path.join(curdir, "work");

      const maker = new ConstructsMaker(
        { codeMakerOutput: workdir, targetLanguage: Language.TYPESCRIPT },
        [constraint]
      );
      await maker.generate();

      const output = fs.readFileSync(
        path.join(workdir, "modules/module.ts"),
        "utf-8"
      );
      expect(output).toMatchSnapshot();
    });
  });
}
