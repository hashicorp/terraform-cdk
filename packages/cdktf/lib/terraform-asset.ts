// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import * as fs from "fs";
import * as path from "path";
import {
  copySync,
  archiveSync,
  hashPath,
  findFileAboveCwd,
} from "./private/fs";
import { ISynthesisSession } from "./synthesize";
import { addCustomSynthesis } from "./synthesize/synthesizer";
import { TerraformStack } from "./terraform-stack";
import {
  assetExpectsDirectory,
  assetOutOfScopeOfCDKTFJson,
  assetTypeNotImplemented,
} from "./errors";

export interface TerraformAssetConfig {
  // path to the file or folder configured. If relative, the path is resolved from the location of cdktf.json
  readonly path: string;
  // file type of the asset, either AssetType.FILE, AssetType.DIRECTORY, AssetType.ARCHIVE
  readonly type?: AssetType;
  // hash value of the asset, if passed will be used as returned assetHash
  readonly assetHash?: string;
}

export enum AssetType {
  FILE,
  DIRECTORY,
  ARCHIVE,
}

const ARCHIVE_NAME = "archive.zip";
const ASSETS_DIRECTORY = "assets";

// eslint-disable-next-line jsdoc/require-jsdoc
export class TerraformAsset extends Construct {
  private stack: TerraformStack;
  private sourcePath: string;
  // hash value of the asset that can be passed to consuming constructs (e.g. to not recreate a lambda function in case the underlying files did not change)
  public assetHash: string;
  // file type of the asset, either AssetType.FILE, AssetType.DIRECTORY, AssetType.ARCHIVE
  public type: AssetType;

  /**
   * A Terraform Asset takes a file or directory outside of the CDK for Terraform context and moves it into it.
   * Assets copy referenced files into the stacks context for further usage in other resources.
   * @param scope
   * @param id
   * @param config
   */
  constructor(scope: Construct, id: string, config: TerraformAssetConfig) {
    super(scope, id);

    this.stack = TerraformStack.of(this);

    if (path.isAbsolute(config.path)) {
      this.sourcePath = config.path;
    } else {
      const cdktfJsonPath =
        scope.node.tryGetContext("cdktfJsonPath") ??
        findFileAboveCwd("cdktf.json");
      if (cdktfJsonPath) {
        // Relative paths are always considered to be relative to cdktf.json, but operations are performed relative to process.cwd
        const absolutePath = path.resolve(
          path.dirname(cdktfJsonPath),
          config.path
        );
        this.sourcePath = path.relative(process.cwd(), absolutePath);
      } else {
        throw assetOutOfScopeOfCDKTFJson(id, config.path);
      }
    }

    const stat = fs.statSync(this.sourcePath);
    const inferredType = stat.isFile() ? AssetType.FILE : AssetType.DIRECTORY;
    this.type = config.type ?? inferredType;
    this.assetHash = config.assetHash || hashPath(this.sourcePath);

    if (stat.isFile() && this.type !== AssetType.FILE) {
      throw assetExpectsDirectory(id, config.path);
    }

    if (!stat.isFile() && this.type === AssetType.FILE) {
      throw assetExpectsDirectory(id, config.path);
    }

    addCustomSynthesis(this, {
      onSynthesize: this._onSynthesize.bind(this),
    });
  }

  private get namedFolder(): string {
    return path.posix.join(
      ASSETS_DIRECTORY,
      this.stack.getLogicalId(this.node)
    );
  }

  /**
   * The path relative to the root of the terraform directory in posix format
   * Use this property to reference the asset
   */
  public get path(): string {
    return path.posix.join(
      this.namedFolder, // readable name
      this.assetHash, // hash depending on content so that path changes if content changes
      this.type === AssetType.DIRECTORY ? "" : this.fileName
    );
  }

  /**
   * Name of the asset
   */
  public get fileName(): string {
    switch (this.type) {
      case AssetType.ARCHIVE:
        return ARCHIVE_NAME;
      default:
        return path.basename(this.sourcePath);
    }
  }

  private _onSynthesize(session: ISynthesisSession) {
    const stackManifest = session.manifest.forStack(this.stack);
    const basePath = path.join(
      session.manifest.outdir,
      stackManifest.synthesizedStackPath,
      ".."
    );

    // Cleanup existing assets
    const previousVersionsFolder = path.join(basePath, this.namedFolder);
    if (fs.existsSync(previousVersionsFolder)) {
      fs.rmSync(previousVersionsFolder, { recursive: true });
    }

    const targetPath = path.join(basePath, this.path);

    if (this.type === AssetType.DIRECTORY) {
      fs.mkdirSync(targetPath, { recursive: true });
    } else {
      fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    }

    switch (this.type) {
      case AssetType.FILE:
        fs.copyFileSync(this.sourcePath, targetPath);
        break;

      case AssetType.DIRECTORY:
        copySync(this.sourcePath, targetPath);
        break;

      case AssetType.ARCHIVE:
        archiveSync(this.sourcePath, targetPath);
        break;
      default:
        throw assetTypeNotImplemented();
    }
  }
}
