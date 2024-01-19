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

function resourceTypesPresentInSnapshot(
  snapshot: SynthOutput,
  providerNameInPath: string
) {
  const resources: string[] = [];
  const files = Object.keys(snapshot);
  for (const file of files) {
    const match = file.match(
      `/providers\/${providerNameInPath}\/(.*?)\/index\.ts/`
    );
    // avoids any not resources from being pushed
    if (
      match &&
      !match[1].includes("/") &&
      !match[1].includes("data-") &&
      !match[1].includes("provider")
    ) {
      resources.push(match[1]);
    }
  }
  return resources;
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
  }, 600_000);

  it("has generated provider that includes static import functions", async () => {
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

      const terraformResourceTypesPresent: string[] =
        resourceTypesPresentInSnapshot(snapshot, "datadog");

      terraformResourceTypesPresent.forEach((resource) => {
        let terraformResourceType = resource.replace(/-/g, "_");
        if (!terraformResourceType.includes("datadog")) {
          terraformResourceType = `datadog_${terraformResourceType}`;
        }
        expect(snapshot[`providers/datadog/${resource}/index.ts`]).toContain(
          `public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {`
        );
        expect(snapshot[`providers/datadog/${resource}/index.ts`]).toContain(
          `return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "${terraformResourceType}", importId: importFromId, provider });`
        );
      });
    });
  }, 600_000);

  it("has name in constraint that does not match resolved name in fqpn", async () => {
    const constraint = new TerraformProviderConstraint({
      name: "dockerr",
      source: "registry.terraform.io/kreuzwerker/docker",
      version: "3.0.2",
    });
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

      const terraformResourceTypesPresent: string[] =
        resourceTypesPresentInSnapshot(snapshot, "dockerr");

      terraformResourceTypesPresent.forEach((resource) => {
        expect(
          snapshot[`providers/dockerr/${resource}/index.ts`]
        ).toBeDefined();
      });
    });
  }, 600_000);

  it("generates constructs for two providers with same name", async () => {
    const constraint = new TerraformProviderConstraint({
      name: "bitbucket",
      namespace: "Runelab",
      version: "2.1.0",
      source: "Runelab/bitbucket",
    });
    const constraint2 = new TerraformProviderConstraint({
      name: "abitbucket",
      namespace: "aeirola",
      version: "2.0.2",
      source: "aeirola/bitbucket",
    });
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
      await maker.generate([constraint, constraint2]);
      console.log("workdir", workdir);
      const snapshot = directorySnapshot(workdir);
      expect(snapshot).toMatchSnapshot();
    });
  }, 600_000);
});
