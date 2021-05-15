import {
  TerraformAttribute,
  TerraformAttributeOptions,
} from "./terraform-attribute";
import { ITerraformAddressable } from "../terraform-addressable";

export abstract class TerraformMapAttribute extends TerraformAttribute {
  public constructor(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value?: { [key: string]: any },
    options?: TerraformAttributeOptions
  ) {
    super(parent, terraformAttribute, value, options);
  }
}
