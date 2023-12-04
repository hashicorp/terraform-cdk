/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { moveTargetAlreadySet, moveTargetNotSet } from "./errors";
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
      throw moveTargetAlreadySet(
        target,
        this._resourceTargetMap.get(target)?.friendlyUniqueId
      );
    }
    this._resourceTargetMap.set(target, resource);
  }

  public getResourceByTarget(target: string): TerraformResource {
    const result = this._resourceTargetMap.get(target);
    if (!result) {
      throw moveTargetNotSet(target, this.prettyPrintEntries());
    }
    return result;
  }
}
