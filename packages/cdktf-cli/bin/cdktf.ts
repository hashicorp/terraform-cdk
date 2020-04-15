import * as yargs from 'yargs';

const args = yargs
  .commandDir('cmds')
  .recommendCommands()
  .wrap(yargs.terminalWidth())
  .showHelpOnFail(false)
  .env('CDKTF')
  .epilogue(`Options can be specified via environment variables with the "CDKTF_" prefix (e.g. "CDKTF_OUTPUT")`)
  .help()
  .argv;

if (args._.length === 0) {
  yargs.showHelp();
}
