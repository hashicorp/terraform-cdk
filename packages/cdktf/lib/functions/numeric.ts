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
  public static abs(value: number) {
    return terraformFunction("abs", [numericValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/ceil.html ceil} returns the closest whole number that is greater than or equal to the given value, which may be a fraction.
   * @param {number} value
   */
  public static ceil(value: number) {
    return terraformFunction("ceil", [numericValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/floor.html floor} returns the closest whole number that is less than or equal to the given value, which may be a fraction
   * @param {number} value
   */
  public static floor(value: number) {
    return terraformFunction("floor", [numericValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/max.html log} returns the logarithm of a given number in a given base.
   * @param {number} value
   * @param {number} base
   */
  public static log(value: number, base: number) {
    return terraformFunction("log", [numericValue, numericValue])(value, base);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/max.html max} takes one or more numbers and returns the greatest number from the set.
   * @param {...number} values
   */
  public static max(...values: number[]) {
    return terraformFunction("max", listOf(numericValue))(...values);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/min.html min} takes one or more numbers and returns the smallest number from the set.
   * @param {...number} values
   */
  public static min(...values: number[]) {
    return terraformFunction("min", listOf(numericValue))(...values);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/parseint.html parseInt} parses the given string as a representation of an integer in the specified base and returns the resulting number. The base must be between 2 and 62 inclusive.
   * @param {string} value
   * @param {number} base
   */
  public static parseInt(value: string, base: number) {
    return terraformFunction("parseInt", [stringValue, numericValue])(
      value,
      base
    );
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/pow.html pow} calculates an exponent, by raising its first argument to the power of the second argument.
   * @param {number} value
   * @param {number} power
   */
  public static pow(value: number, power: number) {
    return terraformFunction("pow", [numericValue, numericValue])(value, power);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/signum.html signum} determines the sign of a number, returning a number between -1 and 1 to represent the sign.
   * @param {number} value
   */
  public static signum(value: number) {
    return terraformFunction("signum", [numericValue])(value);
  }
}
