// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

import { TerraformElement, TerraformResource } from ".";
import { IAspect } from "./aspect";
import { IConstruct, Node } from "constructs";
import * as crypto from "crypto";

/**
 * We have to copy this from the old CDKTF version for now, so that we can
 * calculate the old logical IDs for now and for later for the migration.
 */

/**
 * Resources with this ID are hidden from humans
 *
 * They do not appear in the human-readable part of the logical ID,
 * but they are included in the hash calculation.
 */
const HIDDEN_FROM_HUMAN_ID = "Resource";

/**
 * Resources with this ID are complete hidden from the logical ID calculation.
 */
const HIDDEN_ID = "Default";

const PATH_SEP = "/";
const UNIQUE_SEP = "_";

const HASH_LEN = 8;
const MAX_HUMAN_LEN = 240; // max ID len is 255
const MAX_ID_LEN = 255;

/**
 * Calculates a unique ID for a set of textual components.
 *
 * This is done by calculating a hash on the full path and using it as a suffix
 * of a length-limited "human" rendition of the path components.
 *
 * @param components The path components
 * @returns a unique alpha-numeric identifier with a maximum length of 255
 */
function makeUniqueIdOldVersion(components: string[], allowSepChars: boolean) {
  components = components.filter((x) => x !== HIDDEN_ID);

  if (components.length === 0) {
    throw new Error(
      "Unable to calculate a unique id for an empty set of components"
    );
  }

  // top-level resources will simply use the `name` as-is in order to support
  // transparent migration of cloudformation templates to the CDK without the
  // need to rename all resources.
  if (components.length === 1) {
    // we filter out non-alpha characters but that is actually a bad idea
    // because it could create conflicts ("A-B" and "AB" will render the same
    // logical ID). sadly, changing it in the 1.x version line is impossible
    // because it will be a breaking change. we should consider for v2.0.
    // https://github.com/aws/aws-cdk/issues/6421
    const candidate = removeDisallowedCharacters(components[0], allowSepChars);

    // if our candidate is short enough, use it as is. otherwise, fall back to
    // the normal mode.
    if (candidate.length <= MAX_ID_LEN) {
      return candidate;
    }
  }

  const hash = pathHash(components);
  const human = removeDupes(components)
    .filter((x) => x !== HIDDEN_FROM_HUMAN_ID)
    .map((s) => removeDisallowedCharacters(s, allowSepChars))
    .join(UNIQUE_SEP)
    .slice(0, MAX_HUMAN_LEN);

  return human + UNIQUE_SEP + hash;
}

/**
 * Take a hash of the given path.
 *
 * The hash is limited in size.
 */
function pathHash(path: string[]): string {
  const md5 = crypto
    .createHash("md5")
    .update(path.join(PATH_SEP))
    .digest("hex");
  return md5.slice(0, HASH_LEN).toUpperCase();
}

/**
 *
 * @param s
 * @param allowSepChars
 * @returns
 */
function removeDisallowedCharacters(s: string, allowSepChars: boolean) {
  if (allowSepChars) {
    return removeNonAlphanumericSep(s);
  } else {
    return removeNonAlphanumeric(s);
  }
}

/**
 * Removes all non-alphanumeric characters in a string.
 */
function removeNonAlphanumeric(s: string) {
  return s.replace(/[^A-Za-z0-9]/g, "");
}

/**
 *
 * @param s
 * @returns
 */
function removeNonAlphanumericSep(s: string) {
  return s.replace(/[^A-Za-z0-9_-]/g, "");
}

/**
 * Remove duplicate "terms" from the path list
 *
 * If the previous path component name ends with this component name, skip the
 * current component.
 */
function removeDupes(path: string[]): string[] {
  const ret = new Array<string>();

  for (const component of path) {
    if (ret.length === 0 || !ret[ret.length - 1].endsWith(component)) {
      ret.push(component);
    }
  }

  return ret;
}

/**
 *
 * @param tfElement
 * @returns
 */
function allocateLogicalIdOldVersion(
  tfElement: TerraformElement | Node
): string {
  const node = TerraformElement.isTerraformElement(tfElement)
    ? tfElement.node
    : tfElement;

  // This is the previous behavior, which we want for now.
  const stackIndex = 0;

  const components = node.scopes.slice(stackIndex + 1).map((c) => c.node.id);
  return components.length > 0 ? makeUniqueIdOldVersion(components, false) : "";
}

/**
 * For migrating past 0.17 where the feature flag for the old id generation logic was removed after being deprecated since 0.15
 */
export class MigrateIdsAspect implements IAspect {
  visit(node: IConstruct) {
    // eslint-disable-next-line no-instanceof/no-instanceof
    if (node instanceof TerraformResource) {
      const oldId = allocateLogicalIdOldVersion(node);
      node.moveFromId(`${node.terraformResourceType}.${oldId}`);
    }
  }
}
