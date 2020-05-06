import { Construct, IConstruct, ISynthesisSession, Node, DefaultTokenResolver, StringConcat, Tokenization } from 'constructs';
import * as fs from 'fs';
import * as path from 'path';
import { TerraformElement } from './terraform-element';
import { deepMerge } from './util';

export class TerraformStack extends Construct {
  public readonly artifactFile: string;
  public readonly providerFile: string;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.artifactFile = `${Node.of(this).uniqueId}.tf.json`;
    this.providerFile = `providers.tf.json`;
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

    return tf
  }

  public toResolvedTerraform(): any {
    return Tokenization.resolve(this.toTerraform(), {
      scope: this,
      preparing: false,
      resolver: new DefaultTokenResolver(new StringConcat())
    });
  }

  public onSynthesize(session: ISynthesisSession) {
    const resourceOutput = path.join(session.outdir, this.artifactFile);
    const providerOutput = path.join(session.outdir, this.providerFile);
    const resolved = this.toResolvedTerraform()

    fs.writeFileSync(resourceOutput, JSON.stringify({resource: resolved.resource}, undefined, 2));

    if (fs.existsSync(providerOutput)) {
      const existingProvider = JSON.parse(fs.readFileSync(providerOutput).toString())
      fs.writeFileSync(providerOutput, JSON.stringify(deepMerge(existingProvider, {provider: resolved.provider}), undefined, 2));
    } else {
      fs.writeFileSync(providerOutput, JSON.stringify({provider: resolved.provider}, undefined, 2));
    }
  }
}
