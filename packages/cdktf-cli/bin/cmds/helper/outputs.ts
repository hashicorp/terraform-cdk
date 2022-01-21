import * as fs from "fs";
import * as path from "path";
import { TerraformOutput, isTerraformOutput } from "../ui/models/terraform";
import { NestedTerraformOutput } from "../ui/terraform-context";

export type Outputs = { [key: string]: TerraformOutput };
export type OutputIdMapLeaf = { [constructId: string]: string };
export type OutputIdMapNode = { [stackOrConstructId: string]: OutputIdMap };
export type OutputIdMap = OutputIdMapLeaf | OutputIdMapNode;

function unpackTerraformOutput(
  outputs: NestedTerraformOutput
): Record<string, string> {
  return Object.entries(outputs).reduce(
    (acc, [key, entry]) => ({
      ...acc,
      [key]: isTerraformOutput(entry)
        ? entry.value
        : unpackTerraformOutput(entry),
    }),
    {}
  );
}

export async function saveOutputs(
  filePath: string,
  outputs: NestedTerraformOutput
) {
  fs.writeFileSync(
    filePath,
    JSON.stringify(unpackTerraformOutput(outputs), null, 2)
  );
}

export function normalizeOutputPath(filePath: string) {
  return path.isAbsolute(filePath)
    ? filePath
    : path.join(process.cwd(), filePath);
}
