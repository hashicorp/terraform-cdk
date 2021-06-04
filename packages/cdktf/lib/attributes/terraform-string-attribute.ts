import {
  TerraformAttribute,
  TerraformAttributeOptions,
} from "./terraform-attribute";
import { stringToTerraform } from "../runtime";
import { ITerraformAddressable } from "../terraform-addressable";

export class TerraformStringAttribute extends TerraformAttribute {
  public constructor(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value?: string,
    options?: TerraformAttributeOptions
  ) {
    super(parent, terraformAttribute, value, options);
  }

  public get internalValue(): string | undefined {
    return this.realValue;
  }

  public static construct(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value: TerraformString | undefined
  ) {
    if (typeof value === "string" || value === undefined) {
      return new TerraformStringAttribute(parent, terraformAttribute, value);
    } else if (value.terraformParent === parent) {
      return value;
    } else {
      return new TerraformStringAttribute(
        parent,
        terraformAttribute,
        value.internalValue,
        { nested: value }
      );
    }
  }

  protected valueToTerraform() {
    return stringToTerraform(this.internalValue);
  }
}

export type TerraformString = string | TerraformStringAttribute;
