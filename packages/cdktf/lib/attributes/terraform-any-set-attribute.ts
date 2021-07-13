import { TerraformSetAttribute } from "./terraform-set-attribute";
import { TerraformAttributeOptions } from "./terraform-attribute";
import { setMapper, anyToTerraform } from "../runtime";
import { TerraformAny } from "./terraform-any-attribute";
import { ITerraformAddressable } from "../terraform-addressable";
import { TerraformAnyListAttribute } from "./terraform-any-list-attribute";

export class TerraformAnySetAttribute extends TerraformSetAttribute {
  public constructor(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value?: TerraformAny[] /* Set<T> isn't supported by jsii */,
    options?: TerraformAttributeOptions
  ) {
    super(parent, terraformAttribute, value, options);
  }

  public get internalValue():
    | TerraformAny[] /* Set<T> isn't supported by jsii */
    | undefined {
    return this.realValue;
  }

  public toList(): TerraformAnyListAttribute {
    return new TerraformAnyListAttribute(
      this.terraformParent,
      this.terraformAttribute,
      this.internalValue,
      { nested: this.nested, _operation: (fqn) => `tolist(${fqn})` }
    );
  }

  public static construct(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value: TerraformAnySet | undefined
  ) {
    if (!(value instanceof TerraformAnySetAttribute)) {
      return new TerraformAnySetAttribute(parent, terraformAttribute, value);
    } else if (value.terraformParent === parent) {
      return value;
    } else {
      return new TerraformAnySetAttribute(
        parent,
        terraformAttribute,
        value.internalValue,
        { nested: value }
      );
    }
  }

  protected valueToTerraform() {
    return setMapper(anyToTerraform)(this.internalValue);
  }
}

export type TerraformAnySet =
  | TerraformAny[] /* Set<T> isn't supported by jsii */
  | TerraformAnySetAttribute;
