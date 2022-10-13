// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";
import { snakeCase, terraformBinaryName } from "../util";

// TerraformConstructor is class with the static property 'tfResourceType'
export interface TerraformConstructor {
  readonly tfResourceType: string;
}

export type SynthesizedStack = {
  resource: Record<string, any>;
  data: Record<string, any>;
};

// eslint-disable-next-line jsdoc/require-jsdoc
export class AssertionReturn {
  constructor(public readonly message: string, public readonly pass: boolean) {}
}

export type MatcherReturnJest = { message: () => string; pass: boolean };
// eslint-disable-next-line jsdoc/require-jsdoc
export function returnMatcherToJest(
  toReturn: AssertionReturn
): MatcherReturnJest {
  return {
    message: () => toReturn.message,
    pass: toReturn.pass,
  };
}

/**
 * Compares expected and received. All expected properties are matched and considered equal even if
 * there are more properties in the received object than in the expected object in which case it will still return true.
 * @param expected
 * @param received
 * @returns {boolean}
 */
export function asymetricDeepEqualIgnoringObjectCasing(
  expected: unknown,
  received: unknown
): boolean {
  switch (typeof expected) {
    case "object":
      if (Array.isArray(expected)) {
        return (
          Array.isArray(received) &&
          expected.length === received.length &&
          expected.every(
            (item, index) =>
              asymetricDeepEqualIgnoringObjectCasing(item, received[index]) // recursively compare arrays
          )
        );
      }
      if (expected === null && received === null) {
        return true;
      }
      if (expected === undefined && received === undefined) {
        return true;
      }
      if (expected === null || received === null) {
        return false;
      }

      // recursively compare objects and allow snake case as well as camel case
      return Object.keys(expected as Record<string, unknown>).every((key) => {
        if ((received as any)[key] !== undefined) {
          return asymetricDeepEqualIgnoringObjectCasing(
            (expected as any)[key],
            (received as any)[key]
          );
        }

        if ((received as any)[snakeCase(key)] !== undefined) {
          return asymetricDeepEqualIgnoringObjectCasing(
            (expected as any)[key],
            (received as any)[snakeCase(key)]
          );
        }

        return false;
      });
    default:
      return expected === received;
  }
}
const defaultPassEvaluation = (
  items: any,
  assertedProperties: Record<string, any>
) => {
  return Object.values(items).some((item: any) =>
    asymetricDeepEqualIgnoringObjectCasing(assertedProperties, item)
  );
};

