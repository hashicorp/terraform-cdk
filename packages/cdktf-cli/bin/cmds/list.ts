import yargs from 'yargs'
import React from 'react';
import { List } from './ui/list'
import { readConfigSync } from '../../lib/config';
import { renderInk } from './render-ink'
import { displayVersionMessage } from './version-check'

const config = readConfigSync();

class Command implements yargs.CommandModule {
  public readonly command = 'list [OPTIONS]';
  public readonly describe = 'List stacks in app.';

  public readonly builder = (args: yargs.Argv) => args
    .option('app', { default: config.app, desc: 'Command to use in order to execute cdktf app', alias: 'a' })
    .option('output', { default: config.output, desc: 'Output directory', alias: 'o' })
    .showHelpOnFail(true);

  public async handler(argv: any) {
    await displayVersionMessage()
    const command = argv.app;
    const outdir = argv.output;

    await renderInk(React.createElement(List, { targetDir: outdir, synthCommand: command }))
  }
}

module.exports = new Command();
