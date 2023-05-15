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
