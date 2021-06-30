import { TerraformSetAttribute } from "./terraform-set-attribute";
import { TerraformAttributeOptions } from "./terraform-attribute";
import { setMapper, numberToTerraform } from "../runtime";
import { TerraformNumber } from "./terraform-number-attribute";
import { ITerraformAddressable } from "../terraform-addressable";
import { TerraformNumberListAttribute } from "./terraform-number-list-attribute";

export class TerraformNumberSetAttribute extends TerraformSetAttribute {
  public constructor(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value?: TerraformNumber[] /* Set<T> isn't supported by jsii */,
    options?: TerraformAttributeOptions
  ) {
    super(parent, terraformAttribute, value, options);
  }

  public get internalValue():
    | TerraformNumber[] /* Set<T> isn't supported by jsii */
    | undefined {
    return this.realValue;
  }

  public toList(): TerraformNumberListAttribute {
    return new TerraformNumberListAttribute(
      this.terraformParent,
      this.terraformAttribute,
      this.internalValue,
      { nested: this.nested, _operation: (fqn) => `tolist(${fqn})` }
    );
  }

  public static construct(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value: TerraformNumberSet | undefined
  ) {
    if (!(value instanceof TerraformNumberSetAttribute)) {
      return new TerraformNumberSetAttribute(parent, terraformAttribute, value);
    } else if (value.terraformParent === parent) {
      return value;
    } else {
      return new TerraformNumberSetAttribute(
        parent,
        terraformAttribute,
        value.internalValue,
        { nested: value }
      );
    }
  }

  protected valueToTerraform() {
    return setMapper(numberToTerraform)(this.internalValue);
  }
}

export type TerraformNumberSet =
  | TerraformNumber[] /* Set<T> isn't supported by jsii */
  | TerraformNumberSetAttribute;
