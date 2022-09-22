// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
export * from "./get/constructs-maker";
export * as config from "./config";
export { isRegistryModule } from "./get/module";
export { TerraformModuleConstraint, isLocalModule } from "./config";
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

import { CodeMaker } from "codemaker";
import * as srcmak from "jsii-srcmak";
import deepmerge from "deepmerge";
import {
  generateJsiiLanguage,
  ConstructsMakerTarget,
} from "./get/constructs-maker";
export { escapeAttributeName } from "./get/generator/models";
import { TerraformProviderGenerator } from "./get/generator/provider-generator";
import {
  ProviderSchema,
  readModuleSchema,
  readProviderSchema,
} from "./get/generator/provider-schema";

export { setLogger } from "./config";
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
    await generateJsiiLanguage(code, options);
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
