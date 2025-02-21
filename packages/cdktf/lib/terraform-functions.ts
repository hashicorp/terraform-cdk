// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { conditional, Expression, propertyAccess, rawString, Token } from ".";
import { asAny } from "./functions/helpers";
import { FnGenerated } from "./functions/terraform-functions.generated";

// eslint-disable-next-line jsdoc/require-jsdoc
export class Fn extends FnGenerated {
  /**
   * {@link /terraform/docs/language/functions/bcrypt.html bcrypt} computes a hash of the given string using the Blowfish cipher, returning a string in [the _Modular Crypt Format_](https://passlib.readthedocs.io/en/stable/modular_crypt_format.html) usually expected in the shadow password file on many Unix systems.
   * @param {string} str
   * @param {number} [cost]
   */
  static bcrypt(str: string, cost?: number): string {
    // overwritten because bcrypt() only supports a single variadic parameter and not multiple
    // There is currently nothing in the schema that represents this runtime check:
    // https://github.com/hashicorp/terraform/blob/6ab3faf5f65a90ae1e5bd0625fa9e83c0b34c5e1/internal/lang/funcs/crypto.go#L115-L117
    return Fn._bcrypt(str, cost ? [cost] : []);
  }

  /**
   * {@link https://developer.hashicorp.com/terraform/language/expressions/conditionals} A conditional expression uses the value of a boolean expression to select one of two values.
   * @param {Expression} condition
   * @param {Expression} trueValue
   * @param {Expression} falseValue
   */
  static conditional(
    condition: Expression,
    trueValue: Expression,
    falseValue: Expression,
  ): any {
    return conditional(condition, trueValue, falseValue);
  }

  /**
   * {@link /terraform/docs/language/functions/lookup.html lookup} retrieves the value of a single element from a map, given its key. If the given key does not exist, the given default value is returned instead.
   * @param {any} inputMap
   * @param {string} key
   * @param {any} [defaultValue]
   */
  static lookup(inputMap: any, key: string, defaultValue?: any) {
    // overwritten because lookup() uses a variadic argument for its optional defaultValue
    if (defaultValue) return Fn._lookup(inputMap, key, [defaultValue]);
    return asAny(propertyAccess(inputMap, [key])); // -> renders inputMap[key] (which is recommended if no default value is given)
  }

  /**
   * returns a property access expression that accesses the property at the given path in the given inputMap.
   * For example lookupNested(x, ["a", "b", "c"]) will return a Terraform expression like x["a"]["b"]["c"]
   * @param {any} inputMap
   * @param {Array<any>} path
   */
  static lookupNested(inputMap: any, path: any[]) {
    return asAny(propertyAccess(inputMap, path));
  }

  /**
   * {@link /terraform/docs/language/functions/join.html join} produces a string by concatenating together all elements of a given list of strings with the given delimiter.
   * @param {string} separator
   * @param {Array<string>} list
   */
  static join(separator: string, list: string[]): string {
    // overwritten because join() supports passing multiple lists to it e.g. join(sep, listA, listB)
    // which we can't model as JSII does not support variadic arguments
    return Fn._join(separator, [list]);
  }

  /**
   * {@link /terraform/docs/language/functions/range.html range} generates a list of numbers using a start value, a limit value, and a step value.
   * @param {number} start
   * @param {number} limit
   * @param {number} [step=1]
   */
  public static range(start: number, limit: number, step = 1) {
    // overwritten because the step param in range() is optional which
    // the Terraform functions schema represents as a single variadic argument
    return Fn._range([start, limit, step]);
  }

  /**
   * Use this function to wrap a string and escape it properly for the use in Terraform
   * This is only needed in certain scenarios (e.g., if you have unescaped double quotes in the string)
   * @param {String} str
   */
  static rawString(str: string): string {
    return Token.asString(rawString(str));
  }
}
