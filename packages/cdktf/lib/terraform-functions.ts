// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { rawString, Token } from ".";
import { FnGenerated } from "./functions/terraform-functions.generated";

// eslint-disable-next-line jsdoc/require-jsdoc
export class Fn extends FnGenerated {
  /**
   * {@link https://www.terraform.io/docs/language/functions/join.html join} produces a string by concatenating together all elements of a given list of strings with the given delimiter.
   * @param {string} separator
   * @param {Array<string>} list
   */
  static join(separator: string, ...list: string[][]): string {
    // overwritten because join() supports passing multiple lists to it e.g. join(sep, listA, listB)
    // which we can't model as JSII does not support variadic arguments
    return Fn._join(separator, list);
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
