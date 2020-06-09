import { Construct, Node } from "constructs";
import { TerraformStack } from './terraform-stack'

export class TerraformElement extends Construct {
  public readonly stack: TerraformStack;

  constructor(scope: Construct, id: string) {
    super(scope, id);
    this.stack = TerraformStack.of(this);
  }

  public get node(): Node {
    return Node.of(this)
  }

  public toTerraform(): any {
    return { };
  }
}