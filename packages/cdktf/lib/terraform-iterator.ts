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
import {
  iteratorOnResourceWithCount,
  iteratorOnResourceWithoutForEach,
} from "./errors";
import { TerraformDynamicExpression } from "./terraform-dynamic-expression";
import { Fn } from "./terraform-functions";
import { ITerraformResource } from "./terraform-resource";
import {
  FOR_EXPRESSION_KEY,
  FOR_EXPRESSION_VALUE,
  forExpression,
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
  | IResolvable; // e.g. array of booleans

type ComplexListType =
  | ComplexList
  | StringMapList
  | NumberMapList
  | BooleanMapList
  | AnyMapList
  | IResolvable; // e.g. a reference to a complex list (e.g. via a variable)

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
   * Creates a new iterator from a complex list. One example for this would be a list of maps.
   * The list will be converted into a map with the mapKeyAttributeName as the key.
   * @param list the list to iterate over
   * @param mapKeyAttributeName the name of the attribute that should be used as the key in the map
   *
   * Visit https://developer.hashicorp.com/terraform/cdktf/concepts/iterators#using-iterators-on-complex-lists for more information.
   *
   * @example
   * const cert = new AcmCertificate(this, "cert", {
   *    domainName: "example.com",
   *    validationMethod: "DNS",
   *  });
   *
   * const dvoIterator = TerraformIterator.fromComplexList(
   *   cert.domainValidationOptions,
   *   "domain_name"
   * );
   *
   * new Route53Record(this, "record", {
   *   allowOverwrite: true,
   *   name: dvoIterator.getString("name"),
   *   records: [dvoIterator.getString("record")],
   *   ttl: 60,
   *   type: dvoIterator.getString("type"),
   *   zoneId: Token.asString(dataAwsRoute53ZoneExample.zoneId),
   *   forEach: dvoIterator,
   * });
   */
  public static fromComplexList(
    list: ComplexListType,
    mapKeyAttributeName: string,
  ): DynamicListTerraformIterator {
    return new DynamicListTerraformIterator(list, mapKeyAttributeName);
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
      | { [key: string]: boolean },
  ): MapTerraformIterator {
    return new MapTerraformIterator(map);
  }

  /**
   * Creates a new iterator from a resource that
   * has been created with the `for_each` argument.
   */
  public static fromResources(
    resource: ITerraformResource,
  ): ResourceTerraformIterator {
    return new ResourceTerraformIterator(resource);
  }

  /**
   * Creates a new iterator from a data source that
   * has been created with the `for_each` argument.
   */
  public static fromDataSources(
    resource: ITerraformResource,
  ): ResourceTerraformIterator {
    return new ResourceTerraformIterator(resource);
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
      { displayHint: "<iterator value>" },
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
      { displayHint: "<iterator key>" },
    );
  }

  /**
   * Creates a dynamic expression that can be used to loop over this iterator
   * in a dynamic block.
   * As this returns an IResolvable you might need to wrap the output in
   * a Token, e.g. `Token.asString`.
   * See https://developer.hashicorp.com/terraform/cdktf/concepts/iterators#using-iterators-for-list-attributes
   */
  public dynamic(attributes: { [key: string]: any }): IResolvable {
    return Token.asAny(
      new TerraformDynamicExpression({
        iterator: this,
        content: attributes,
      }),
    );
  }

  /**
   * Creates a for expression that maps the iterators to its keys.
   * For lists these would be the indices, for maps the keys.
   * As this returns an IResolvable you might need to wrap the output in
   * a Token, e.g. `Token.asString`.
   */
  public keys(): IResolvable {
    return Token.asAny(
      forExpression(this._getForEachExpression(), FOR_EXPRESSION_KEY),
    );
  }

  /**
   * Creates a for expression that maps the iterators to its value in case it is a map.
   * For lists these would stay the same.
   * As this returns an IResolvable you might need to wrap the output in
   * a Token, e.g. `Token.asString`.
   */
  public values(): IResolvable {
    return Token.asAny(
      forExpression(this._getForEachExpression(), FOR_EXPRESSION_VALUE),
    );
  }

  /**
   * Creates a for expression that accesses the key on each element of the iterator.
   * As this returns an IResolvable you might need to wrap the output in
   * a Token, e.g. `Token.asString`.
   * @param property The property of the iterators values to map to
   */
  public pluckProperty(property: string): IResolvable {
    return Token.asAny(
      forExpression(
        this._getForEachExpression(),
        propertyAccess(FOR_EXPRESSION_VALUE, [property]),
      ),
    );
  }

  /**
   * Creates a for expression that results in a list.
   * This method allows you to create every possible for expression, but requires more knowledge about
   * Terraform's for expression syntax.
   * For the most common use cases you can use keys(), values(), and pluckProperty() instead.
   *
   * You may write any valid Terraform for each expression, e.g.
   * `TerraformIterator.fromList(myIteratorSourceVar).forExpressionForList("val.foo if val.bar == true")`
   * will result in `[ for key, val in var.myIteratorSource: val.foo if val.bar == true ]`.
   *
   * As this returns an IResolvable you might need to wrap the output in
   * a Token, e.g. `Token.asString`.
   * @param expression The expression to use in the for mapping
   */
  public forExpressionForList(expression: string | IResolvable) {
    return Token.asAny(forExpression(this._getForEachExpression(), expression));
  }

  /**
   * Creates a for expression that results in a map.
   * This method allows you to create every possible for expression, but requires more knowledge about
   * Terraforms for expression syntax.
   * For the most common use cases you can use keys(), values(), and pluckProperty instead.
   *
   * You may write any valid Terraform for each expression, e.g.
   * `TerraformIterator.fromMap(myIteratorSourceVar).forExpressionForMap("key", "val.foo if val.bar == true")`
   * will result in `{ for key, val in var.myIteratorSource: key => val.foo if val.bar == true }`.
   *
   * As this returns an IResolvable you might need to wrap the output in
   * a Token, e.g. `Token.asString`.
   * @param keyExpression The expression to use as key in the for mapping
   * @param valueExpression The expression to use as value in the for mapping
   */
  public forExpressionForMap(
    keyExpression: string | IResolvable,
    valueExpression: string | IResolvable,
  ) {
    return Token.asAny(
      forExpression(
        this._getForEachExpression(),
        valueExpression,
        keyExpression,
      ),
    );
  }
}

