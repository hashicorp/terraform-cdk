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
  .option('disable-logging', { type: 'boolean', default: false, required: false, desc: 'Dont write log files'})
  .option('log-level', { type: 'string', required: false, desc: 'Which log level should be written. Only supported via setting the env CDKTF_LOG_LEVEL'})
  .argv;

if (args._.length === 0) {
  yargs.showHelp();
}
