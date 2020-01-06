import { Construct, IConstruct, ISynthesisSession } from '@aws-cdk/core';
import * as fs from 'fs';
import * as path from 'path';
import { TerraformElement } from './terraform-element';
import { deepMerge } from './util';

export class TerraformStack extends Construct {
  public readonly artifactFile: string;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.artifactFile = `${this.node.uniqueId}.tf.json`;
  }

  public synthesize(session: ISynthesisSession) {
    const output = path.join(session.assembly.outdir, this.artifactFile);

    let tf = { };

    const visit = (node: IConstruct) => {
      if (node instanceof TerraformElement) {
        deepMerge(tf, node.toTerraform());
      }

      for (const child of node.node.children) {
        visit(child);
      }
    }

    visit(this);


    fs.writeFileSync(output, JSON.stringify(tf, undefined, 2));
  }
}
