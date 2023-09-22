/**
 * Copyright (c) HashiCorp, Inc.
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
  cacheDir?: string
): Promise<Schema> {
  const cachedReadProviderSchema = cachedAccess(readProviderSchema, cacheDir);
  const targets = constraints.map((constraint) =>
    ConstructsMakerProviderTarget.from(constraint, LANGUAGES[0])
  );
  const schemas = await Promise.all(
    targets.map((t) =>
      t.isModule
        ? readModuleSchema(t as any).then(
            (s) => ({ moduleSchema: s } as Schema)
          )
        : cachedReadProviderSchema(t as any).then(
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
