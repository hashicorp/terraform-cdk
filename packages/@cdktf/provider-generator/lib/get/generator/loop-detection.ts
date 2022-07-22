import { AttributeModel } from "./models/attribute-model";

const eqSet = (xs: Set<string>, ys: Set<string>) =>
  xs.size === ys.size && [...xs].every((x) => ys.has(x));

/**
 * Detects recursive attribute schemas and returns an Object
 * describing what property should be linking to which class
 */
export function detectAttributeLoops(attributes: AttributeModel[]): {
  [loopEntrypoint: string]: string; // attribute path to be replaced -> attribute path of the type to replace with
} {
  // We aproximate a class as a set of attributes names
  // This is not a perfect approximation, but it's good enough for our purposes
  const knownStructs: { [attributePath: string]: Set<string> } = {};

  const redirects: Record<string, string> = {};

  function loop(attribute: AttributeModel, path: string[] = []) {
    const name = attribute.name;
    const struct = attribute.type.struct;
    if (!struct) {
      return;
    }

    const structIdentifier = new Set(struct.attributes.map((a) => a.name));
    // Detect if we visited this already
    const visited = Object.entries(knownStructs).find(([, attrIdentifier]) =>
      eqSet(structIdentifier, attrIdentifier)
    );
    if (visited) {
      // We have a loop, we don't need to search deeper
      redirects[[...path, name].join(".")] = visited[0];
    } else {
      // We haven't visited this yet, add it to the list of known structs
      knownStructs[[...path, name].join(".")] = structIdentifier;
      // Search deeper
      struct.attributes.forEach((a) => loop(a, [...path, name]));
    }
  }

  attributes.forEach((attr) => loop(attr));

  return redirects;
}
