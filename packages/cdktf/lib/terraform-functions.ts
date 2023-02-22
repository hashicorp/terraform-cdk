// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { rawString, Token } from ".";
import { FnGenerated } from "./functions/terraform-functions.generated";

// eslint-disable-next-line jsdoc/require-jsdoc
export class Fn extends FnGenerated {
  /**
   * Use this function to wrap a string and escape it properly for the use in Terraform
   * This is only needed in certain scenarios (e.g., if you have unescaped double quotes in the string)
   * @param {String} str
   */
  public static rawString(str: string): string {
    return Token.asString(rawString(str));
  }
}
