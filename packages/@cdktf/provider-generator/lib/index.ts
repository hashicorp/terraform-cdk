// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
export * from "./get/constructs-maker";
export {
  isRegistryModule,
  TerraformModuleConstraint,
  TerraformProviderConstraint,
  isLocalModule,
} from "@cdktf/commons";
export { sanitizeClassOrNamespaceName } from "./get/generator/resource-parser";

import { CodeMaker } from "codemaker";
import * as srcmak from "jsii-srcmak";

import { generateJsiiLanguage } from "./get/constructs-maker";
export { escapeAttributeName } from "./get/generator/models";
import { TerraformProviderGenerator } from "./get/generator/provider-generator";
import { ProviderSchema } from "@cdktf/commons";

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

// Used for convert
