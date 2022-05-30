import { TerraformStack } from ".";
import { ComplexList, ComplexMap } from "./complex-computed-list";
import { Fn } from "./terraform-functions";
import { propertyAccess, ref } from "./tfExpression";
import { Lazy, Token } from "./tokens";

export interface IIterator {
  /**
   * @internal used by TerraformResource to set the for_each expression
   */
  getForEachExpression(): any;
}

export abstract class Iterator implements IIterator {
  abstract getForEachExpression(): any;

  /**
   * Creates a new iterator from a list
   */
  public static fromList(
    list: string[] | number[] | ComplexList
  ): ListIterator {
    // TODO: this could return different iterators depending on the type of the list
    // for example it could return a NumberListIterator whose iterator.key would be a number
    return new ListIterator(list);
  }

  /**
   * Creates a new iterator from a map
   */
  public static fromMap(
    map:
      | ComplexMap
      | { [key: string]: any }
      | { [key: string]: string }
      | { [key: string]: number }
      | { [key: string]: boolean }
  ): MapIterator {
    return new MapIterator(map);
  }

  /**
   * @param attribute name of the property to retrieve
   * @returns the given attribute of the current item iterated over as a string
   */
  getString(attribute: string): string {
    return Token.asString(propertyAccess(this.value, [attribute]));
  }

  /**
   * @param attribute name of the property to retrieve
   * @returns the given attribute of the current item iterated over as a number
   */
  getNumber(attribute: string): number {
    return Token.asNumber(propertyAccess(this.value, [attribute]));
  }

  /**
   * @param attribute name of the property to retrieve
   * @returns the given attribute of the current item iterated over as a (string) list
   */
  getList(attribute: string): string[] {
    return Token.asList(propertyAccess(this.value, [attribute]));
  }

  /**
   * @param attribute name of the property to retrieve
   * @returns the given attribute of the current item iterated over as a number list
   */
  getNumberList(attribute: string): number[] {
    return Token.asNumberList(propertyAccess(this.value, [attribute]));
  }

  /**
   * @param attribute name of the property to retrieve
   * @returns the given attribute of the current item iterated over as a map
   */
  getMap(attribute: string): { [key: string]: any } {
    return Token.asAnyMap(propertyAccess(this.value, [attribute]));
  }

  /**
   * @param attribute name of the property to retrieve
   * @returns the given attribute of the current item iterated over as a map of strings
   */
  getStringMap(attribute: string): { [key: string]: string } {
    return Token.asStringMap(propertyAccess(this.value, [attribute]));
  }

  /**
   * @param attribute name of the property to retrieve
   * @returns the given attribute of the current item iterated over as a map of numbers
   */
  getNumberMap(attribute: string): { [key: string]: number } {
    return Token.asNumberMap(propertyAccess(this.value, [attribute]));
  }

  /**
   * @param attribute name of the property to retrieve
   * @returns the given attribute of the current item iterated over as a map of booleans
   */
  getBooleanMap(attribute: string): { [key: string]: boolean } {
    return Token.asBooleanMap(propertyAccess(this.value, [attribute]));
  }

  /**
   * Returns the value of the current item iterated over.
   */
  public get value(): any {
    return Lazy.anyValue(
      {
        produce: (context) =>
          ref("each.value", TerraformStack.of(context.scope)),
      },
      { displayHint: "each.value" }
    );
  }

  public get key(): any {
    return Lazy.anyValue(
      {
        produce: (context) => ref("each.key", TerraformStack.of(context.scope)),
      },
      { displayHint: "each.key" }
    );
  }
}

export class ListIterator extends Iterator {
  constructor(private readonly list: string[] | number[] | ComplexList) {
    super();
  }

  /**
   * Returns the currenty entry in the list or set that is being iterated over.
   * For lists this is the same as `iterator.value`. If you need the index,
   * use count using the escape hatch:
   * https://www.terraform.io/cdktf/concepts/providers-and-resources#escape-hatch
   */
  public get key(): any {
    return super.key;
  }

  /**
   * @internal used by TerraformResource to set the for_each expression
   */
  public getForEachExpression(): any {
    // needs to be wrapped in a set as Terraform only allows sets in for_each
    return Fn.toset(this.list);
  }
}

export class MapIterator extends Iterator {
  constructor(
    private readonly map:
      | ComplexMap
      | { [key: string]: any }
      | { [key: string]: string }
      | { [key: string]: number }
  ) {
    super();
  }

  /**
   * @internal used by TerraformResource to set the for_each expression
   */
  public getForEachExpression(): any {
    // explicit wrapping to circumvent "Found an encoded map token in a scalar string context." error
    return Token.asString(this.map);
  }

  /**
   * Returns the key of the current entry in the map that is being iterated over.
   */
  public get key(): string {
    return super.key;
  }
}
