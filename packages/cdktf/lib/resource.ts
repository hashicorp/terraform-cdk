// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct, IConstruct } from "constructs";
import { TerraformStack } from "./terraform-stack";

export interface IResource extends IConstruct {
  /**
   * The stack in which this resource is defined.
   */
  readonly stack: TerraformStack;
}

export interface IResourceConstructor<T extends IResource> {
  new (scope: Construct, id: string, ...args: any[]): T;
}

/**
 * A construct which represents a resource.
 * @deprecated - Please use Construct from the constructs package instead.
 */
export abstract class Resource extends Construct implements IResource {
  public readonly stack: TerraformStack;

  constructor(scope: Construct, id: string) {
    super(scope, id);
    this.stack = TerraformStack.of(this);
  }
}
