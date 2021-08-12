import {
  terraformFunction,
  numericValue,
  listOf,
  stringValue,
} from "./_internals";

export class Numeric {
  /**
   * {@link https://www.terraform.io/docs/language/functions/abs.html abs} returns the absolute value of the given number
   * @param {number} value
   */
  public static abs = terraformFunction("abs", [numericValue]);

  /**
   * {@link https://www.terraform.io/docs/language/functions/ceil.html ceil} returns the closest whole number that is greater than or equal to the given value, which may be a fraction.
   * @param {number} value
   */
  public static ceil = terraformFunction("ceil", [numericValue]);

  /**
   * {@link https://www.terraform.io/docs/language/functions/floor.html floor} returns the closest whole number that is less than or equal to the given value, which may be a fraction
   * @param {number} value
   */
  public static floor = terraformFunction("floor", [numericValue]);

  /**
   * {@link https://www.terraform.io/docs/language/functions/max.html log} returns the logarithm of a given number in a given base.
   * @param {number} value
   * @param {number} base
   */
  public static log = terraformFunction("log", [numericValue, numericValue]);

  /**
   * {@link https://www.terraform.io/docs/language/functions/max.html max} takes one or more numbers and returns the greatest number from the set.
   * @param {...number} values
   */
  public static max = terraformFunction("max", listOf(numericValue));

  /**
   * {@link https://www.terraform.io/docs/language/functions/min.html min} takes one or more numbers and returns the smallest number from the set.
   * @param {...number} values
   */
  public static min = terraformFunction("min", listOf(numericValue));

  /**
   * {@link https://www.terraform.io/docs/language/functions/parseint.html parseInt} parses the given string as a representation of an integer in the specified base and returns the resulting number. The base must be between 2 and 62 inclusive.
   * @param {string} value
   * @param {number} base
   */
  public static parseInt = terraformFunction("parseInt", [
    stringValue,
    numericValue,
  ]);

  /**
   * {@link https://www.terraform.io/docs/language/functions/pow.html pow} calculates an exponent, by raising its first argument to the power of the second argument.
   * @param {number} value
   * @param {number} power
   */
  public static pow = terraformFunction("pow", [numericValue, numericValue]);

  /**
   * {@link https://www.terraform.io/docs/language/functions/signum.html signum} determines the sign of a number, returning a number between -1 and 1 to represent the sign.
   * @param {number} value
   */
  public static signum = terraformFunction("signum", [numericValue]);
}
