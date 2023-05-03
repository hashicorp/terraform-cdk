import * as yargs from "yargs";
import { LOGGABLE_CONSTRUCTS, LOG_COMMAND } from ".";
import { execSync } from "child_process";
import Handlebars from "handlebars";
import { LogPlugin } from "./plugin";

function getLogs(stack: string, construct: string, handlebarArgs = {}) {
  const state = LogPlugin.getStateOfConstruct(stack, construct);

  const logCommand = LogPlugin.getSynthedValueInCdktfConstructMetadata(
    stack,
    construct,
    LOG_COMMAND
  );
  if (!logCommand) {
    throw new Error(`No log command found for ${construct} in stack ${stack}`);
  }

  const compiledLogCommand = Handlebars.compile(logCommand);

  const commandToRun = compiledLogCommand({ ...handlebarArgs, state });
  console.log(`Running ${commandToRun}`);
  execSync(commandToRun, {
    cwd: process.cwd(),
    stdio: "inherit",
  });
}

yargs
  .command(
    "list <stack>",
    "Lists all loggable constructs",
    (yargs) =>
      yargs.positional("stack", {
        describe: "The stack to list the loggable constructs for",
      }),
    async (argv) => {
      const stack = argv.stack as string;
      console.log(`Listing loggable constructs for stack ${stack}`);

      const loggableConstructs =
        LogPlugin.getInSynthedStackManifest(stack, LOGGABLE_CONSTRUCTS) || [];

      console.log(JSON.stringify(loggableConstructs, null, 2));
    }
  )
  .command(
    "show <stack> <construct>",
    "Shows the log output for a construct",
    (yargs) =>
      yargs
        .positional("stack", {
          describe: "The stack to list the loggable constructs for",
        })
        .positional("construct", {
          describe: "The construct to show the log output for",
        }),

    async (argv) => {
      const { stack, construct } = argv;
      console.log(
        `Showing logs for loggable construct ${construct} in stack ${stack}`
      );

      getLogs(stack as string, construct as string, { watch: false });
    }
  )
  .command(
    "watch <stack> <construct>",
    "Watches the log output for a construct",
    (yargs) =>
      yargs
        .positional("stack", {
          describe: "The stack to list the loggable constructs for",
        })
        .positional("construct", {
          describe: "The construct to show the log output for",
        }),

    async (argv) => {
      const { stack, construct } = argv;
      console.log(`Watching loggable construct ${construct} in stack ${stack}`);
      getLogs(stack as string, construct as string, { watch: true });
    }
  )
  .demandCommand()
  .recommendCommands()
  .strict()
  .help().argv;
