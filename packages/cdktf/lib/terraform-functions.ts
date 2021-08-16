import { Tokenization } from "./tokens/token";
import { call } from "./tfExpression";
import { IResolvable } from "./tokens/resolvable";

// We use branding here to ensure we internally only handle validated values
// this allows us to catch usage errors before terraform does in some cases
type TFValue = any & { __type: "tfvalue" };
type TFValueValidator = (value: any) => TFValue;

type ExecutableTfFunction = (...args: any[]) => IResolvable;

function anyValue(value: any): any {
  return value;
}

function mapValue(value: any): any {
  return value;
}

function stringValue(value: any): any {
  if (typeof value !== "string" && !Tokenization.isResolvable(value)) {
    throw new Error(`${value} is not a valid number nor a token`);
  }
  return value;
}

function numericValue(value: any): any {
  if (typeof value !== "number" && !Tokenization.isResolvable(value)) {
    throw new Error(`${value} is not a valid number nor a token`);
  }
  return value;
}

function listOf(type: TFValueValidator): TFValueValidator {
  return (value: any) => {
    if (Tokenization.isResolvable(value)) {
      return value;
    }

    if (!Array.isArray(value)) {
      //   throw new Error(`${value} is not a valid list`);
      return value;
    }

    value.forEach((item, i) => {
      try {
        type(item);
      } catch (error) {
        throw new Error(
          `Element in list ${value} at position ${i} is not of the right type: ${error}`
        );
      }
    });

    return value;
  };
}

