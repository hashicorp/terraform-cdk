// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { expectNotGloballyAccessible, jestNotInstantiated } from "../../errors";
import {
  getToHaveDataSourceWithProperties,
  toBeValidTerraform,
  toPlanSuccessfully,
} from "../matchers";
import {
  getToHaveResourceWithProperties,
  getToHaveProviderWithProperties,
  TerraformConstructor,
  MatcherReturnJest,
  returnMatcherToJest,
} from "../matchers";

/* eslint-disable */
declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveResource(resourceConstructor: TerraformConstructor): R;
      toHaveResourceWithProperties(
        resourceConstructor: TerraformConstructor,
        properties: Record<string, any>
      ): R;

      toHaveDataSource(dataSourceConstructor: TerraformConstructor): R;
      toHaveDataSourceWithProperties(
        dataSourceConstructor: TerraformConstructor,
        properties: Record<string, any>
      ): R;

      toHaveProvider(providerConstructor: TerraformConstructor): R;
      toHaveProviderWithProperties(
        providerConstructor: TerraformConstructor,
        properties: Record<string, any>
      ): R;

      toBeValidTerraform(): R;
      toPlanSuccessfully(): R;
    }
  }
}

type JestExpect = {
  extend: (
    matchers: Record<string, (...args: any[]) => MatcherReturnJest>
  ) => void;
};

// Jest supports asymetric matchers (https://github.com/facebook/jest/blob/main/packages/expect/src/asymmetricMatchers.ts)
// These matchers are great in expressing partial equality in a deeply nested way
// As we want to support more than one testing framework we can not use them everywhere
function jestPassEvaluation(
  items: any[],
  assertedProperties: Record<string, any>
): boolean {
  if (Object.entries(assertedProperties).length === 0) {
    return items.length > 0;
  } else {
    if ((global as any).expect) {
      const expect = (global as any).expect;
      return expect
        .arrayContaining([expect.objectContaining(assertedProperties)])
        .asymmetricMatch(items);
    } else {
      throw jestNotInstantiated();
    }
  }
}

export function setupJest() {
  if (!("expect" in global)) {
    throw expectNotGloballyAccessible();
  }

  const expect = (global as any).expect as JestExpect;

  expect.extend({
    toHaveResource(
      received: string,
      resourceConstructor: TerraformConstructor
    ) {
      return returnMatcherToJest(
        getToHaveResourceWithProperties(jestPassEvaluation)(
          received,
          resourceConstructor,
          {}
        )
      );
    },
    toHaveResourceWithProperties(
      received: string,
      resourceConstructor: TerraformConstructor,
      properties: Record<string, any>
    ) {
      return returnMatcherToJest(
        getToHaveResourceWithProperties(jestPassEvaluation)(
          received,
          resourceConstructor,
          properties
        )
      );
    },

    toHaveDataSource(
      received: string,
      dataSourceConstructor: TerraformConstructor
    ) {
      return returnMatcherToJest(
        getToHaveDataSourceWithProperties(jestPassEvaluation)(
          received,
          dataSourceConstructor,
          {}
        )
      );
    },
    toHaveDataSourceWithProperties(
      received: string,
      dataSourceConstructor: TerraformConstructor,
      properties: Record<string, any>
    ) {
      return returnMatcherToJest(
        getToHaveDataSourceWithProperties(jestPassEvaluation)(
          received,
          dataSourceConstructor,
          properties
        )
      );
    },

    toHaveProvider(
      received: string,
      providerConstructor: TerraformConstructor
    ) {
      return returnMatcherToJest(
        getToHaveProviderWithProperties(jestPassEvaluation)(
          received,
          providerConstructor,
          {}
        )
      );
    },
    toHaveProviderWithProperties(
      received: string,
      providerConstructor: TerraformConstructor,
      properties: Record<string, any>
    ) {
      return returnMatcherToJest(
        getToHaveProviderWithProperties(jestPassEvaluation)(
          received,
          providerConstructor,
          properties
        )
      );
    },

    toBeValidTerraform(received: string) {
      return returnMatcherToJest(toBeValidTerraform(received));
    },
    toPlanSuccessfully(received: string) {
      return returnMatcherToJest(toPlanSuccessfully(received));
    },
  });
}
