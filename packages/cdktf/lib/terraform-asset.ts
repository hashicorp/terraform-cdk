import { Construct } from "constructs";
import * as fs from "fs";
import * as path from "path";
import { copySync, archiveSync, hashPath } from "./private/fs";
import { Resource } from "./resource";
import { ISynthesisSession } from "./synthesize";
import { addCustomSynthesis } from "./synthesize/synthesizer";

export interface TerraformAssetConfig {
  // absolute path to the file or folder configured
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

export class TerraformAsset extends Resource {
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

    if (!path.isAbsolute(config.path)) {
      throw new Error(
        `TerraformAsset path needs to be absolute, got relative path: '${config.path}'`
      );
    }

    const stat = fs.statSync(config.path);
    const inferredType = stat.isFile() ? AssetType.FILE : AssetType.DIRECTORY;
    this.type = config.type ?? inferredType;
    this.sourcePath = config.path;
    this.assetHash = config.assetHash || hashPath(this.sourcePath);

    if (stat.isFile() && this.type !== AssetType.FILE) {
      throw new Error(
        `TerraformAsset ${id} expects path to be a directory, a file was passed: '${config.path}'`
      );
    }

    if (!stat.isFile() && this.type === AssetType.FILE) {
      throw new Error(
        `TerraformAsset ${id} expects path to be a file, a directory was passed: '${config.path}'`
      );
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
      fs.rmdirSync(previousVersionsFolder, { recursive: true });
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
        throw new Error(`Asset type ${this.type} is not implemented`);
    }
  }
}
