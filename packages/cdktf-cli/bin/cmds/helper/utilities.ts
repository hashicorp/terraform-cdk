import * as fs from "fs-extra";
import path from "path";
import * as pkgUp from "pkg-up";

export const readPackageJson = () => {
  const pkgPath = pkgUp.sync({ cwd: __dirname });
  if (!pkgPath) {
    throw new Error("unable to find package.json");
  }

  return JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
};

export const projectRootPath = () => {
  const pkgPath = pkgUp.sync({ cwd: __dirname });
  if (!pkgPath) {
    throw new Error("unable to find package.json");
  }

  return path.dirname(pkgPath);
};
