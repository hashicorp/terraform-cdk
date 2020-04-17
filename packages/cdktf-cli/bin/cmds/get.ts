import * as yargs from 'yargs';
import * as fs from 'fs-extra';
import { readConfigSync } from '../../lib/config';
import { GetProvider } from '../../lib/get/providers';
import { GetModule } from '../../lib/get/modules';
import { Language } from '../../lib/get/base';

const config = readConfigSync();
const DEFAULT_OUTDIR = '.gen'
const LANGUAGES = [ 'typescript' ];

interface Arguments {
  providers: string[];
  modules: string[];
  output: string;
  language: Language;
}

class Command implements yargs.CommandModule {
  public readonly command = 'get [OPTIONS]';
  public readonly describe = 'Generate CDK Constructs for Terraform providers and modules.';

  public readonly builder = (args: yargs.Argv) => args
    .option('providers', { default: config.terraformProviders, desc: 'Generate Constructs for given providers. Example: "aws@~> 2.5"', alias: 'p', type: 'array' })
    .option('modules', { default: config.terraformModules, desc: 'Generate Constructs for given modules. Example: "terraform-aws-modules/vpc/aws"', alias: 'm', type: 'array' })
    .option('output', { default: DEFAULT_OUTDIR, type: 'string', desc: 'Output directory', alias: 'o' })
    .option('language', { default: config.language, demand: true, type: 'string', desc: 'Output programming language', alias: 'l', choices: LANGUAGES });

  public async handler(argv: any) {
    const args = argv as Arguments
    const providers = args.providers.filter(Boolean);
    const modules = args.modules.filter(Boolean);
    const { output, language } = args

    await fs.remove(output);

    if (providers.length === 0 && modules.length === 0) {
      console.error(`ERROR: Please provider at least one of the arguments for "providers" or "modules" or create a "cdktf.json" config file`);
      process.exit(1);
    }

    const options = {
      outdir: output,
      targetLanguage: language
    }

    if (providers.length > 0) {
      await new GetProvider().get(Object.assign({}, options, {moduleNames: providers}))
    }

    if (modules.length > 0) {
      await new GetModule().get(Object.assign({}, options, {moduleNames: modules}))
    }

    if (!await fs.pathExists(output)) {
      console.error(`ERROR: synthesis failed, app expected to create "${output}"`);
      process.exit(1);
    }
  }
}

module.exports = new Command();
