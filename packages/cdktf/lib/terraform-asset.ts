import { Construct, ISynthesisSession } from "constructs";
import { TerraformElement } from "./terraform-element";
import { keysToSnakeCase, deepMerge } from "./util";
import * as fs from "fs";
import * as path from "path";
import { Manifest } from "./manifest";
import { copySync, archiveSync } from "./private/fs";

export interface TerraformAssetConfig {
  readonly path: string;
  readonly type?: AssetType;
}

export enum AssetType {
  FILE,
  DIRECTORY,
  ARCHIVE,
}

const ARCHIVE_NAME = "/archive.zip";
export class TerraformAsset extends TerraformElement {
  public path: string;
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
    this.path = config.path;

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

  protected synthesizeAttributes(): { [key: string]: any } {
    let filename = "";
    switch (this.type) {
      case AssetType.ARCHIVE:
        filename = ARCHIVE_NAME;
        break;
      case AssetType.FILE:
        filename = path.basename(this.path);
    }
    return {
      path: path.join(this.friendlyUniqueId, filename),
    };
  }

  protected onSynthesize(session: ISynthesisSession) {
    const manifest = session.manifest as Manifest;
    const stackManifest = manifest.forStack(this.stack);

    const targetPath = path.join(
      session.outdir,
      stackManifest.synthesizedStackPath,
      "..",
      this.friendlyUniqueId
    );

    fs.mkdirSync(targetPath, { recursive: true });

    switch (this.type) {
      case AssetType.FILE:
        fs.copyFileSync(
          this.path,
          path.resolve(targetPath, path.basename(this.path))
        );
        break;

      case AssetType.DIRECTORY:
        copySync(this.path, targetPath);
        break;

      case AssetType.ARCHIVE:
        archiveSync(this.path, path.join(targetPath, ARCHIVE_NAME));
        break;
      default:
        throw new Error(`Asset type ${this.type} is not implemented`);
    }
  }

  public toTerraform(): any {
    return {
      assets: {
        [this.friendlyUniqueId]: deepMerge(
          keysToSnakeCase(this.synthesizeAttributes()),
          this.rawOverrides
        ),
      },
    };
  }
}
