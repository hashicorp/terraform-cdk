import { Construct, IConstruct, ISynthesisSession, Node } from 'constructs';
import { resolve } from './_tokens'
import * as fs from 'fs';
import * as path from 'path';
import { TerraformElement } from './terraform-element';
import { deepMerge } from './util';

export interface TerraformStackMetadata {
  readonly stackName: string;
  readonly version: string;
}

export class TerraformStack extends Construct {
  public readonly artifactFile: string;
  private readonly rawOverrides: any = {}
  private readonly cdktfVersion: string;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.artifactFile = `${Node.of(this).uniqueId}.tf.json`;
    this.cdktfVersion = Node.of(this).tryGetContext('cdktfVersion')
  }

  public addOverride(path: string, value: any) {
    const parts = path.split('.');
    let curr: any = this.rawOverrides;

    while (parts.length > 1) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const key = parts.shift()!;

      // if we can't recurse further or the previous value is not an
      // object overwrite it with an object.
      const isObject = curr[key] != null && typeof(curr[key]) === 'object' && !Array.isArray(curr[key]);
      if (!isObject) {
        curr[key] = {};
      }

      curr = curr[key];
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const lastKey = parts.shift()!;
    curr[lastKey] = value;
  }

  public toTerraform(): any {
    const tf = {
      "//": {
        metadata: {
          version: this.cdktfVersion,
          stackName: this.artifactFile,
        } as TerraformStackMetadata
      }
    };

    const visit = (node: IConstruct) => {
      if (node instanceof TerraformElement) {
        deepMerge(tf,  node.toTerraform());
      }

      for (const child of Node.of(node).children) {
        visit(child);
      }
    }

    visit(this);

    deepMerge(tf, this.rawOverrides);

    return resolve(this, tf);
  }

  public onSynthesize(session: ISynthesisSession) {
    const resourceOutput = path.join(session.outdir, this.artifactFile);
    fs.writeFileSync(resourceOutput, JSON.stringify(this.toTerraform(), undefined, 2));
    this.linkDotTerraform(session.outdir)
  }

  private linkDotTerraform(outdir: string): void {
    const dirName = '.terraform';
    const link = path.join(path.resolve(outdir), dirName);
    const target = path.join(process.cwd(), dirName);
    if (!fs.existsSync(link)) fs.symlinkSync(target, link);
  }
}
