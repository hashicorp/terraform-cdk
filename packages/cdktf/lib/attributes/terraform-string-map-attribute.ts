import { TerraformAttributeOptions } from "./terraform-attribute";
import { hashMapper, stringToTerraform } from "../runtime";
import { TerraformMapAttribute } from "./terraform-map-attribute";
import {
  TerraformString,
  TerraformStringAttribute,
} from "./terraform-string-attribute";
import { ITerraformAddressable } from "../terraform-addressable";

export class TerraformStringMapAttribute extends TerraformMapAttribute {
  public constructor(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value?: { [key: string]: TerraformString },
    options?: TerraformAttributeOptions
  ) {
    super(parent, terraformAttribute, value, options);
  }

  public get internalValue(): { [key: string]: TerraformString } | undefined {
    return this.realValue;
  }

  public get(key: string): TerraformStringAttribute {
    return new TerraformStringAttribute(this, `${key}`);
  }

  public static construct(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value: TerraformStringMap | undefined
  ) {
    if (!(value instanceof TerraformStringMapAttribute)) {
      return new TerraformStringMapAttribute(parent, terraformAttribute, value);
    } else if (value.terraformParent === parent) {
      return value;
    } else {
      return new TerraformStringMapAttribute(
        parent,
        terraformAttribute,
        value.internalValue,
        { nested: value }
      );
    }
  }

  protected valueToTerraform() {
    return hashMapper(stringToTerraform)(this.internalValue);
  }
}

export type TerraformStringMap =
  | { [key: string]: TerraformString }
  | TerraformStringMapAttribute;
