#!/usr/bin/env node
import * as path from "path";
import * as fs from "fs-extra";
import { edgeSchema } from ".";
import { generateProviderBindingsFromSchema } from "../..";

// This script builds the schema for the edge provider into the given directory for all languages.
const args = process.argv.slice(2);
const targetPath = args[0];

if (!targetPath) {
  console.error("No target path specified");
  process.exit(1);
}

// Clear / Create path
fs.mkdirpSync(targetPath);
fs.emptyDirSync(targetPath);

const deps = ["@types/node", "constructs", "cdktf"];

(async () => {
  await generateProviderBindingsFromSchema(targetPath, edgeSchema, {
    entrypoint: path.join("providers", "edge", "index.ts"),
    deps: deps.map((dep) =>
      path.dirname(require.resolve(`${dep}/package.json`))
    ),
    moduleKey: "edge",
    python: {
      outdir: path.resolve(targetPath, "python"),
      moduleName: "edge",
    },
    java: {
      outdir: path.resolve(targetPath, "java"),
      package: `imports.edgeprovider`,
    },
    csharp: {
      outdir: path.resolve(targetPath, "csharp"),
      namespace: "Providers.Edge",
    },
    golang: {
      outdir: path.resolve(targetPath, "go"),
      moduleName: "cdk.tf/go/stack/generated/hashicorp",
      packageName: "edge",
    },
  });
})();
