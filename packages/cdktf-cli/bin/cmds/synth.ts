import * as yargs from 'yargs';
import { shell } from '../../lib/util';
import * as fs from 'fs-extra';
import { readConfigSync } from '../../lib/config';

const config = readConfigSync({output: 'dist'});

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

    await shell(command, [], {
      shell: true,
      env: {
        ...process.env,
        CDKTF_OUTDIR: outdir
      }
    });

    console.log(`Generating Terraform code in the output directory: "${outdir}/"`)

    if (!await fs.pathExists(outdir)) {
      console.error(`ERROR: synthesis failed, app expected to create "${outdir}"`);
      process.exit(1);
    }

    let found = false;
    for (const file of await fs.readdir(outdir)) {
      if (file.endsWith('.tf.json')) {
        found = true;
      }
    }

    if (!found) {
      console.error('No Terraform code synthesized.');
    }
  }
}

module.exports = new Command();
