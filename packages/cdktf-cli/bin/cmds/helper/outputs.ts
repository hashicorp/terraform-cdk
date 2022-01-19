import * as fs from "fs";
import * as path from "path";
import { TerraformOutput } from "../ui/models/terraform";

export type Outputs = { [key: string]: TerraformOutput };
export async function saveOutputs(filePath: string, outputs: Outputs) {
  fs.writeFileSync(filePath, JSON.stringify(outputs, null, 2));
}

export function normalizeOutputPath(filePath: string) {
  return path.isAbsolute(filePath)
    ? filePath
    : path.join(process.cwd(), filePath);
}