// eslint-disable-next-line jsdoc/require-jsdoc
function isAsymmetric(obj: any) {
  return !!obj && typeof obj === "object" && "asymmetricMatch" in obj;
}
// You can use expect.Anything(), expect.ObjectContaining, etc in jest, this makes it nicer to read
// when we print error mesages
// eslint-disable-next-line jsdoc/require-jsdoc
function jestAsymetricMatcherStringifyReplacer(_key: string, value: any) {
  return isAsymmetric(value) ? `expect.${value.toString()}` : value;
}
// eslint-disable-next-line jsdoc/require-jsdoc
function getAssertElementWithProperties(
  // We have the evaluation function configurable so we can make use of the specific testing frameworks capabilities
  // This makes the resulting tests more native to the testing framework
  customPassEvaluation?: (
    items: any[], // configurations of the requested type
    assertedProperties: Record<string, any>
  ) => boolean
) {
  const passEvaluation = customPassEvaluation || defaultPassEvaluation;
  return function getAssertElementWithProperties(
    type: keyof SynthesizedStack,
    received: string,
    itemType: TerraformConstructor,
    properties: Record<string, any> = {}
  ): AssertionReturn {
    let stack: SynthesizedStack;
    try {
      stack = JSON.parse(received) as SynthesizedStack;
    } catch (e) {
      throw new Error(`invalid JSON string passed: ${received}`);
    }

    const items =
      Object.values(
        Object.entries(stack[type] || {}) // for all data/resource entries
          .find(
            // find the object with a matching name
            ([type, _values]) => type === itemType.tfResourceType
          )?.[1] || {} // get all items of that type (encoded as a record of name -> config)
      ) || []; // get a list of all configs of that type
    const pass = passEvaluation(items, properties);

    if (pass) {
      return new AssertionReturn(
        `Expected no ${
          itemType.tfResourceType
        } with properties ${JSON.stringify(
          properties,
          jestAsymetricMatcherStringifyReplacer
        )} to be present in synthesised stack.
Found ${items.length === 0 ? "no" : items.length} ${
          itemType.tfResourceType
        } resources instead${
          items.length > 0 ? ":\n" + JSON.stringify(items, null, 2) : ""
        }`,
        pass
      );
    } else {
      return new AssertionReturn(
        `Expected ${itemType.tfResourceType} with properties ${JSON.stringify(
          properties,
          jestAsymetricMatcherStringifyReplacer
        )} to be present in synthesised stack.
Found ${items.length === 0 ? "no" : items.length} ${
          itemType.tfResourceType
        } resources instead${
          items.length > 0 ? ":\n" + JSON.stringify(items, null, 2) : ""
        }`,
        pass
      );
    }
  };
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function getToHaveDataSourceWithProperties(
  customPassEvaluation?: (
    items: any,
    assertedProperties: Record<string, any>
  ) => boolean
) {
  return function toHaveDataSourceWithProperties(
    received: string,
    resourceType: TerraformConstructor,
    properties: Record<string, any> = {}
  ): AssertionReturn {
    return getAssertElementWithProperties(customPassEvaluation)(
      "data",
      received,
      resourceType,
      properties
    );
  };
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function getToHaveResourceWithProperties(
  customPassEvaluation?: (
    items: any,
    assertedProperties: Record<string, any>
  ) => boolean
) {
  return function toHaveResourceWithProperties(
    received: string,
    resourceType: TerraformConstructor,
    properties: Record<string, any> = {}
  ): AssertionReturn {
    return getAssertElementWithProperties(customPassEvaluation)(
      "resource",
      received,
      resourceType,
      properties
    );
  };
}
// eslint-disable-next-line jsdoc/require-jsdoc
export function toBeValidTerraform(received: string): AssertionReturn {
  try {
    if (!fs.statSync(received).isDirectory()) {
      throw new Error("Path is not a directory");
    }
  } catch (e) {
    return new AssertionReturn(
      `Expected subject to be a terraform directory: ${e}`,
      false
    );
  }

  try {
    const manifest = JSON.parse(
      fs.readFileSync(path.resolve(received, "manifest.json"), "utf8")
    );

    const stacks = Object.entries(manifest.stacks);

    stacks.forEach(([name, stack]) => {
      const opts = {
        cwd: path.resolve(received, (stack as any).workingDirectory),
        env: process.env,
        stdio: "pipe",
      } as any;
      execSync(`${terraformBinaryName} init`, opts);
      const out = execSync(`${terraformBinaryName} validate -json`, opts);

      const result = JSON.parse(out.toString());
      if (!result.valid) {
        throw new Error(
          `Found ${
            result.error_count
          } Errors in stack ${name}: ${result.diagnostics.join("\n")}`
        );
      }
    });
    return new AssertionReturn(
      `Expected subject not to be a valid terraform stack`,
      true
    );
  } catch (e) {
    return new AssertionReturn(
      `Expected subject to be a valid terraform stack: ${e}`,
      false
    );
  }
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function toPlanSuccessfully(received: string): AssertionReturn {
  try {
    if (!fs.statSync(received).isDirectory()) {
      throw new Error("Path is not a directory");
    }
  } catch (e) {
    return new AssertionReturn(
      `Expected subject to be a terraform directory: ${e}`,
      false
    );
  }

  try {
    const manifest = JSON.parse(
      fs.readFileSync(path.resolve(received, "manifest.json"), "utf8")
    );

    const stacks = Object.entries(manifest.stacks);

    stacks.forEach(([, stack]) => {
      const opts = {
        cwd: path.resolve(received, (stack as any).workingDirectory),
        env: process.env,
        stdio: "ignore",
      } as any;
      execSync(`${terraformBinaryName} init`, opts);

      // Throws on a non-zero exit code
      execSync(`${terraformBinaryName} plan -input=false -lock=false `, opts);
    });

    return new AssertionReturn(
      `Expected subject not to plan successfully`,
      true
    );
  } catch (e) {
    return new AssertionReturn(
      `Expected subject to plan successfully: ${e}`,
      false
    );
  }
}
