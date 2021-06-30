import { TerraformListAttribute } from "./terraform-list-attribute";
import { TerraformAttributeOptions } from "./terraform-attribute";
import { listMapper, stringToTerraform } from "../runtime";
import {
  TerraformString,
  TerraformStringAttribute,
} from "./terraform-string-attribute";
import { ITerraformAddressable } from "../terraform-addressable";

export class TerraformStringListAttribute extends TerraformListAttribute {
  public constructor(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value?: TerraformString[],
    options?: TerraformAttributeOptions
  ) {
    super(parent, terraformAttribute, value, options);
  }

  public get internalValue(): TerraformString[] | undefined {
    return this.realValue;
  }

  public get(index: number): TerraformStringAttribute {
    return new TerraformStringAttribute(this, index.toString());
  }

  public static construct(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value: TerraformStringList | undefined
  ) {
    if (!(value instanceof TerraformStringListAttribute)) {
      return new TerraformStringListAttribute(
        parent,
        terraformAttribute,
        value
      );
    } else if (value.terraformParent === parent) {
      return value;
    } else {
      return new TerraformStringListAttribute(
        parent,
        terraformAttribute,
        value.internalValue,
        { nested: value }
      );
    }
  }

  protected valueToTerraform() {
    return listMapper(stringToTerraform)(this.internalValue);
  }
}

export type TerraformStringList =
  | TerraformString[]
  | TerraformStringListAttribute;
