/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { ConstructsMakerTarget, logger, Errors } from "@cdktf/commons";
import * as fs from "fs-extra";
import * as path from "path";

// We keep this very simple since the caching feature is experimental
// we might need to do housekeeping / include terraform / cdktf version in the future
function cacheKey(input: ConstructsMakerTarget): string {
  return `${encodeURIComponent(input.fqn)}@${encodeURIComponent(
    input.version || ""
  )}`;
}

export function cachedAccess<I extends ConstructsMakerTarget, O>(
  producer: (input: I) => Promise<O>,
  cacheDir?: string | null
): (input: I) => Promise<O> {
  const cacheEnabled = typeof cacheDir === "string" && cacheDir.length > 0;

  if (!fs.lstatSync(cacheDir as string).isDirectory()) {
    throw Errors.Usage(
      `Provider Schema Cache directory '${cacheDir}' is not a directory`
    );
  }

  if (!cacheEnabled) {
    logger.debug(`Provider Schema Cache disabled`);
    return (input) => {
      return producer(input);
    };
  }

  logger.debug(`Provider Schema Cache enabled, caching at ${cacheDir}`);
  return async (input) => {
    const key = cacheKey(input);
    const cachePath = path.join(cacheDir, `${key}.json`);
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
