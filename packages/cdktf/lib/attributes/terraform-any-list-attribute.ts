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

  public get value(): TerraformAny[] | undefined {
    return this.realValue;
  }

  public get(index: number): TerraformAnyAttribute {
    return new TerraformAnyAttribute(this, index.toString());
  }

  public static create(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value: TerraformAnyList
  ) {
    if (!(value instanceof TerraformAnyListAttribute)) {
      return new TerraformAnyListAttribute(parent, terraformAttribute, value);
    } else if (value.parent === parent) {
      return value;
    } else {
      return new TerraformAnyListAttribute(
        parent,
        terraformAttribute,
        value.value,
        { nested: value }
      );
    }
  }

  protected valueToTerraform() {
    return listMapper(anyToTerraform)(this.value);
  }
}

export type TerraformAnyList = TerraformAny[] | TerraformAnyListAttribute;
