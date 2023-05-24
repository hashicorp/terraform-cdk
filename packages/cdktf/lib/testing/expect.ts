// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  getToHaveDataSourceWithProperties,
  getToHaveProviderWithProperties,
  getToHaveResourceWithProperties,
  MatcherReturnExpect,
  returnMatcherToExpect,
  TerraformConstructor,
  toBeValidTerraform,
  toPlanSuccessfully,
} from "./matchers";

export interface ExpectLike {
  extend: (
    matchers: Record<string, (...args: any[]) => MatcherReturnExpect>
  ) => void;
}

export interface CdktfExpectMatchers<R = unknown> {
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

/**
 * Both Jest and Vitest supports assymetric matchers (see [Jest docs](https://jestjs.io/docs/expect#asymmetric-matchers) or [Vitest docs](https://vitest.dev/guide/extending-matchers.html#extending-matchers)).
 * These matchers are great in expressing partial equality in a deeply nested way.
 * As we might want to support more testing frameworks than just Jest and Vitest we can not use them everywhere.
 */
function createExpectPassEvaluation(expect: ExpectLike) {
  return (items: any[], assertedProperties: Record<string, any>): boolean => {
    if (Object.entries(assertedProperties).length === 0) {
      return items.length > 0;
    } else {
      const { arrayContaining, objectContaining } = expect as any;
      return arrayContaining([
        objectContaining(assertedProperties),
      ]).asymmetricMatch(items);
    }
  };
}

/**
 * Extends the expect function of Jest or Vitest with CDKTF specific matchers.
 */
export function extendExpect(expect: ExpectLike) {
  const expectPassEvaluation = createExpectPassEvaluation(expect);

  expect.extend({
    toHaveResource(
      received: string,
      resourceConstructor: TerraformConstructor
    ) {
      return returnMatcherToExpect(
        getToHaveResourceWithProperties(expectPassEvaluation)(
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
      return returnMatcherToExpect(
        getToHaveResourceWithProperties(expectPassEvaluation)(
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
      return returnMatcherToExpect(
        getToHaveDataSourceWithProperties(expectPassEvaluation)(
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
      return returnMatcherToExpect(
        getToHaveDataSourceWithProperties(expectPassEvaluation)(
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
      return returnMatcherToExpect(
        getToHaveProviderWithProperties(expectPassEvaluation)(
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
      return returnMatcherToExpect(
        getToHaveProviderWithProperties(expectPassEvaluation)(
          received,
          providerConstructor,
          properties
        )
      );
    },

    toBeValidTerraform(received: string) {
      return returnMatcherToExpect(toBeValidTerraform(received));
    },
    toPlanSuccessfully(received: string) {
      return returnMatcherToExpect(toPlanSuccessfully(received));
    },
  });
}
