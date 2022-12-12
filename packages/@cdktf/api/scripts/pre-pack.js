// For now we will just copy the things we konw we need and keep automating this for later
const fs = require("fs-extra");
const path = require("path");
const projectRoot = path.join(__dirname, "..", "..", "..", "..");
const packagePathsToCopy = Object.entries({
  "@cdktf/cli-core": "packages/@cdktf/cli-core",
  "@cdktf/commons": "packages/@cdktf/commons",
}).map(([packageName, value]) => [packageName, path.join(projectRoot, value)]);

packagePathsToCopy.forEach(([packageName, packagePath]) => {
  fs.copySync(
    packagePath,
    path.resolve(__dirname, "..", "node_modules", packageName),
    {
      recursive: true,
    }
  );
});
