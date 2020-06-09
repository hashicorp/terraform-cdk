import { shell } from '../../../lib/util';
import * as fs from 'fs-extra';
import * as path from 'path'

export class SynthStack {
  public static async synth(command: string, outdir: string): Promise<string[]> {
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

    const files: string[] = [];

    for (const file of await fs.readdir(outdir)) {
      if (file.endsWith('.tf.json')) {
        files.push(path.join(outdir, file))
      }
    }

    if (files.length === 0) {
      console.error('No Terraform code synthesized.');
    }

    return files
  }
}
