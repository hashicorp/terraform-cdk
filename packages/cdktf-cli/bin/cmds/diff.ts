import * as yargs from 'yargs';
import { render } from 'ink';
import React from 'react';
import  { Diff } from './ui/diff'
import { readConfigSync } from '../../lib/config';
const config = readConfigSync();

class Command implements yargs.CommandModule {
  public readonly command = 'diff [OPTIONS]';
  public readonly describe = 'Perform a diff (terraform plan) for the given stack';

  public readonly builder = (args: yargs.Argv) => args
    .option('app', { default: config.app, required: true, desc: 'Command to use in order to execute cdktf app', alias: 'a' })
    .option('output', { default: config.output, required: true, desc: 'Output directory', alias: 'o' })
    .showHelpOnFail(true)

  public async handler(argv: any) {
    const command = argv.app;
    const outdir = argv.output;

    render(React.createElement(Diff, { targetDir: outdir, synthCommand: command }));
  }
}

module.exports = new Command();

