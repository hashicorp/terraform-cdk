// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as path from "path";
import * as fs from "fs";
import { TerraformStack } from "./terraform-stack";
import { AnnotationMetadataEntryType } from "./annotations";
import stringify = require("json-stable-stringify");

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
  // Only valid for HCL synthesis, for JSON the metadata is within the synthesized output
  readonly stackMetadataPath: string;
  readonly workingDirectory: string;
  readonly annotations: StackAnnotation[];
  readonly dependencies: string[];
}

export interface IManifest {
  readonly stacks: Record<StackManifest["name"], StackManifest>;
  readonly version: string;
}

// eslint-disable-next-line jsdoc/require-jsdoc
export class Manifest implements IManifest {
  public static readonly fileName = "manifest.json";
  public static readonly stacksFolder = "stacks";
  public static readonly stackMetadataPath = "metadata.json";

  public readonly stacks: Record<StackManifest["name"], StackManifest> = {};
  public readonly stackFileName: string;

  constructor(
    public readonly version: string,
    public readonly outdir: string,
    public readonly hclOutput: boolean
  ) {
    const stacksPath = path.join(this.outdir, Manifest.stacksFolder);
    if (!fs.existsSync(stacksPath)) fs.mkdirSync(stacksPath);

    this.stackFileName = hclOutput ? "cdk.tf" : "cdk.tf.json";
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
        this.stackFileName
      ),
      stackMetadataPath: path.join(
        Manifest.stacksFolder,
        node.id,
        Manifest.stackMetadataPath
      ),
      annotations: [], // will be replaced later when processed in App
      dependencies: stack.dependencies.map((item) => item.node.path),
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
      stringify(this.buildManifest(), { space: 2 })
    );
  }
}
