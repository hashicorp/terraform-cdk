import {
  TerraformAttribute,
  TerraformAttributeOptions,
} from "./terraform-attribute";
import { ITerraformAddressable } from "../terraform-addressable";

export abstract class TerraformListAttribute extends TerraformAttribute {
  public constructor(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value?: any[],
    options?: TerraformAttributeOptions
  ) {
    super(parent, terraformAttribute, value, options);
  }
}
