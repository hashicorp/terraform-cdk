/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { logger } from "@cdktf/commons";
import pidtree from "pidtree";
import pidusage from "pidusage";

/**
 * We need to get the memory usage of the entire process tree, not just the
 * current process since we start a lot of sub-processes with child_process.exec().
 */
async function getCombinedMemoryUsageInBytes(
  pid = process.pid
): Promise<number> {
  const allPids = await pidtree(pid, { root: true });
  const usages = await pidusage(allPids);
  return Object.values(usages).reduce(
    (carry, item) => (item && "memory" in item ? carry + item.memory : carry),
    0
  );
}

export function startPerformanceMonitoring() {
  const start = Date.now();
  const memoryMeasurementsInGb: number[] = [];

  const interval = setInterval(async () => {
    const memoryUsage = await getCombinedMemoryUsageInBytes();
    memoryMeasurementsInGb.push(memoryUsage / 1024 / 1024 / 1024);
  }, 1000);

  return () => {
    const timeInS = (Date.now() - start) / 1000;
    clearInterval(interval);
    const memoryInGbAvg =
      memoryMeasurementsInGb.reduce((a, b) => a + b, 0) /
      memoryMeasurementsInGb.length;
    const memoryInGbMax = Math.max(...memoryMeasurementsInGb);

    logger.info(
      `Command took ${timeInS.toFixed(2)}s with ${memoryInGbAvg.toFixed(
        2
      )}Gb of memory on average and ${memoryInGbMax.toFixed(
        2
      )}Gb of memory at peak`
    );
  };
}
