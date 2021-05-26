import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";
import { keysToSnakeCase, deepMerge } from "./util";
import { Token } from "./tokens";
import { ITerraformAddressable } from "./terraform-addressable";
import {
  TerraformStringAttribute,
  TerraformNumberAttribute,
  TerraformAnyListAttribute,
  TerraformStringListAttribute,
  TerraformBooleanAttribute,
  TerraformAnyAttribute,
} from "./attributes";

export abstract class VariableType {
  public static readonly STRING = "string";
  public static readonly NUMBER = "number";
  public static readonly BOOL = "bool";
  public static readonly ANY = "any";

  public static readonly LIST = "list";
  public static readonly MAP = "map";
  public static readonly SET = "set";

  public static readonly LIST_STRING = "list(string)";
  public static readonly LIST_NUMBER = "list(number)";
  public static readonly LIST_BOOL = "list(bool)";

  public static readonly MAP_STRING = "map(string)";
  public static readonly MAP_NUMBER = "map(number)";
  public static readonly MAP_BOOL = "map(bool)";

  public static readonly SET_STRING = "set(string)";
  public static readonly SET_NUMBER = "set(number)";
  public static readonly SET_BOOL = "set(bool)";

  public static list(type: string) {
    return `list(${type})`;
  }

  public static map(type: string) {
    return `map(${type})`;
  }

  public static set(type: string) {
    return `set(${type})`;
  }

  public static tuple(...elements: string[]) {
    return `tuple(${elements.join(", ")})`;
  }

  public static object(attributes: { [key: string]: string }) {
    return `object({${Object.keys(attributes)
      .map((k) => k + "=" + attributes[k])
      .join(", ")}})`;
  }
}

export interface TerraformVariableConfig {
  readonly default?: any;
  readonly description?: string;

  /**
   * The type argument in a variable block allows you to restrict the type of value that will be accepted as the value for a variable. If no type constraint is set then a value of any type is accepted.
   *
   * While type constraints are optional, we recommend specifying them; they serve as easy reminders for users of the module, and allow Terraform to return a helpful error message if the wrong type is used.
   *
   * Type constraints are created from a mixture of type keywords and type constructors. The supported type keywords are:
   *
   * - string
   * - number
   * - bool
   *
   * The type constructors allow you to specify complex types such as collections:
   *
   * - list(\<TYPE\>)
   * - set(\<TYPE\>)
   * - map(\<TYPE\>)
   * - object({\<ATTR NAME\> = \<TYPE\>, ... })
   * - tuple([\<TYPE\>, ...])
   *
   * The keyword any may be used to indicate that any type is acceptable. For more information on the meaning and behavior of these different types, as well as detailed information about automatic conversion of complex types, see {@link https://www.terraform.io/docs/configuration/types.html|Type Constraints}.
   *
   * If both the type and default arguments are specified, the given default value must be convertible to the specified type.
   */
  readonly type?: string;

  readonly sensitive?: boolean;
}

export class TerraformVariable
  extends TerraformElement
  implements ITerraformAddressable
{
  public readonly default?: any;
  public readonly description?: string;
  public readonly type?: string;

  constructor(scope: Construct, id: string, config: TerraformVariableConfig) {
    super(scope, id);

    this.default = config.default;
    this.description = config.description;
    this.type = config.type;
  }

  public get stringValue() {
    return new TerraformStringAttribute(this, "");
  }

  public get numberValue() {
    return new TerraformNumberAttribute(this, "");
  }

  public get listValue() {
    return new TerraformAnyListAttribute(this, "");
  }

  public get stringListValue() {
    return new TerraformStringListAttribute(this, "");
  }

  public get booleanValue() {
    return new TerraformBooleanAttribute(this, "");
  }

  public get value() {
    return new TerraformAnyAttribute(this, "");
  }

  public get fqn() {
    return `var.${this.friendlyUniqueId}`;
  }

  public synthesizeAttributes(): { [key: string]: any } {
    return {
      default: this.default,
      description: this.description,
      type: this.type,
    };
  }

  public toTerraform(): any {
    return {
      variable: {
        [this.friendlyUniqueId]: deepMerge(
          keysToSnakeCase(this.synthesizeAttributes()),
          this.rawOverrides
        ),
      },
    };
  }
}
