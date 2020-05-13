import { Construct, IConstruct, ISynthesisSession, Node } from 'constructs';
import { resolve } from './_tokens'
import * as fs from 'fs';
import * as path from 'path';
import { TerraformElement } from './terraform-element';
import { deepMerge } from './util';

export class TerraformStack extends Construct {
  public readonly artifactFile: string;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.artifactFile = `${Node.of(this).uniqueId}.tf.json`;
  }

  public toTerraform(): any {
    const tf = { };

    const visit = (node: IConstruct) => {
      if (node instanceof TerraformElement) {
        deepMerge(tf, node.toTerraform());
      }

      for (const child of Node.of(node).children) {
        visit(child);
      }
    }

    visit(this);

    return resolve(this, tf)
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
