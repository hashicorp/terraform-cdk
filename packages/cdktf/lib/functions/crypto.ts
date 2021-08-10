import { terraformFunction, stringValue, listOf, anyValue } from "./_internals";

export const Crypto = {
  /**
   * {@link https://www.terraform.io/docs/language/functions/base64sha256.html base64sha256} computes the SHA256 hash of a given string and encodes it with Base64.
   * @param {string} value
   */
  base64sha256: terraformFunction("base64sha256", [stringValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/base64sha512.html base64sha512} computes the SHA512 hash of a given string and encodes it with Base64.
   * @param {string} value
   */
  base64sha512: terraformFunction("base64sha512", [stringValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/bcrypt.html bcrypt} computes a hash of the given string using the Blowfish cipher, returning a string in the Modular Crypt Format usually expected in the shadow password file on many Unix systems.
   * @param {string} value
   * @param {number=10} cost
   */
  bcrypt: terraformFunction("bcrypt", listOf(anyValue)),

  /**
   * {@link https://www.terraform.io/docs/language/functions/filebase64sha256.html filebase64sha256} is a variant of base64sha256 that hashes the contents of a given file rather than a literal string.
   * @param {string} value
   */
  filebase64sha256: terraformFunction("filebase64sha256", [stringValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/filebase64sha512.html filebase64sha512} is a variant of base64sha512 that hashes the contents of a given file rather than a literal string.
   * @param {string} value
   */
  filebase64sha512: terraformFunction("filebase64sha512", [stringValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/filemd5.html filemd5} is a variant of md5 that hashes the contents of a given file rather than a literal string.
   * @param {string} value
   */
  filemd5: terraformFunction("filemd5", [stringValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/filesha1.html filesha1} is a variant of sha1 that hashes the contents of a given file rather than a literal string.
   * @param {string} value
   */
  filesha1: terraformFunction("filesha1", [stringValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/filesha256.html filesha256} is a variant of sha256 that hashes the contents of a given file rather than a literal string.
   * @param {string} value
   */
  filesha256: terraformFunction("filesha256", [stringValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/filesha512.html filesha512} is a variant of sha512 that hashes the contents of a given file rather than a literal string.
   * @param {string} value
   */
  filesha512: terraformFunction("filesha512", [stringValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/md5.html md5} computes the MD5 hash of a given string and encodes it with hexadecimal digits.
   * @param {string} value
   */
  md5: terraformFunction("md5", [stringValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/rsadecrypt.html rsadecrypt} decrypts an RSA-encrypted ciphertext, returning the corresponding cleartext.
   * @param {string} ciphertext
   * @param {string} privatekey
   */
  rsadecrypt: terraformFunction("rsadecrypt", [stringValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/sha1.html sha1} computes the SHA1 hash of a given string and encodes it with hexadecimal digits.
   * @param {string} value
   */
  sha1: terraformFunction("sha1", [stringValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/sha256.html sha256} computes the SHA256 hash of a given string and encodes it with hexadecimal digits.
   * @param {string} value
   */
  sha256: terraformFunction("sha256", [stringValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/sha512.html sha512} computes the SHA512 hash of a given string and encodes it with hexadecimal digits.
   * @param {string} value
   */
  sha512: terraformFunction("sha512", [stringValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/uuid.html uuid} generates a unique identifier string.
   */
  uuid: terraformFunction("uuid", []),

  /**
   * {@link https://www.terraform.io/docs/language/functions/uuidv5.html uuidv5} generates a unique identifier string.
   * @param {string} namespace
   * @param {string} name
   */
  uuidv5: terraformFunction("uuidv5", [stringValue, stringValue]),
};
