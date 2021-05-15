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

  public get value(): string | undefined {
    return this.realValue;
  }

  public static create(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value: TerraformString
  ) {
    if (typeof value === "string") {
      return new TerraformStringAttribute(parent, terraformAttribute, value);
    } else if (value.parent === parent) {
      return value;
    } else {
      return new TerraformStringAttribute(
        parent,
        terraformAttribute,
        value.value,
        { nested: value }
      );
    }
  }

  protected valueToTerraform() {
    return stringToTerraform(this.value);
  }
}

export type TerraformString = string | TerraformStringAttribute;
