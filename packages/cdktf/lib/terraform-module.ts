import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";
import { TerraformProvider } from "./terraform-provider";
import { deepMerge } from "./util";
import { ITerraformDependable } from "./terraform-dependable";
import { Token } from "./tokens";
import { ref, insideTfExpression } from "./tfExpression";
import { TerraformAsset } from "./terraform-asset";

export interface TerraformModuleOptions {
  readonly source: string;
  readonly version?: string;
  readonly providers?: (TerraformProvider | TerraformModuleProvider)[];
  readonly dependsOn?: ITerraformDependable[];
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
  public readonly fqn: string;

  constructor(scope: Construct, id: string, options: TerraformModuleOptions) {
    super(scope, id);

    if (options.source.startsWith("./") || options.source.startsWith("../")) {
      // Create an asset for the local module for better TFC support
      const asset = new TerraformAsset(scope, `local-module-${id}`, {
        path: options.source,
      });

      // Despite being a relative path already, further indicate it as such for Terraform handling
      this.source = `./${asset.path}`;
    } else {
      this.source = options.source;
    }
    this.version = options.version;
    this._providers = options.providers;
    this.validateIfProvidersHaveUniqueKeys();
    if (Array.isArray(options.dependsOn)) {
      this.dependsOn = options.dependsOn.map((dependency) =>
        insideTfExpression(dependency.fqn)
      );
    }

    this.fqn = Token.asString(
      ref(`module.${this.friendlyUniqueId}`, this.cdktfStack)
    );
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
