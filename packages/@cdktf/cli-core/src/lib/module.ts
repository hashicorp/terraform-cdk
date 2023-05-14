import { TerraformModuleConstraint } from "@cdktf/commons";
import { CdktfConfig } from "./cdktf-config";
import { runGetInDir } from "./get";

export async function addModule(
  name: string,
  projectDirectory = process.cwd(),
  runGet = runGetInDir
) {
  const config = CdktfConfig.read(projectDirectory);
  const newModule = new TerraformModuleConstraint(name);

  config.writeTerraformModules([
    ...config.terraformModules,
    newModule.asConfig(),
  ]);
  console.log("Updated cdktf.json, running cdktf get...");

  await runGet(projectDirectory);

  return `Added module ${name}.

You can use it by importing it via

    import { ${newModule.className} } from "./.gen/modules/${newModule.fileName}";

And using it via

    new ${newModule.className}(this, "my-module", {/* Add module inputs here */});
`;
}
