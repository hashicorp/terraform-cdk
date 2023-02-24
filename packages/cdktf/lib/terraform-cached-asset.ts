import { Construct } from "constructs";
import { App, Manifest } from ".";
import { hashPath } from "./private/fs";
import { TerraformStack } from "./terraform-stack";
import * as path from "path";
import * as fs from "fs";

const CACHED_ASSET_SYMBOL = Symbol.for("cdktf/TerraformCachedAsset");

export interface IBuilder {
  /**
   * TODO: write docstring
   *
   * @throws if the build failed
   */
  build(inputPath: string): void;
}

export interface TerraformCachedAssetConfig {
  builder: IBuilder;
  inputPath: string;
  filePatterns?: string[];
  outputPath: string;
}

/**
 * todo: document
 */
export class TerraformCachedAsset extends Construct {
  constructor(
    scope: Construct,
    id: string,
    private config: TerraformCachedAssetConfig
  ) {
    super(scope, id);
    Object.defineProperty(this, CACHED_ASSET_SYMBOL, { value: true });

    const appOutDir = App.of(this).outdir;
    const terraformFile = path.resolve(
      appOutDir,
      Manifest.stacksFolder,
      TerraformStack.of(this).node.id,
      Manifest.stackFileName
    );

    if (fs.existsSync(terraformFile)) {
      const terraformJson = JSON.parse(fs.readFileSync(terraformFile, "utf-8"));
      const cache = terraformJson["//"].caches;
      if (cache) {
        const hash = cache[TerraformStack.of(this).getLogicalId(this.node)];
        if (hash && hash === this.getHashOfInputDir()) {
          return;
        } else {
          this.config.builder.build(this.config.inputPath);
        }
      } else {
        this.config.builder.build(this.config.inputPath);
      }
    } else {
      this.config.builder.build(this.config.inputPath);
    }
  }

  static isTerraformCachedAsset(x: any): x is TerraformCachedAsset {
    return x !== null && typeof x === "object" && CACHED_ASSET_SYMBOL in x;
  }

  public getHashEntries(): Record<string, string> {
    return {
      [TerraformStack.of(this).getLogicalId(this.node)]:
        this.getHashOfInputDir(),
    };
  }
  private getHashOfInputDir(): string {
    return hashPath(this.config.inputPath, this.config.filePatterns);
  }

  public get hash(): string {
    return this.getHashOfInputDir();
  }
}