function terraformFunction(
  name: string,
  argValidators: TFValueValidator | TFValueValidator[]
): ExecutableTfFunction {
  return (...args: any[]) => {
    if (Array.isArray(argValidators)) {
      if (args.length !== argValidators.length) {
        throw new Error(
          `${name} takes ${argValidators.length} arguments, but ${args.length} were provided`
        );
      }
      const validatedArgs: TFValue[] = args.map((arg, i) =>
        argValidators[i](arg)
      );

      return call(name, validatedArgs);
    } else {
      // Used for spreadable arguments
      return call(name, argValidators(args));
    }
  };
}
export class Fn {
  /**
   * {@link https://www.terraform.io/docs/language/functions/anytrue.html anytrue} returns true if all elements in a given collection are true or "true"
   * @param {Array} values
   */
  public static alltrue(values: any[]) {
    return terraformFunction("alltrue", [listOf(anyValue)])(values);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/anytrue.html anytrue} returns true if any element in a given collection is true or "true"
   * @param {Array} value
   */
  public static anytrue(value: any[]) {
    return terraformFunction("anytrue", [listOf(anyValue)])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/chunklist.html chunklist} splits a single list into fixed-size chunks, returning a list of lists.
   * @param {Array} value
   * @param {number} chunkSize
   */
  public static chunklist(value: any[], chunkSize: number) {
    return terraformFunction("chunklist", [listOf(anyValue), numericValue])(
      value,
      chunkSize
    );
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/coalesce.html coalesce} takes any number of arguments and returns the first one that isn't null or an empty string.
   * @param {...any} value
   */
  public static coalesce(...value: any[]) {
    return terraformFunction("coalesce", listOf(anyValue))(...value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/coalescelist.html coalescelist} takes any number of list arguments and returns the first one that isn't empty.
   * @param {...Array} value
   */
  public static coalescelist(...value: any[]) {
    return terraformFunction("coalescelist", listOf(anyValue))(...value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/compact.html compact} takes a list of strings and returns a new list with any empty string elements removed.
   * @param {Array} value
   */
  public static compact(value: any[]) {
    return terraformFunction("compact", [listOf(anyValue)])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/concat.html concat} takes two or more lists and combines them into a single list.
   * @param {...Array} value
   */
  public static concat(...value: any[]) {
    return terraformFunction("concat", listOf(anyValue))(...value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/contains.html contains} determines whether a given list or set contains a given single value as one of its elements.
   * @param {Array} list
   * @param {any} value
   */
  public static contains(list: any[], value: any) {
    return terraformFunction("contains", [listOf(anyValue), anyValue])(
      list,
      value
    );
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/distinct.html distinct} takes a list and returns a new list with any duplicate elements removed.
   * @param {Array} list
   */
  public static distinct(list: any[]) {
    return terraformFunction("distinct", [listOf(anyValue)])(list);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/element.html element} retrieves a single element from a list.
   * @param {Array} list
   * @param {number} index
   */
  public static element(list: any[], index: number) {
    return terraformFunction("element", [listOf(anyValue), numericValue])(
      list,
      index
    );
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/flatten.html flatten} takes a list and replaces any elements that are lists with a flattened sequence of the list contents.
   * @param {Array} list
   */
  public static flatten(list: any[]) {
    return terraformFunction("flatten", [listOf(anyValue)])(list);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/index.html index} finds the element index for a given value in a list.
   * @param {Array} list
   * @param {any} value
   */
  public static index(list: any[], value: any) {
    return terraformFunction("index", [listOf(anyValue), anyValue])(
      list,
      value
    );
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/keys.html keys} takes a map and returns a list containing the keys from that map.
   * @param {Object} map
   */
  public static keys(map: any) {
    return terraformFunction("keys", [mapValue])(map);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/length.html length} determines the length of a given list, map, or string.
   * @param {Object|Array|string} value
   */
  public static lengthOf(value: any) {
    return terraformFunction("length", [anyValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/matchkeys.html lookup} retrieves the value of a single element from a map, given its key. If the given key does not exist, the given default value is returned instead.
   * @param {Object} value
   * @param {any} key
   * @param {any} defaultValue
   */
  public static lookup(value: any, key: any, defaultValue: any) {
    return terraformFunction("lookup", [anyValue, anyValue, anyValue])(
      value,
      key,
      defaultValue
    );
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/matchkeys.html matchkeys} constructs a new list by taking a subset of elements from one list whose indexes match the corresponding indexes of values in another list.
   * @param {Array} valuesList
   * @param {Array} keysList
   * @param {Array} searchSet
   */
  public static matchkeys(
    valuesList: any[],
    keysList: any[],
    searchSet: any[]
  ) {
    return terraformFunction("matchkeys", [anyValue, anyValue, anyValue])(
      valuesList,
      keysList,
      searchSet
    );
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/merge.html merge} takes an arbitrary number of maps or objects, and returns a single map or object that contains a merged set of elements from all arguments.
   * @param {...(Array|Object)} values
   */
  public static merge(...values: any[]) {
    return terraformFunction("merge", listOf(anyValue))(...values);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/one.html one} takes a list, set, or tuple value with either zero or one elements.
   * @param {Array} list
   */
  public static one(list: any[]) {
    return terraformFunction("one", listOf(anyValue))(list);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/range.html range} generates a list of numbers using a start value, a limit value, and a step value.
   * @param {number} start
   * @param {number} limit
   * @param {number=1} step
   */
  public static range(start: number, limit: number, step = 1) {
    return terraformFunction("range", listOf(anyValue))(start, limit, step);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/reverse.html reverse} takes a sequence and produces a new sequence of the same length with all of the same elements as the given sequence but in reverse order.
   * @param {Array} values
   */
  public static reverse(values: any[]) {
    return terraformFunction("reverse", [listOf(anyValue)])(values);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/setintersection.html setintersection} function takes multiple sets and produces a single set containing only the elements that all of the given sets have in common
   * @param {...Array} values
   */
  public static setintersection(...values: any[]) {
    return terraformFunction("setintersection", listOf(anyValue))(...values);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/setproduct.html setproduct} function finds all of the possible combinations of elements from all of the given sets by computing the Cartesian product.
   * @param {...Array} values
   */
  public static setproduct(...values: any[]) {
    return terraformFunction("setproduct", listOf(anyValue))(...values);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/slice.html setsubtract} function returns a new set containing the elements from the first set that are not present in the second set.
   * @param {Array} minuend
   * @param {Array} subtrahend
   */
  public static setsubtract(minuend: any[], subtrahend: any[]) {
    return terraformFunction("setsubtract", [
      listOf(anyValue),
      listOf(anyValue),
    ])(minuend, subtrahend);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/setunion.html setunion} function takes multiple sets and produces a single set containing the elements from all of the given sets.
   * @param {...Array} values
   */
  public static setunion(...values: any[]) {
    return terraformFunction("setunion", listOf(anyValue))(...values);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/slice.html slice} extracts some consecutive elements from within a list.
   * @param {Array} list
   * @param {number} startindex
   * @param {number} endindex
   */
  public static slice(list: any[], startindex: number, endindex: number) {
    return terraformFunction("slice", [
      listOf(anyValue),
      numericValue,
      numericValue,
    ])(list, startindex, endindex);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/sort.html sort} takes a list of strings and returns a new list with those strings sorted lexicographically.
   * @param {Array} list
   */
  public static sort(list: any[]) {
    return terraformFunction("sort", [listOf(anyValue)])(list);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/sum.html sum} takes a list or set of numbers and returns the sum of those numbers.
   * @param {Array} list
   */
  public static sum(list: any[]) {
    return terraformFunction("sum", [listOf(anyValue)])(list);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/transpose.html transpose} takes a map of lists of strings and swaps the keys and values to produce a new map of lists of strings.
   * @param {Object} value
   */
  public static transpose(value: any) {
    return terraformFunction("transpose", [mapValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/values.html values} takes a map and returns a list containing the values of the elements in that map.
   * @param {Object} value
   */
  public static values(value: any) {
    return terraformFunction("values", [mapValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/zipmap.html zipmap} constructs a map from a list of keys and a corresponding list of values.
   * @param {Array} keyslist
   * @param {Array} valueslist
   */
  public static zipmap(keyslist: any[], valueslist: any[]) {
    return terraformFunction("zipmap", [mapValue])(keyslist, valueslist);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/base64sha256.html base64sha256} computes the SHA256 hash of a given string and encodes it with Base64.
   * @param {string} value
   */
  public static base64sha256(value: string) {
    return terraformFunction("base64sha256", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/base64sha512.html base64sha512} computes the SHA512 hash of a given string and encodes it with Base64.
   * @param {string} value
   */
  public static base64sha512(value: string) {
    return terraformFunction("base64sha512", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/bcrypt.html bcrypt} computes a hash of the given string using the Blowfish cipher, returning a string in the Modular Crypt Format usually expected in the shadow password file on many Unix systems.
   * @param {string} value
   * @param {number=10} cost
   */
  public static bcrypt(value: string, cost?: number) {
    return terraformFunction("bcrypt", listOf(anyValue))(value, cost);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/filebase64sha256.html filebase64sha256} is a variant of base64sha256 that hashes the contents of a given file rather than a literal string.
   * @param {string} value
   */
  public static filebase64sha256(value: string) {
    return terraformFunction("filebase64sha256", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/filebase64sha512.html filebase64sha512} is a variant of base64sha512 that hashes the contents of a given file rather than a literal string.
   * @param {string} value
   */
  public static filebase64sha512(value: string) {
    return terraformFunction("filebase64sha512", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/filemd5.html filemd5} is a variant of md5 that hashes the contents of a given file rather than a literal string.
   * @param {string} value
   */
  public static filemd5(value: string) {
    return terraformFunction("filemd5", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/filesha1.html filesha1} is a variant of sha1 that hashes the contents of a given file rather than a literal string.
   * @param {string} value
   */
  public static filesha1(value: string) {
    return terraformFunction("filesha1", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/filesha256.html filesha256} is a variant of sha256 that hashes the contents of a given file rather than a literal string.
   * @param {string} value
   */
  public static filesha256(value: string) {
    return terraformFunction("filesha256", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/filesha512.html filesha512} is a variant of sha512 that hashes the contents of a given file rather than a literal string.
   * @param {string} value
   */
  public static filesha512(value: string) {
    return terraformFunction("filesha512", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/md5.html md5} computes the MD5 hash of a given string and encodes it with hexadecimal digits.
   * @param {string} value
   */
  public static md5(value: string) {
    return terraformFunction("md5", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/rsadecrypt.html rsadecrypt} decrypts an RSA-encrypted ciphertext, returning the corresponding cleartext.
   * @param {string} ciphertext
   * @param {string} privatekey
   */
  public static rsadecrypt(ciphertext: string, privatekey: string) {
    return terraformFunction("rsadecrypt", [stringValue])(
      ciphertext,
      privatekey
    );
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/sha1.html sha1} computes the SHA1 hash of a given string and encodes it with hexadecimal digits.
   * @param {string} value
   */
  public static sha1(value: string) {
    return terraformFunction("sha1", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/sha256.html sha256} computes the SHA256 hash of a given string and encodes it with hexadecimal digits.
   * @param {string} value
   */
  public static sha256(value: string) {
    return terraformFunction("sha256", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/sha512.html sha512} computes the SHA512 hash of a given string and encodes it with hexadecimal digits.
   * @param {string} value
   */
  public static sha512(value: string) {
    return terraformFunction("sha512", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/uuid.html uuid} generates a unique identifier string.
   */
  public static uuid() {
    return terraformFunction("uuid", [])();
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/uuidv5.html uuidv5} generates a unique identifier string.
   * @param {string} namespace
   * @param {string} name
   */
  public static uuidv5(namespace: string, name: string) {
    return terraformFunction("uuidv5", [stringValue, stringValue])(
      namespace,
      name
    );
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/formatdate.html formatdate} converts a timestamp into a different time format.
   * @param {string} spec
   * @param {string} timestamp
   */
  public static formatdate(spec: string, timestamp: string) {
    return terraformFunction("formatdate", [stringValue, stringValue])(
      spec,
      timestamp
    );
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/timeadd.html timeadd} adds a duration to a timestamp, returning a new timestamp.
   * @param {string} timestamp
   * @param {string} duration
   */
  public static timeadd(timestamp: string, duration: string) {
    return terraformFunction("timeadd", [stringValue, stringValue])(
      timestamp,
      duration
    );
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/timestamp.html timestamp} returns a UTC timestamp string in RFC 3339 format.
   */
  public static timestamp() {
    return terraformFunction("timestamp", [])();
  }

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

  /**
   * {@link https://www.terraform.io/docs/language/functions/abspath.html abspath} takes a string containing a filesystem path and converts it to an absolute path.
   * @param {string} value
   */
  public static abspath(value: string) {
    return terraformFunction("abspath", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/dirname.html dirname} takes a string containing a filesystem path and removes the last portion from it.
   * @param {string} value
   */
  public static dirname(value: string) {
    return terraformFunction("dirname", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/pathexpand.html pathexpand} takes a string containing a filesystem path and removes the last portion from it.
   * @param {string} value
   */
  public static pathexpand(value: string) {
    return terraformFunction("pathexpand", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/basename.html basename} takes a string containing a filesystem path and removes all except the last portion from it.
   * @param {string} value
   */
  public static basename(value: string) {
    return terraformFunction("basename", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/file.html file} takes a string containing a filesystem path and removes all except the last portion from it.
   * @param {string} value
   */
  public static file(value: string) {
    return terraformFunction("file", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/fileexists.html fileexists} determines whether a file exists at a given path.
   * @param {string} value
   */
  public static fileexists(value: string) {
    return terraformFunction("fileexists", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/fileset.html fileset} enumerates a set of regular file names given a path and pattern.
   * @param {string} path
   * @param {string} pattern
   */
  public static fileset(path: string, pattern: string) {
    return terraformFunction("fileset", [stringValue, stringValue])(
      path,
      pattern
    );
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/filebase64.html filebase64} reads the contents of a file at the given path and returns them as a base64-encoded string.
   * @param {string} value
   */
  public static filebase64(value: string) {
    return terraformFunction("filebase64", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/templatefile.html templatefile} reads the file at the given path and renders its content as a template using a supplied set of template variables.
   * @param {string} path
   * @param {Object} vars
   */
  public static templatefile(path: string, vars: any) {
    return terraformFunction("templatefile", [stringValue, mapValue])(
      path,
      vars
    );
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/cidrhost.html cidrhost} calculates a full host IP address for a given host number within a given IP network address prefix.
   * @param {string} prefix
   * @param {number} hostnum
   */
  public staticcidrhost(prefix: string, hostnum: number) {
    return terraformFunction("cidrhost", [stringValue, numericValue])(
      prefix,
      hostnum
    );
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/cidrnetmask.html cidrnetmask} converts an IPv4 address prefix given in CIDR notation into a subnet mask address.
   * @param {string} prefix
   */
  public staticcidrnetmask(prefix: string) {
    return terraformFunction("cidrnetmask", [stringValue])(prefix);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/cidrsubnet.html cidrsubnet} calculates a subnet address within given IP network address prefix.
   * @param {string} prefix
   * @param {number} newbits
   * @param {number} netnum
   */
  public static cidrsubnet(prefix: string, newbits: number, netnum: number) {
    return terraformFunction("cidrsubnet", [
      stringValue,
      numericValue,
      numericValue,
    ])(prefix, newbits, netnum);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/cidrsubnets.html cidrsubnets} calculates a sequence of consecutive IP address ranges within a particular CIDR prefix.
   * @param {string} prefix
   * @param {...number} newbits
   */
  public static cidrsubnets(prefix: string, ...newbits: number[]) {
    return terraformFunction("cidrsubnets", listOf(anyValue))(
      prefix,
      ...newbits
    );
  }

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

  /**
   * {@link https://www.terraform.io/docs/language/functions/chomp.html chomp} removes newline characters at the end of a string.
   * @param {string} value
   */
  public static chomp(value: string) {
    return terraformFunction("chomp", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/format.html format} produces a string by formatting a number of other values according to a specification string
   * @param {string} spec
   * @param {...any} values
   */
  public static format(spec: string, ...values: any[]) {
    return terraformFunction("format", listOf(anyValue))(spec, ...values);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/formatlist.html formatlist} produces a list of strings by formatting a number of other values according to a specification string.
   * @param {string} spec
   * @param {...string} values
   */
  public static formatlist(spec: string, ...values: any[]) {
    return terraformFunction("formatlist", listOf(anyValue))(spec, ...values);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/indent.html indent} adds a given number of spaces to the beginnings of all but the first line in a given multi-line string.
   * @param {number} indentation
   * @param {string} value
   */
  public static indent(indentation: number, value: string) {
    return terraformFunction("indent", [numericValue, stringValue])(
      indentation,
      value
    );
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/join.html join} produces a string by concatenating together all elements of a given list of strings with the given delimiter.
   * @param {string} separator
   * @param {Array} value
   */
  public static join(separator: string, value: string[]) {
    return terraformFunction("join", [stringValue, listOf(anyValue)])(
      separator,
      value
    );
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/lower.html lower} converts all cased letters in the given string to lowercase.
   * @param {string} value
   */
  public static lower(value: string) {
    return terraformFunction("lower", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/regexall.html regexall} applies a regular expression to a string and returns a list of all matches.
   * @param {string} pattern
   * @param {string} value
   */
  public static regexall(pattern: string, value: string) {
    return terraformFunction("regexall", [stringValue, stringValue])(
      pattern,
      value
    );
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/split.html replace} searches a given string for another given substring, and replaces each occurrence with a given replacement string.
   * @param {string} value
   * @param {string} substring
   * @param {string} replacement
   */
  public static replace(value: string, substring: string, replacement: string) {
    return terraformFunction("replace", [
      stringValue,
      stringValue,
      stringValue,
    ])(value, substring, replacement);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/split.html split} produces a list by dividing a given string at all occurrences of a given separator.
   * @param {string} seperator
   * @param {string} value
   */
  public static split(seperator: string, value: string) {
    return terraformFunction("split", [stringValue, stringValue])(
      seperator,
      value
    );
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/strrev.html strrev} reverses the characters in a string.
   * @param {string} value
   */
  public static strrev(value: string) {
    return terraformFunction("strrev", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/substr.html substr} extracts a substring from a given string by offset and length.
   * @param {string} value
   * @param {number} offset
   * @param {number} length
   */
  public static substr(value: string, offset: number, length: number) {
    return terraformFunction("substr", [
      stringValue,
      numericValue,
      numericValue,
    ])(value, offset, length);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/title.html title} converts the first letter of each word in the given string to uppercase.
   * @param {string} value
   */
  public static title(value: string) {
    return terraformFunction("title", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/trim.html trim} removes the specified characters from the start and end of the given string.
   * @param {string} value
   * @param {string} replacement
   */
  public static trim(value: string, replacement: string) {
    return terraformFunction("trim", [stringValue, stringValue])(
      value,
      replacement
    );
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/trimprefix.html trimprefix} removes the specified prefix from the start of the given string.
   * @param {string} value
   * @param {string} prefix
   */
  public static trimprefix(value: string, prefix: string) {
    return terraformFunction("trimprefix", [stringValue, stringValue])(
      value,
      prefix
    );
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/trimsuffix.html trimsuffix} removes the specified suffix from the end of the given string.
   * @param {string} value
   * @param {string} suffix
   */
  public static trimsuffix(value: string, suffix: string) {
    return terraformFunction("trimsuffix", [stringValue, stringValue])(
      value,
      suffix
    );
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/trimspace.html trimspace} removes any space characters from the start and end of the given string.
   * @param {string} value
   */
  public static trimspace(value: string) {
    return terraformFunction("trimspace", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/upper.html upper} converts all cased letters in the given string to uppercase.
   * @param {string} value
   */
  public static upper(value: string) {
    return terraformFunction("upper", [stringValue])(value);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/can.html can} evaluates the given expression and returns a boolean value indicating whether the expression produced a result without any errors.
   * @param {any} expression
   */
  public static can(expression: any) {
    return terraformFunction("can", [anyValue])(expression);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/nonsensitive.html nonsensitive} takes a sensitive value and returns a copy of that value with the sensitive marking removed, thereby exposing the sensitive value.
   * @param {any} expression
   */
  public static nonsensitive(expression: any) {
    return terraformFunction("nonsensitive", [anyValue])(expression);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/sensitive.html sensitive} takes any value and returns a copy of it marked so that Terraform will treat it as sensitive, with the same meaning and behavior as for sensitive input variables.
   * @param {any} expression
   */
  public static sensitive(expression: any) {
    return terraformFunction("sensitive", [anyValue])(expression);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/tobool.html tobool} converts its argument to a boolean value.
   * @param {any} expression
   */
  public static tobool(expression: any) {
    return terraformFunction("tobool", [anyValue])(expression);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/tolist.html tolist} converts its argument to a list value.
   * @param {any} expression
   */
  public static tolist(expression: any) {
    return terraformFunction("tolist", [anyValue])(expression);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/tomap.html tomap} converts its argument to a map value.
   * @param {any} expression
   */
  public static tomap(expression: any) {
    return terraformFunction("tomap", [anyValue])(expression);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/tonumber.html tonumber} converts its argument to a number value.
   * @param {any} expression
   */
  public static tonumber(expression: any) {
    return terraformFunction("tonumber", [anyValue])(expression);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/toset.html toset} converts its argument to a set value.
   * @param {any} expression
   */
  public static toset(expression: any) {
    return terraformFunction("toset", [anyValue])(expression);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/tostring.html tostring} converts its argument to a string value.
   * @param {any} expression
   */
  public static tostring(expression: any) {
    return terraformFunction("tostring", [anyValue])(expression);
  }

  /**
   * {@link https://www.terraform.io/docs/language/functions/try.html try} evaluates all of its argument expressions in turn and returns the result of the first one that does not produce any errors.
   * @param {...any} expression
   */
  public static try(...expression: any[]) {
    return terraformFunction("try", listOf(anyValue))(...expression);
  }
}
