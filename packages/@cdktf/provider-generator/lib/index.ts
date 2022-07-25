export * from "./get/constructs-maker";
export * as config from "./config";
export { getResourceNamespace } from "./get/generator/constants/provider-namespaces";
export { isRegistryModule } from "./get/module";
export { TerraformModuleConstraint, isLocalModule } from "./config";
export {
  readSchema,
  ProviderSchema,
  Schema,
  BlockType,
  AttributeType,
  Block,
  Attribute,
} from "./get/generator/provider-schema";

import { CodeMaker } from "codemaker";
import * as srcmak from "jsii-srcmak";
import { generateJsiiLanguage } from "./get/constructs-maker";
export { escapeAttributeName } from "./get/generator/models";
import { TerraformProviderGenerator } from "./get/generator/provider-generator";
import { ProviderSchema } from "./get/generator/provider-schema";

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
