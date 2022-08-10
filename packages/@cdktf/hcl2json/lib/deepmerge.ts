// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
/**
 * Merges `source` into `target`, overriding any existing values.
 * `undefined` will cause a value to be deleted.
 */
export function deepMerge(target: any, ...sources: any[]) {
  for (const source of sources) {
    if (typeof source !== "object" || typeof target !== "object") {
      throw new Error(
        `Invalid usage. Both source (${JSON.stringify(
          source
        )}) and target (${JSON.stringify(target)}) must be objects`
      );
    }

    for (const key of Object.keys(source)) {
      const value = source[key];
      if (typeof value === "object" && value != null && !Array.isArray(value)) {
        // if the value at the target is not an object, override it with an
        // object so we can continue the recursion
        if (typeof target[key] !== "object") {
          target[key] = {};
        }

        deepMerge(target[key], value);

        // if the result of the merge is an empty object, it's because the
        // eventual value we assigned is `undefined`, and there are no
        // sibling concrete values alongside, so we can delete this tree.
        const output = target[key];
        if (typeof output === "object" && Object.keys(output).length === 0) {
          delete target[key];
        }
      } else if (
        typeof value === "object" &&
        value != null &&
        Array.isArray(value)
      ) {
        if (Array.isArray(target[key])) {
          target[key] = [...target[key], ...value];
        } else {
          target[key] = value;
        }
      } else if (value === undefined) {
        delete target[key];
      } else {
        target[key] = value;
      }
    }
  }

  return target;
}
