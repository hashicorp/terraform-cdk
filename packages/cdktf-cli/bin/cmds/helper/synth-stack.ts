import { shell } from "../../../lib/util";
import * as fs from "fs-extra";
import * as path from "path";
import * as chalk from "chalk";
import indentString from "indent-string";
import { Manifest, StackManifest, TerraformStackMetadata } from "cdktf";
import { ReportRequest, ReportParams } from "../../../lib/checkpoint";
import { performance } from "perf_hooks";
import { versionNumber } from "../version-check";

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

export class SynthStack {
  public static async synth(
    command: string,
    outdir: string
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
}`;
      console.error(errorOutput);
      process.exit(1);
    }

    if (!(await fs.pathExists(path.join(outdir, Manifest.fileName)))) {
      console.error(
        `ERROR: synthesis failed, app expected to create "${outdir}/${Manifest.fileName}"`
      );
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

    await this.synthTelemetry(command, endTime - startTime, stacks);

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
    command: string,
    totalTime: number,
    stacks: SynthesizedStack[]
  ): Promise<void> {
    const reportParams: ReportParams = {
      command: "synth",
      product: "cdktf",
      version: versionNumber(),
      dateTime: new Date(),
      payload: {
        command: command,
        totalTime: totalTime,
        stackMetadata: stacks.map(
          (stack) => JSON.parse(stack.content)["//"].metadata
        ),
      },
    };

    await ReportRequest(reportParams);
  }
}
