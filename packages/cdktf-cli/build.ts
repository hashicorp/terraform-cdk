const esbuild = require("esbuild");
import * as fs from "fs-extra";

(async () => {
  await esbuild.build({
    entryPoints: ["./bin/cdktf.ts"],
    bundle: true,
    outdir: "./bin-dist",
    format: "cjs",
    target: "node12",
    minify: true,
    sourcemap: true,
    platform: "node",
    external: [
      "jsii",
      "jsii-pacmak",
      "@cdktf/hcl2json",
      "yargs",
      "cdktf",
      "@cdktf/hcl2cdk",
      "constructs",
    ],
    tsconfig: "tsconfig.json",
  });

  fs.copySync("./bin/cdktf", "./bin-dist/cdktf");
})();
