// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  AnyMap,
  AnyMapList,
  BooleanMap,
  BooleanMapList,
  ComplexList,
  ComplexMap,
  NumberMap,
  NumberMapList,
  StringMap,
  StringMapList,
} from "./complex-computed-list";
import { TerraformDynamicExpression } from "./terraform-dynamic-expression";
import { Fn } from "./terraform-functions";
import {
  FOR_EXPRESSION_KEY,
  FOR_EXPRESSION_VALUE,
  propertyAccess,
  ref,
} from "./tfExpression";
import { IResolvable, Lazy, Token } from "./tokens";

export interface ITerraformIterator {
  /**
   * @internal used by TerraformResource to set the for_each expression
   */
  _getForEachExpression(): any;
}

type ListType =
  | Array<string>
  | Array<number>
  | Array<boolean | IResolvable>
  | IResolvable // e.g. array of booleans
  | ComplexList
  | StringMapList
  | NumberMapList
  | BooleanMapList
  | AnyMapList;

type MapType =
  | { [key: string]: any }
  | { [key: string]: string }
  | { [key: string]: number }
  | StringMap
  | NumberMap
  | BooleanMap
  | AnyMap
  | ComplexMap;

// eslint-disable-next-line jsdoc/require-jsdoc
export abstract class TerraformIterator implements ITerraformIterator {
  /**
   * @internal used by TerraformResource to set the for_each expression
   */
  abstract _getForEachExpression(): any;

  /**
   * Creates a new iterator from a list
   */
  public static fromList(list: ListType): ListTerraformIterator {
    // TODO: this could return different iterators depending on the type of the list
    // for example it could return a NumberListIterator whose iterator.key would be a number
    return new ListTerraformIterator(list);
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
  ): MapTerraformIterator {
    return new MapTerraformIterator(map);
  }

  /**
   * @param attribute name of the property to retrieve
   * @returns the given attribute of the current item iterated over as a string
   */
  getString(attribute: string): string {
    return Token.asString(propertyAccess(this._getValue(), [attribute]));
  }

  /**
   * @param attribute name of the property to retrieve
   * @returns the given attribute of the current item iterated over as a number
   */
  getNumber(attribute: string): number {
    return Token.asNumber(propertyAccess(this._getValue(), [attribute]));
  }

  /**
   * @param attribute name of the property to retrieve
   * @returns the given attribute of the current item iterated over as a boolean
   */
  getBoolean(attribute: string): IResolvable {
    return Token.asAny(propertyAccess(this._getValue(), [attribute]));
  }

  /**
   * @param attribute name of the property to retrieve
   * @returns the given attribute of the current item iterated over as any
   */
  getAny(attribute: string): IResolvable {
    return Token.asAny(propertyAccess(this._getValue(), [attribute]));
  }

  /**
   * @param attribute name of the property to retrieve
   * @returns the given attribute of the current item iterated over as a (string) list
   */
  getList(attribute: string): string[] {
    return Token.asList(propertyAccess(this._getValue(), [attribute]));
  }

  /**
   * @param attribute name of the property to retrieve
   * @returns the given attribute of the current item iterated over as a number list
   */
  getNumberList(attribute: string): number[] {
    return Token.asNumberList(propertyAccess(this._getValue(), [attribute]));
  }

  /**
   * @param attribute name of the property to retrieve
   * @returns the given attribute of the current item iterated over as a map
   */
  getMap(attribute: string): { [key: string]: any } {
    return Token.asAnyMap(propertyAccess(this._getValue(), [attribute]));
  }

  /**
   * @param attribute name of the property to retrieve
   * @returns the given attribute of the current item iterated over as a map of strings
   */
  getStringMap(attribute: string): { [key: string]: string } {
    return Token.asStringMap(propertyAccess(this._getValue(), [attribute]));
  }

  /**
   * @param attribute name of the property to retrieve
   * @returns the given attribute of the current item iterated over as a map of numbers
   */
  getNumberMap(attribute: string): { [key: string]: number } {
    return Token.asNumberMap(propertyAccess(this._getValue(), [attribute]));
  }

  /**
   * @param attribute name of the property to retrieve
   * @returns the given attribute of the current item iterated over as a map of booleans
   */
  getBooleanMap(attribute: string): { [key: string]: boolean } {
    return Token.asBooleanMap(propertyAccess(this._getValue(), [attribute]));
  }

  /**
   * @param attribute name of the property to retrieve
   * @returns the given attribute of the current item iterated over as a map of any
   */
  getAnyMap(attribute: string): { [key: string]: any } {
    return Token.asAnyMap(propertyAccess(this._getValue(), [attribute]));
  }

  /**
   * @internal
   */
  protected _getValue(): any {
    // uses a Lazy value to be able to access the current TerraformStack and pass it to ref()
    return Lazy.anyValue(
      {
        produce: (context) => {
          switch (context.iteratorContext) {
            case "DYNAMIC_BLOCK":
              return ref("each.value");
            case "FOR_EXPRESSION":
              return FOR_EXPRESSION_VALUE;
            default:
              // same as dynamic block, as this is the case when a iterator is passed to the root level of e.g. a resource
              return ref("each.value");
          }
        },
      },
      { displayHint: "<iterator value>" }
    );
  }

  /**
   * @internal
   */
  protected _getKey(): any {
    // uses a Lazy value to be able to access the current TerraformStack and pass it to ref()
    return Lazy.anyValue(
      {
        produce: (context) => {
          switch (context.iteratorContext) {
            case "DYNAMIC_BLOCK":
              return ref("each.key");
            case "FOR_EXPRESSION":
              return FOR_EXPRESSION_KEY;
            default:
              // same as dynamic block, as this is the case when a iterator is passed to the root level of e.g. a resource
              return ref("each.key");
          }
        },
      },
      { displayHint: "<iterator key>" }
    );
  }

  public dynamic(attributes: { [key: string]: any }): IResolvable {
    return Token.asAny(
      new TerraformDynamicExpression({
        iterator: this,
        content: attributes,
      })
    );
  }
}

// eslint-disable-next-line jsdoc/require-jsdoc
export class ListTerraformIterator extends TerraformIterator {
  constructor(private readonly list: ListType) {
    super();
  }

  /**
   * Returns the currenty entry in the list or set that is being iterated over.
   * For lists this is the same as `iterator.value`. If you need the index,
   * use count using the escape hatch:
   * https://www.terraform.io/cdktf/concepts/resources#escape-hatch
   */
  public get key(): any {
    return this._getKey();
  }

  /**
   * Returns the value of the current item iterated over.
   */
  public get value(): any {
    return this._getValue();
  }

  /**
   * @internal used by TerraformResource to set the for_each expression
   */
  public _getForEachExpression(): any {
    // needs to be wrapped in a set as Terraform only allows sets in for_each
    return Fn.toset(this.list);
  }
}

// eslint-disable-next-line jsdoc/require-jsdoc
export class MapTerraformIterator extends TerraformIterator {
  constructor(private readonly map: MapType) {
    super();
  }

  /**
   * @internal used by TerraformResource to set the for_each expression
   */
  public _getForEachExpression(): any {
    // explicit wrapping to circumvent "Found an encoded map token in a scalar string context." error
    return Token.asString(this.map);
  }

  /**
   * Returns the key of the current entry in the map that is being iterated over.
   */
  public get key(): string {
    return Token.asString(this._getKey());
  }

  /**
   * Returns the value of the current item iterated over.
   */
  public get value(): any {
    return this._getValue();
  }
}
