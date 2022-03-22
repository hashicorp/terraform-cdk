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

export function enhanceLogMessage(
  message: string,
  stack: SynthesizedStack
): string | undefined {
  // we never want to throw, if it does not work we just do as if it did not happen
  try {
    const json = JSON.parse(stack.content) as TFJson;
    const pathMapping: Record<TFIdentifier, CDKTFResourcePath> = {};

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
  } catch (e) {
    logger.debug(`Could not enhance log message: ${e}`);
    return undefined;
  }
}
