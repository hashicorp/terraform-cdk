import * as fs from "fs";
import * as path from "path";
import { TerraformOutput, isTerraformOutput } from "../ui/models/terraform";
import { NestedTerraformOutput } from "../ui/terraform-context";

export type Outputs = { [key: string]: TerraformOutput };
export type OutputIdMapLeaf = { [constructId: string]: string };
export type OutputIdMapNode = { [stackOrConstructId: string]: OutputIdMap };
export type OutputIdMap = OutputIdMapLeaf | OutputIdMapNode;

function unpackTerraformOutput(
  outputs: NestedTerraformOutput,
  includeSensitiveOutputs: boolean
): Record<string, string> {
  return Object.entries(outputs).reduce(
    (acc, [key, entry]) => ({
      ...acc,
      [key]: isTerraformOutput(entry)
        ? !entry.sensitive || includeSensitiveOutputs
          ? entry.value
          : "<sensitive>"
        : unpackTerraformOutput(entry, includeSensitiveOutputs),
    }),
    {}
  );
}

export async function saveOutputs(
  filePath: string,
  outputs: NestedTerraformOutput,
  includeSensitiveOutputs: boolean
) {
  fs.writeFileSync(
    filePath,
    JSON.stringify(
      unpackTerraformOutput(outputs, includeSensitiveOutputs),
      null,
      2
    )
  );
}

export function normalizeOutputPath(filePath: string) {
  return path.isAbsolute(filePath)
    ? filePath
    : path.join(process.cwd(), filePath);
}
