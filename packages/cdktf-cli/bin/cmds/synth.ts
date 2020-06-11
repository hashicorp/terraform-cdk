import * as yargs from 'yargs';
import { readConfigSync } from '../../lib/config';
import { SynthStack } from './helper/synth-stack'
import * as fs from 'fs-extra';

const config = readConfigSync();

class Command implements yargs.CommandModule {
  public readonly command = 'synth';
  public readonly describe = 'Synthesizes Terraform code for the given app in a directory.';
  public readonly aliases = [ 'synthesize' ];

  public readonly builder = (args: yargs.Argv) => args
    .option('app', { default: config.app, required: true, desc: 'Command to use in order to execute cdktf app', alias: 'a' })
    .option('output', { default: config.output, required: true, desc: 'Output directory', alias: 'o' });

  public async handler(argv: any) {
    const command = argv.app;
    const outdir = argv.output;

    if (!await fs.pathExists(config.codeMakerOutput)) {
      console.error(`ERROR: synthesis failed, run "cdktf get" to generate providers in ${config.codeMakerOutput}`);
      process.exit(1);
    }

    const stacks = await SynthStack.synth(command, outdir)

    for (const stack of stacks) {
      console.error(`Stack: ${stack.name}`)
      console.log(stack.content)
    }
  }
}

module.exports = new Command();
