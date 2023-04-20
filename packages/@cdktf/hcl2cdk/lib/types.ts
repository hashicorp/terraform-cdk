// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  ProviderSchema,
  TerraformProviderGenerator,
} from "@cdktf/provider-generator";

export type TerraformResourceBlock = unknown;
export type ProgramScope = {
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
  nodeIds: string[]; // temporarily added until replaced
};

export type ResourceScope = ProgramScope & {
  forEachIteratorName?: string; // set if a for_each is used in this resource
  countIteratorName?: string; // set if a count is used in this resource
  withinOverrideExpression?: boolean; // set if we are currently within an override expression
  scopedVariables?: Record<string, string>; // set if we are currently within an dynamic block expression
};

export type Reference = {
  start: number;
  end: number;
  referencee: { id: string; full: string }; // identifier for resource
  useFqn?: boolean;
  isVariable?: boolean;
};

export type DynamicBlock = {
  path: string;
  for_each: string;
  content: TerraformResourceBlock;
  scopedVar: string;
};

export type IteratorVariableReference = {
  start: number;
  end: number;
  value: string;
};
