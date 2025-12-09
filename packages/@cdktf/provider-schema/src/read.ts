/**
 * Copyright IBM Corp. 2019, 2025
 * SPDX-License-Identifier: MPL-2.0
 */

export {
  isRegistryModule,
  TerraformModuleConstraint,
  TerraformProviderConstraint,
  isLocalModule,
} from "@cdktf/commons";
import {
  TerraformDependencyConstraint,
  LANGUAGES,
  ConstructsMakerProviderTarget,
  ConstructsMakerModuleTarget,
  Errors,
} from "@cdktf/commons";
import deepmerge from "deepmerge";
import { readModuleSchema, readProviderSchema } from "./provider-schema";
import { cachedAccess } from "./cache";

export type Schema = {
  providerSchema?: Awaited<ReturnType<typeof readProviderSchema>>;
  moduleSchema?: Awaited<ReturnType<typeof readModuleSchema>>;
};

export async function readSchema(
  constraints: TerraformDependencyConstraint[],
  cacheDir?: string,
): Promise<Schema> {
  const cachedReadProviderSchema = cachedAccess(readProviderSchema, cacheDir);
  const targets = constraints.map((constraint) =>
    ConstructsMakerProviderTarget.from(constraint, LANGUAGES[0]),
  );

  throwIfTargetsConflict(targets);

  const schemas = await Promise.all(
    targets.map((t) =>
      t.isModule
        ? readModuleSchema(t as any).then(
            (s) => ({ moduleSchema: s }) as Schema,
          )
        : cachedReadProviderSchema(t as any).then(
            (s) => ({ providerSchema: s }) as Schema,
          ),
    ),
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

function throwIfTargetsConflict(
  targets: (ConstructsMakerProviderTarget | ConstructsMakerModuleTarget)[],
) {
  const modules = targets.filter(
    (t) => t.isModule,
  ) as ConstructsMakerModuleTarget[];

  modules.forEach((moduleA) => {
    modules.forEach((moduleB) => {
      if (moduleA !== moduleB && moduleA.name === moduleB.name) {
        throw Errors.Usage(
          `Found two modules with the same name "${moduleA.name}" which is not supported. Please rename one of the modules in your cdktf.json config. For more information on how to set the name refer to https://cdk.tf/adding-modules`,
        );
      }
    });
  });
}
