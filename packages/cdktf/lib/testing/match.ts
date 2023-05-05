/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { snakeCase } from "../util";

// Maybe make use of more types for function params throughout this file
// I think it's a code smell with 3+ params that aren't a type

// TerraformConstructor is class with the static property 'tfResourceType'
export interface TerraformConstructor {
  readonly tfResourceType: string;
}

export type SynthesizedStack = {
  resource: Record<string, any>;
  data: Record<string, any>;
  provider: Record<string, any>;
};

/**
 * Class representing the contents of a return by an assertion
 */
export class AssertionReturn {
  /**
   * Create an AssertionReturn
   * @param message - String message containing information about the result of the assertion
   * @param pass - Boolean pass denoting the success of the assertion
   */
  constructor(public readonly message: string, public readonly pass: boolean) {}
}

/**
 *
 * @param type provider, resource, or data
 * @param received Synthed stack as a JSON string
 * @param itemType Terraform Constructor with tfResourceType property
 * @returns items in the stack of the given type
 */
export function findItemsByTypeInStack(
  type: keyof SynthesizedStack,
  received: string,
  itemType: TerraformConstructor
): any[] {
  let stack: SynthesizedStack;
  try {
    stack = JSON.parse(received) as SynthesizedStack;
  } catch (e) {
    throw new Error(`invalid JSON string passed: ${received}`);
  }
  const items =
    Object.values(
      Object.entries(stack[type] || {}) // for all data/resource/provider entries
        .find(
          // find the object with a matching name
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          ([type, _values]) => type === itemType.tfResourceType
        )?.[1] || {} // get all items of that type (encoded as a record of name -> config)
    ) || []; // get a list of all configs of that type
  return items;
}

/**
 *
 * @param type
 * @param received
 * @param itemType
 * @param id
 * @returns
 */
export function findItemById(
  type: keyof SynthesizedStack,
  received: string,
  itemType: TerraformConstructor,
  id: string
): any {
  let stack: SynthesizedStack;
  try {
    stack = JSON.parse(received) as SynthesizedStack;
  } catch (e) {
    throw new Error(`invalid JSON string passed: ${received}`);
  }

  const items =
    Object.entries(stack[type] || {}) // for all data/resource/provider entries
      .find(
        // find the object with a matching name
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([type, _values]) => type === itemType.tfResourceType
      )?.[1] || {}; // get all items of that type (encoded as a record of name -> config)

  return items[id] || null;
}

// so we now have the items we need to test within, but different means are needed to test them

// here we need to check that the properties are equal to the expected properties
// types are unknown since we have to recurse through things
/**
 *
 * @param expected
 * @param received
 * @returns
 */
export function assertPropertiesWithEquality(
  expected: unknown,
  received: unknown
): { pass: boolean; message: string } {
  switch (typeof expected) {
    case "object":
      if (Array.isArray(expected)) {
        const messages: string[] = [];
        const isArray = Array.isArray(received);
        const arraysAreDeepEqual = expected.every((item, index) => {
          const pass = assertPropertiesWithEquality(
            item,
            (received as any[])[index]
          );
          messages.push(pass.message);
          return pass.pass;
        });
        return { pass: isArray && arraysAreDeepEqual, message: "" };
      }
      if (expected === null && received === null) {
        return { pass: true, message: "" };
      }
      if (expected === undefined && received === undefined) {
        return { pass: true, message: "" };
      }
      if (expected === null || received === null) {
        return {
          pass: false,
          message: `expected: ${expected}\n received: ${received}`,
        };
      }
      // recursively compare objects and allow snake case as well as camel case
      else {
        const messages: string[] = [];
        const recursivelyComparedObjects = Object.keys(
          expected as Record<string, unknown>
        ).every((key) => {
          if ((received as any)[key] !== undefined) {
            const pass = assertPropertiesWithEquality(
              (expected as any)[key],
              (received as any)[key]
            );
            messages.push(pass.message);
            return pass.pass;
          }

          if ((received as any)[snakeCase(key)] !== undefined) {
            const pass = assertPropertiesWithEquality(
              (expected as any)[key],
              (received as any)[snakeCase(key)]
            );
            messages.push(pass.message);
            return pass.pass;
          }
          return false;
        });
        return { pass: recursivelyComparedObjects, message: "" };
      }
    case "function":
      if (expected.name === "any") {
        const pass = expected();
        return { pass: pass.pass, message: pass.message };
      }
      if (expected.name === "containedIn") {
        const pass = expected(received);
        return { pass: pass.pass, message: pass.message };
      }
      if (expected.name === "regex") {
        const pass = expected(received);
        return { pass: pass.pass, message: pass.message };
      }
      return { pass: false, message: `unknown function: ${expected.name}` };
    default:
      return {
        pass: expected === received,
        message: `expected: ${expected}, received: ${received}`,
      };
  }
}

