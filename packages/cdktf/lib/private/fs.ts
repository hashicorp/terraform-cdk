import * as fs from "fs";
import * as path from "path";

// Full implementation at https://github.com/jprichardson/node-fs-extra/blob/master/lib/copy-sync/copy-sync.js
export function copySync(src: string, dest: string, _opts: {} = {}) {
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
