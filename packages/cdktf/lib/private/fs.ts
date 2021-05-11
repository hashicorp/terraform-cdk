import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";
import * as os from "os";

// Full implementation at https://github.com/jprichardson/node-fs-extra/blob/master/lib/copy-sync/copy-sync.js
export function copySync(src: string, dest: string) {
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

  function walkSubfolder(p: string) {
    const sourceDir = path.resolve(src, p);
    fs.mkdirSync(path.resolve(dest, p), { recursive: true });
    fs.readdirSync(sourceDir).forEach((item) => copyItem(path.join(p, item)));
  }

  walkSubfolder(".");
}

export function archiveSync(src: string, dest: string) {
  try {
    if (os.platform() === "win32") {
      execSync("where zip");
    } else {
      execSync("which zip");
    }
  } catch {
    console.error(`Unable to find "zip".`);
    process.exit(1);
  }

  execSync(`zip -r ${dest} ${src}`);
}
