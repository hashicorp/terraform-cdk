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
import { ConstructsMakerTarget } from "@cdktf/commons";
import deepmerge from "deepmerge";
import { readModuleSchema, readProviderSchema } from "./provider-schema";
import { cachedAccess } from "./cache";

type Await<T> = T extends Promise<infer U> ? U : T;
export type Schema = {
  providerSchema?: Await<ReturnType<typeof readProviderSchema>>;
  moduleSchema?: Await<ReturnType<typeof readModuleSchema>>;
};

const cachedReadProviderSchema = cachedAccess(readProviderSchema);
export async function readSchema(
  targets: ConstructsMakerTarget[]
): Promise<Schema> {
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
