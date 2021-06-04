import { TerraformListAttribute } from "./terraform-list-attribute";
import { TerraformAttributeOptions } from "./terraform-attribute";
import { listMapper, anyToTerraform } from "../runtime";
import { TerraformAny, TerraformAnyAttribute } from "./terraform-any-attribute";
import { ITerraformAddressable } from "../terraform-addressable";

export class TerraformAnyListAttribute extends TerraformListAttribute {
  public constructor(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value?: TerraformAny[],
    options?: TerraformAttributeOptions
  ) {
    super(parent, terraformAttribute, value, options);
  }

  public get internalValue(): TerraformAny[] | undefined {
    return this.realValue;
  }

  public get(index: number): TerraformAnyAttribute {
    return new TerraformAnyAttribute(this, index.toString());
  }

  public static construct(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value: TerraformAnyList | undefined
  ) {
    if (!(value instanceof TerraformAnyListAttribute)) {
      return new TerraformAnyListAttribute(parent, terraformAttribute, value);
    } else if (value.terraformParent === parent) {
      return value;
    } else {
      return new TerraformAnyListAttribute(
        parent,
        terraformAttribute,
        value.internalValue,
        { nested: value }
      );
    }
  }

  protected valueToTerraform() {
    return listMapper(anyToTerraform)(this.internalValue);
  }
}

export type TerraformAnyList = TerraformAny[] | TerraformAnyListAttribute;
