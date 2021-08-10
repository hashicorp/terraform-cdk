import { terraformFunction, listOf, anyValue } from "./_internals";

export const Type = {
  /**
   * {@link https://www.terraform.io/docs/language/functions/can.html can} evaluates the given expression and returns a boolean value indicating whether the expression produced a result without any errors.
   * @param {any} expression
   */
  can: terraformFunction("can", [anyValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/nonsensitive.html nonsensitive} takes a sensitive value and returns a copy of that value with the sensitive marking removed, thereby exposing the sensitive value.
   * @param {any} expression
   */
  nonsensitive: terraformFunction("nonsensitive", [anyValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/sensitive.html sensitive} takes any value and returns a copy of it marked so that Terraform will treat it as sensitive, with the same meaning and behavior as for sensitive input variables.
   * @param {any} expression
   */
  sensitive: terraformFunction("sensitive", [anyValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/tobool.html tobool} converts its argument to a boolean value.
   * @param {any} expression
   */
  tobool: terraformFunction("tobool", [anyValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/tolist.html tolist} converts its argument to a list value.
   * @param {any} expression
   */
  tolist: terraformFunction("tolist", [anyValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/tomap.html tomap} converts its argument to a map value.
   * @param {any} expression
   */
  tomap: terraformFunction("tomap", [anyValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/tonumber.html tonumber} converts its argument to a number value.
   * @param {any} expression
   */
  tonumber: terraformFunction("tonumber", [anyValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/toset.html toset} converts its argument to a set value.
   * @param {any} expression
   */
  toset: terraformFunction("toset", [anyValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/tostring.html tostring} converts its argument to a string value.
   * @param {any} expression
   */
  tostring: terraformFunction("tostring", [anyValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/try.html try} evaluates all of its argument expressions in turn and returns the result of the first one that does not produce any errors.
   * @param {...any} expression
   */
  try: terraformFunction("try", listOf(anyValue)),
};
