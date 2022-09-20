// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as fs from "fs-extra";
import * as path from "path";
import * as chalk from "chalk";
import indentString from "indent-string";
import { Manifest, StackManifest, TerraformStackMetadata } from "cdktf";
import { performance } from "perf_hooks";
import { logger } from "./logging";
import { sendTelemetry } from "./checkpoint";
import { shell } from "./util";

const chalkColour = new chalk.Instance();

interface SynthesizedStackMetadata {
  "//"?: { [key: string]: TerraformStackMetadata };
}

export interface SynthesizedStack extends StackManifest {
  content: string;
}

interface ManifestJson {
  version: string;
  stacks: StackManifest[];
}

type SynthOrigin = "watch";

export class SynthStack {
  public static async synth(
    abortSignal: AbortSignal,
    command: string,
    outdir: string,
    workingDirectory = process.cwd(),
    graceful = false, // will not exit the process but rethrow the error instead
    synthOrigin?: SynthOrigin
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
    } else {
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
        },
        cwd: workingDirectory,
        signal: abortSignal,
      });
    } catch (e) {
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

    if (!(await fs.pathExists(path.join(outdir, Manifest.fileName)))) {
      const errorMessage = `ERROR: synthesis failed, app expected to create "${outdir}/${Manifest.fileName}"`;
      if (graceful) {
        throw new Error(errorMessage);
      }
      logger.error(errorMessage);
      process.exit(1);
    }

    // end performance timer
    const endTime = performance.now();

    const stacks: SynthesizedStack[] = [];
    const manifest = JSON.parse(
      fs.readFileSync(path.join(outdir, Manifest.fileName)).toString()
    ) as ManifestJson;

    for (const stackName in manifest.stacks) {
      const stack = manifest.stacks[stackName];
      const filePath = path.join(outdir, stack.synthesizedStackPath);
      const jsonContent: SynthesizedStackMetadata = JSON.parse(
        fs.readFileSync(filePath).toString()
      );
      stacks.push({
        ...stack,
        workingDirectory: path.join(outdir, stack.workingDirectory),
        content: JSON.stringify(jsonContent, null, 2),
      });
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

  public static async synthTelemetry(
    totalTime: number,
    stacks: SynthesizedStack[],
    synthOrigin?: SynthOrigin
  ): Promise<void> {
    await sendTelemetry("synth", {
      totalTime: totalTime,
      synthOrigin,
      stackMetadata: stacks.map(
        (stack) => JSON.parse(stack.content)["//"].metadata
      ),
    });
  }

  public static async synthErrorTelemetry(synthOrigin?: SynthOrigin) {
    await sendTelemetry("synth", { error: true, synthOrigin });
  }
}
