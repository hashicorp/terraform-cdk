import yargs from 'yargs'
import { render } from 'ink';
import React from 'react';
import { Synth } from './ui/synth'
import { readConfigSync } from '../../lib/config';
import * as fs from 'fs-extra';

const config = readConfigSync();

class Command implements yargs.CommandModule {
  public readonly command = 'synth [OPTIONS]';
  public readonly describe = 'Synthesizes Terraform code for the given app in a directory.';
  public readonly aliases = [ 'synthesize' ];

  public readonly builder = (args: yargs.Argv) => args
    .usage('Usage: $0 <command> [options]')
    .option('app', { default: config.app, desc: 'Command to use in order to execute cdktf app', alias: 'a' })
    .option('output', { default: config.output, desc: 'Output directory', alias: 'o' })
    .option('json', { type: 'boolean', desc: 'Provide JSON output for the generated Terraform configuration.', default: false })
    .showHelpOnFail(true);

  public async handler(argv: any) {
    const command = argv.app;
    const outdir = argv.output;
    const jsonOutput = argv.json;

    if (!await fs.pathExists(config.codeMakerOutput)) {
      console.error(`ERROR: synthesis failed, run "cdktf get" to generate providers in ${config.codeMakerOutput}`);
      process.exit(1);
    }

    render(React.createElement(Synth, { targetDir: outdir, synthCommand: command, jsonOutput: jsonOutput }));
  }
}

module.exports = new Command();
