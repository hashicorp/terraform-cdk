import { terraformFunction, stringValue, anyValue } from "./_internals";

export class Encoding {
  /**
   * {@link https://www.terraform.io/docs/language/functions/base64decode.html base64decode} takes a string containing a Base64 character sequence and returns the original string.
   * @param {string} value
   */
  public static base64decode(value: string) {
    return terraformFunction("base64decode", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/base64encode.html base64encode} takes a string containing a Base64 character sequence and returns the original string.
   * @param {string} value
   */
  public static base64encode(value: string) {
    return terraformFunction("base64encode", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/base64gzip.html base64gzip} compresses a string with gzip and then encodes the result in Base64 encoding.
   * @param {string} value
   */
  public static base64gzip(value: string) {
    return terraformFunction("base64gzip", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/csvdecode.html csvdecode} decodes a string containing CSV-formatted data and produces a list of maps representing that data.
   * @param {string} value
   */
  public static csvdecode(value: string) {
    return terraformFunction("csvdecode", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/jsondecode.html jsondecode} interprets a given string as JSON, returning a representation of the result of decoding that string.
   * @param {string} value
   */
  public static jsondecode(value: string) {
    return terraformFunction("jsondecode", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/jsonencode.html jsonencode} encodes a given value to a string using JSON syntax.
   * @param {any} value
   */
  public static jsonencode(value: string) {
    return terraformFunction("jsonencode", [anyValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/textdecodebase64.html textdecodebase64} function decodes a string that was previously Base64-encoded, and then interprets the result as characters in a specified character encoding.
   * @param {string} value
   * @param {string} encodingName
   */
  public static textdecodebase64(value: string, encodingName: string) {
    return terraformFunction("textdecodebase64", [stringValue, stringValue])(
      value,
      encodingName
    );
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/textencodebase64.html textencodebase64} function decodes a string that was previously Base64-encoded, and then interprets the result as characters in a specified character encoding.
   * @param {string} value
   * @param {string} encodingName
   */
  public static textencodebase64(value: string, encodingName: string) {
    return terraformFunction("textencodebase64", [stringValue, stringValue])(
      value,
      encodingName
    );
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/urlencode.html urlencode} applies URL encoding to a given string.
   * @param {string} value
   */
  public static urlencode(value: string) {
    return terraformFunction("urlencode", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/yamldecode.html yamldecode} applies URL encoding to a given string.
   * @param {string} value
   */
  public static yamldecode(value: string) {
    return terraformFunction("yamldecode", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/yamlencode.html yamlencode} encodes a given value to a string using JSON syntax.
   * @param {any} value
   */
  public static yamlencode(value: any) {
    return terraformFunction("yamlencode", [anyValue])(value);
  }
}
