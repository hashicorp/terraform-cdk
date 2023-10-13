/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { TerraformResource } from "./terraform-resource";

/**
 *
 */
export class TerraformResourceTags {
  private _taggedResourceMap: Map<string, TerraformResource> = new Map<
    string,
    TerraformResource
  >();

  private prettyPrintEntries() {
    return [...this._taggedResourceMap.entries()].reduce(
      (accum, curr) => accum + "\n" + `${curr[0]}: ${curr[1]}`,
      ""
    );
  }

  public addResourceTag(resource: TerraformResource, tag: string): void {
    if (this._taggedResourceMap.has(tag)) {
      throw new Error(
        `Tag "${tag}" has already been set at ${
          this._taggedResourceMap.get(tag)?.friendlyUniqueId
        }`
      );
    }
    this._taggedResourceMap.set(tag, resource);
  }

  public getResourceByTag(tag: string): TerraformResource {
    const result = this._taggedResourceMap.get(tag);
    if (!result) {
      throw new Error(`Tag "${tag}" has not been set:
      
            Current Tag Entries:\n ${this.prettyPrintEntries()}
      
            Make sure the resource being moved to has been tagged before .movedTo() has been called
            `);
    }
    return result;
  }
}
