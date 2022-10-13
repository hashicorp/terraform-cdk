// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { logger } from "./logging";
import { SynthesizedStack } from "./synth-stack";
type TFIdentifier = string;
type CDKTFResourcePath = string;
type TfResource = Record<
  string,
  {
    ["//"]?: {
      metadata?: {
        path?: string;
      };
    };
  }
>;
type TfResourceType = Record<string, TfResource>;
type TFJson = {
  data: TfResourceType;
  resource: TfResourceType;
};

export function createEnhanceLogMessage(
  stack: SynthesizedStack
): (message: string) => string | undefined {
  // we never want to throw, if it does not work we just do as if it did not happen
  const pathMapping: Record<TFIdentifier, CDKTFResourcePath> = {};
  try {
    const json = JSON.parse(stack.content) as TFJson;

    ["data", "resource"].forEach((type) => {
      Object.entries(json[type as "data" | "resource"] || {}).forEach(
        ([resourceType, resourceInstances]) => {
          Object.entries(resourceInstances || {}).forEach(
            ([resourceName, resource]) => {
              // Some constructs don't have this metadata
              if (
                resource["//"] &&
                resource["//"].metadata &&
                resource["//"].metadata.path
              ) {
                pathMapping[`${resourceType}.${resourceName}`] = resource[
                  "//"
                ].metadata.path.replace(`${stack.name}/`, "");
              }
            }
          );
        }
      );
    });
  } catch (e) {
    logger.debug(`Could not enhance log message: ${e}`);
  }

  return (message: string) => {
    return message
      .split("\n")
      .map((line) => {
        const matchingEntry = Object.entries(pathMapping).find(
          ([tfIdentifier]) => line.includes(tfIdentifier)
        );
        if (!matchingEntry) {
          return line;
        }
        const [id, cdkPath] = matchingEntry;
        return line.replace(id, `${id} (${cdkPath})`);
      })
      .join("\n");
  };
}
