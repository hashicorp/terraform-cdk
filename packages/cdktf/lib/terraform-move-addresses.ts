/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { IConstruct } from "constructs";
import { TerraformResource } from "./terraform-resource";
import { TerraformStack } from "./terraform-stack";
import { App } from "./app";

/**
 *
 */
export class TerraformResourceAddressMap {
  private _terraformAddressMap: Map<string, TerraformResource> = new Map<
    string,
    TerraformResource
  >();

  // what do we need?
  /**
   * map for a tag -> resource path !!!
   * function to add to the resource path at a tag
   * function to return the specificed resource address at a certain tag
   */

  public add(resource: TerraformResource, tag: string): void {
    this._terraformAddressMap.set(tag, resource);
  }

  public getResourceAddress(tag: string): TerraformResource | undefined {
    return this._terraformAddressMap.get(tag);
  }

  public static parentStackAddressMap(scope: IConstruct) {
    // SO, in a nested construct, the stack is accessable at scope.node.scope ACTUALLY NOT TRUE
    // -- only thought that was the case as scope.node.scope just happened to be the stack
    // But, if you are already at the root level it is undefined
    // what if we keep trying to access the scope until it is undefined

    // if scope.scope === undefined we are at the stack level

    let currAbstractionLevel: IConstruct | undefined = scope;
    let oneHigher: IConstruct | undefined = currAbstractionLevel.node.scope;
    while (!App.isApp(oneHigher)) {
      currAbstractionLevel = currAbstractionLevel?.node.scope;
      oneHigher = currAbstractionLevel?.node.scope;
    }
    console.log("result", currAbstractionLevel);
    const stackId = currAbstractionLevel?.node.id;
    const children = scope.node.root.node.children;
    let i = 0;
    for (const child of children) {
      if (child.node.id === stackId) {
        break;
      } else {
        i = i + 1;
      }
    }

    console.log("result", scope.node.root.node.children[i]);
    // AHHHH I give up, guess you can only do moves one stack at a time
    return (scope.node.root.node.children[0] as TerraformStack)
      .resourceAddresses; // TODO: see if there is a better way of doing this, or if theres any problems with it;

    // when scope.node.scope == undefined, we are at the app
  }
}
