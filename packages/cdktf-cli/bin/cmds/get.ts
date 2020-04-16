import * as yargs from 'yargs';
import * as fs from 'fs-extra';
import { readConfigSync } from '../../lib/config';

const config = readConfigSync();
const DEFAULT_OUTDIR = '.gen'
const LANGUAGES = [ 'typescript' ];

class Command implements yargs.CommandModule {
  public readonly command = 'get';
  public readonly describe = 'Generate CDK Constructs for Terraform providers and modules.';

  public readonly builder = (args: yargs.Argv) => args
    .option('providers', { default: config.terraformProviders, desc: 'Generate Constructs for given providers. Example: "aws@2.5.2"', alias: 'p' })
    .option('modules', { default: config.terraformModules, desc: 'Generate Constructs for given modules. Example: "terraform-aws-modules/vpc/aws@0.7.2"', alias: 'm' })    
    .option('output', { default: DEFAULT_OUTDIR, type: 'string', desc: 'Output directory', alias: 'o' })
    .option('language', { default: config.language, demand: true, type: 'string', desc: 'Output programming language', alias: 'l', choices: LANGUAGES });

  public async handler(argv: any) {
    // const { providers, modules, language } = argv;
    const outdir = argv.output;

    await fs.remove(outdir);

    if (!await fs.pathExists(outdir)) {
      console.error(`ERROR: synthesis failed, app expected to create "${outdir}"`);
      process.exit(1);
    }    
  }
}

module.exports = new Command();
