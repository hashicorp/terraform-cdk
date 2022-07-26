// Copyright (c) HashiCorp, Inc
// Licensed under the Mozilla Public License 2.0
import { IResolvable } from "./tokens/resolvable";
export interface ITerraformAddressable {
  readonly fqn: string;
}

export interface IInterpolatingParent {
  interpolationForAttribute(terraformAttribute: string): IResolvable;
}
