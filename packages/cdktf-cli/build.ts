const esbuild = require("esbuild");
import * as fs from 'fs-extra';

(async () => {
  await esbuild.build({
    entryPoints: [
      "./bin/cdktf.ts"
    ],
    bundle: true,
    outdir: './bin-dist',
    format: 'cjs',
    minify: true,
    platform: 'node',
    external: [
      '@cdktf/hcl2json',
      'cdktf',
    ],
    tsconfig: 'tsconfig.json'
  });

  fs.copySync('./bin/cdktf', './bin-dist/cdktf');
})();