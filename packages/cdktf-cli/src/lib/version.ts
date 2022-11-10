// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
export const DISPLAY_VERSION = `${versionNumber()}`;

function versionNumber(): string {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require("../../package.json").version.replace(/\+[0-9a-f]+$/, "");
}
