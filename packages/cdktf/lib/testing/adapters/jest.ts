import {
  Matchers,
  TerraformConstructor,
  JestMatcherReturn,
  matcherReturnToJest,
} from "../matchers";

/* eslint-disable */
declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveResource(TerraformConstructor: string): R;
      toHaveResourceWithProperties(
        resourceConstructor: TerraformConstructor,
        properties: Record<string, any>
      ): R;

      toHaveDataSource(dataSourceConstructor: TerraformConstructor): R;
      toHaveResourceWithProperties(
        resourceConstructor: TerraformConstructor,
        properties: Record<string, any>
      ): R;

      toBeValidTerraform(): R;
      toPlanSuccessfully(): R;
    }
  }
}

type JestExpect = {
  extend: (
    matchers: Record<string, (...args: any[]) => JestMatcherReturn>
  ) => void;
};

export function setupJest() {
  if (!("expect" in global)) {
    throw new Error("setupJest called, but expect is not globally accessible");
  }

  const expect = (global as any).expect as JestExpect;

  expect.extend({
    toHaveResource(
      received: string,
      resourceConstructor: TerraformConstructor
    ) {
      return matcherReturnToJest(
        Matchers.toHaveResourceWithProperties(received, resourceConstructor, {})
      );
    },
    toHaveResourceWithProperties(
      received: string,
      resourceConstructor: TerraformConstructor,
      properties: Record<string, any>
    ) {
      return matcherReturnToJest(
        Matchers.toHaveResourceWithProperties(
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
      return matcherReturnToJest(
        Matchers.toHaveDataSourceWithProperties(
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
      return matcherReturnToJest(
        Matchers.toHaveDataSourceWithProperties(
          received,
          dataSourceConstructor,
          properties
        )
      );
    },

    toBeValidTerraform(received: string) {
      return matcherReturnToJest(Matchers.toBeValidTerraform(received));
    },
    toPlanSuccessfully(received: string) {
      return matcherReturnToJest(Matchers.toPlanSuccessfully(received));
    },
  });
}
