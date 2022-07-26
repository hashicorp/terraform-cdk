// Copyright (c) HashiCorp, Inc
// Licensed under the Mozilla Public License 2.0
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