// here we need to check that the properties simply exist within the received
/**
 *
 * @param expected
 * @param received
 * @returns
 */
export function assertPropertiesExist(
  expected: any,
  received: any
): { pass: boolean; message: string } {
  const receivedValues = Object.keys(received as Record<string, any>);
  const expectedValues = Object.keys(expected as Record<string, any>);

  let message = "";
  const pass = receivedValues.every((value) => {
    if (!expectedValues.includes(value)) {
      message = `has the property ${value} which is not present in the test case`;
      return false;
    }
    return true;
  });
  return { pass, message };
}

/**
 *
 * @param expected
 * @param received
 * @returns
 */
export function assertPropertiesDontExist(
  excludesProperties: string[],
  received: any
): { pass: boolean; message: string } {
  const receivedValues = Object.keys(received as Record<string, any>);
  //return receivedValues.every((value) => !excludesProperties.includes(value));
  let message = "";
  const pass = receivedValues.every((value) => {
    if (excludesProperties.includes(value)) {
      message = `has the excluded property: ${value}`;
      return false;
    }
    return true;
  });
  return { pass, message };
}

type AllItemMatcher = {
  expected: Record<string, any>;
  received: string;
  resourceType: TerraformConstructor;
  assertion: (
    expected: any,
    received: any
  ) => { pass: boolean; message: string };
  strictAssertion?: (
    expected: any,
    received: any
  ) => { pass: boolean; message: string };
  excludedProperties?: string[];
};
type OneItemMatcher = {
  expected: Record<string, any>;
  received: string;
  resourceType: TerraformConstructor;
  resourceId: string;
  assertion: (
    expected: any,
    received: any
  ) => { pass: boolean; message: string };
  strictAssertion?: (
    expected: any,
    received: any
  ) => { pass: boolean; message: string };
  excludedProperties?: string[];
};

/**
 *
 * @param expected
 * @param items
 * @param assertion
 * @returns
 */
function allItemMatches({
  expected,
  received,
  resourceType,
  assertion,
  strictAssertion,
  excludedProperties,
}: AllItemMatcher): { pass: boolean; message: string } {
  const items = findItemsByTypeInStack("resource", received, resourceType);

  let assertionMessage = "";
  const assertionPass = Object.values(items).every((item: any) => {
    const pass = assertion(expected, item);
    assertionMessage = pass.message;
    return pass.pass;
  });

  let strictAssertionMessage = "";
  const strictAssertionPass = strictAssertion
    ? Object.values(items).every((item: any) => {
        const pass = strictAssertion(expected, item);
        if (pass.pass) {
          return pass.pass;
        } else {
          strictAssertionMessage = pass.message;
          return pass.pass;
        }
      })
    : true;

  let excludedPropertiesMessage = "";
  const excludedPropertiesPass = excludedProperties
    ? Object.values(items).every((item: any) => {
        const pass = assertPropertiesDontExist(excludedProperties, item);
        if (pass.pass) {
          return pass.pass;
        } else {
          excludedPropertiesMessage = pass.message;
          return pass.pass;
        }
      })
    : true;

  return {
    pass: assertionPass && strictAssertionPass && excludedPropertiesPass,
    message: `
      ${resourceType.tfResourceType} ${assertionMessage} \n 
      ${resourceType.tfResourceType} ${strictAssertionMessage} \n 
      ${resourceType.tfResourceType} ${excludedPropertiesMessage}\n
    `,
  };
}

/**
 *
 * @param expected
 * @param items
 * @param assertion
 * @returns
 */
function someItemMatches(
  expected: Record<string, any> = {},
  received: string,
  resourceType: TerraformConstructor,
  assertion: (
    expected: unknown,
    received: unknown
  ) => boolean | { pass: boolean; message: string }
): { pass: boolean; message: string } {
  // maybe want to have choice of all or some - all meaning that all resource of type must match, some meaning that at least one resource of type must match
  const items = findItemsByTypeInStack("resource", received, resourceType);
  let message = "";
  const pass = Object.values(items).some((item: any) => {
    const assertionResult = assertion(expected, item);
    if (typeof assertionResult === "boolean") {
      return assertionResult;
    } else {
      if (assertionResult.pass) {
        return true;
      } else {
        message = assertionResult.message;
        return false;
      }
    }
  });
  return { pass, message };
}

/**
 *
 * @param expected
 * @param received
 * @param resourceType
 * @param assertion
 * @returns
 */
