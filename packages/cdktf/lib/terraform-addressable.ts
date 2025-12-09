// Copyright IBM Corp. 2019, 2025
// SPDX-License-Identifier: MPL-2.0
import { IResolvable } from "./tokens/resolvable";
export interface ITerraformAddressable {
  readonly fqn: string;
}

export interface IInterpolatingParent {
  interpolationForAttribute(terraformAttribute: string): IResolvable;
}
