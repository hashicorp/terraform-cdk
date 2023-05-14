import * as fs from "fs-extra";
import path from "path";
import { toPascalCase } from "codemaker";

export async function addStack(
  name: string,
  projectDir = process.cwd()
): Promise<string> {
  // TODO: check if cwd is a cdktf project
  await fs.mkdirp(path.resolve(projectDir, "stacks"));
  const stackFile = path.resolve(projectDir, "stacks", `${name}.ts`);
  const stackName = toPascalCase(name);
  const stackContent = `
import { Construct } from "constructs";
import { TerraformStack } from "cdktf";

export interface ${stackName}Config {
    // add configuration properties here
}

export class ${stackName} extends TerraformStack {
    constructor(scope: Construct, name: string, config: ${stackName}Config) {
        super(scope, name);

        // define resources here
    }
}
`;

  await fs.writeFile(stackFile, stackContent, "utf8");

  return `Created the new Stack at ./${path.relative(projectDir, stackFile)}
You can import it via 
    import { ${stackName} } from "./stacks/${name}";

and use the stack via 
    new ${stackName}(app, "${name}", {});
`;
}
