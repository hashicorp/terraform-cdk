import {
  terraformFunction,
  stringValue,
  numericValue,
  listOf,
  anyValue,
} from "./_internals";

export class Network {
  /**
   * {@link https://www.terraform.io/docs/language/functions/cidrhost.html cidrhost} calculates a full host IP address for a given host number within a given IP network address prefix.
   * @param {string} prefix
   * @param {number} hostnum
   */
  public staticcidrhost = terraformFunction("cidrhost", [
    stringValue,
    numericValue,
  ]);

  /**
   * {@link https://www.terraform.io/docs/language/functions/cidrnetmask.html cidrnetmask} converts an IPv4 address prefix given in CIDR notation into a subnet mask address.
   * @param {string} prefix
   */
  public staticcidrnetmask = terraformFunction("cidrnetmask", [stringValue]);

  /**
   * {@link https://www.terraform.io/docs/language/functions/cidrsubnet.html cidrsubnet} calculates a subnet address within given IP network address prefix.
   * @param {string} prefix
   * @param {number} newbits
   * @param {number} netnum
   */
  public staticcidrsubnet = terraformFunction("cidrsubnet", [
    stringValue,
    numericValue,
    numericValue,
  ]);

  /**
   * {@link https://www.terraform.io/docs/language/functions/cidrsubnets.html cidrsubnets} calculates a subnet address within given IP network address prefix.
   * @param {string} prefix
   * @param {number} newbits
   * @param {number} netnum
   */
  public staticcidrsubnets = terraformFunction("cidrsubnets", listOf(anyValue));
}
