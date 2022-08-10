// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as archiver from "archiver";
import * as fs from "fs";

// eslint-disable-next-line jsdoc/require-jsdoc
function zipFolder(inputPath: string, outputPath: string) {
  const output = fs.createWriteStream(outputPath);

  return new Promise((resolve, reject) => {
    const archive = archiver("zip", {
      zlib: { level: 9 }, // Sets the compression level.
    });
    archive.pipe(output);

    archive.on("close", () => {
      resolve(outputPath);
    });
    archive.on("error", (err: Error) => {
      reject(err);
    });

    archive.directory(inputPath, false);
    archive.finalize();
  });
}
const [input, output] = process.argv.slice(2);
zipFolder(input, output).catch((err) => {
  console.error(err);
  process.exit(1);
});
