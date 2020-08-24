process.env.NODE_ENV = process.env.NODE_ENV || 'production'

import * as yargs from 'yargs';
import * as semver from 'semver';
import * as path from 'path';
import * as os from 'os';
import * as fs from 'fs-extra';

const ensurePluginCache = (): string => {
  const pluginCachePath = process.env.TF_PLUGIN_CACHE_DIR || path.join(os.homedir(), '.terraform.d', 'plugin-cache')
  if (!fs.existsSync(pluginCachePath)) {
    fs.mkdirpSync(pluginCachePath)
  }
  return pluginCachePath;
}

process.env.TF_PLUGIN_CACHE_DIR = ensurePluginCache()
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
  .option('disable-logging', { type: 'boolean', default: true, required: false, desc: 'Dont write log files. Supported using the env CDKTF_DISABLE_LOGGING.'})
  .option('log-level', { type: 'string', required: false, desc: 'Which log level should be written. Only supported via setting the env CDKTF_LOG_LEVEL'})
  .argv;

if (args._.length === 0) {
  yargs.showHelp();
}
