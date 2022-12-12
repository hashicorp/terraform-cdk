// const fs = require("fs");
// const path = require("path");


// function getDependenciesOfPackage(packagePath) {
//     console.log("getting dependencies of package: ", packagePath);
//     const packageJson = require.resolve(path.join(packagePath, "package.json"));
//     const depdendencies = require(packageJson).dependencies;
//     const allDependencies = Object.keys(depdendencies || {}).reduce((acc, key) => {
//         const dependencyPath = require.resolve(path.join(key, "package.json"));
//         const dependency = require
//             .resolve(dependencyPath)
//             .replace("package.json", "");
//         return [...acc, dependency];
//     }, []);

//     return allDependencies.flatMap((dependency) => getDependenciesOfPackage(dependency));
// }

// const allDependencies = getDependenciesOfPackage(path.resolve(__dirname, "..",));

// console.log(allDependencies);

// TODO: copy over all depdenencies into node_modules

