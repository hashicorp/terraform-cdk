// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  ProviderSchema,
  TerraformProviderGenerator,
} from "@cdktf/provider-generator";

export type TerraformResourceBlock = unknown;
export type Scope = {
  providerSchema: ProviderSchema;
  providerGenerator: Record<string, TerraformProviderGenerator>;
  constructs: Set<string>;
  variables: Record<
    string,
    {
      resource: string;
      variableName: string;
    }
  >;
  // Temporary flag to indicate if we need to import the cdktf library to access the token class
  hasTokenBasedTypeCoercion: boolean;
};
