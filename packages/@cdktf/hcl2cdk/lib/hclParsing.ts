import { parse } from "@cdktf/hcl2json";
import * as z from "zod";

import { schema } from "./schema";
import { logger } from "./utils";

export type ParsedHcl = z.infer<typeof schema>;
export async function getParsedHcl(input: string) {
  logger.debug(`Parsing HCL: ${input}`);
  // Get the JSON representation of the HCL
  let json: Record<string, unknown>;
  try {
    json = await parse("terraform.tf", input);
  } catch (err) {
    logger.error(`Failed to parse HCL: ${err}`);
    throw new Error(
      `Error: Could not parse HCL, this means either that the HCL passed is invalid or that you found a bug. If the HCL seems valid, please file a bug under https://cdk.tf/bugs/new/convert`
    );
  }

  // Ensure the JSON representation matches the expected structure
  let hcl: ParsedHcl;
  try {
    hcl = schema.parse(json);
  } catch (err) {
    throw new Error(`Error: HCL-JSON does not conform to schema. This is not expected, please file a bug under https://cdk.tf/bugs/new/convert
  Please include this information:
  ${JSON.stringify((err as z.ZodError).errors)}`);
  }

  return hcl;
}
