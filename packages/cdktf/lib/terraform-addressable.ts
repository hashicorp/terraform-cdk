// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { IResolvable } from "./tokens/resolvable";
export interface ITerraformAddressable {
  readonly fqn: string;
}

export interface IInterpolatingParent {
  interpolationForAttribute(terraformAttribute: string): IResolvable;
}
