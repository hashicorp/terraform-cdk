// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as path from "path";
import * as fs from "fs-extra";
import { glob } from "glob";
import { mkdtemp } from "../util";
import { ConstructsMaker, Language } from "../get/constructs-maker";
import { TerraformProviderConstraint } from "../config";

interface SynthOutput {
  [filePath: string]: any;
}

function directorySnapshot(root: string) {
  const output: SynthOutput = {};

  const files = glob.sync("**", {
    ignore: [".git/**", ".jsii"],
    cwd: root,
    nodir: true,
    dot: true,
  });

  for (const file of files) {
    const filePath = path.join(root, file);

    let content;

    if (path.extname(filePath) === ".json") {
      content = fs.readJsonSync(filePath);
    } else {
      content = fs.readFileSync(filePath, "utf-8");
    }

    output[file] = content;
  }

  return output;
}

describe("Provider", () => {
  it("generates a provider", async () => {
    const constraint = new TerraformProviderConstraint(
      "DataDog/datadog@= 3.12.0"
    );
    return await mkdtemp(async (workdir) => {
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
      const snapshot = directorySnapshot(workdir);
      expect(snapshot).toMatchSnapshot();
    });
  }, 600_000);
});
