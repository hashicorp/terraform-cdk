import { Construct, IConstruct } from "constructs";
import { TerraformStack } from './terraform-stack'

export interface IResource extends IConstruct {
  /**
   * The stack in which this resource is defined.
   */
  readonly stack: TerraformStack;
}

/**
 * A construct which represents a resource.
 */
export abstract class Resource extends Construct implements IResource {
  public readonly stack: TerraformStack;

  constructor(scope: Construct, id: string) {
    super(scope, id);
    this.stack = TerraformStack.of(this);
  }
}
