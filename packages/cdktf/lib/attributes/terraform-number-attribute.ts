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

  public get value(): number | undefined {
    return this.realValue;
  }

  public static create(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value: TerraformNumber | undefined
  ) {
    if (typeof value === "number" || value === undefined) {
      return new TerraformNumberAttribute(parent, terraformAttribute, value);
    } else if (value.parent === parent) {
      return value;
    } else {
      return new TerraformNumberAttribute(
        parent,
        terraformAttribute,
        value.value,
        { nested: value }
      );
    }
  }

  protected valueToTerraform() {
    return numberToTerraform(this.value);
  }
}

export type TerraformNumber = number | TerraformNumberAttribute;
