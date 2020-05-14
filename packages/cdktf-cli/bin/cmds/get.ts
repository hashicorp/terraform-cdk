import * as yargs from 'yargs';
import * as fs from 'fs-extra';
import { readConfigSync } from '../../lib/config';
import { GetProvider } from '../../lib/get/providers';
import { GetModule } from '../../lib/get/modules';
import { Language } from '../../lib/get/base';

const config = readConfigSync();
const LANGUAGES = [ 'typescript', 'python' ];

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
    .showHelpOnFail(true)
    .option('output', { default: config.codeMakerOutput, type: 'string', desc: 'Output directory for generated Constructs', alias: 'o' })
    .option('language', { default: config.language, required: true, type: 'string', desc: 'Output programming language', alias: 'l', choices: LANGUAGES });

  public async handler(argv: any) {
    const args = argv as Arguments
    const providers = config.terraformProviders ?? [];
    const modules = config.terraformModules ?? [];
    const { output, language } = args

    await fs.remove(output);

    if (providers.length === 0 && modules.length === 0) {
      console.error(`ERROR: Please specify providers in "cdktf.json" config file`);
      process.exit(1);
    }

    const options = {
      codeMakerOutput: output,
      outdir: config.output,
      targetLanguage: language
    }

    if (providers.length > 0) {
      await new GetProvider().get(Object.assign({}, options, {targetNames: providers}))
    }

    if (modules.length > 0) {
      await new GetModule().get(Object.assign({}, options, {targetNames: modules}))
    }

    if (!await fs.pathExists(output)) {
      console.error(`ERROR: synthesis failed, app expected to create "${output}"`);
      process.exit(1);
    }
  }
}

module.exports = new Command();
