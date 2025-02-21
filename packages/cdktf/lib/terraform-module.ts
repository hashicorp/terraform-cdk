// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";
import { TerraformProvider } from "./terraform-provider";
import { deepMerge } from "./util";
import { ITerraformDependable } from "./terraform-dependable";
import { Token } from "./tokens";
import { ref, dependable } from "./tfExpression";
import { ITerraformIterator } from "./terraform-iterator";
import { modulesWithSameAlias, terraformModuleHasChildren } from "./errors";
import { TerraformModuleAsset } from "./terraform-module-asset";

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

/**
 * TerraformModule can be used to reference a local terraform module or a module from the Terraform Registry.
 * It should be used if you can not use generated bindings for the module as you would get by adding the module
 * to your cdktf.json files "terraformModules" array and running cdktf get.
 *
 * This class is not creating a Terraform module to be used outside of CDKTF.
 * If you want to bundle certain resources together like you would do with a Terraform module,
 * you should use Constructs instead, see http://cdk.tf/constructs for more details.
 */
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
        // Create an asset or reuse existing "singleton asset" for the local module for better TFC support
        this.source = TerraformModuleAsset.of(scope).getAssetPathForModule(
          options.source,
        );
      }
    }

    this.version = options.version;
    this._providers = options.providers;
    this.validateIfProvidersHaveUniqueKeys();
    if (Array.isArray(options.dependsOn)) {
      this.dependsOn = options.dependsOn.map((dependency) =>
        dependable(dependency),
      );
    }
    this.forEach = options.forEach;
  }

  // Adds synth-time validations
  private onSynth(): void {
    // We don't allow any nested constructs within TerraformModules, it's most likely a mistake
    // where constructs should be used instead.
    if (this.node.children.length > 0) {
      throw terraformModuleHasChildren(this.node.path);
    }
  }

  // jsii can't handle abstract classes?
  protected synthesizeAttributes(): { [name: string]: any } {
    return {};
  }

  // jsii can't handle abstract classes?
  protected synthesizeHclAttributes(): { [name: string]: any } {
    return {};
  }

  public interpolationForOutput(moduleOutput: string) {
    return ref(
      `module.${this.friendlyUniqueId}${
        this.forEach ? ".*" : ""
      }.${moduleOutput}`,
      this.cdktfStack,
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

  public toHclTerraform(): any {
    this.onSynth();
    const attributes = deepMerge(
      {
        ...this.synthesizeHclAttributes(),
        source: {
          value: this.source,
          type: "simple",
          isBlock: false,
          storageClassType: "string",
        },

        version: this.version
          ? {
              value: this.version,
              type: "simple",
              isBlock: false,
              storageClassType: "string",
            }
          : undefined,

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

        depends_on: this.dependsOn
          ? {
              value: this.dependsOn,
              type: "list",
              isBlock: false,
              storageClassType: "string",
            }
          : undefined,

        for_each: this.forEach?._getForEachExpression(),
      },
      this.rawOverrides,
    );

    attributes["//"] = this.constructNodeMetadata;

    return {
      module: {
        [this.friendlyUniqueId]: attributes,
      },
    };
  }

  public toTerraform(): any {
    this.onSynth();
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
      this.rawOverrides,
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
