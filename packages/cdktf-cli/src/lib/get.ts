// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  ConstructsMaker,
  GetOptions,
  config,
  Language,
} from "@cdktf/provider-generator";
import * as fs from "fs-extra";
import { logger } from "./logging";
import * as path from "path";

export enum GetStatus {
  STARTING = "starting",
  DOWNLOADING = "downloading and generating modules and providers",
  DONE = "done",
  ERROR = "error",
}

type ParsedDependencyConstraint =
  | config.TerraformModuleConstraint
  | config.TerraformProviderConstraint
  | config.TerraformDependencyConstraint;

interface GetConfig {
  // All existing constraints (to be able to remove no longer used ones)
  constraints: ParsedDependencyConstraint[];
  // The constraints that should be generated
  constraintsToGenerate?: ParsedDependencyConstraint[];
  constructsOptions: GetOptions;
  cleanDirectory?: boolean;
  onUpdate?: (payload: GetStatus) => void;
  reportTelemetry?: (telemetry: {
    targetLanguage: string;
    trackingPayload: Record<string, any>;
  }) => void;
}

export async function get({
  constructsOptions,
  constraints,
  constraintsToGenerate,
  cleanDirectory,
  onUpdate = () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  reportTelemetry = () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
}: GetConfig) {
  logger.debug(`Starting get with outdir ${constructsOptions.codeMakerOutput}`);
  const constructsMaker = new ConstructsMaker(
    constructsOptions,
    reportTelemetry
  );

  if (cleanDirectory) {
    await fs.remove(constructsOptions.codeMakerOutput);
  } else {
    // Remove all providers that are not in the new list
    await constructsMaker.removeFoldersThatShouldNotExist(constraints);
    if (constructsOptions.targetLanguage === Language.TYPESCRIPT) {
      // Remove all modules
      await fs.remove(
        path.resolve(constructsOptions.codeMakerOutput, "modules")
      );
    }
  }

  // Filter constraints to generate
  const toGenerate =
    constraintsToGenerate ||
    (await constructsMaker.filterAlreadyGenerated(constraints));

  onUpdate(GetStatus.DOWNLOADING);
  logger.debug("Generating provider bindings");
  await constructsMaker.generate(constraints, toGenerate);
  logger.debug("Provider bindings generated");

  if (!(await fs.pathExists(constructsOptions.codeMakerOutput))) {
    onUpdate(GetStatus.ERROR);
    logger.debug("Failed to generate provider bindings");
  } else {
    onUpdate(GetStatus.DONE);
    logger.debug("Provider bindings generated");
  }
}
