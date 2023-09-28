/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { Construct } from "constructs";
import { TerraformResource } from "./terraform-resource";
import { TerraformStack } from "./terraform-stack";

/**
 *
 */
export class TerraformMoveAddresses {
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

  // Would trying to access this at a higher abstract lead to things not being present? since we only add stuff later on

  public add(resource: TerraformResource, tag: string): void {
    this._terraformAddressMap.set(tag, resource);
  }

  public getPath(tag: string): TerraformResource | undefined {
    return this._terraformAddressMap.get(tag);
  }

  public static addresses(scope: Construct) {
    return (scope.node.root.node.children[0] as unknown as TerraformStack)
      .moveAddresses; // TODO: see if there is a better way of doing this, or if theres any problems with it;
  }
}
