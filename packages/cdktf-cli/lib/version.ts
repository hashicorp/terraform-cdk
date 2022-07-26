// Copyright (c) HashiCorp, Inc
// Licensed under the Mozilla Public License 2.0
export const DISPLAY_VERSION = `${versionNumber()}`;

function versionNumber(): string {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require("../package.json").version.replace(/\+[0-9a-f]+$/, "");
}
