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

  public get value(): { [key: string]: TerraformString } | undefined {
    return this.realValue;
  }

  public get(key: string): TerraformStringAttribute {
    return new TerraformStringAttribute(this, `${key}`);
  }

  public static create(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value: TerraformStringMap | undefined
  ) {
    if (!(value instanceof TerraformStringMapAttribute)) {
      return new TerraformStringMapAttribute(parent, terraformAttribute, value);
    } else if (value.parent === parent) {
      return value;
    } else {
      return new TerraformStringMapAttribute(
        parent,
        terraformAttribute,
        value.value,
        { nested: value }
      );
    }
  }

  protected valueToTerraform() {
    return hashMapper(stringToTerraform)(this.value);
  }
}

export type TerraformStringMap =
  | { [key: string]: TerraformString }
  | TerraformStringMapAttribute;
