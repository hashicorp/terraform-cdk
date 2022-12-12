// For now we will just copy the things we konw we need and keep automating this for later
const fs = require("fs-extra");
const path = require("path");
const projectRoot = path.join(__dirname, "..", "..", "..", "..");
const packagePathsToCopy = Object.entries({
  "@cdktf/cli-core": "packages/@cdktf/cli-core",
  "@cdktf/commons": "packages/@cdktf/commons",
}).map(([packageName, value]) => [packageName, path.join(projectRoot, value)]);

const localNodeModules = path.resolve(__dirname, "..", "node_modules");

// Start by removing node_modules / everything symlinked here will be copied over
fs.removeSync(localNodeModules);
fs.mkdirSync(localNodeModules);

console.log("Copying local packages to local node_modules");
packagePathsToCopy.forEach(([packageName, packagePath]) => {
  fs.copySync(packagePath, path.resolve(localNodeModules, packageName), {
    recursive: true,
  });
});

console.log("Copying global node_modules to local node_modules");
// Copy all root level node modules
fs.readdirSync(path.join(projectRoot, "node_modules")).forEach((file) => {
  const from = path.join(projectRoot, "node_modules", file);
  const to = path.join(localNodeModules, file);

  if (file === ".bin") {
    console.log(".bin", from);
    return;
  }

  // ignore symlinks
  if (fs.lstatSync(from).isSymbolicLink()) {
    console.log("Symlink", from);
    return;
  }

  // ignore local packages
  if (file.startsWith("@cdktf")) {
    console.log("@cdktf", from);
    return;
  }

  console.log(`Copying ${from} to ${to}`);
  fs.copySync(from, to, {
    recursive: true,
  });
});
