import { TerraformListAttribute } from "./terraform-list-attribute";
import { TerraformAttributeOptions } from "./terraform-attribute";
import { listMapper, numberToTerraform } from "../runtime";
import {
  TerraformNumber,
  TerraformNumberAttribute,
} from "./terraform-number-attribute";
import { ITerraformAddressable } from "../terraform-addressable";

export class TerraformNumberListAttribute extends TerraformListAttribute {
  public constructor(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value?: TerraformNumber[],
    options?: TerraformAttributeOptions
  ) {
    super(parent, terraformAttribute, value, options);
  }

  public get value(): TerraformNumber[] | undefined {
    return this.realValue;
  }

  public get(index: number): TerraformNumberAttribute {
    return new TerraformNumberAttribute(this, index.toString());
  }

  public static create(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value: TerraformNumberList
  ) {
    if (!(value instanceof TerraformNumberListAttribute)) {
      return new TerraformNumberListAttribute(
        parent,
        terraformAttribute,
        value
      );
    } else if (value.parent === parent) {
      return value;
    } else {
      return new TerraformNumberListAttribute(
        parent,
        terraformAttribute,
        value.value,
        { nested: value }
      );
    }
  }

  protected valueToTerraform() {
    return listMapper(numberToTerraform)(this.value);
  }
}

export type TerraformNumberList =
  | TerraformNumber[]
  | TerraformNumberListAttribute;
