import * as path from "path";
import * as fs from "fs";
import { TerraformStack } from "./terraform-stack";
import { AnnotationMetadataEntryType } from "./annotations";

export interface StackAnnotation {
  readonly constructPath: string;
  readonly level: AnnotationMetadataEntryType;
  readonly message: string;
  readonly stacktrace?: string[];
}
export interface StackManifest {
  readonly name: string;
  readonly constructPath: string;
  readonly synthesizedStackPath: string;
  readonly workingDirectory: string;
  readonly annotations: StackAnnotation[];
  readonly dependencies: string[];
}

export interface IManifest {
  readonly stacks: Record<StackManifest["name"], StackManifest>;
  readonly version: string;
}

export class Manifest implements IManifest {
  public static readonly fileName = "manifest.json";
  public static readonly stacksFolder = "stacks";
  public static readonly stackFileName = "cdk.tf.json";

  public readonly stacks: Record<StackManifest["name"], StackManifest> = {};

  constructor(public readonly version: string, public readonly outdir: string) {
    const stacksPath = path.join(this.outdir, Manifest.stacksFolder);
    if (!fs.existsSync(stacksPath)) fs.mkdirSync(stacksPath);
  }

  public forStack(stack: TerraformStack): StackManifest {
    const node = stack.node;
    const name = node.id;

    if (this.stacks[name]) {
      return this.stacks[name];
    }

    const manifest: StackManifest = {
      name,
      constructPath: node.path,
      workingDirectory: path.join(Manifest.stacksFolder, node.id),
      synthesizedStackPath: path.join(
        Manifest.stacksFolder,
        node.id,
        Manifest.stackFileName
      ),
      annotations: [], // will be replaced later when processed in App
      dependencies: stack.dependencies.map((item) => item.toString()),
    };
    this.stacks[name] = manifest;

    return manifest;
  }

  public buildManifest(): IManifest {
    return {
      version: this.version,
      stacks: this.stacks,
    };
  }

  public writeToFile() {
    fs.writeFileSync(
      path.join(this.outdir, Manifest.fileName),
      JSON.stringify(this.buildManifest(), undefined, 2)
    );
  }
}
