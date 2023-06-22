// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

export function replacePythonImports(code: string) {
  return code
    .split("\n")
    .map((line) => {
      // Replace from-import lines with lib
      const fromImportLibRegex =
        /from \.\.\.gen\.providers\.([^.]+)(?:\.lib)?\.(.*) import/;
      if (fromImportLibRegex.test(line)) {
        return line.replace(fromImportLibRegex, "from imports.$1.$2 import");
      }

      // Replace import lines with lib
      const importLibRegex =
        /import \.\.\.gen\.providers\.([^.]+)(?:\.lib)?\.(.*) as (.*)/;
      if (importLibRegex.test(line)) {
        return line.replace(importLibRegex, "import imports.$1.$2 as $3");
      }

      // Replace from-import lines
      if (line.startsWith("from ...gen.providers.")) {
        return line.replace("from ...gen.providers.", "from imports.");
      }
      // Replace import lines
      if (line.startsWith("import ...gen.providers.")) {
        return line.replace("import ...gen.providers.", "import imports.");
      }

      // Replace modules
      if (line.startsWith("import ...gen.modules.")) {
        return line.replace("import ...gen.modules.", "import imports.");
      }

      return line;
    })
    .join("\n");
}

export function replaceJavaImports(code: string) {
  return code
    .split("\n")
    .map((line) => {
      // Replace using lines with lib and precices import
      const importWithLib =
        /import gen\.providers\.([^.]+)(?:\.lib)?\.([^.]+)\.(.*);/;
      const matchWithLib = line.match(importWithLib);
      if (matchWithLib) {
        const [, provider, resource, className] = matchWithLib;
        return `import imports.${provider}.${resource}.${className};`;
      }

      // Replace using lines
      const importWithoutLib = /import gen\.providers\.([^.]+)\.([^.]+)\.\*;/;
      const matchWithoutLib = line.match(importWithoutLib);
      if (matchWithoutLib) {
        const [, provider, resource] = matchWithoutLib;
        return `import imports.${provider}.${resource}.*;`;
      }

      // Replace using lines
      const importModules = /import gen\.modules\.(.+)\.\*;/;
      const importModulesMatch = line.match(importModules);
      if (importModulesMatch) {
        const [, module] = importModulesMatch;
        return `import imports.${module}.*;`;
      }

      return line;
    })
    .join("\n");
}

export function replaceCsharpImports(code: string) {
  return code
    .split("\n")
    .map((line) => {
      // Replace using lines with lib
      const fromImportLibRegex =
        /using Gen\.Providers\.([^.]*)(?:\.Lib)?\.(.*);/;
      const match = line.match(fromImportLibRegex);
      if (match) {
        const [, provider, resource] = match;
        return `using ${lowercaseFirstChar(provider)}.${resource};`;
      }

      // Replace using lines
      if (line.startsWith("using Gen.Providers.")) {
        const importLine = line.replace("using Gen.Providers.", "");

        return `using ${importLine
          .substring(0, 1)
          .toLocaleLowerCase()}${importLine.substring(1)}`;
      }

      if (line.startsWith("using Gen.Modules.")) {
        const importLine = line.replace("using Gen.Modules.", "");

        return `using ${importLine}`;
      }

      return line;
    })
    .join("\n");
}

export function replaceGoImports(code: string) {
  return code
    .split("\n")
    .map((line) => {
      // Replace using lines with lib
      const fromImportLibRegex =
        /import \"github.com\/aws-samples\/dummy\/gen\/providers\/([^\/]*)(?:\/lib)?\/(.*)\"/;
      const matchLib = line.match(fromImportLibRegex);
      if (matchLib) {
        const [, provider, resource] = matchLib;
        return `import "cdk.tf/go/stack/generated/${provider}/${resource}"`;
      }

      // Replace using lines
      const fromImportRegex =
        /import \"github.com\/aws-samples\/dummy\/gen\/providers\/([^\/]+)\/(.*)\"/;
      const match = line.match(fromImportRegex);
      if (match) {
        const [, provider, resource] = match;
        return `import "cdk.tf/go/stack/generated/${provider}/${resource}"`;
      }

      const importModulesRegex =
        /import (.*) \"github.com\/aws-samples\/dummy\/gen\/modules\/(.*)\"/;
      const matchModules = line.match(importModulesRegex);
      if (matchModules) {
        const [, name, module] = matchModules;
        return `import ${name} "cdk.tf/go/stack/generated/${module}"`;
      }

      return line;
    })
    .join("\n");
}

function lowercaseFirstChar(str: string) {
  return str.substring(0, 1).toLocaleLowerCase() + str.substring(1);
}
