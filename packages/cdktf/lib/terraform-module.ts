import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";
import { TerraformProvider } from "./terraform-provider";
import { deepMerge } from "./util";

export interface TerraformModuleOptions {
  readonly source: string;
  readonly version?: string;
  readonly providers?: (TerraformProvider | TerraformModuleProvider)[];
}

export interface TerraformModuleProvider {
  readonly provider: TerraformProvider;
  readonly moduleAlias: string;
}

export abstract class TerraformModule extends TerraformElement {

  public readonly source: string;
  public readonly version?: string;
  private _providers?: (TerraformProvider | TerraformModuleProvider)[];

  constructor(scope: Construct, id: string, options: TerraformModuleOptions) {
    super(scope, id);

    this.source = options.source;
    this.version = options.version;
    this._providers = options.providers;
  }

  // jsii can't handle abstract classes?
  protected synthesizeAttributes(): { [name: string]: any } {
    return {}
  }

  public interpolationForOutput(moduleOutput: string) {
    return `\${module.${this.friendlyUniqueId}.${moduleOutput}}` as any;
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
    const attributes = deepMerge({
      ...this.synthesizeAttributes(),
      source: this.source,
      version: this.version,
      providers: this.providers?.map(p => {
        if (p instanceof TerraformProvider) {
            return { [p.terraformResourceType]: p.fqn };
        }
        else {
            return { [`${p.provider.terraformResourceType}.${p.moduleAlias}`]: p.provider.fqn };
        }
    }),
    },
      this.rawOverrides
    )

    attributes['//'] = this.constructNodeMetadata

    return {
      module: {
        [this.friendlyUniqueId]: attributes
      }
    }
  }
}