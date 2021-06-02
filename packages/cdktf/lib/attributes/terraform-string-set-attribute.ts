import { TerraformSetAttribute } from "./terraform-set-attribute";
import { TerraformAttributeOptions } from "./terraform-attribute";
import { setMapper, stringToTerraform } from "../runtime";
import { TerraformString } from "./terraform-string-attribute";
import { ITerraformAddressable } from "../terraform-addressable";
import { TerraformStringListAttribute } from "./terraform-string-list-attribute";

export class TerraformStringSetAttribute extends TerraformSetAttribute {
  public constructor(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value?: TerraformString[] /* Set<T> isn't supported by jsii */,
    options?: TerraformAttributeOptions
  ) {
    super(parent, terraformAttribute, value, options);
  }

  public get value():
    | TerraformString[] /* Set<T> isn't supported by jsii */
    | undefined {
    return this.realValue;
  }

  public toList(): TerraformStringListAttribute {
    return new TerraformStringListAttribute(
      this.parent,
      this.attribute,
      this.value,
      { nested: this.nested, _operation: (fqn) => `tolist(${fqn})` }
    );
  }

  public static create(
    parent: ITerraformAddressable,
    terraformAttribute: string,
    value: TerraformStringSet | undefined
  ) {
    if (!(value instanceof TerraformStringSetAttribute)) {
      return new TerraformStringSetAttribute(parent, terraformAttribute, value);
    } else if (value.parent === parent) {
      return value;
    } else {
      return new TerraformStringSetAttribute(
        parent,
        terraformAttribute,
        value.value,
        { nested: value }
      );
    }
  }

  protected valueToTerraform() {
    return setMapper(stringToTerraform)(this.value);
  }
}

export type TerraformStringSet =
  | TerraformString[] /* Set<T> isn't supported by jsii */
  | TerraformStringSetAttribute;
