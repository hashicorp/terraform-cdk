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
} from "./get/generator/provider-schema";

import { CodeMaker } from "codemaker";
import * as srcmak from "jsii-srcmak";
import { generateJsiiLanguage } from "./get/constructs-maker";
import { TerraformProviderGenerator } from "./get/generator/provider-generator";

// Used for testing only
export async function generateProviderBindingsFromSchema(
  targetPath: string,
  schemaJSON: any,
  options?: srcmak.Options
): Promise<void> {
  const code = new CodeMaker();
  new TerraformProviderGenerator(code, schemaJSON);
  await code.save(targetPath);

  if (options) {
    await generateJsiiLanguage(code, options);
  }
}
