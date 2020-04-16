import * as fs from 'fs-extra';
import * as path from 'path';
import { shell } from '../util';

export interface JsiiCompileOptions {
  /**
   * Name of the module.
   */
  readonly name: string;

  /**
   * Name of the main module file without suffix.
   */
  readonly main: string;

  /**
   * Whether to print stdout.
   * @default false
   */
  readonly stdout?: boolean;
}

/**
 * Compiles the source files in `workdir` with jsii.
 */
export async function jsiiCompile(workdir: string, options: JsiiCompileOptions) {
  const stdout = options.stdout ?? false;
  const name = options.name ?? 'dummy';
  const compiler = require.resolve('jsii/bin/jsii');
  const args = [ '--silence-warnings', 'reserved-word' ];

  const main = options.main;

  const modules = [
    'constructs',
    'cdktf',
    '@types/node',
  ];

  const pkg = {
    name,
    version: '0.0.0',
    author: "dummy@dummy.com",
    main: `${main}.js`,
    types: `${main}.d.ts`,
    license: 'Apache-2.0',
    repository: { url: 'http://repo', type: 'git' },
    jsii: {
      outdir: "dist",
      targets: {
        python: {
          distName: main,
          module: main
        }
      }
    },
    dependencies: {
      "constructs": "*",
      "cdktf": "*",
    },
    peerDependencies: {
      "constructs": "*",
      "cdktf": "*",
    }
  };

  for (const mod of modules) {
    const sourcedir = path.dirname(require.resolve(`${mod}/package.json`));
    await fs.mkdirp(path.join(workdir, path.join('node_modules', path.dirname(mod))));
    await fs.ensureSymlink(sourcedir, path.join(workdir, 'node_modules', mod));
  }

  await fs.writeFile(path.join(workdir, 'package.json'), JSON.stringify(pkg, undefined, 2));

  await shell(compiler, args, {
    cwd: workdir,
    stdio: [ 'inherit', stdout ? 'inherit' : 'ignore', 'inherit' ]
  });
}