// eslint-disable-next-line jsdoc/require-jsdoc
export class ListTerraformIterator extends TerraformIterator {
  constructor(private readonly list: ListType) {
    super();
  }

  /**
   * Returns the currently entry in the list or set that is being iterated over.
   * For lists this is the same as `iterator.value`. If you need the index,
   * use count via `TerraformCount`:
   * https://developer.hashicorp.com/terraform/cdktf/concepts/iterators#using-count
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

// eslint-disable-next-line jsdoc/require-jsdoc
export class ResourceTerraformIterator extends TerraformIterator {
  constructor(private readonly element: ITerraformResource) {
    super();

    if (element.count) {
      throw iteratorOnResourceWithCount();
    }

    if (!element.forEach) {
      throw iteratorOnResourceWithoutForEach();
    }
  }

  /**
   * Returns the current entry in the list or set that is being iterated over.
   * For lists this is the same as `iterator.value`. If you need the index,
   * use count via `TerraformCount`:
   * https://developer.hashicorp.com/terraform/cdktf/concepts/iterators#using-count
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
    return this.element.fqn; // no wrapping necessary for resources
  }
}

// eslint-disable-next-line jsdoc/require-jsdoc
export class DynamicListTerraformIterator extends MapTerraformIterator {
  constructor(
    private readonly list: ListType,
    private readonly mapKeyAttributeName: string,
  ) {
    super(list);
  }

  /**
   * @internal used by TerraformResource to set the for_each expression
   */
  public _getForEachExpression(): any {
    // uses a Lazy value to be able to render a conversion into a map in the context of a TerraformResource
    return Lazy.anyValue(
      {
        produce: (context) => {
          switch (context.iteratorContext) {
            case "FOR_EXPRESSION":
              return this.list;
            case "DYNAMIC_BLOCK": // fallthrough
            default: // same as dynamic block, as this is the case when a iterator is passed to the root level of e.g. a resource
              // Turn list into a map
              // { for k,v in <input> : <keyExpression> => <valueExpression>}
              return forExpression(
                this.list, // input
                FOR_EXPRESSION_VALUE, // valueExpression
                Fn.lookupNested(FOR_EXPRESSION_VALUE, [
                  this.mapKeyAttributeName,
                ]), // keyExpression
              );
          }
        },
      },
      { displayHint: "<iterator value>" },
    );
  }
}
