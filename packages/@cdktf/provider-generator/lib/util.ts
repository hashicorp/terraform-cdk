// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

/**
 * Downcase the first character in a string.
 *
 * @param str the string to be processed.
 */
export function downcaseFirst(str: string): string {
  if (str === "") {
    return str;
  }
  return `${str[0].toLocaleLowerCase()}${str.slice(1)}`;
}

/**
 * Uppercase the first character in a string.
 *
 * @param str the string to be processed.
 */
export function uppercaseFirst(str: string): string {
  if (str === "") {
    return str;
  }
  return `${str[0].toLocaleUpperCase()}${str.slice(1)}`;
}
