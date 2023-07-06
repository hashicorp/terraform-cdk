// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

import { ensureAllSettledBeforeThrowing, Errors, logger } from "@cdktf/commons";
import minimatch from "minimatch";
import { CdktfStack } from "../cdktf-stack";
import { SynthesizedStack } from "../synth-stack";

export function getSingleStack(
  stacks: SynthesizedStack[],
  stackName?: string,
  targetAction?: string
) {
  if (!stacks) {
    throw Errors.Internal(
      "Trying to access a stack before it has been synthesized"
    );
  }

  if (stackName) {
    const stack = stacks.find((s) => s.name === stackName);
    if (!stack) {
      throw Errors.Usage("Could not find stack: " + stackName);
    }

    return stack;
  }

  if (stacks.length === 1) {
    return stacks[0];
  }

  throw Errors.Usage(
    `Found more than one stack, please specify a target stack. Run cdktf ${
      targetAction || "<verb>"
    } <stack> with one of these stacks: ${stacks
      .map((s) => s.name)
      .join(", ")} `
  );
}

export function getMultipleStacks(
  stacks: SynthesizedStack[],
  patterns?: string[],
  targetAction?: string
) {
  if (!patterns || !patterns.length) {
    if (stacks.length === 1) {
      return [stacks[0]];
    }
    throw Errors.Usage(
      `Found more than one stack, please specify a target stack. Run cdktf ${
        targetAction || "<verb>"
      } <stack> with one of these stacks: ${stacks
        .map((s) => s.name)
        .join(", ")} `
    );
  }

  return patterns.flatMap((pattern) => {
    const matchingStacks = stacks.filter((stack) =>
      minimatch(stack.name, pattern)
    );

    if (matchingStacks.length === 0) {
      throw Errors.Usage(`Could not find stack for pattern '${pattern}'`);
    }

    return matchingStacks;
  });
}

// Returns the first stack that has no unmet dependencies
// An unmet dependency is a dependency that has not been deployed yet
// If there is no unfinished stack, returns undefined
// If there is no stack ready to be worked on, it returns a promise that will resolve as soon as there is a follow-up stack available
export async function getStackWithNoUnmetDependencies(
  stackExecutors: CdktfStack[]
): Promise<CdktfStack | undefined> {
  logger.debug("Checking for stacks with unmet dependencies");
  logger.debug("stack executors:", stackExecutors);
  const pendingStacks = stackExecutors.filter((executor) => executor.isPending);
  logger.debug("pending stacks:", stackExecutors);

  if (pendingStacks.length === 0) {
    return undefined;
  }

  const currentlyReadyStack = pendingStacks.find((executor) =>
    executor.stack.dependencies.every(
      (dependency) =>
        stackExecutors.find((executor) => executor.stack.name === dependency)
          ?.currentState === "done"
    )
  );

  if (currentlyReadyStack) {
    logger.debug("Found a stack with no unmet dependencies");
    return currentlyReadyStack;
  }

  const stackExecutionPromises = stackExecutors
    .filter((ex) => ex.currentWorkPromise)
    .map((ex) => ex.currentWorkPromise);

  logger.debug(
    `${stackExecutionPromises.length} stacks are currently busy, waiting for one to finish`
  );

  if (!stackExecutionPromises.length) {
    return undefined;
  }

  await ensureAllSettledBeforeThrowing(
    Promise.race(stackExecutionPromises),
    stackExecutionPromises
  );

  return await getStackWithNoUnmetDependencies(stackExecutors);
}

function findAllDependantStacks(
  stackExecutors: CdktfStack[],
  stackName: string
): CdktfStack[] {
  return stackExecutors.filter((innerExecutor) =>
    innerExecutor.stack.dependencies.includes(stackName)
  );
}

export function findAllNestedDependantStacks(
  stackExecutors: CdktfStack[],
  stackName: string,
  knownDependantStackNames: Set<string> = new Set()
): CdktfStack[] {
  const dependantStacks = findAllDependantStacks(stackExecutors, stackName);
  dependantStacks.forEach((stack) => {
    if (knownDependantStackNames.has(stack.stack.name)) {
      return;
    }

    knownDependantStackNames.add(stack.stack.name);
    findAllNestedDependantStacks(
      stackExecutors,
      stack.stack.name,
      knownDependantStackNames
    );
  });

  return stackExecutors.filter((executor) =>
    knownDependantStackNames.has(executor.stack.name)
  );
}

