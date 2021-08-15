import { terraformFunction, stringValue, mapValue } from "./_internals";

export class Filesystem {
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
}
