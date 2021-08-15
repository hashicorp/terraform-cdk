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
  public staticcidrsubnet(prefix: string, newbits: number, netnum: number) {
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
  public staticcidrsubnets(prefix: string, ...newbits: number[]) {
    return terraformFunction("cidrsubnets", listOf(anyValue))(
      prefix,
      ...newbits
    );
  }
}
