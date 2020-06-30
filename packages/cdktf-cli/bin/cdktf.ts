import * as yargs from 'yargs';
import * as semver from 'semver';

if (semver.lt(process.version, '10.12.0')) { console.error("Need at least Node v10.12 to run") ; process.exit(1) }

const args = yargs
  .commandDir('cmds')
  .recommendCommands()
  .wrap(yargs.terminalWidth())
  .showHelpOnFail(false)
  .env('CDKTF')
  .epilogue(`Options can be specified via environment variables with the "CDKTF_" prefix (e.g. "CDKTF_OUTPUT")`)
  .help()
  .alias('h', 'help')
  .argv;

if (args._.length === 0) {
  yargs.showHelp();
}
