// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
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
  containsMapToken,
} from "./tokens/private/encoding";
import { Tokenization } from "./tokens";
import { TerraformDynamicBlock } from "./terraform-dynamic-block";
import { TerraformDynamicExpression } from "./terraform-dynamic-expression";

// vs. complex types).
export type Mapper = (x: any) => any;

// eslint-disable-next-line jsdoc/require-jsdoc
function identity(x: any) {
  return x;
}

export const stringToTerraform: Mapper = identity;
export const booleanToTerraform: Mapper = identity;
export const anyToTerraform: Mapper = identity;
export const numberToTerraform: Mapper = identity;

/**
 * @param isBlockType blocks and lists of objects need to be handled different in Terraform
 *                    but are represented exactly the same in generated bindings
 *                    currently this is used to resolve TerraformDynamicBlocks if not within
 *                    a block type (will be resolved to a for expression for those instead of
 *                    a dynamic block)
 */
export function listMapper(
  elementMapper: Mapper,
  isBlockType?: boolean
): Mapper {
  return (x: any) => {
    if (!canInspect(x)) {
      return x;
    }

    // replace dynamic expressions for block types so they can be detected and replaced properly by processDynamicAttributes()
    // which also relocates them to dynamic.attributeName (something we can't do when resolving a value, put it somewhere else)
    // if isBlockType is false, the TerraformDynamicExpression that is present will be resolved (it implements IResolvable) to a
    // for expression directly (which can be used e.g. within Terraform functions or for attributes that are not of a block type)
    if (
      TerraformDynamicExpression.isTerraformDynamicExpression(x) &&
      isBlockType
    ) {
      return TerraformDynamicBlock.fromDynamicExpression(x);
    }

    if (!Array.isArray(x)) {
      return x;
    }

    return x.map(elementMapper);
  };
}

// eslint-disable-next-line jsdoc/require-jsdoc
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

    // We can't treat strings as hashes (likely a token or a misconfiguration)
    if (typeof x === "string") {
      return x;
    }

    if (containsMapToken(x)) {
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
