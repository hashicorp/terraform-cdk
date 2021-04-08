import { shell } from '../../../lib/util';
import * as fs from 'fs-extra';
import * as path from 'path'
import * as chalk from 'chalk';
import indentString from 'indent-string';
import { TerraformStackMetadata } from 'cdktf'
import { ReportRequest, ReportParams } from '../../../lib/checkpoint'
import { performance } from 'perf_hooks';
import { versionNumber } from '../version-check';

const chalkColour = new chalk.Instance();

interface SynthesizedStackMetadata {
  "//"?: {[key: string]: TerraformStackMetadata };
}

interface SynthesizedStack {
  file: string;
  name: string;
  content: string;
}

export class SynthStack {
  public static async synth(command: string, outdir: string): Promise<SynthesizedStack[]> {
    // start performance timer
    const startTime = performance.now();
    try {
      await shell(command, [], {
        shell: true,
        env: {
          ...process.env,
          CDKTF_OUTDIR: outdir
        }
      });
    } catch (e) {
      const errorOutput = chalkColour`{redBright cdktf encountered an error while synthesizing}

Synth command: {blue ${command}}
Error:         {redBright ${e.message}}
${e.stderr ? chalkColour`
Command output on stderr:

{dim ${indentString(e.stderr, 4)}}
`
          : ''}`;
      console.error(errorOutput);
      process.exit(1);
    }

    if (!await fs.pathExists(outdir)) {
      console.error(`ERROR: synthesis failed, app expected to create "${outdir}"`);
      process.exit(1);
    }

    // end performance timer
    const endTime = performance.now();
    await this.synthTelemetry(command, (endTime - startTime));

    const stacks: SynthesizedStack[] = [];

    for (const file of await fs.readdir(outdir)) {
      if (file.endsWith('.tf.json')) {
        const filePath = path.join(outdir, file);
        const jsonContent: SynthesizedStackMetadata = JSON.parse(fs.readFileSync(filePath).toString());
        const name = jsonContent['//']?.metadata.stackName;
        if (name !== undefined) {
          stacks.push({
            file: path.join(outdir, file),
            name,
            content: JSON.stringify(jsonContent, null, 2)
          })
        }
      }
    }

    if (stacks.length === 0) {
      console.error('ERROR: No Terraform code synthesized.');
    }

    if (stacks.length > 1) {
      console.error('ERROR: Found more than one stack. Multiple stacks are not supported at the moment and might lead to unpredictable behaviour.');
    }

    return stacks
  }

  public static async synthTelemetry(command: string, totalTime: number): Promise<void> {
    const reportParams: ReportParams = {
      command: 'synth',
      product: 'cdktf',
      version: versionNumber(),
      dateTime: new Date(),
      payload: { command: command, totalTime: totalTime }
    };


    await ReportRequest(reportParams);
  }
}