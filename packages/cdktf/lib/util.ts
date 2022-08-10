// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TerraformDynamicBlock } from "./terraform-dynamic-block";
import { Tokenization } from "./tokens/token";

export const terraformBinaryName =
  process.env.TERRAFORM_BINARY_NAME || "terraform";

/**
 * Merges `source` into `target`, overriding any existing values.
 * `undefined` will cause a value to be deleted.
 */
export function deepMerge(target: any, ...sources: any[]) {
  if (Tokenization.isResolvable(target) && sources.length > 0) {
    throw new Error(
      `Invalid usage. Target (${target.toString()}) can not be a resolvable token when overrides are specified. Please replace the value of the field you are overriding with a static value.`
    );
  }

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

        // if the value is a resolvable we don't want to recurse into it
        if (Tokenization.isResolvable(value)) {
          target[key] = value;
          continue;
        }

        deepMerge(target[key], value);
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

/**
 * Transforms a string to snake case
 */
export function snakeCase(str: string): string {
  if (!str) return "";

  return String(str)
    .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "")
    .replace(/([a-z0-9])([A-Z])/g, (_m, a, b) => a + "_" + b.toLowerCase())
    .replace(/[^A-Za-z0-9]+|_+/g, "_")
    .toLowerCase();
}

/**
 * Transforms all keys in a object to snake case
 */
export function keysToSnakeCase(object: any): any {
  if (Tokenization.isResolvable(object)) {
    return object;
  }
  if (Array.isArray(object)) {
    return object.map((e: any) => {
      return typeof e === "object" ? keysToSnakeCase(e) : e;
    });
  }
  const keys = Object.keys(object);
  return keys.reduce((newObject: any, key: string) => {
    if (key === "tags") {
      newObject[key] = object[key];
      return newObject;
    }

    let value = object[key];
    if (typeof value === "object") {
      value = keysToSnakeCase(value);
    }
    if (Array.isArray(value)) {
      value = value.map((e: any) => {
        return typeof e === "object" ? keysToSnakeCase(e) : e;
      });
    }
    newObject[snakeCase(key)] = value;
    return newObject;
  }, {});
}

/**
 * dynamic attributes are located at a different position than normal block attributes
 * This method detects them and moves them from .attributeName to .dynamic.attributeName
 * It also invokes the .toTerraform() method on the dynamic attribute to get the correct
 * Terraform representation
 */
export function processDynamicAttributes(attributes: { [name: string]: any }): {
  [name: string]: any;
} {
  const result: { [name: string]: any; dynamic?: { [name: string]: any } } = {};
  Object.entries(attributes).forEach(([attributeName, value]) => {
    if (TerraformDynamicBlock.isTerraformDynamicBlock(value)) {
      if (!result.dynamic) {
        result.dynamic = {};
      }
      result.dynamic[attributeName] = value.toTerraformDynamicBlockJson();
    } else {
      const recurse =
        value !== null &&
        typeof value === "object" &&
        value.constructor === Object; // only descend into plain objects
      result[attributeName] = recurse ? processDynamicAttributes(value) : value;
    }
  });
  return result;
}
