/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { DynamicBlock, TerraformResourceBlock } from "./types";

export function isNestedDynamicBlock(
  dynBlocks: DynamicBlock[],
  block: DynamicBlock,
): boolean {
  return dynBlocks.some(
    (dyn) => dyn.path !== block.path && block.path.startsWith(dyn.path),
  );
}

export const extractDynamicBlocks = (
  config: TerraformResourceBlock,
  path = "",
): DynamicBlock[] => {
  if (typeof config !== "object") {
    return [];
  }

  if (!config) {
    return [];
  }

  if (Array.isArray(config)) {
    return config.reduce(
      (carry, item, index) => [
        ...carry,
        ...extractDynamicBlocks(item, `${path}.${index}`),
      ],
      [],
    );
  }

  if ("dynamic" in config) {
    const dynamic = (config as any).dynamic;
    const scopedVar = Object.keys(dynamic)[0];
    const { for_each, content } = dynamic[scopedVar][0];

    return [
      {
        path: `${path}.dynamic.${scopedVar}`,
        for_each,
        content,
        scopedVar,
      },
      ...extractDynamicBlocks(
        content,
        `${path}.dynamic.${scopedVar}.0.content`,
      ),
    ];
  }

  return Object.entries(config).reduce((carry, [key, value]) => {
    return [...carry, ...extractDynamicBlocks(value as any, `${path}.${key}`)];
  }, [] as DynamicBlock[]);
};
