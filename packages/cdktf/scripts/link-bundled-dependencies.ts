// Imported from: https://github.com/aws/language-servers/blob/main/script/link_bundled_dependencies.ts
import * as fs from "fs";
import * as path from "path";

const rootDir = path.join(__dirname, "..");
const targetPackageDir = process.cwd();

// HACK: I'm not sure how to make this available in yarn 2+
const additionalBundles = ["@types/semver", "@types/json-stable-stringify"];

if (!fs.existsSync(path.join(targetPackageDir, "package.json"))) {
  console.error(`package.json not found in the ${targetPackageDir} directory.`);
  process.exit(1);
}

// Get the bundleDependencies array from package.json
const packageJson = JSON.parse(fs.readFileSync("package.json").toString());
const bundleDependencies: string[] = [
  ...(packageJson.bundledDependencies || packageJson.bundleDependencies || []),
  ...additionalBundles,
];

if (bundleDependencies.length === 0) {
  console.log("No bundleDependencies found in package.json.");
  process.exit(0);
}

/**
Function to copy directory recursively, resolving symlinks
*/
function copyDir(src: string, dest: string) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  fs.readdirSync(src).forEach((file) => {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);
    const resolvedSrcFile = fs.realpathSync(srcFile);

    if (fs.lstatSync(resolvedSrcFile).isDirectory()) {
      copyDir(resolvedSrcFile, destFile);
    } else {
      fs.copyFileSync(resolvedSrcFile, destFile);
    }
  });
}

function isValidModule(path: string): boolean {
  if (!fs.existsSync(path)) return false;

  const files = fs.readdirSync(path);

  return files.length > 0;
}

// Loop through each bundleDependency
for (const dependency of bundleDependencies) {
  const dependencyPath = path.join(rootDir, "node_modules", dependency);

  // Check if the dependency exists in the root node_modules directory
  if (isValidModule(dependencyPath)) {
    // Resolve any symlinks to get the real path
    copyDependency(dependencyPath, dependency);
  } else {
    // node_modules is in the monorepo root
    const parentPath = findParentPackageJson(rootDir);
    if (!parentPath) {
      console.error(
        `ERROR: ${dependency} not found in the root node_modules directory.`,
      );
      process.exit(1);
    }

    const dependencyPath = path.join(parentPath, "node_modules", dependency);
    copyDependency(dependencyPath, dependency);
  }
}

/**
 *
 * @param curDir the directory to start looking up from
 */
function findParentPackageJson(curDir: string): string | null {
  const parent = path.dirname(curDir);

  if (parent == curDir || !parent) {
    return null;
  }

  if (fs.existsSync(path.join(parent, "package.json"))) {
    console.log("Parent: ", parent);
    return parent;
  }

  return findParentPackageJson(parent);
}

/**
 *
 * @param dependencyPath Full Path to dependency in node_modules
 * @param dependency  name of dependency
 */
function copyDependency(dependencyPath: string, dependency: string) {
  const resolvedDependencyPath = fs.realpathSync(dependencyPath);

  // Determine the target location within the package
  const targetLocation = path.join("node_modules", dependency);
  console.log("Target", targetLocation);

  try {
    // Clear contents or remove the last folder in the path
    if (fs.existsSync(targetLocation)) {
      console.log("Removing last location");
      fs.rmSync(targetLocation, { recursive: true, force: true });
    }
    // Copy the dependency from the resolved path
    copyDir(resolvedDependencyPath, targetLocation);
    console.log(
      `Copied ${dependency} from ${resolvedDependencyPath} to ${targetLocation}`,
    );
  } catch (err) {
    console.error(
      `ERROR: Failed to copy ${dependency} from ${resolvedDependencyPath}. ${err}`,
    );
    process.exit(1);
  }
}
