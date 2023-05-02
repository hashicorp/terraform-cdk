import * as yargs from "yargs";
import { CdktfConfig } from "@cdktf/cli-core";
import * as path from "path";
import * as fs from "fs";
import { LOGGABLE_CONSTRUCTS, LOG_COMMAND } from ".";
import { execSync } from "child_process";
import Handlebars from "handlebars";

// TODO: move to plugin base package and / or into Config reader
function readManifest() {
  const cfg = CdktfConfig.read(process.cwd());

  if (!cfg) {
    throw new Error("No cdktf.json found");
  }
  const manifestPath = path.resolve(cfg.output, "manifest.json");

  if (!fs.existsSync(manifestPath)) {
    throw new Error(
      `No manifest found at ${manifestPath}. Please run 'cdktf synth' first.`
    );
  }

  return JSON.parse(fs.readFileSync(manifestPath, "utf-8")); // TODO: parse with zod
}

function getLogs(stack: string, construct: string, handlebarArgs = {}) {
  // TODO: move to plugin base package and / or into Config reader
  function readCdktfJson(stack: string) {
    const cfg = CdktfConfig.read(process.cwd());

    if (!cfg) {
      throw new Error("No cdktf.json found");
    }

    const manifest = readManifest();

    const stackManifest = manifest.stacks[stack];
    if (!stackManifest) {
      throw new Error(
        `No stack found in manifest for ${stack}. Please run 'cdktf synth' first.`
      );
    }

    const cdktfJsonPath = path.resolve(
      cfg.output,
      stackManifest.synthesizedStackPath
    );

    if (!fs.existsSync(cdktfJsonPath)) {
      throw new Error(
        `No cdk.tf.json found at ${cdktfJsonPath}. Please run 'cdktf synth' first.`
      );
    }

    return JSON.parse(fs.readFileSync(cdktfJsonPath, "utf-8")); // TODO: parse with zod
  }

  const cdktfJson = readCdktfJson(stack as string);

  function findResourceByConstructPath(json: any, constructPath: string): any {
    type CdktfJsonResource = {
      [resourceType: string]: {
        [resourceName: string]: {
          ["//"]: {
            metadata: {
              path: string;
              plugin: any;
            };
          };
        } & Record<string, any>;
      };
    };
    type CdktfJson = {
      resource: CdktfJsonResource;
      data: CdktfJsonResource;
    };
    let returnValue = undefined;
    Object.entries({
      resource: json.resource,
      data: json.data,
    } as CdktfJson).forEach(([resourceOrDataSource, resourceTypes]) =>
      Object.entries(resourceTypes).forEach(
        ([resourceType, resourceInstances]) =>
          Object.entries(resourceInstances).forEach(
            ([resourceName, resource]) => {
              if (resource["//"].metadata.path === constructPath) {
                returnValue = {
                  resourceOrDataSource,
                  resourceType,
                  resourceName,
                  resource,
                };
              }
            }
          )
      )
    );

    return returnValue;
  }

  const resourceInfo = findResourceByConstructPath(
    cdktfJson,
    `${stack}/${construct}`
  );

  if (!resourceInfo) {
    throw new Error(
      `No resource found for construct ${construct} in stack ${stack}`
    );
  }

  function getTerraformStateForResource(stack: string, resourceInfo: any) {
    const { resourceOrDataSource, resourceType, resourceName } = resourceInfo;

    const workingDir = getCdktfSynthDir(stack);

    execSync(`terraform init`, {
      cwd: workingDir,
      stdio: "ignore",
    });

    const terraformAddress = `${
      resourceOrDataSource === "data" ? "data." : ""
    }${resourceType}.${resourceName}`;

    const output = execSync(`terraform show -json`, {
      cwd: workingDir,
    });

    const parsedState = JSON.parse(String(output));

    // TODO: needs some zod parsing
    const rootModuleValues = parsedState.values.root_module;
    const resource = rootModuleValues.resources.find(
      (resource: any) => resource.address === terraformAddress
    );
    if (!resource) {
      throw new Error(
        `No resource found in terraform state for ${terraformAddress}`
      );
    }
    return { ...resource.values, ...resource.sensitive_values };
  }

  function getCdktfSynthDir(stack: string) {
    const cfg = CdktfConfig.read(process.cwd());

    if (!cfg) {
      throw new Error("No cdktf.json found");
    }

    const manifest = readManifest();

    const stackManifest = manifest.stacks[stack];
    if (!stackManifest) {
      throw new Error(
        `No stack found in manifest for ${stack}. Please run 'cdktf synth' first.`
      );
    }

    return path.resolve(cfg.output, stackManifest.workingDirectory);
  }

  const state = getTerraformStateForResource(stack as string, resourceInfo);

  const logCommand = resourceInfo.resource["//"].metadata.plugin[LOG_COMMAND];
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

// TODO: some nice yargs wrapping imported from the plugin base package?
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

      const manifest = readManifest();

      const stackManifest = manifest.stacks[stack];
      if (!stackManifest) {
        throw new Error(`No stack found in manifest for ${stack}`);
      }

      const loggableConstructs =
        stackManifest.plugin[LOGGABLE_CONSTRUCTS] || [];

      // TODO: ship nice list output
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
