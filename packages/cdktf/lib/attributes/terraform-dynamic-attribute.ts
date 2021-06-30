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

  public get internalValue(): { [key: string]: any } | undefined {
    return this.realValue;
  }

  public static construct(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value: TerraformDynamic | undefined
  ) {
    if (!(value instanceof TerraformDynamicAttribute)) {
      return new TerraformDynamicAttribute(parent, terraformAttribute, value);
    } else if (value.terraformParent === parent) {
      return value;
    } else {
      return new TerraformDynamicAttribute(
        parent,
        terraformAttribute,
        value.internalValue,
        { nested: value }
      );
    }
  }

  protected valueToTerraform() {
    return hashMapper(anyToTerraform)(this.internalValue);
  }
}

export type TerraformDynamic =
  | { [key: string]: any }
  | TerraformDynamicAttribute;
