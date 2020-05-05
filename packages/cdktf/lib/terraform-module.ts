import { Construct, Node } from "constructs";
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

  protected abstract synthesizeAttributes(): { [name: string]: any };

  public interpolationForOutput(moduleOutput: string) {
    return `\${module.${Node.of(this).uniqueId}.${moduleOutput}}` as any;
  }

  public toTerraform(): any {
    return {
      module: {
        [Node.of(this).uniqueId]: {
          ...this.synthesizeAttributes(),
          source: this.source,
          version: this.version,
        }
      }
    }
  }
}