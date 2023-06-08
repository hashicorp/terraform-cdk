/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { getTypeAtPath } from "./terraformSchema";
import { ResourceScope, TerraformResourceBlock } from "./types";
import * as t from "@babel/types";

function getConfigFieldName(_scope: ResourceScope, name: string) {
  return name; // sanitize and care about duplicates
}

export function fillWithConfigAccessors(
  scope: ResourceScope,
  config: TerraformResourceBlock,
  path: string
  // TODO: can we do a better type here?
): any {
  // Iterate through config, find required properties, and add accessors for them into the scope, adding a config.myVar accessor
  // The "find required" logic should be the same as in the generation in the end, but for now we just do it simple
  // To get rid of the "any" we need sth importable, so maybe a path from the root type? We can (or already have)
  // the root type so we might build an access chain? Or we keep the any if it's ok with rosetta.

  if (Array.isArray(config)) {
    return config.map((c) => fillWithConfigAccessors(scope, c, `${path}.[]`));
  }

  if (typeof config === "object" && config !== null) {
    const mutated = Object.entries(config).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: fillWithConfigAccessors(scope, value, `${path}.${key}`),
      }),
      {} as Record<string, TerraformResourceBlock>
    );

    // Get type of this part of the config
    const attributeType = getTypeAtPath(scope.providerSchema, path);
    const requiredAttributes = getRequiredAttributes(attributeType);

    // Add accessors for all required attributes that are missing
    requiredAttributes.forEach((key) => {
      if (mutated[key] === undefined) {
        const fieldName = getConfigFieldName(scope, key);
        mutated[key] = t.memberExpression(
          t.identifier("config"),
          t.identifier(fieldName)
        );
        scope.topLevelConfig[fieldName] = `${path}.${key}`;
      }
    });

    return mutated;
  } else {
    return config;
  }
}

type Key = string;
export function getRequiredAttributes(
  attributeType: ReturnType<typeof getTypeAtPath>
): Key[] {
  if (!attributeType) {
    return [];
  }
  // TODO: handle attributes, getTypesAtPath needs to return the parent object (as well?) so we know. For now we ignore attributes
  if (
    typeof attributeType !== "object" ||
    Array.isArray(attributeType) ||
    attributeType === null ||
    attributeType === undefined ||
    !("block" in attributeType)
  ) {
    return [];
  }

  const requiredAttributes = Object.entries(
    attributeType.block.attributes || {}
  ).reduce(
    (acc, [key, value]) => (value.required ? [...acc, key] : acc),
    [] as string[]
  );

  // Logic taken from (and should be shared with) provider generator resource parser: attributeForBlockType
  const requiredBlockTypes = Object.entries(
    attributeType.block.block_types || {}
  ).reduce((acc, [key, value]) => {
    if (
      value.nesting_mode === "single" &&
      !(value as any).attributes?.some((x: any) => !x.required)
    ) {
      return [...acc, key];
    }
    if (value.nesting_mode === "map") {
      return acc;
    }

    if (
      (value.nesting_mode === "list" || value.nesting_mode === "set") &&
      value.min_items === undefined
        ? false
        : (value as any).min_items > 0
    ) {
      return [...acc, key];
    }

    return acc;
  }, [] as string[]);
  return [...requiredAttributes, ...requiredBlockTypes].sort();
}