function oneItemMatches({
  expected,
  received,
  resourceType,
  resourceId,
  assertion,
  strictAssertion,
  excludedProperties,
}: OneItemMatcher): { pass: boolean; message: string } {
  const item = findItemById("resource", received, resourceType, resourceId);
  if (!item) {
    return {
      pass: false,
      message: `could not find resource with id: ${resourceId}`,
    };
  }
  const assertionPass = assertion(expected, item);
  const strictAssertionPass = strictAssertion
    ? strictAssertion(expected, item)
    : { pass: true, message: "" };
  const excludedPropertiesPass = excludedProperties
    ? assertPropertiesDontExist(excludedProperties, item)
    : { pass: true, message: "" };

  // figure out the return type of assertPropertiesWithEquality, this is very hacky
  return {
    pass:
      assertionPass.pass &&
      strictAssertionPass.pass &&
      excludedPropertiesPass.pass,
    message: `expected: ${JSON.stringify(
      expected,
      null,
      2
    )}\n\nreceived: ${JSON.stringify(item, null, 2)}`,
  };
}

// in the end we will have 3 different evaluation functions,
// some items -> checks if at least one item matches
// all items -> checks if all items of certain resource match
// custom -> plug in current functionality thats present for jest
/**
 * Evaluates the received stack to have the resource resourceType containing specified properties
 * @param received
 * @param resourceType
 * @param assertion
 * @returns {AssertionReturn}
 */
export function toHaveResourceWithProperties(
  received: string,
  resourceType: TerraformConstructor,
  // needs to return a boolean for the pass status and string message about the run of the test
  assertion: (
    received: string,
    resourceType: TerraformConstructor
  ) => { pass: boolean; message: string }
): AssertionReturn {
  const pass = assertion(received, resourceType);

  return {
    pass: pass.pass,
    message: pass.message,
  };
}

/**
 * Fine grain assertions for CDKTF.
 */
export class Assert {
  public static allMatch(
    properties: Record<string, any> = {},
    excludedProperties?: string[]
  ): (
    received: string,
    resourceType: TerraformConstructor
  ) => { pass: boolean; message: string } {
    return function allMatch(
      received: string,
      resourceType: TerraformConstructor
    ): { pass: boolean; message: string } {
      return allItemMatches({
        expected: properties,
        received,
        resourceType,
        assertion: assertPropertiesWithEquality,
        excludedProperties,
      });
    };
  }

  public static someMatch(
    properties: Record<string, any> = {}
  ): (
    received: string,
    resourceType: TerraformConstructor
  ) => { pass: boolean; message: string } {
    return function someMatch(
      received: string,
      resourceType: TerraformConstructor
    ): { pass: boolean; message: string } {
      return someItemMatches(
        properties,
        received,
        resourceType,
        assertPropertiesWithEquality
      );
    };
  }

  // rename - we are matching one item with the given id
  public static oneMatches(
    resourceId: string,
    properties: Record<string, any> = {},
    excludedProperties?: string[]
  ): (
    received: string,
    resourceType: TerraformConstructor
  ) => { pass: boolean; message: string } {
    return function oneMatches(
      received: string,
      resourceType: TerraformConstructor
    ): { pass: boolean; message: string } {
      return oneItemMatches({
        expected: properties,
        received,
        resourceType,
        resourceId,
        assertion: assertPropertiesWithEquality,
        excludedProperties,
      });
    };
  }

  public static isContainedIn(expectedToContain: any[]) {
    return function containedIn(received: any) {
      const pass = expectedToContain.some((item) => {
        const pass = assertPropertiesWithEquality(item, received);
        return pass.pass;
      });
      return { pass: pass, message: "" };
    };
  }

  public static isRegex(regexExpression: string) {
    return function regex(received: any) {
      const regexExp = new RegExp(regexExpression);
      const pass = regexExp.test(received);
      return { pass: pass, message: "" };
    };
  }

  // just have it take on the value of whatever is present?
  public static isAny() {
    // does this need to be a function?
    // maybe we can just return true?
    return function any() {
      return { pass: true, message: "" };
    };
  }

  /**
   * Strict fine grain assertions for CDKTF.
   * Requires that all properties are accounted for in test case.
   */
  // would be nice to be able to reused the functions above here to avoid duplication
  static strict = class {
    public static allMatch(
      properties: Record<string, any> = {},
      excludedProperties?: string[]
    ) {
      return function allMatch(
        received: string,
        resourceType: TerraformConstructor
      ): { pass: boolean; message: string } {
        return allItemMatches({
          expected: properties,
          received,
          resourceType,
          assertion: assertPropertiesWithEquality,
          strictAssertion: assertPropertiesExist,
          excludedProperties,
        });
      };
    }

    public static oneMatches(
      resourceId: string,
      properties: Record<string, any> = {},
      excludedProperties?: string[]
    ): (
      received: string,
      resourceType: TerraformConstructor
    ) => { pass: boolean; message: string } {
      return function oneMatches(
        received: string,
        resourceType: TerraformConstructor
      ): { pass: boolean; message: string } {
        return oneItemMatches({
          expected: properties,
          received,
          resourceType,
          resourceId,
          assertion: assertPropertiesWithEquality,
          strictAssertion: assertPropertiesExist,
          excludedProperties,
        });
      };
    }
  };
}
