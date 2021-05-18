process.env.NODE_ENV = process.env.NODE_ENV || 'production'

import * as yargs from 'yargs';
import * as semver from 'semver';
import * as path from 'path';
import * as os from 'os';
import * as fs from 'fs-extra';
import { terraformVersion } from './cmds/helper/terraform';
import { DISPLAY_VERSION } from './cmds/version-check';


const ensurePluginCache = (): string => {
  const pluginCachePath = process.env.TF_PLUGIN_CACHE_DIR || path.join(os.homedir(), '.terraform.d', 'plugin-cache')
  if (!fs.existsSync(pluginCachePath)) {
    fs.mkdirpSync(pluginCachePath)
  }
  return pluginCachePath;
}

if (!process.env.CDKTF_DISABLE_PLUGIN_CACHE_ENV) {
  process.env.TF_PLUGIN_CACHE_DIR = ensurePluginCache()
}

if (semver.lt(process.version, '10.12.0')) { console.error("Need at least Node v10.12 to run") ; process.exit(1) }

yargs
  .commandDir('cmds')
  .recommendCommands()
  .wrap(yargs.terminalWidth())
  .showHelpOnFail(false)
  .env('CDKTF')
  .epilogue(`Options can be specified via environment variables with the "CDKTF_" prefix (e.g. "CDKTF_OUTPUT")`)
  .help()
  .alias('h', 'help')
  .option('disable-logging', { type: 'boolean', default: true, required: false, desc: 'Dont write log files. Supported using the env CDKTF_DISABLE_LOGGING.'})
  .option('disable-plugin-cache-env', { type: 'boolean', default: false, required: false, desc: 'Dont set TF_PLUGIN_CACHE_DIR automatically. This is useful when the plugin cache is configured differently. Supported using the env CDKTF_DISABLE_PLUGIN_CACHE_ENV.'})
  .option('log-level', { type: 'string', required: false, desc: 'Which log level should be written. Only supported via setting the env CDKTF_LOG_LEVEL'})
  .option('context-json', { required: false, hidden: true, desc: 'Used internally for env variable' })
  .command({
    command: '*', // catches everything not previously matched
    handler: (argv) => {
      const cmd = argv._[0];
      console.error(cmd ? `Could not find command "${cmd}"` : `Please pass a command`);
      console.error(`Please run "${argv.$0} help" to get a list of commands.`)
      process.exit(1);
    }
  })
  .fail((_message, error) => {
    console.error(error.stack);

    terraformVersion.then(tfVersion => {
      console.error(`
Debug Information:
    Terraform CDK version: ${DISPLAY_VERSION}
    Terraform version: ${tfVersion}`)
    });
  })
  .argv;
