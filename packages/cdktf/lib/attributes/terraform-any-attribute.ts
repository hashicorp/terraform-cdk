import {
  TerraformAttribute,
  TerraformAttributeOptions,
} from "./terraform-attribute";
import { ITerraformAddressable } from "../terraform-addressable";
import { anyToTerraform } from "../runtime";

export class TerraformAnyAttribute
  extends TerraformAttribute
  implements ITerraformAddressable
{
  public constructor(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value?: any,
    options?: TerraformAttributeOptions
  ) {
    super(parent, terraformAttribute, value, options);
  }

  public get internalValue(): any | undefined {
    return this.realValue;
  }

  public getAttribute(attributeName: string): TerraformAnyAttribute {
    return new TerraformAnyAttribute(
      this,
      attributeName,
      this.internalValue?.attributeName
    );
  }

  public static construct(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value: TerraformAny | undefined
  ) {
    if (!(value instanceof TerraformAnyAttribute)) {
      return new TerraformAnyAttribute(parent, terraformAttribute, value);
    } else if (value.terraformParent === parent) {
      return value;
    } else {
      return new TerraformAnyAttribute(
        parent,
        terraformAttribute,
        value.internalValue,
        { nested: value }
      );
    }
  }

  protected valueToTerraform() {
    return anyToTerraform(this.internalValue);
  }
}

export type TerraformAny = any | TerraformAnyAttribute;
