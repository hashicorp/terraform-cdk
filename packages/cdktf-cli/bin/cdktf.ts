process.env.NODE_ENV = process.env.NODE_ENV || "production";

import * as yargs from "yargs";
import * as semver from "semver";
import * as path from "path";
import * as os from "os";
import * as fs from "fs-extra";
import { terraformVersion } from "./cmds/helper/terraform";
import { DISPLAY_VERSION } from "./cmds/helper/version-check";
import { readCDKTFManifest } from "../lib/util";

const ensurePluginCache = (): string => {
  const pluginCachePath =
    process.env.TF_PLUGIN_CACHE_DIR ||
    path.join(os.homedir(), ".terraform.d", "plugin-cache");
  if (!fs.existsSync(pluginCachePath)) {
    fs.mkdirpSync(pluginCachePath);
  }
  return pluginCachePath;
};

if (!process.env.CDKTF_DISABLE_PLUGIN_CACHE_ENV) {
  process.env.TF_PLUGIN_CACHE_DIR = ensurePluginCache();
}

if (semver.lt(process.version, "10.12.0")) {
  console.error("Need at least Node v10.12 to run");
  process.exit(1);
}

const customCompletion = function (
  _current: string,
  argv: any,
  completionsFilter: (
    done?: (err: any, defaultCompletions: string[]) => void
  ) => void,
  done: (completions: string[]) => void
) {
  // The completion function gets called when bash completion is invoked and
  // we have very little context there. So when debugging via logs use e.g.
  // fs.appendFileSync("/Users/ansgar/cdktf-completions.log", `hello log\n`);

  // complete positional arg for stack for diff / deploy (and their aliases plan / apply)
  if (
    argv._.includes("diff") ||
    argv._.includes("deploy") ||
    argv._.includes("plan") ||
    argv._.includes("apply")
  ) {
    completionsFilter(async (_err, defaults) => {
      const stacks: string[] = [];
      try {
        const manifest = await readCDKTFManifest();
        stacks.push(
          ...Object.values(manifest.stacks).map(
            (stack) => `${stack.name}:target stack "${stack.name}"`
          )
        );
      } finally {
        done([...defaults, ...stacks]);
      }
    });
  } else {
    completionsFilter();
  }
  // return done([current]);
} as unknown as yargs.AsyncCompletionFunction;
// ^ we need to fake the type here as yargs internally checks whether four
// arguments are present but does not expose the types correctly to typescript
// for the possible overload (which supports falling back to default completions)
// https://github.com/yargs/yargs/blob/d33e9972291406490cd8fdad0b3589be234e0f12/lib/completion.ts#L202

yargs
  .command(require("./cmds/init"))
  .command(require("./cmds/get"))
  .command(require("./cmds/convert"))
  .command(require("./cmds/deploy"))
  .command(require("./cmds/destroy"))
  .command(require("./cmds/diff"))
  .command(require("./cmds/list"))
  .command(require("./cmds/login"))
  .command(require("./cmds/synth"))
  .command(require("./cmds/watch"))
  .command(require("./cmds/output"))
  .recommendCommands()
  .wrap(yargs.terminalWidth())
  .showHelpOnFail(false)
  .env("CDKTF")
  .epilogue(
    `Options can be specified via environment variables with the "CDKTF_" prefix (e.g. "CDKTF_OUTPUT")`
  )
  .help()
  .alias("h", "help")
  .option("disable-logging", {
    type: "boolean",
    default: true,
    required: false,
    desc: "Dont write log files. Supported using the env CDKTF_DISABLE_LOGGING.",
  })
  .option("disable-plugin-cache-env", {
    type: "boolean",
    default: false,
    required: false,
    desc: "Dont set TF_PLUGIN_CACHE_DIR automatically. This is useful when the plugin cache is configured differently. Supported using the env CDKTF_DISABLE_PLUGIN_CACHE_ENV.",
  })
  .option("log-level", {
    type: "string",
    required: false,
    desc: "Which log level should be written. Only supported via setting the env CDKTF_LOG_LEVEL",
  })
  .option("context-json", {
    required: false,
    hidden: true,
    desc: "Used internally for env variable",
  })
  .completion("completion", customCompletion) // outputs completion script on "cdktf completion"
  .command({
    command: "*", // catches everything not previously matched
    handler: (argv) => {
      const cmd = argv._[0];
      console.error(
        cmd ? `Could not find command "${cmd}"` : `Please pass a command`
      );
      console.error(`Please run "${argv.$0} help" to get a list of commands.`);
      process.exit(1);
    },
  })
  .fail((_message, error) => {
    if (error) {
      console.error(error.stack);
    }

    terraformVersion.then((tfVersion) => {
      console.error(`
Debug Information:
    Terraform CDK version: ${DISPLAY_VERSION}
    Terraform version: ${tfVersion}`);
    });
  }).argv;
