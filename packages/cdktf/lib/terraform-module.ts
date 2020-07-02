import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";

export interface TerraformModuleOptions {
  readonly source: string;
  readonly version: string;
}

export abstract class TerraformModule extends TerraformElement {

  public readonly source: string;
  public readonly version: string;

  constructor(scope: Construct, id: string, options: TerraformModuleOptions) {
    super(scope, id);

    this.source = options.source;
    this.version = options.version;
  }

  // jsii can't handle abstract classes?
  protected synthesizeAttributes(): { [name: string]: any } {
    return {}
  }

  public interpolationForOutput(moduleOutput: string) {
    return `\${module.${this.friendlyUniqueId}.${moduleOutput}}` as any;
  }

  public toTerraform(): any {
    const attributes = {
      ...this.synthesizeAttributes(),
      source: this.source,
      version: this.version,
      "//": this.nodeMetadata
    }

    return {
      module: {
        [this.friendlyUniqueId]: attributes
      }
    }
  }
}