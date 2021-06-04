import {
  TerraformAttribute,
  TerraformAttributeOptions,
} from "./terraform-attribute";
import { numberToTerraform } from "../runtime";
import { ITerraformAddressable } from "../terraform-addressable";

export class TerraformNumberAttribute extends TerraformAttribute {
  public constructor(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value?: number,
    options?: TerraformAttributeOptions
  ) {
    super(parent, terraformAttribute, value, options);
  }

  public get internalValue(): number | undefined {
    return this.realValue;
  }

  public static construct(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value: TerraformNumber | undefined
  ) {
    if (typeof value === "number" || value === undefined) {
      return new TerraformNumberAttribute(parent, terraformAttribute, value);
    } else if (value.terraformParent === parent) {
      return value;
    } else {
      return new TerraformNumberAttribute(
        parent,
        terraformAttribute,
        value.internalValue,
        { nested: value }
      );
    }
  }

  protected valueToTerraform() {
    return numberToTerraform(this.internalValue);
  }
}

export type TerraformNumber = number | TerraformNumberAttribute;
