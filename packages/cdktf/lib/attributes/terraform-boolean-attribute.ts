import {
  TerraformAttribute,
  TerraformAttributeOptions,
} from "./terraform-attribute";
import { booleanToTerraform } from "../runtime";
import { ITerraformAddressable } from "../terraform-addressable";

export class TerraformBooleanAttribute extends TerraformAttribute {
  public constructor(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value?: boolean,
    options?: TerraformAttributeOptions
  ) {
    super(parent, terraformAttribute, value, options);
  }

  public get internalValue(): boolean | undefined {
    return this.realValue;
  }

  public static construct(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value: TerraformBoolean | undefined
  ) {
    if (typeof value === "boolean" || value === undefined) {
      return new TerraformBooleanAttribute(parent, terraformAttribute, value);
    } else if (value.terraformParent === parent) {
      return value;
    } else {
      return new TerraformBooleanAttribute(
        parent,
        terraformAttribute,
        value.internalValue,
        { nested: value }
      );
    }
  }

  protected valueToTerraform() {
    return booleanToTerraform(this.internalValue);
  }
}

export type TerraformBoolean = boolean | TerraformBooleanAttribute;
