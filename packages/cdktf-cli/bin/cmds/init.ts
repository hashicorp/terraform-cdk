import * as yargs from 'yargs';
import * as fs from 'fs-extra';
import * as path from 'path';
import { sscaff } from 'sscaff';

const templatesDir = path.join(__dirname, '..', '..', 'templates');
const availableTemplates = fs.readdirSync(templatesDir).filter(x => !x.startsWith('.'));

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('../../package.json');

class Command implements yargs.CommandModule {
  public readonly command = 'init [OPTIONS]';
  public readonly describe = 'Create a new cdktf project from a template.';
  public readonly builder = (args: yargs.Argv) => args
    .showHelpOnFail(true)
    .option('language', { type: 'string', required: true, desc: 'The language name to be used to create a new project.' })
    .option('dist', { type: 'string', desc: 'Install dependencies from a "dist" directory (for development)' })
    .option('cdktf-version', { type: 'string', desc: 'The cdktf version to use while creating a new project.', default: pkg.version })
    .choices('language', availableTemplates);

  public async handler(argv: any) {
    if (fs.readdirSync('.').filter(f => !f.startsWith('.')).length > 0) {
      console.error(`Cannot initialize a project in a non-empty directory`);
      process.exit(1);
    }

    console.error(`Initializing a project from the ${argv.language} template`);
    const templatePath = path.join(templatesDir, argv.language);

    const deps: any = await determineDeps(argv.cdktfVersion, argv.dist);

    await sscaff(templatePath, '.', {
      ...deps
    });
  }
}

async function determineDeps(version: string, dist?: string): Promise<Deps> {
  if (dist) {
    const ret = {
      'npm_cdktf': path.resolve(dist, 'js', `cdktf@${version}.jsii.tgz`),
      'npm_cdktf_cli': path.resolve(dist, 'js', `cdktf-cli-${version}.tgz`),
      'pypi_cdktf': path.resolve(dist, 'python', `cdktf-${version.replace(/-/g, '_')}-py3-none-any.whl`)
    };

    for (const file of Object.values(ret)) {
      if (!(await fs.pathExists(file))) {
        throw new Error(`unable to find ${file} under the "dist" directory (${dist})`);
      }
    }

    return ret;
  }

  if (version === '0.0.0') {
    throw new Error(`cannot use version 0.0.0, use --cdktf-version, --dist or CDKTF_DIST to install from a "dist" directory`);
  }

  // determine if we want a specific pinned version or a version range we take
  // a pinned version if version includes a hyphen which means it is a
  // pre-release (e.g. "0.12.0-pre.e6834d3"). otherwise, we require a caret
  // version.
  const ver = version.includes('-') ? version : `^${version}`;

  return {
    'npm_cdktf': `cdktf@${ver}`,
    'npm_cdktf_cli': `cdktf-cli@${ver}`,
    'pypi_cdktf': `cdktf~=${version}`, // no support for pre-release
  };
}

interface Deps {
  npm_cdktf: string;
  npm_cdktf_cli: string;
  pypi_cdktf: string;
}

module.exports = new Command();
