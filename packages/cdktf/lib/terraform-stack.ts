import { Construct, IConstruct, ISynthesisSession, Node } from 'constructs';
import { resolve } from './_tokens'
import * as fs from 'fs';
import * as path from 'path';
import { TerraformElement } from './terraform-element';
import { deepMerge } from './util';
import { TerraformProvider } from './terraform-provider';

const STACK_SYMBOL = Symbol.for('ckdtf/TerraformStack');

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

    this.artifactFile = `cdk.tf.json`;
    this.cdktfVersion = Node.of(this).tryGetContext('cdktfVersion')

    Object.defineProperty(this, STACK_SYMBOL, { value: true });
  }

  public static isStack(x: any): x is TerraformStack {
    return x !== null && typeof(x) === 'object' && STACK_SYMBOL in x;
  }

  public static of(construct: IConstruct): TerraformStack {
    return _lookup(construct);

    function _lookup(c: IConstruct): TerraformStack  {
      if (TerraformStack.isStack(c)) {
        return c;
      }

      const node = Node.of(c)

      if (!node.scope) {
        throw new Error(`No stack could be identified for the construct at path '${Node.of(construct).path}'`);
      }

      return _lookup(node.scope);
    }
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

  public allProviders(): TerraformProvider[] {
    const providers: TerraformProvider[] = [];

    const visit = async (node: IConstruct) => {
      if (node instanceof TerraformProvider) {
        providers.push(node)
      }

      for (const child of Node.of(node).children) {
        visit(child);
      }
    }

    visit(this)

    return resolve(this, providers);
  }

  public toTerraform(): any {
    const tf = {
      "//": {
        metadata: {
          version: this.cdktfVersion,
          stackName: Node.of(this).id,
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

  protected onSynthesize(session: ISynthesisSession) {
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
