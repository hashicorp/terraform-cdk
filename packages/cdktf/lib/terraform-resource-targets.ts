/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { TerraformResource } from "./terraform-resource";

/**
 *
 */
export class TerraformResourceTargets {
  private _resourceTargetMap: Map<string, TerraformResource> = new Map<
    string,
    TerraformResource
  >();

  private prettyPrintEntries() {
    return [...this._resourceTargetMap.entries()].reduce(
      (accum, curr) => accum + "\n" + `${curr[0]}: ${curr[1].friendlyUniqueId}`,
      ""
    );
  }

  public addResourceTarget(resource: TerraformResource, target: string): void {
    if (this._resourceTargetMap.has(target)) {
      throw new Error(
        `Target "${target}" has already been set at ${
          this._resourceTargetMap.get(target)?.friendlyUniqueId
        }`
      );
    }
    this._resourceTargetMap.set(target, resource);
  }

  public getResourceAddressByTarget(target: string): TerraformResource {
    const result = this._resourceTargetMap.get(target);
    if (!result) {
      throw new Error(`Target "${target}" has not been set:
      
            Current Target Entries:\n ${this.prettyPrintEntries()}

            To add this target, call .addMoveTarget("${target}") on the instance of the resource to move to.
            `);
    }
    return result;
  }
}
