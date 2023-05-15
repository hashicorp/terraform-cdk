import { exec } from "@cdktf/commons";
import { toPascalCase } from "codemaker";
import * as fs from "fs-extra";
import path from "path";

export async function addConstruct(
  constructName: string,
  projectDir = process.cwd()
): Promise<string> {
  const constructsPath = path.resolve(projectDir, "constructs");
  await fs.mkdirp(constructsPath);

  const constructFile = path.resolve(constructsPath, `${constructName}.ts`);
  const sanitizedConstructName = toPascalCase(constructName);
  await fs.writeFile(
    constructFile,
    `import { Construct } from "constructs";

export interface ${sanitizedConstructName}Config {}

export class ${sanitizedConstructName} extends Construct {
    constructor(scope: Construct, name: string, config: ${toPascalCase(
      constructName
    )}Config) {
        super(scope, name);

        // define resources here
    }
}
    `,
    "utf8"
  );

  return `Created the new Construct at ./${path.relative(
    projectDir,
    constructFile
  )}
You can import it via 
    import { ${sanitizedConstructName} } from "./constructs/${constructName}";

and use the construct via 
    new ${sanitizedConstructName}(app, "${constructName}", {});
`;
}

export async function initConstruct(
  argv: { name: string; language?: string[] },
  languages: string[],
  projectDir = process.cwd()
): Promise<string> {
  const languageConfig: Record<string, any> = {
    python: {
      distName: argv.name,
      module: argv.name.replace(/-/gi, "_"),
    },
  };
  // TODO: Check if folder has sth in it
  // TODO: Ask author and repo in inquirer for package.json

  fs.writeFile(
    path.resolve(projectDir, "package.json"),
    JSON.stringify(
      {
        name: argv.name,
        description: `${argv.name} Construct for CDKTF`,
        version: "0.0.0",
        author: {
          name: "John Doe",
          email: "john.doe@acme.com",
        },
        repository: {
          url: "https://github.com/acme/project-name.git",
        },
        scripts: {
          build: "jsii --silence-warnings=reserved-word",
          package: "npm run build && jsii-pacmak -v",
          publish: "npm run package && publib",
        },
        jsii: {
          outdir: "dist",
          tsc: {
            outDir: "lib",
            rootDir: "src",
          },
          targets: languages.reduce((carry, lang) => {
            if (languageConfig[lang]) {
              return { ...carry, [lang]: languageConfig[lang] };
            }
            return carry;
          }, {}),
        },
        keywords: ["cdk", "cdktf", "construct", "terraform"],
      },
      null,
      2
    )
  );

  await fs.writeFile(
    path.resolve(projectDir, ".gitignore"),
    `node_modules
npm-debug.log*
dist
*.tgz
.yarn-integrity
.cache
.jsii
`,
    "utf8"
  );

  await fs.mkdirp(path.resolve(projectDir, "src"));
  await fs.writeFile(
    path.resolve(projectDir, "src", "index.ts"),

    `export { ${toPascalCase(argv.name)} } from "./constructs/${argv.name}";`,
    "utf8"
  );

  await fs.mkdirp(path.resolve(projectDir, "src", "constructs"));

  await fs.writeFile(
    path.resolve(projectDir, "src", "constructs", `${argv.name}.ts`),
    `import { Construct } from "constrcuts";

export interface ${toPascalCase(argv.name)}Config {}

export class ${toPascalCase(argv.name)} extends Construct {
    constructor(scope: Construct, name: string, config: ${toPascalCase(
      argv.name
    )}Config) {
      super(scope, name);

      // define resources here
    }
}
  `,
    "utf8"
  );

  // TODO: pipe npm output
  await exec(
    "npm",
    ["install", "--save-dev", "jsii", "jsii-pacmak", "publib", "typescript"],
    {
      cwd: projectDir,
    }
  );

  await exec("npm", ["install", "--save-peer", "cdktf", "constructs"], {
    cwd: projectDir,
  });

  return `We created a publishable Construct repository for you.
It can host any amount of constructs you want to publish together.

Please change the author and repository fields in the package.json file to your own values.
You can run 
    npm build
to build your construct package. To package it you can run 
    npm run package
and to publish it you can run
    npm run publish

To start publishing your constrcut library you will be required to have environment variables set up.
You can find more information at https://github.com/cdklabs/publib.
  `;
}
