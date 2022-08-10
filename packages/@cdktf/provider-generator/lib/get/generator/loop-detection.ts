// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { AttributeModel } from "./models/attribute-model";

type AttributeIdentifier = [string, Set<string>];
const equalAttributeIdentifiers = (
  x: AttributeIdentifier,
  y: AttributeIdentifier
) =>
  x[0] === y[0] &&
  x[1].size === y[1].size &&
  [...x[1]].every((x) => y[1].has(x));

function typeStructure(model: AttributeModel) {
  if (model.type.isPrimitive) {
    return model.type.name;
  }

  return `<complex:{${model.type.struct?.attributes
    .map((att) => att.name)
    .sort()}}${model.type.isList ? "[]" : ""}>`;
}

function getAttributeIdentifier(model: AttributeModel): AttributeIdentifier {
  return [
    model.terraformName,
    new Set(
      model.type.struct!.attributes.map((a) => `${a.name}:${typeStructure(a)}`)
    ),
  ];
}

/**
 * Detects recursive attribute schemas and returns an Object
 * describing what property should be linking to which class
 */
export function detectAttributeLoops(attributes: AttributeModel[]): {
  [loopEntrypoint: string]: string; // attribute path to be replaced -> attribute path of the type to replace with
} {
  // We aproximate a class as a set of attributes names
  // This is not a perfect approximation, but it's good enough for our purposes
  const redirects: Record<string, string> = {};

  function depthFirstSearch(
    attribute: AttributeModel,
    path: string[] = [],
    knownStructs: { [attributePath: string]: AttributeIdentifier } = {}
  ) {
    const name = attribute.terraformName;
    const struct = attribute.type.struct;
    if (!struct) {
      return;
    }

    const structIdentifier = getAttributeIdentifier(attribute);
    // Detect if we visited this already
    const visited = Object.entries(knownStructs).find(([, attrIdentifier]) =>
      equalAttributeIdentifiers(structIdentifier, attrIdentifier)
    );

    if (visited) {
      // We have a loop, we don't need to search deeper
      const toBeReplacedWith = visited[0];
      const toReplace = [...path, name].join(".");
      redirects[toReplace] = toBeReplacedWith;
    } else {
      // Search deeper
      struct.attributes.forEach((a) =>
        depthFirstSearch(a, [...path, name], {
          ...knownStructs,
          // We haven't visited this yet, add it to the list of known structs
          [[...path, name].join(".")]: structIdentifier,
        })
      );
    }
  }

  attributes.forEach((attr) => depthFirstSearch(attr));

  return redirects;
}
