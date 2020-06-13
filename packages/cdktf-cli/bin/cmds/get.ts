import * as yargs from 'yargs';
import { render } from 'ink';
import React from 'react';
import { readConfigSync } from '../../lib/config';
import { Language } from '../../lib/get/base';
import { Get } from './ui/get'

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

    if (providers.length === 0 && modules.length === 0) {
      console.error(`ERROR: Please specify providers in "cdktf.json" config file`);
      process.exit(1);
    }

    render(React.createElement(Get, { codeMakerOutput: output, language: language, modules: modules, providers: providers }));
  }
}

module.exports = new Command();
