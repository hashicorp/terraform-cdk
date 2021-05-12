import { Construct, ISynthesisSession } from "constructs";
import { TerraformElement } from "./terraform-element";
import * as fs from "fs";
import * as path from "path";
import { Manifest } from "./manifest";
import { copySync, archiveSync, hashPath } from "./private/fs";

export interface TerraformAssetConfig {
  readonly path: string;
  readonly type?: AssetType;
  readonly assetHash?: string;
}

export enum AssetType {
  FILE,
  DIRECTORY,
  ARCHIVE,
}

const ARCHIVE_NAME = "archive.zip";
const ASSETS_DIRECTORY = "assets";

export class TerraformAsset extends TerraformElement {
  private sourcePath: string;
  public assetHash: string;
  public type: AssetType;

  constructor(scope: Construct, id: string, config: TerraformAssetConfig) {
    super(scope, id);

    if (!path.isAbsolute(config.path)) {
      throw new Error(
        `TerraformAsset path needs to be absolute, got relative path: '${config.path}'`
      );
    }

    const stat = fs.statSync(config.path);
    const inferredType = stat.isFile() ? AssetType.FILE : AssetType.DIRECTORY;
    this.type = !config.type ? inferredType : config.type;
    this.sourcePath = config.path;
    this.assetHash = config.assetHash || hashPath(this.sourcePath)

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
  }

  public get path(): string {
    let filename = "";
    switch (this.type) {
      case AssetType.ARCHIVE:
        filename = ARCHIVE_NAME;
        break;
      case AssetType.FILE:
        filename = path.basename(this.sourcePath);
    }

    return path.join(ASSETS_DIRECTORY, this.friendlyUniqueId, filename);
  }

  protected onSynthesize(session: ISynthesisSession) {
    const manifest = session.manifest as Manifest;
    const stackManifest = manifest.forStack(this.stack);

    const targetPath = path.join(
      session.outdir,
      stackManifest.synthesizedStackPath,
      "..",
      this.path
    );

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

  public toTerraform(): any {
    return {};
  }
}
