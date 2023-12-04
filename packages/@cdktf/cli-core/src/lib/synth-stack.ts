// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as fs from "fs-extra";
import * as path from "path";
import * as chalk from "chalk";
import indentString from "indent-string";
import { Manifest, StackManifest, TerraformStackMetadata } from "cdktf";
import { performance } from "perf_hooks";
import { logger, readConfigSync, sendTelemetry, shell } from "@cdktf/commons";
import { format } from "@cdktf/hcl-tools";

const chalkColour = new chalk.Instance();

export interface SynthesizedStackMetadata {
  "//"?: { [key: string]: TerraformStackMetadata };
}

export interface SynthesizedStack extends StackManifest {
  content: string;
}

export class StackDependencies {
  public pendingStacks: SynthesizedStack[] = [];
  public inflightStacks: SynthesizedStack[] = [];
  public deployedStacks: SynthesizedStack[] = [];

  constructor(private readonly stacks: SynthesizedStack[]) {
    this.pendingStacks = [...this.stacks];
  }

  public startRun(stack: SynthesizedStack): void {
    this.pendingStacks = this.pendingStacks.filter(
      (item) => item.name !== stack.name
    );
    this.inflightStacks.push(stack);
  }

  public finishRun(stack: SynthesizedStack): void {
    this.inflightStacks = this.inflightStacks.filter(
      (item) => item.name !== stack.name
    );
    this.deployedStacks.push(stack);
  }

  public get pendingDeployableStacks(): SynthesizedStack[] {
    return this.pendingStacks.filter((pendingStack) => {
      const unmetDependencies = pendingStack.dependencies.filter(
        (dependency) => {
          return !this.deployedStacks.some((deployedStack) => {
            return deployedStack.name === dependency;
          });
        }
      );

      return unmetDependencies.length === 0;
    });
  }
}

interface ManifestJson {
  version: string;
  stacks: StackManifest[];
}

export type SynthOrigin = "watch";

export class SynthStack {
  public static async synth(
    abortSignal: AbortSignal,
    command: string,
    outdir: string,
    workingDirectory = process.cwd(),
    graceful = false, // will not exit the process but rethrow the error instead
    noColor = false,
    synthOrigin?: SynthOrigin,
    hcl = false
  ): Promise<SynthesizedStack[]> {
    // start performance timer
    const startTime = performance.now();

    const isDirectory = (source: string) => fs.lstatSync(source).isDirectory();
    const getDirectories = (source: string) => {
      if (!fs.existsSync(source)) return [];
      return fs
        .readdirSync(source)
        .map((name) => path.join(source, name))
        .filter(isDirectory);
    };

    const existingDirectories = getDirectories(
      path.join(outdir, Manifest.stacksFolder)
    );

    const env = Object.fromEntries(
      Object.entries(process.env).filter(
        // We don't want to pass Terraform variables to the synth command since they should only be used at execution time
        ([key]) => !key.startsWith("TF_VAR_")
      )
    );

    // Increases the default memory available to Node.js when synthesizing a TypeScript CDK project.
    const nodeOptsSwitch = "--max-old-space-size";
    const nodeOptsSetting = `${nodeOptsSwitch}=4096`;
    if (env.NODE_OPTIONS && !env.NODE_OPTIONS.includes(nodeOptsSwitch)) {
      logger.warn(`WARNING: Found NODE_OPTIONS environment variable without a setting for ${nodeOptsSwitch}
The synthesizing step for TypeScript may need an increased amount of memory if multiple large providers
are used with locally generated bindings. You can ignore this if you don't use CDKTF with TypeScript.
If not present, the cdktf-cli sets it to NODE_OPTIONS="${nodeOptsSetting}" by default. But as
your environment already contains a NODE_OPTIONS variable, we won't override it. Hence, the app command
might fail while synthesizing with an out of memory error.`);
    } else if (!env.NODE_OPTIONS) {
      // increase memory to allow ts-node (when using TypeScript) to handle large amounts of generated code in memory
      env.NODE_OPTIONS = `${env.NODE_OPTIONS || ""} ${nodeOptsSetting}`.trim();
    }

    try {
      await shell(command, [], {
        shell: true,
        env: {
          ...env,
          CDKTF_OUTDIR: outdir,
          CDKTF_CONTINUE_SYNTH_ON_ERROR_ANNOTATIONS: "true", // we want to display the errors ourselves
          CDKTF_HCL_OUTPUT: hcl.toString(),
        },
        cwd: workingDirectory,
        signal: abortSignal,
        noColor: noColor,
      });
    } catch (e: any) {
      const errorOutput = chalkColour`{redBright cdktf encountered an error while synthesizing}

Synth command: {blue ${command}}
Error:         {redBright ${e.message}}
${
  e.stderr
    ? chalkColour`
Command output on stderr:

{dim ${indentString(e.stderr, 4)}}
`
    : ""
}
${
  e.stdout
    ? chalkColour`
Command output on stdout:

{dim ${indentString(e.stdout, 4)}}
`
    : ""
}`;
      await this.synthErrorTelemetry(synthOrigin);
      if (graceful) {
        e.errorOutput = errorOutput;
        throw e;
      }
      console.error(`ERROR: ${errorOutput}`);
      process.exit(1);
    }

    // Apply formatting to HCL files if hcl output was selected
    if (hcl) {
      SynthStack.formatHclFiles(outdir);
    }

    // end performance timer
    const endTime = performance.now();

    let stacks: SynthesizedStack[] = [];
    try {
      stacks = await SynthStack.readSynthesizedStacks(outdir);
    } catch (e: any) {
      const errorMessage = `ERROR: synthesis failed, because app was expected to call 'synth()', but didn't. Thus "${outdir}/${Manifest.fileName}"  was not created: ${e}`;
      if (graceful) {
        throw new Error(errorMessage);
      }
      logger.error(errorMessage);
      process.exit(1);
    }

    await this.synthTelemetry(endTime - startTime, stacks, synthOrigin);

    if (stacks.length === 0) {
      logger.error("ERROR: No Terraform code synthesized.");
    }

    const stackNames = stacks.map((s) => s.name);
    const orphanedDirectories = existingDirectories.filter(
      (e) => !stackNames.includes(path.basename(e))
    );

    for (const orphanedDirectory of orphanedDirectories) {
      fs.rmSync(orphanedDirectory, { recursive: true });
    }

    return stacks;
  }

