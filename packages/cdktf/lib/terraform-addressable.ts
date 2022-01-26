import { IResolvable } from "./tokens/resolvable";
export interface ITerraformAddressable {
  readonly fqn: string;
}

export interface IInterpolatingParent {
  interpolationForAttribute(terraformAttribute: string): IResolvable;
}
