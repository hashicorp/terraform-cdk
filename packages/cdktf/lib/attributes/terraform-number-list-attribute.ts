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

  public get internalValue(): TerraformNumber[] | undefined {
    return this.realValue;
  }

  public get(index: number): TerraformNumberAttribute {
    return new TerraformNumberAttribute(this, index.toString());
  }

  public static construct(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value: TerraformNumberList | undefined
  ) {
    if (!(value instanceof TerraformNumberListAttribute)) {
      return new TerraformNumberListAttribute(
        parent,
        terraformAttribute,
        value
      );
    } else if (value.terraformParent === parent) {
      return value;
    } else {
      return new TerraformNumberListAttribute(
        parent,
        terraformAttribute,
        value.internalValue,
        { nested: value }
      );
    }
  }

  protected valueToTerraform() {
    return listMapper(numberToTerraform)(this.internalValue);
  }
}

export type TerraformNumberList =
  | TerraformNumber[]
  | TerraformNumberListAttribute;
