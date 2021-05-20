import { Node } from 'constructs';
import * as path from 'path';
import * as fs from 'fs';
import { TerraformStack } from './terraform-stack';

export interface StackManifest {
  readonly name: string;
  readonly constructPath: string;
  readonly synthesizedStackPath: string;
  readonly workingDirectory: string;
}

export class Manifest {
  public static readonly fileName = 'manifest.json';
  public static readonly stacksFolder = 'stacks';
  public static readonly stackFileName = 'cdk.tf.json';

  public readonly stacks: StackManifest[] = [];

  constructor(public readonly version: string, public readonly outdir: string) {
    const stacksPath = path.join(this.outdir, Manifest.stacksFolder)
    if (!fs.existsSync(stacksPath)) fs.mkdirSync(stacksPath);
  }

  public forStack(stack: TerraformStack): StackManifest {
    const node = Node.of(stack)
    const manifest = {
      name: node.id,
      constructPath: node.path,
      workingDirectory: path.join(Manifest.stacksFolder, node.id),
      synthesizedStackPath: path.join(Manifest.stacksFolder, node.id, Manifest.stackFileName)
    }
    this.stacks.push(manifest)

    return manifest;
  }

  public buildManifest(): any {
    return {
      version: this.version,
      stacks: this.stacks.reduce((newObject: Record<string, StackManifest>, stack: StackManifest) => {
        newObject[stack.name] = stack;
        return newObject
      }, {})
    }
  }

  public writeToFile() {
    fs.writeFileSync(path.join(this.outdir, Manifest.fileName), JSON.stringify(this.buildManifest(), undefined, 2));
  }
}
