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

  public get value(): any | undefined {
    return this.realValue;
  }

  public getAttribute(attributeName: string): TerraformAnyAttribute {
    return new TerraformAnyAttribute(
      this,
      attributeName,
      this.value?.attributeName
    );
  }

  public static create(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value: TerraformAny | undefined
  ) {
    if (!(value instanceof TerraformAnyAttribute)) {
      return new TerraformAnyAttribute(parent, terraformAttribute, value);
    } else if (value.parent === parent) {
      return value;
    } else {
      return new TerraformAnyAttribute(
        parent,
        terraformAttribute,
        value.value,
        { nested: value }
      );
    }
  }

  protected valueToTerraform() {
    return anyToTerraform(this.value);
  }
}

export type TerraformAny = any | TerraformAnyAttribute;
