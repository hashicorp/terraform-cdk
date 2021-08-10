import { terraformFunction, stringValue, anyValue } from "./_internals";

export const Encoding = {
  /**
   * {@link https://www.terraform.io/docs/language/functions/base64decode.html base64decode} takes a string containing a Base64 character sequence and returns the original string.
   * @param {string} value
   */
  base64decode: terraformFunction("base64decode", [stringValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/base64encode.html base64encode} takes a string containing a Base64 character sequence and returns the original string.
   * @param {string} value
   */
  base64encode: terraformFunction("base64encode", [stringValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/base64gzip.html base64gzip} compresses a string with gzip and then encodes the result in Base64 encoding.
   * @param {string} value
   */
  base64gzip: terraformFunction("base64gzip", [stringValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/csvdecode.html csvdecode} decodes a string containing CSV-formatted data and produces a list of maps representing that data.
   * @param {string} value
   */
  csvdecode: terraformFunction("csvdecode", [stringValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/jsondecode.html jsondecode} interprets a given string as JSON, returning a representation of the result of decoding that string.
   * @param {string} value
   */
  jsondecode: terraformFunction("jsondecode", [stringValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/jsonencode.html jsonencode} encodes a given value to a string using JSON syntax.
   * @param {any} value
   */
  jsonencode: terraformFunction("jsonencode", [anyValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/textdecodebase64.html textdecodebase64} function decodes a string that was previously Base64-encoded, and then interprets the result as characters in a specified character encoding.
   * @param {string} value
   * @param {string} encoding_name
   */
  textdecodebase64: terraformFunction("textdecodebase64", [
    stringValue,
    stringValue,
  ]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/textencodebase64.html textencodebase64} function decodes a string that was previously Base64-encoded, and then interprets the result as characters in a specified character encoding.
   * @param {string} value
   * @param {string} encoding_name
   */
  textencodebase64: terraformFunction("textencodebase64", [
    stringValue,
    stringValue,
  ]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/urlencode.html urlencode} applies URL encoding to a given string.
   * @param {string} value
   */
  urlencode: terraformFunction("urlencode", [stringValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/yamldecode.html yamldecode} applies URL encoding to a given string.
   * @param {string} value
   */
  yamldecode: terraformFunction("yamldecode", [stringValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/yamlencode.html yamlencode} encodes a given value to a string using JSON syntax.
   * @param {any} value
   */
  yamlencode: terraformFunction("yamlencode", [anyValue]),
};
