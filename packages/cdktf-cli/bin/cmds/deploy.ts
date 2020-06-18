import * as yargs from 'yargs';
import { render } from 'ink';
import React from 'react';
import  { Deploy } from './ui/deploy'
import { readConfigSync } from '../../lib/config';
const config = readConfigSync();

class Command implements yargs.CommandModule {
  public readonly command = 'deploy [OPTIONS]';
  public readonly describe = 'Deploy the given stack';

  public readonly builder = (args: yargs.Argv) => args
    .option('app', { default: config.app, required: true, desc: 'Command to use in order to execute cdktf app', alias: 'a' })
    .option('output', { default: config.output, required: true, desc: 'Output directory', alias: 'o' })
    .showHelpOnFail(true)

  public async handler(argv: any) {
    const command = argv.app;
    const outdir = argv.output;

    render(React.createElement(Deploy, { targetDir: outdir, synthCommand: command }));
  }
}

module.exports = new Command();

