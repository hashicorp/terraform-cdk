// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as fs from "fs";
import * as path from "path";
import * as crypto from "crypto";
import * as archiver from "archiver";
import { assetCanNotCreateZipArchive } from "../errors";
import { execSync } from "child_process";

const HASH_LEN = 32;

// Full implementation at https://github.com/jprichardson/node-fs-extra/blob/master/lib/copy/copy-sync.js
/**
 * Copy a file or directory. The directory can have contents and subfolders.
 * @param {string} src
 * @param {string} dest
 */
export function copySync(src: string, dest: string) {
  /**
   * Copies file if present otherwise walks subfolder
   * @param {string} p
   */
  function copyItem(p: string) {
    const sourcePath = path.resolve(src, p);
    const stat = fs.statSync(sourcePath);
    if (stat.isFile()) {
      fs.copyFileSync(sourcePath, path.resolve(dest, p));
    }
    if (stat.isDirectory()) {
      walkSubfolder(p);
    }
  }
  /**
   * Copies contents of subfolder
   * @param {string} p
   */
  function walkSubfolder(p: string) {
    const sourceDir = path.resolve(src, p);
    fs.mkdirSync(path.resolve(dest, p), { recursive: true });
    fs.readdirSync(sourceDir).forEach((item) => copyItem(path.join(p, item)));
  }

  walkSubfolder(".");
}

/**
 * Zips contents at src and places zip archive at dest
 * @param {string} src
 * @param {string} dest
 */
export function archiveSync(src: string, dest: string) {
  // Run this module as a CLI to get around the synchronous limitation
  try {
    execSync(`node ${__filename} ${src} ${dest}`, { encoding: "utf-8" });
  } catch (err: any) {
    throw assetCanNotCreateZipArchive(src, dest, err);
  }
}

/**
 *
 * @param src
 * @param dest
 */
async function runArchive(src: string, dest: string) {
  return new Promise<void>((resolve, reject) => {
    const output = fs.createWriteStream(dest);

    const archive = archiver("zip", {
      zlib: { level: 9 }, // Sets the compression level.
    });
    archive.pipe(output);

    archive.on("error", (err: Error) => {
      reject(err);
    });
    output.on("close", () => {
      resolve();
    });

    archive.directory(src, false);
    archive.finalize();
  });
}

// If this file is executed as a CLI we run archive directly
// It's a bit of a hack due to us being restricted to synchronous functions
// when there is no sync way to create a zip archive.
// We get around this by using execSync and invoking this file as the CLI.
// This only works for one function, but we only have this use-case once.
if (require.main === module) {
  const src = process.argv[2];
  const dest = process.argv[3];
  runArchive(src, dest)
    .then(() => {
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function hashPath(src: string) {
  const hash = crypto.createHash("md5");

  // eslint-disable-next-line jsdoc/require-jsdoc
  function hashRecursion(p: string) {
    const stat = fs.statSync(p);
    if (stat.isFile()) {
      hash.update(fs.readFileSync(p));
    } else if (stat.isDirectory()) {
      fs.readdirSync(p).forEach((filename) =>
        hashRecursion(path.resolve(p, filename)),
      );
    }
  }

  hashRecursion(src);
  return hash.digest("hex").slice(0, HASH_LEN).toUpperCase();
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function findFileAboveCwd(
  file: string,
  rootPath = process.cwd(),
): string | null {
  const fullPath = path.resolve(rootPath, file);
  if (fs.existsSync(fullPath)) {
    return fullPath;
  }

  const parentDir = path.resolve(rootPath, "..");
  if (fs.existsSync(parentDir) && parentDir !== rootPath) {
    return findFileAboveCwd(file, parentDir);
  }

  return null;
}
