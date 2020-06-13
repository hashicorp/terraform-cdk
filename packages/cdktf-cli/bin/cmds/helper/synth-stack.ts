import { shell } from '../../../lib/util';
import * as fs from 'fs-extra';
import * as path from 'path'
import { TerraformStackMetadata } from 'cdktf'

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
    await shell(command, [], {
      shell: true,
      stdio: [null, null, null],
      env: {
        ...process.env,
        CDKTF_OUTDIR: outdir
      }
    });

    if (!await fs.pathExists(outdir)) {
      console.error(`ERROR: synthesis failed, app expected to create "${outdir}"`);
      process.exit(1);
    }

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
}
