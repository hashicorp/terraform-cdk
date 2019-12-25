import { Construct, IConstruct, ISynthesisSession } from '@aws-cdk/core';
import * as fs from 'fs';
import * as path from 'path';
import { TerraformResource } from './terraform-resource';

export class TerraformStack extends Construct {
  public readonly artifactFile: string;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.artifactFile = `${this.node.uniqueId}.tf.json`;
  }

  public synthesize(session: ISynthesisSession) {
    const output = path.join(session.assembly.outdir, this.artifactFile);

    const resource: { [type: string]: { [name: string]: any } } = { };

    const visit = (node: IConstruct) => {
      if (node instanceof TerraformResource) {

        let s = resource[node.type];
        if (!s) {
          s = resource[node.type] = { };
        }
        
        s[node.node.uniqueId] = node.synthesizeAttributes();
      }

      for (const child of node.node.children) {
        visit(child);
      }
    }

    visit(this);

    const tf = {
      resource
    };

    fs.writeFileSync(output, JSON.stringify(tf, undefined, 2));
  }
}
