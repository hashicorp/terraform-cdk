import { TerraformAttributeOptions } from "./terraform-attribute";
import { hashMapper, anyToTerraform } from "../runtime";
import { TerraformMapAttribute } from "./terraform-map-attribute";
import { TerraformAny, TerraformAnyAttribute } from "./terraform-any-attribute";
import { ITerraformAddressable } from "../terraform-addressable";

export class TerraformAnyMapAttribute extends TerraformMapAttribute {
  public constructor(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value?: { [key: string]: TerraformAny },
    options?: TerraformAttributeOptions
  ) {
    super(parent, terraformAttribute, value, options);
  }

  public get internalValue(): { [key: string]: TerraformAny } | undefined {
    return this.realValue;
  }

  public get(key: string): TerraformAnyAttribute {
    return new TerraformAnyAttribute(this, `${key}`);
  }

  public static construct(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value: TerraformAnyMap | undefined
  ) {
    if (!(value instanceof TerraformAnyMapAttribute)) {
      return new TerraformAnyMapAttribute(parent, terraformAttribute, value);
    } else if (value.terraformParent === parent) {
      return value;
    } else {
      return new TerraformAnyMapAttribute(
        parent,
        terraformAttribute,
        value.internalValue,
        { nested: value }
      );
    }
  }

  protected valueToTerraform() {
    return hashMapper(anyToTerraform)(this.internalValue);
  }
}

export type TerraformAnyMap =
  | { [key: string]: TerraformAny }
  | TerraformAnyMapAttribute;
