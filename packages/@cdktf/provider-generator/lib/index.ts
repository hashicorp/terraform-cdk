// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
export * from "./get/constructs-maker";
export {
  isRegistryModule,
  TerraformModuleConstraint,
  TerraformProviderConstraint,
  isLocalModule,
} from "@cdktf/commons";

export {
  readProviderSchema,
  readModuleSchema,
  ProviderSchema,
  Schema,
  BlockType,
  AttributeType,
  Block,
  Attribute,
} from "./get/generator/provider-schema";
export { sanitizeClassOrNamespaceName } from "./get/generator/resource-parser";
export { escapeAttributeName } from "./get/generator/models";

import { CodeMaker } from "codemaker";
import * as srcmak from "jsii-srcmak";
import deepmerge from "deepmerge";
import * as fs from "fs-extra";
import * as path from "path";
import {
  Language,
  TerraformModuleConstraint,
  TerraformProviderConstraint,
  TerraformDependencyConstraint,
  logger,
} from "@cdktf/commons";
import {
  generateJsiiLanguage,
  ConstructsMakerTarget,
  GetOptions,
  ConstructsMaker,
} from "./get/constructs-maker";
import { TerraformProviderGenerator } from "./get/generator/provider-generator";
import {
  ProviderSchema,
  readModuleSchema,
  readProviderSchema,
} from "./get/generator/provider-schema";

export { TerraformProviderGenerator, CodeMaker };

// Used for testing only
export async function generateProviderBindingsFromSchema(
  targetPath: string,
  schemaJSON: ProviderSchema,
  options?: srcmak.Options
): Promise<void> {
  const code = new CodeMaker();
  const generator = new TerraformProviderGenerator(code, schemaJSON);
  generator.generateAll();

  await code.save(targetPath);

  if (options) {
    await generateJsiiLanguage(code, options, targetPath);
  }
}

type Await<T> = T extends Promise<infer U> ? U : T;

type Schema = {
  providerSchema?: Await<ReturnType<typeof readProviderSchema>>;
  moduleSchema?: Await<ReturnType<typeof readModuleSchema>>;
};
// Used for convert
export async function readSchema(
  targets: ConstructsMakerTarget[]
): Promise<Schema> {
  const schemas = await Promise.all(
    targets.map((t) =>
      t.isModule
        ? readModuleSchema(t as any).then(
            (s) => ({ moduleSchema: s } as Schema)
          )
        : readProviderSchema(t as any).then(
            (s) => ({ providerSchema: s } as Schema)
          )
    )
  );

  // ensure we have a schema for each target type
  schemas.unshift({
    providerSchema: {
      format_version: "0.1",
    },
    moduleSchema: {},
  });

  return deepmerge.all(schemas);
}

export enum GetStatus {
  STARTING = "starting",
  DOWNLOADING = "downloading and generating modules and providers",
  DONE = "done",
  ERROR = "error",
}

type ParsedDependencyConstraint =
  | TerraformModuleConstraint
  | TerraformProviderConstraint
  | TerraformDependencyConstraint;

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