// Returns the first stack that has no dependents that need to be destroyed first
export async function getStackWithNoUnmetDependants(
  stackExecutors: CdktfStack[]
): Promise<CdktfStack | undefined> {
  logger.debug("Checking for stacks with unmet dependants");
  logger.debug("stack executors:", stackExecutors);
  const pendingStacks = stackExecutors.filter((executor) => executor.isPending);
  logger.debug("pending stacks:", stackExecutors);

  if (pendingStacks.length === 0) {
    return undefined;
  }

  const currentlyReadyStack = pendingStacks.find((executor) => {
    const dependantStacks = findAllDependantStacks(
      stackExecutors,
      executor.stack.name
    );
    return dependantStacks.every((stack) => stack.currentState === "done");
  });

  if (currentlyReadyStack) {
    logger.debug("Found a stack with no unmet dependants");
    return currentlyReadyStack;
  }
  const stackExecutionPromises = stackExecutors
    .filter((ex) => ex.currentWorkPromise)
    .map((ex) => ex.currentWorkPromise);

  logger.debug(
    `${stackExecutionPromises.length} stacks are currently busy, waiting for one to finish`
  );
  if (!stackExecutionPromises.length) {
    return undefined;
  }

  await Promise.race(stackExecutionPromises);
  return await getStackWithNoUnmetDependants(stackExecutors);
}

export function getDependantStacks(
  stacksToRun: SynthesizedStack[],
  allStacks: SynthesizedStack[]
): SynthesizedStack[] {
  return stacksToRun
    .map((stack) =>
      allStacks.filter((s) => s.dependencies.includes(stack.name))
    )
    .flat();
}

export function getStackDependencies(
  stacksToRun: SynthesizedStack[],
  allStacks: SynthesizedStack[]
): SynthesizedStack[] {
  return stacksToRun
    .map((stack) => stack.dependencies)
    .map((dependencies) =>
      allStacks.filter((stack) => dependencies.includes(stack.name))
    )
    .flat();
}

// Throws an error if there is a dependant stack that is not included
export function checkIfAllDependantsAreIncluded(
  stacksToRun: SynthesizedStack[],
  allStacks: SynthesizedStack[]
) {
  const allDependants = new Set<string>();
  getDependantStacks(stacksToRun, allStacks).forEach((dependant) =>
    allDependants.add(dependant.name)
  );

  const stackNames = stacksToRun.map((stack) => stack.name);
  const missingDependants = [...allDependants].filter(
    (dependant) => !stackNames.includes(dependant)
  );

  if (missingDependants.length > 0) {
    throw Errors.Usage(
      `The following dependant stacks are not included in the stacks to run: ${missingDependants.join(
        ", "
      )}. Either add them or add the --ignore-missing-stack-dependencies flag.`
    );
  }
}

/** 
  Throws an error if there is a dependency that is not included
  Cycles are detected on dependency creation at synthesis time
  Running this prevents us from being in a situation where we 
  have to wait for a stack to be deployed that is not included to be run
*/
export function checkIfAllDependenciesAreIncluded(
  stacksToRun: SynthesizedStack[],
  allStacks: SynthesizedStack[]
) {
  const allDependencies = new Set<string>();
  getStackDependencies(stacksToRun, allStacks).forEach((dependency) =>
    allDependencies.add(dependency.name)
  );

  const stackNames = stacksToRun.map((stack) => stack.name);
  const missingDependencies = [...allDependencies].filter(
    (dependency) => !stackNames.includes(dependency)
  );

  if (missingDependencies.length > 0) {
    throw Errors.Usage(
      `The following dependencies are not included in the stacks to run: ${missingDependencies.join(
        ", "
      )}. Either add them or add the --ignore-missing-stack-dependencies flag.`
    );
  }
}
