const esbuild = require("esbuild");

(async () => {
  const output = await esbuild.build({
    entryPoints: [
      "./bin/cdktf.ts"
    ],
    bundle: true,
    outdir: './dist',
    format: 'cjs',
    minify: false,
    platform: 'node',
    metafile: true,
    external: [
      '@cdktf/hcl2json',
      'cdktf',
    ],
    tsconfig: 'tsconfig.json'
  });

  console.log({output});
})();