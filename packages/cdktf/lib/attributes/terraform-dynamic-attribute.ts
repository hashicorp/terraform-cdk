import {
  TerraformAttribute,
  TerraformAttributeOptions,
} from "./terraform-attribute";
import { hashMapper, anyToTerraform } from "../runtime";
import { ITerraformAddressable } from "../terraform-addressable";

export class TerraformDynamicAttribute extends TerraformAttribute {
  public constructor(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value?: { [key: string]: any },
    options?: TerraformAttributeOptions
  ) {
    super(parent, terraformAttribute, value, options);
  }

  public get value(): { [key: string]: any } | undefined {
    return this.realValue;
  }

  public static create(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value: TerraformDynamic
  ) {
    if (!(value instanceof TerraformDynamicAttribute)) {
      return new TerraformDynamicAttribute(parent, terraformAttribute, value);
    } else if (value.parent === parent) {
      return value;
    } else {
      return new TerraformDynamicAttribute(
        parent,
        terraformAttribute,
        value.value,
        { nested: value }
      );
    }
  }

  protected valueToTerraform() {
    return hashMapper(anyToTerraform)(this.value);
  }
}

export type TerraformDynamic =
  | { [key: string]: any }
  | TerraformDynamicAttribute;
