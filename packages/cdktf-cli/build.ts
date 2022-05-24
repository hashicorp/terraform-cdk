const esbuild = require("esbuild");
import * as fs from "fs-extra";

// Taken from https://github.com/evanw/esbuild/issues/1051#issuecomment-806325487 to deal with `fsevents`
const nativeNodeModulesPlugin = {
  name: "native-node-modules",

  setup(build: any) {
    // If a ".node" file is imported within a module in the "file" namespace, resolve
    // it to an absolute path and put it into the "node-file" virtual namespace.
    build.onResolve(
      { filter: /\.node$/, namespace: "file" },
      (args: { path: string; resolveDir: string }) => ({
        path: require.resolve(args.path, { paths: [args.resolveDir] }),
        namespace: "node-file",
      })
    );

    // Files in the "node-file" virtual namespace call "require()" on the
    // path from esbuild of the ".node" file in the output directory.
    build.onLoad(
      { filter: /.*/, namespace: "node-file" },
      (args: { path: any }) => ({
        contents: `
        import path from ${JSON.stringify(args.path)}
        try { module.exports = require(path) }
        catch {}
      `,
      })
    );

    // If a ".node" file is imported within a module in the "node-file" namespace, put
    // it in the "file" namespace where esbuild's default loading behavior will handle
    // it. It is already an absolute path since we resolved it to one above.
    build.onResolve(
      { filter: /\.node$/, namespace: "node-file" },
      (args: { path: any }) => ({
        path: args.path,
        namespace: "file",
      })
    );

    // Tell esbuild's default loading behavior to use the "file" loader for
    // these ".node" files.
    const opts = build.initialOptions;
    opts.loader = opts.loader || {};
    opts.loader[".node"] = "file";
  },
};

(async () => {
  await esbuild.build({
    entryPoints: ["./bin/cdktf.ts", "./lib/index.ts", "./bin/cmds/handlers.ts"],
    bundle: true,
    outdir: "./bundle",
    format: "cjs",
    target: "node14",
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
    plugins: [nativeNodeModulesPlugin],
    define: {
      "process.env.SENTRY_DSN": JSON.stringify(process.env.SENTRY_DSN),
    },
    tsconfig: "tsconfig.json",
  });

  fs.copySync("./bin/cdktf", "./bundle/bin/cdktf");
})();
