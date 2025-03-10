/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { getTypeAtPath } from "./terraformSchema";
import { ResourceScope, TerraformResourceBlock } from "./types";
import * as t from "@babel/types";
import { camelCase } from "./utils";

function getConfigFieldName(
  topLevelConfig: Record<string, unknown>,
  name: string,
) {
  const sanitizedName = camelCase(name);
  return deduplicateName(Object.keys(topLevelConfig), sanitizedName);
}

function deduplicateName(existingNames: string[], name: string) {
  let newName = name;
  let i = 1;
  while (existingNames.includes(newName)) {
    newName = `${name}${i}`;
    i++;
  }
  return newName;
}

export function fillWithConfigAccessors(
  scope: ResourceScope,
  config: TerraformResourceBlock,
  path: string,
): any {
  if (Array.isArray(config)) {
    return config.map((c) => fillWithConfigAccessors(scope, c, `${path}.[]`));
  }

  if (typeof config === "object" && config !== null) {
    const mutated = Object.entries(config).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: fillWithConfigAccessors(scope, value, `${path}.${key}`),
      }),
      {} as Record<string, TerraformResourceBlock>,
    );

    // Get type of this part of the config
    const attributeType = getTypeAtPath(scope.providerSchema, path);
    const requiredAttributes = getRequiredAttributes(attributeType);

    // Add accessors for all required attributes that are missing
    requiredAttributes.forEach((key) => {
      const value = mutated[key];
      const isNotDirectlyAccessible = value === undefined;
      const isReplacedByAst =
        (t.isNode(mutated) && t.isExpression(mutated)) ||
        t.isExpression(value as any);
      const isEmptyArray = Array.isArray(value) && value.length === 0;

      // If this was already replaced by an AST node, we don't need to do anything
      // We assume all fields are filled in by the AST
      if (isReplacedByAst) {
        return;
      }

      if (isNotDirectlyAccessible || isEmptyArray) {
        const fieldName = getConfigFieldName(scope.topLevelConfig, key);
        mutated[key] = t.memberExpression(
          t.identifier("config"),
          t.identifier(fieldName),
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
  attributeType: ReturnType<typeof getTypeAtPath>,
): Key[] {
  if (!attributeType) {
    return [];
  }
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
    attributeType.block.attributes || {},
  ).reduce(
    (acc, [key, value]) => (value.required ? [...acc, key] : acc),
    [] as string[],
  );

  // Logic taken from (and should be shared with) provider generator resource parser: attributeForBlockType
  const requiredBlockTypes = Object.entries(
    attributeType.block.block_types || {},
  ).reduce((acc, [key, value]) => {
    if (
      value.nesting_mode === "single" &&
      !Object.values(value.block.attributes || {}).some((x) => !x.required)
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
