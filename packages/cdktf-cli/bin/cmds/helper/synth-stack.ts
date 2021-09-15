import { shell } from "../../../lib/util";
import * as fs from "fs-extra";
import * as path from "path";
import * as chalk from "chalk";
import indentString from "indent-string";
import { Manifest, StackManifest, TerraformStackMetadata } from "cdktf";
import { sendTelemetry } from "../../../lib/checkpoint";
import { performance } from "perf_hooks";

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
    command: string,
    outdir: string,
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

    try {
      await shell(command, [], {
        shell: true,
        env: {
          ...process.env,
          CDKTF_OUTDIR: outdir,
          CDKTF_CONTINUE_SYNTH_ON_ERROR_ANNOTATIONS: "true", // we want to display the errors ourselves
        },
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
      console.error(errorOutput);
      process.exit(1);
    }

    if (!(await fs.pathExists(path.join(outdir, Manifest.fileName)))) {
      const errorMessage = `ERROR: synthesis failed, app expected to create "${outdir}/${Manifest.fileName}"`;
      if (graceful) {
        throw new Error(errorMessage);
      }
      console.error(errorMessage);
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
      console.error("ERROR: No Terraform code synthesized.");
    }

    const stackNames = stacks.map((s) => s.name);
    const orphanedDirectories = existingDirectories.filter(
      (e) => !stackNames.includes(path.basename(e))
    );

    for (const orphanedDirectory of orphanedDirectories) {
      fs.rmdirSync(orphanedDirectory, { recursive: true });
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
