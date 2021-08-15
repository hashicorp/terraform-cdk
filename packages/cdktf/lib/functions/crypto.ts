import { terraformFunction, stringValue, listOf, anyValue } from "./_internals";

export class Crypto {
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
}
