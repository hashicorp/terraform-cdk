import { TerraformSetAttribute } from "./terraform-set-attribute";
import { TerraformAttributeOptions } from "./terraform-attribute";
import { setMapper, booleanToTerraform } from "../runtime";
import { TerraformBoolean } from "./terraform-boolean-attribute";
import { ITerraformAddressable } from "../terraform-addressable";
import { TerraformBooleanListAttribute } from "./terraform-boolean-list-attribute";

export class TerraformBooleanSetAttribute extends TerraformSetAttribute {
  public constructor(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value?: TerraformBoolean[] /* Set<T> isn't supported by jsii */,
    options?: TerraformAttributeOptions
  ) {
    super(parent, terraformAttribute, value, options);
  }

  public get internalValue():
    | TerraformBoolean[] /* Set<T> isn't supported by jsii */
    | undefined {
    return this.realValue;
  }

  public toList(): TerraformBooleanListAttribute {
    return new TerraformBooleanListAttribute(
      this.terraformParent,
      this.terraformAttribute,
      this.internalValue,
      { nested: this.nested, _operation: (fqn) => `tolist(${fqn})` }
    );
  }

  public static construct(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value: TerraformBooleanSet | undefined
  ) {
    if (!(value instanceof TerraformBooleanSetAttribute)) {
      return new TerraformBooleanSetAttribute(
        parent,
        terraformAttribute,
        value
      );
    } else if (value.terraformParent === parent) {
      return value;
    } else {
      return new TerraformBooleanSetAttribute(
        parent,
        terraformAttribute,
        value.internalValue,
        { nested: value }
      );
    }
  }

  protected valueToTerraform() {
    return setMapper(booleanToTerraform)(this.internalValue);
  }
}

export type TerraformBooleanSet =
  | TerraformBoolean[] /* Set<T> isn't supported by jsii */
  | TerraformBooleanSetAttribute;
