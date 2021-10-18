// ----------------------------------------------------------------------
// PROPERTY MAPPERS
//
// These are used while converting generated classes/property bags to Terraform JSON objects
//
// We use identity mappers for the primitive types. These don't do anything but are there to make the code
// generation work out nicely (so the code generator doesn't need to emit different code for primitive

import {
  containsComplexElement,
  isComplexElement,
} from "./tokens/private/encoding";
import { Tokenization } from "./tokens";

// vs. complex types).
export type Mapper = (x: any) => any;

function identity(x: any) {
  return x;
}

export const stringToTerraform: Mapper = identity;
export const booleanToTerraform: Mapper = identity;
export const anyToTerraform: Mapper = identity;
export const numberToTerraform: Mapper = identity;

export function listMapper(elementMapper: Mapper): Mapper {
  return (x: any) => {
    if (!canInspect(x)) {
      return x;
    }

    if (!Array.isArray(x)) {
      return x;
    }

    return x.map(elementMapper);
  };
}

export function hashMapper(elementMapper: Mapper): Mapper {
  return (x: any) => {
    if (!canInspect(x)) {
      return x;
    }

    // Check if it's a token object
    if (containsComplexElement(x)) {
      return x;
    }

    if (Tokenization.isResolvable(x)) {
      return x;
    }

    const ret: any = {};

    Object.keys(x).forEach((key) => {
      ret[key] = elementMapper(x[key]);
    });

    return ret;
  };
}

/**
 * Return whether this object can be validated at all
 *
 * True unless it's undefined
 */
export function canInspect(x: any) {
  // Note: using weak equality on purpose, we also want to catch undefined
  return x != null;
}
export { isComplexElement };
