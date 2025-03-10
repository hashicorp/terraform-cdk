/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { Construct } from "constructs";
import * as path from "path";
import * as os from "os";
import * as fs from "fs";
import { TerraformStack } from "./terraform-stack";
import { AssetType, TerraformAsset } from "./terraform-asset";
import { hashPath } from "./private/fs";

const TERRAFORM_MODULE_ASSET_SYMBOL = Symbol.for("cdktf.TerraformModuleAsset");

/**
 * This Construct is being created as a singleton whenever the first
 * TerraformModule with a local source is created in a stack.
 *
 * When Terraform modules depend on local modules, the local modules
 * they depend on need to have the correct relative path to the module
 * in the asset. This only works if all modules are in one asset.
 *
 * (We could theoretically detect if a module uses relative path references, but this is easier)
 * @internal
 */
export class TerraformModuleAsset extends Construct {
  private readonly relativeAssetPath: string;
  private readonly asset: TerraformAsset;
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const relativeModules: Array<string | { source: string }> | undefined =
      this.node.tryGetContext("cdktfRelativeModules");
    const staticModuleAssetHash: string | undefined = this.node.tryGetContext(
      "cdktfStaticModuleAssetHash",
    );

    if (!relativeModules) {
      throw new Error(
        "You are trying to use a local module with a relative path, but the cdktfRelativeModules context is not set. It is expected to be an array of strings containing the relative paths to the relative modules your app is using. You either need to supply it in the Apps constructor via the context option or invoke the synthesis through the CLI. We need this information so that assets with relative paths are properly handled when used with assets, so you can also set the skipAssetCreationFromLocalModules to true on your relative modules.",
      );
    }

    const moduleSources = relativeModules.map((module) =>
      typeof module === "string" ? module : module.source,
    );

    const relativeAssetPath = findLowestCommonPath(moduleSources);
    if (!relativeAssetPath) {
      throw new Error(
        "Could not find lowest common path for relative modules. This should not happen, you might be overwriting the cdktfRelativeModules value of the context with something unexpected. We expect an array of string or objects with a source attribute where the string or the source attribute reference a relative path to a module. The context can be set in the context option of the App Constructor Options.",
      );
    }
    this.relativeAssetPath = relativeAssetPath;

    // Create a tmp dir for the asset
    const tmpDir = fs.mkdtempSync(
      path.join(os.tmpdir(), "cdktf-module-asset-"),
    );

    // Copy all modules into the tmp dir
    for (const module of moduleSources) {
      const target = path.join(tmpDir, this.relativeModulePath(module));
      copySync(module, target);
    }

    // Create asset based on tmp dir
    this.asset = new TerraformAsset(this, "asset", {
      path: tmpDir,
      type: AssetType.DIRECTORY,
      assetHash: staticModuleAssetHash ?? hashPath(relativeAssetPath),
    });
  }

  public static of(construct: Construct): TerraformModuleAsset {
    const stack = TerraformStack.of(construct);

    let asset = (stack as any)[TERRAFORM_MODULE_ASSET_SYMBOL];
    if (!asset) {
      asset = new TerraformModuleAsset(stack, "__cdktf_module_asset");

      Object.defineProperty(stack, TERRAFORM_MODULE_ASSET_SYMBOL, {
        value: asset,
        configurable: false,
        enumerable: false,
      });
    }
    return asset;
  }

  /**
   * The input source is relative to cwd, but we want the value relative
   * to the assets target, so the common path prefix
   */
  private relativeModulePath(source: string): string {
    const absoluteSourcePath = path.resolve(source);
    const absoluteAssetPath = path.resolve(this.relativeAssetPath);
    return path.relative(absoluteAssetPath, absoluteSourcePath);
  }

  public getAssetPathForModule(source: string): string {
    return `./${path.join(this.asset.path, this.relativeModulePath(source))}`;
  }
}

/**
 * Finds the lowest common path of all relaticve paths in the given array
 */
export function findLowestCommonPath(paths: string[]): string | undefined {
  if (paths.length === 0) {
    return undefined;
  }

  // We first need to make the paths absolute so that we can compare them
  const absolutePaths = paths.map((p) => path.resolve(p));

  // We take the first path as the base and then remove parts from the end until we find the lowest common path
  let absolutePathPrefix = absolutePaths[0];
  while (
    !absolutePaths.every((p) => p.startsWith(absolutePathPrefix)) &&
    absolutePathPrefix !== "/"
  ) {
    absolutePathPrefix = path.dirname(absolutePathPrefix);
  }

  const relativePath = path.relative(process.cwd(), absolutePathPrefix);
  return relativePath === "" ? "." : relativePath;
}

/**
 * Copies a file or directory recursively
 * @param from
 * @param to
 */
function copySync(from: string, to: string) {
  if (fs.lstatSync(from).isDirectory()) {
    fs.mkdirSync(to, { recursive: true });
    for (const file of fs.readdirSync(from)) {
      copySync(path.join(from, file), path.join(to, file));
    }
  } else {
    fs.copyFileSync(from, to);
  }
}
