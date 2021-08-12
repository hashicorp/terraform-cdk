import {
  stringValue,
  terraformFunction,
  listOf,
  anyValue,
  numericValue,
} from "./_internals";

export class String {
  /**
   * {@link https://www.terraform.io/docs/language/functions/chomp.html chomp} removes newline characters at the end of a string.
   * @param {string} value
   */
  public static chomp = terraformFunction("chomp", [stringValue]);

  /**
   * {@link https://www.terraform.io/docs/language/functions/format.html format} produces a string by formatting a number of other values according to a specification string
   * @param {string} spec
   * @param {...any} values
   */
  public static format = terraformFunction("format", listOf(anyValue));

  /**
   * {@link https://www.terraform.io/docs/language/functions/indent.html formatlist} produces a list of strings by formatting a number of other values according to a specification string.
   * @param {string} spec
   * @param {...any} values
   */
  public static formatlist = terraformFunction("formatlist", listOf(anyValue));

  /**
   * {@link https://www.terraform.io/docs/language/functions/indent.html indent} adds a given number of spaces to the beginnings of all but the first line in a given multi-line string.
   * @param {number} indentation
   * @param {string} value
   */
  public static indent = terraformFunction("indent", [
    numericValue,
    stringValue,
  ]);

  /**
   * {@link https://www.terraform.io/docs/language/functions/join.html join} produces a string by concatenating together all elements of a given list of strings with the given delimiter.
   * @param {string} separator
   * @param {Array} value
   */
  public static join = terraformFunction("join", [
    stringValue,
    listOf(anyValue),
  ]);

  /**
   * {@link https://www.terraform.io/docs/language/functions/lower.html lower} converts all cased letters in the given string to lowercase.
   * @param {string} value
   */
  public static lower = terraformFunction("lower", [stringValue]);

  /**
   * {@link https://www.terraform.io/docs/language/functions/regexall.html regexall} applies a regular expression to a string and returns a list of all matches.
   * @param {string} pattern
   * @param {string} value
   */
  public static regexall = terraformFunction("regexall", [
    stringValue,
    stringValue,
  ]);

  /**
   * {@link https://www.terraform.io/docs/language/functions/split.html replace} searches a given string for another given substring, and replaces each occurrence with a given replacement string.
   * @param {string} value
   * @param {string} substring
   * @param {string} replacement
   */
  public static replace = terraformFunction("replace", [
    stringValue,
    stringValue,
    stringValue,
  ]);

  /**
   * {@link https://www.terraform.io/docs/language/functions/split.html split} produces a list by dividing a given string at all occurrences of a given separator.
   * @param {string} seperator
   * @param {string} value
   */
  public static split = terraformFunction("split", [stringValue, stringValue]);

  /**
   * {@link https://www.terraform.io/docs/language/functions/strrev.html strrev} reverses the characters in a string.
   * @param {string} value
   */
  public static strrev = terraformFunction("strrev", [stringValue]);

  /**
   * {@link https://www.terraform.io/docs/language/functions/substr.html substr} extracts a substring from a given string by offset and length.
   * @param {string} value
   * @param {number} offset
   * @param {number} length
   */
  public static substr = terraformFunction("substr", [
    stringValue,
    numericValue,
    numericValue,
  ]);

  /**
   * {@link https://www.terraform.io/docs/language/functions/title.html title} converts the first letter of each word in the given string to uppercase.
   * @param {string} value
   */
  public static title = terraformFunction("title", [stringValue]);

  /**
   * {@link https://www.terraform.io/docs/language/functions/trim.html trim} removes the specified characters from the start and end of the given string.
   * @param {string} value
   * @param {string} replacement
   */
  public static trim = terraformFunction("trim", [stringValue, stringValue]);

  /**
   * {@link https://www.terraform.io/docs/language/functions/trimprefix.html trimprefix} removes the specified prefix from the start of the given string.
   * @param {string} value
   * @param {string} prefix
   */
  public static trimprefix = terraformFunction("trimprefix", [
    stringValue,
    stringValue,
  ]);

  /**
   * {@link https://www.terraform.io/docs/language/functions/trimsuffix.html trimsuffix} removes the specified suffix from the end of the given string.
   * @param {string} value
   * @param {string} suffix
   */
  public static trimsuffix = terraformFunction("trimsuffix", [
    stringValue,
    stringValue,
  ]);

  /**
   * {@link https://www.terraform.io/docs/language/functions/trimspace.html trimspace} removes any space characters from the start and end of the given string.
   * @param {string} value
   */
  public static trimspace = terraformFunction("trimspace", [stringValue]);

  /**
   * {@link https://www.terraform.io/docs/language/functions/upper.html upper} converts all cased letters in the given string to uppercase.
   * @param {string} value
   */
  public static upper = terraformFunction("upper", [stringValue]);
}
