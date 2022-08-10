// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as fs from "fs";
import { withTempDir } from "../../util";
import { Language, ConstructsMaker } from "../constructs-maker";
import * as path from "path";

import { TerraformModuleConstraint } from "../../config";

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
