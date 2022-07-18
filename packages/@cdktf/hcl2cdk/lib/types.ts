import {
  ProviderSchema,
  TerraformProviderGenerator,
} from "@cdktf/provider-generator";

export type TerraformResourceBlock = unknown;
export type Scope = {
  providerSchema: ProviderSchema;
  providerGenerator: Record<string, TerraformProviderGenerator>;
  constructs: Set<string>;
  variables: Record<string, { resource: string; variableName: string }>;
};