  public static async formatHclFiles(outDir: string) {
    const manifestPath = path.join(outDir, Manifest.fileName);
    if (!(await fs.pathExists(manifestPath))) {
      throw new Error(
        `Could not find manifest file at ${manifestPath}. In case --skip-synth was passed, please try again without the flag.`
      );
    }

    const manifest = JSON.parse(
      fs.readFileSync(manifestPath).toString()
    ) as ManifestJson;

    for (const stackName in manifest.stacks) {
      const stack = manifest.stacks[stackName];
      const filePath = path.join(outDir, stack.synthesizedStackPath);

      const hclContent = fs.readFileSync(filePath).toString();
      const formattedHcl = await format(hclContent);
      fs.writeFileSync(filePath, formattedHcl);
    }
  }

  public static async readSynthesizedStacks(
    outdir: string
  ): Promise<SynthesizedStack[]> {
    const manifestPath = path.join(outdir, Manifest.fileName);
    if (!(await fs.pathExists(manifestPath))) {
      throw new Error(
        `Could not find manifest file at ${manifestPath}. In case --skip-synth was passed, please try again without the flag.`
      );
    }

    const stacks: SynthesizedStack[] = [];
    const manifest = JSON.parse(
      fs.readFileSync(manifestPath).toString()
    ) as ManifestJson;

    for (const stackName in manifest.stacks) {
      const stack = manifest.stacks[stackName];
      const filePath = path.join(outdir, stack.synthesizedStackPath);
      let jsonContent: SynthesizedStackMetadata = {};
      if (filePath.endsWith(".tf.json")) {
        jsonContent = JSON.parse(fs.readFileSync(filePath).toString());
      } else {
        const metadataPath = path.join(outdir, stack.stackMetadataPath!);
        jsonContent = JSON.parse(fs.readFileSync(metadataPath).toString());
      }

      stacks.push({
        ...stack,
        workingDirectory: path.join(outdir, stack.workingDirectory),
        content: JSON.stringify(jsonContent, null, 2),
      });
    }

    return stacks;
  }

  public static async synthTelemetry(
    totalTime: number,
    stacks: SynthesizedStack[],
    synthOrigin?: SynthOrigin
  ): Promise<void> {
    const config = readConfigSync();
    await sendTelemetry("synth", {
      totalTime: totalTime,
      language: config.language,
      synthOrigin,
      stackMetadata: stacks.map(
        (stack) => JSON.parse(stack.content)["//"].metadata
      ),
      requiredProviders: stacks.map(
        (stack: any) =>
          JSON.parse(stack.content)["terraform"].required_providers
      ),
    });
  }

  public static async synthErrorTelemetry(synthOrigin?: SynthOrigin) {
    await sendTelemetry("synth", { error: true, synthOrigin });
  }
}
