// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";
import { TerraformProvider } from "./terraform-provider";
import { deepMerge } from "./util";
import { ITerraformDependable } from "./terraform-dependable";
import { Token } from "./tokens";
import { ref, dependable } from "./tfExpression";
import { TerraformAsset } from "./terraform-asset";
import { ITerraformIterator } from "./terraform-iterator";
import { modulesWithSameAlias } from "./errors";

export interface TerraformModuleUserConfig {
  readonly providers?: (TerraformProvider | TerraformModuleProvider)[];
  readonly dependsOn?: ITerraformDependable[];
  readonly forEach?: ITerraformIterator;
  readonly skipAssetCreationFromLocalModules?: boolean;
}

export interface TerraformModuleConfig extends TerraformModuleUserConfig {
  readonly source: string;
  readonly version?: string;
}

export interface TerraformModuleProvider {
  readonly provider: TerraformProvider;
  readonly moduleAlias: string;
}

// eslint-disable-next-line jsdoc/require-jsdoc
export abstract class TerraformModule
  extends TerraformElement
  implements ITerraformDependable
{
  public readonly source: string;
  public readonly version?: string;
  private _providers?: (TerraformProvider | TerraformModuleProvider)[];
  public dependsOn?: string[];
  public forEach?: ITerraformIterator;
  public readonly skipAssetCreationFromLocalModules?: boolean;

  constructor(scope: Construct, id: string, options: TerraformModuleConfig) {
    super(scope, id, "module");

    this.source = options.source;

    if (!options.skipAssetCreationFromLocalModules) {
      if (options.source.startsWith("./") || options.source.startsWith("../")) {
        // Create an asset for the local module for better TFC support
        const asset = new TerraformAsset(scope, `local-module-${id}`, {
          path: options.source,
        });
        // Despite being a relative path already, further indicate it as such for Terraform handling
        this.source = `./${asset.path}`;
      }
    }

    this.version = options.version;
    this._providers = options.providers;
    this.validateIfProvidersHaveUniqueKeys();
    if (Array.isArray(options.dependsOn)) {
      this.dependsOn = options.dependsOn.map((dependency) =>
        dependable(dependency)
      );
    }
    this.forEach = options.forEach;
  }

  // jsii can't handle abstract classes?
  protected synthesizeAttributes(): { [name: string]: any } {
    return {};
  }

  public interpolationForOutput(moduleOutput: string) {
    return ref(
      `module.${this.friendlyUniqueId}${
        this.forEach ? ".*" : ""
      }.${moduleOutput}`,
      this.cdktfStack
    );
  }

  public getString(output: string): string {
    return Token.asString(this.interpolationForOutput(output));
  }

  public get providers() {
    return this._providers;
  }

  public addProvider(provider: TerraformProvider | TerraformModuleProvider) {
    if (!this._providers) {
      this._providers = [];
    }
    this._providers.push(provider);
    this.validateIfProvidersHaveUniqueKeys();
  }

  public toTerraform(): any {
    const attributes = deepMerge(
      {
        ...this.synthesizeAttributes(),
        source: this.source,
        version: this.version,
        providers: this._providers?.reduce((a, p) => {
          if (TerraformProvider.isTerraformProvider(p)) {
            return { ...a, [p.terraformResourceType]: p.fqn };
          } else {
            return {
              ...a,
              [`${p.provider.terraformResourceType}.${p.moduleAlias}`]:
                p.provider.fqn,
            };
          }
        }, {}),
        depends_on: this.dependsOn,
        for_each: this.forEach?._getForEachExpression(),
      },
      this.rawOverrides
    );

    attributes["//"] = this.constructNodeMetadata;

    return {
      module: {
        [this.friendlyUniqueId]: attributes,
      },
    };
  }

  public toMetadata(): any {
    if (!Object.keys(this.rawOverrides).length) {
      return {};
    }

    return {
      overrides: {
        [`module.${this.source}`]: Object.keys(this.rawOverrides),
      },
    };
  }

  private validateIfProvidersHaveUniqueKeys(): void {
    const moduleAliases = this._providers?.map((p) => {
      if (TerraformProvider.isTerraformProvider(p)) {
        return p.terraformResourceType;
      } else {
        return `${p.provider.terraformResourceType}.${p.moduleAlias}`;
      }
    });

    const uniqueModuleAliases = new Set();
    moduleAliases?.forEach((alias) => {
      if (uniqueModuleAliases.has(alias)) {
        throw modulesWithSameAlias(alias);
      }
      uniqueModuleAliases.add(alias);
    });
  }
}
