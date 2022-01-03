import { ProviderSchema } from "@cdktf/provider-generator";

export type TerraformResourceBlock = unknown;
export type Scope = {
  providerSchema: ProviderSchema;
  constructs: Set<string>;
  variables: Record<string, { resource: string; variableName: string }>;
};
