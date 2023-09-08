/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { ConstructsMakerTarget, logger } from "@cdktf/commons";
import * as fs from "fs-extra";

// We keep this very simple since the caching feature is experimental
// we might need to do housekeeping / include terraform / cdktf version in the future
function cacheKey(input: ConstructsMakerTarget): string {
  return `${encodeURIComponent(input.fqn)}@${input.version}`;
}

export function cachedAccess<I extends ConstructsMakerTarget, O>(
  producer: (input: I) => Promise<O>,
  cacheDir?: string | null
): (input: I) => Promise<O> {
  const cacheEnabled = Boolean(
    cacheDir && fs.lstatSync(cacheDir).isDirectory()
  );

  if (!cacheEnabled) {
    logger.debug(`Provider Schema Cache disabled`);
    return (input) => {
      return producer(input);
    };
  }

  logger.debug(`Provider Schema Cache enabled, caching at ${cacheDir}`);
  return async (input) => {
    const key = cacheKey(input);
    const cachePath = `${cacheDir}/${key}.json`;
    if (fs.existsSync(cachePath)) {
      logger.debug(`Cache hit for ${key}`);
      return JSON.parse(await fs.readFile(cachePath, "utf-8")) as O;
    }
    logger.debug(`Cache miss for ${key}, generating schema`);

    const result = await producer(input);
    await fs.writeFile(cachePath, JSON.stringify(result));
    logger.debug(`Write cache for ${key}`);
    return result;
  };
}
