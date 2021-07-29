import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";
import { TerraformProvider } from "./terraform-provider";
import { deepMerge } from "./util";
import { ITerraformDependable } from "./terraform-dependable";
import { Token } from "./tokens";
import * as path from "path";

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

  constructor(scope: Construct, id: string, options: TerraformModuleOptions) {
    super(scope, id);

    if (options.source.startsWith("./") || options.source.startsWith("../")) {
      this.source = path.join("..", options.source);
    } else {
      this.source = options.source;
    }
    this.version = options.version;
    this._providers = options.providers;
    if (Array.isArray(options.dependsOn)) {
      this.dependsOn = options.dependsOn.map((dependency) => dependency.fqn);
    }
  }

  // jsii can't handle abstract classes?
  protected synthesizeAttributes(): { [name: string]: any } {
    return {};
  }

  public interpolationForOutput(moduleOutput: string) {
    return `\${module.${this.friendlyUniqueId}.${moduleOutput}}` as any;
  }

  public get fqn(): string {
    return Token.asString(`module.${this.friendlyUniqueId}`);
  }

  public get providers() {
    return this._providers;
  }

  public addProvider(provider: TerraformProvider | TerraformModuleProvider) {
    if (!this._providers) {
      this._providers = [];
    }
    this._providers.push(provider);
  }

  public toTerraform(): any {
    const attributes = deepMerge(
      {
        ...this.synthesizeAttributes(),
        source: this.source,
        version: this.version,
        providers: this.providers?.map((p) => {
          if (p instanceof TerraformProvider) {
            return { [p.terraformResourceType]: p.fqn };
          } else {
            return {
              [`${p.provider.terraformResourceType}.${p.moduleAlias}`]:
                p.provider.fqn,
            };
          }
        }),
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
}
