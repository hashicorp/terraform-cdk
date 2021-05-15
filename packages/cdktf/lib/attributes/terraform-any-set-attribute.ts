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

  public get value():
    | TerraformAny[] /* Set<T> isn't supported by jsii */
    | undefined {
    return this.realValue;
  }

  public toList(): TerraformAnyListAttribute {
    return new TerraformAnyListAttribute(
      this.parent,
      this.attribute,
      this.value,
      { nested: this.nested, _operation: (fqn) => `tolist(${fqn})` }
    );
  }

  public static create(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value: TerraformAnySet
  ) {
    if (!(value instanceof TerraformAnySetAttribute)) {
      return new TerraformAnySetAttribute(parent, terraformAttribute, value);
    } else if (value.parent === parent) {
      return value;
    } else {
      return new TerraformAnySetAttribute(
        parent,
        terraformAttribute,
        value.value,
        { nested: value }
      );
    }
  }

  protected valueToTerraform() {
    return setMapper(anyToTerraform)(this.value);
  }
}

export type TerraformAnySet =
  | TerraformAny[] /* Set<T> isn't supported by jsii */
  | TerraformAnySetAttribute;
