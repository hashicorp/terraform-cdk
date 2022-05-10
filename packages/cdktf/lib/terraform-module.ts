import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";
import { TerraformProvider } from "./terraform-provider";
import { deepMerge } from "./util";
import { ITerraformDependable } from "./terraform-dependable";
import { Token } from "./tokens";
import { ref, dependable } from "./tfExpression";
import { TerraformAsset } from "./terraform-asset";
import { ITerraformIterator } from "./terraform-iterator";

export interface TerraformModuleUserOptions {
  readonly providers?: (TerraformProvider | TerraformModuleProvider)[];
  readonly dependsOn?: ITerraformDependable[];
  readonly forEach?: ITerraformIterator;
  readonly createAssetsFromLocalModules?: boolean;
}

export interface TerraformModuleOptions extends TerraformModuleUserOptions {
  readonly source: string;
  readonly version?: string;
}

export interface TerraformModuleProvider {
  readonly provider: TerraformProvider;
  readonly moduleAlias: string;
}

export abstract class TerraformModule
  extends TerraformElement
  implements ITerraformDependable
{
  public readonly source: string;
  public readonly version?: string;
  private _providers?: (TerraformProvider | TerraformModuleProvider)[];
  public dependsOn?: string[];
  public forEach?: ITerraformIterator;
  public readonly createAssetsFromLocalModules?: boolean;

  constructor(scope: Construct, id: string, options: TerraformModuleOptions) {
    super(scope, id, "module");

    this.source = options.source;

    if (
      options.createAssetsFromLocalModules === true ||
      !("createAssetsFromLocalModules" in options)
    ) {
      if (options.source.startsWith("./") || options.source.startsWith("../")) {
        const asset = new TerraformAsset(scope, "local-module-${id}", {
          path: options.source,
        });
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
      `module.${this.friendlyUniqueId}.${moduleOutput}`,
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
          if (p instanceof TerraformProvider) {
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
      if (p instanceof TerraformProvider) {
        return p.terraformResourceType;
      } else {
        return `${p.provider.terraformResourceType}.${p.moduleAlias}`;
      }
    });

    const uniqueModuleAliases = new Set();
    moduleAliases?.forEach((alias) => {
      if (uniqueModuleAliases.has(alias)) {
        throw new Error(
          `Error: Multiple providers have the same alias: "${alias}"`
        );
      }
      uniqueModuleAliases.add(alias);
    });
  }
}
