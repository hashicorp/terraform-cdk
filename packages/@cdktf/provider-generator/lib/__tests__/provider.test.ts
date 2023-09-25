// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as path from "path";
import * as fs from "fs-extra";
import { glob } from "glob";
import { mkdtemp } from "@cdktf/commons";
import { ConstructsMaker } from "../get/constructs-maker";
import { Language, TerraformProviderConstraint } from "@cdktf/commons";

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

      if (path.basename(filePath) === "constraints.json") {
        delete content.cdktf;
      }
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
        process.env.CDKTF_EXPERIMENTAL_PROVIDER_SCHEMA_CACHE_PATH
      );
      await maker.generate([constraint]);
      const snapshot = directorySnapshot(workdir);
      expect(snapshot).toMatchSnapshot();
    });
  }, 600_000),
    it.only("has generated provider that includes static import functions", async () => {
      const constraint = new TerraformProviderConstraint(
        "DataDog/datadog@= 3.12.0"
      );
      return await mkdtemp(async (workdir) => {
        const jsiiPath = path.join(workdir, ".jsii");
        const maker = new ConstructsMaker({
          codeMakerOutput: workdir,
          outputJsii: jsiiPath,
          targetLanguage: Language.TYPESCRIPT,
        });
        await maker.generate([constraint]);
        const snapshot = directorySnapshot(workdir);

        const terraformResourceTypesPresent: string[] = [];
        const files = Object.keys(snapshot);
        for (const file of files) {
          const match = file.match(/providers\/datadog\/(.*?)\/index\.ts/);
          // avoids any not resources from being pushed
          if (
            match &&
            !match[1].includes("/") &&
            !match[1].includes("data-") &&
            !match[1].includes("provider")
          ) {
            terraformResourceTypesPresent.push(match[1]);
          }
        }
        terraformResourceTypesPresent.forEach((resource) => {
          let terraformResourceType = resource.replace(/-/g, "_");
          if (!terraformResourceType.includes("datadog")) {
            terraformResourceType = `datadog_${terraformResourceType}`;
          }
          expect(snapshot[`providers/datadog/${resource}/index.ts`]).toContain(
            `public static importGenerateConfig(scope: Construct, name: string, id: string, provider?: cdktf.TerraformProvider)`
          );
          expect(snapshot[`providers/datadog/${resource}/index.ts`]).toContain(
            `return new cdktf.ImportableResource(scope, name, { terraformResourceType: "${terraformResourceType}", importId: id, provider });`
          );
        });
      });
    }, 600_000);
});
