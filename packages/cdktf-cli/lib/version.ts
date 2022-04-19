export const DISPLAY_VERSION = `${versionNumber()}`;

export function versionNumber(): string {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require("../package.json").version.replace(/\+[0-9a-f]+$/, "");
}
