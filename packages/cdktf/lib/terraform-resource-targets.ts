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
        `Tag "${target}" has already been set at ${
          this._resourceTargetMap.get(target)?.friendlyUniqueId
        }`
      );
    }
    this._resourceTargetMap.set(target, resource);
  }

  public getResourceAddressByTarget(target: string): TerraformResource {
    const result = this._resourceTargetMap.get(target);
    if (!result) {
      throw new Error(`Tag "${target}" has not been set:
      
            Current Tag Entries:\n ${this.prettyPrintEntries()}
      
            Make sure the resource being moved to has been tagged before .movedTo() has been called
            `);
    }
    return result;
  }
}
