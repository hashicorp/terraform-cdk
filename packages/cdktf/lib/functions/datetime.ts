import { terraformFunction, stringValue } from "./_internals";

export const DateTime = {
  /**
   * {@link https://www.terraform.io/docs/language/functions/formatdate.html formatdate} converts a timestamp into a different time format.
   * @param {string} spec
   * @param {string} timestamp
   */
  formatdate: terraformFunction("formatdate", [stringValue, stringValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/timeadd.html timeadd} adds a duration to a timestamp, returning a new timestamp.
   * @param {string} timestamp
   * @param {string} duration
   */
  timeadd: terraformFunction("timeadd", [stringValue, stringValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/timestamp.html timestamp} returns a UTC timestamp string in RFC 3339 format.
   */
  timestamp: terraformFunction("timestamp", []),
};
