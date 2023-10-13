/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { TerraformResource } from "./terraform-resource";

/**
 *
 */
export class TerraformResourceAddressMap {
  private _terraformAddressMap: Map<string, TerraformResource> = new Map<
    string,
    TerraformResource
  >();

  public add(resource: TerraformResource, tag: string): void {
    this._terraformAddressMap.set(tag, resource);
  }

  public getResourceAddress(tag: string): TerraformResource | undefined {
    return this._terraformAddressMap.get(tag);
  }
}
