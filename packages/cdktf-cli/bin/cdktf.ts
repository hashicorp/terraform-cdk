process.env.NODE_ENV = process.env.NODE_ENV || "production";

import * as yargs from "yargs";
import * as path from "path";
import * as os from "os";
import * as fs from "fs-extra";
import { readCDKTFManifest } from "../lib/util";
import { IsErrorType } from "../lib/errors";
import { collectDebugInformation } from "../lib/debug";
import { CDKTF_DISABLE_PLUGIN_CACHE_ENV } from "../lib/environment";
import * as Sentry from "@sentry/node";

const ensurePluginCache = (): string => {
  const pluginCachePath =
    process.env.TF_PLUGIN_CACHE_DIR ||
    path.join(os.homedir(), ".terraform.d", "plugin-cache");
  if (!fs.existsSync(pluginCachePath)) {
    fs.mkdirpSync(pluginCachePath);
  }
  return pluginCachePath;
};

if (!CDKTF_DISABLE_PLUGIN_CACHE_ENV) {
  process.env.TF_PLUGIN_CACHE_DIR = ensurePluginCache();
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
  .command(require("./cmds/debug"))
  .recommendCommands()
  .exitProcess(false)
  .wrap(yargs.terminalWidth())
  .showHelpOnFail(false)
  .env("CDKTF")
  .epilogue(
    `Options can be specified via environment variables with the "CDKTF_" prefix (e.g. "CDKTF_OUTPUT")`
  )
  .help()
  .alias("h", "help")
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
        cmd
          ? `Could not find command "${cmd}", here are all available ones:`
          : `Please pass a command to cdktf, here are all available ones:`
      );
      yargs.showHelp();
      process.exit(1);
    },
  })
  .fail(async (message, error) => {
    // will not stop the process, but stops further execution of the handler function
    // this is called first because yargs is not waiting for this async function
    yargs.exit(1, error);

    // set if e.g. the validation of command arguments failed
    if (message) {
      console.log(message);
    }

    // set if e.g. an handler threw an error while being invoked
    if (IsErrorType(error, "Usage")) {
      console.error(error.message);
    } else if (error) {
      console.error(error.stack);
      console.error("Collecting Debug Information...");
      const debugOutput = await collectDebugInformation();

      console.error("Debug Information:");
      Object.entries(debugOutput).forEach(([key, value]) => {
        console.log(`${key}: ${value === null ? "null" : value}`);
      });
    }

    await Sentry.close(4000);
    process.exit(1);
  }).argv;
