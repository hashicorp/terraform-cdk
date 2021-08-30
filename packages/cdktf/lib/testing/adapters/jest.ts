import {
  toHaveDataSourceWithProperties,
  toBeValidTerraform,
  toPlanSuccessfully,
} from "../matchers";
import {
  MatcherReturn,
  toHaveResourceWithProperties,
  TerraformConstructor,
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
  extend: (matchers: Record<string, (...args: any[]) => MatcherReturn>) => void;
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
      return toHaveResourceWithProperties(received, resourceConstructor, {});
    },
    toHaveResourceWithProperties(
      received: string,
      resourceConstructor: TerraformConstructor,
      properties: Record<string, any>
    ) {
      return toHaveResourceWithProperties(
        received,
        resourceConstructor,
        properties
      );
    },

    toHaveDataSource(
      received: string,
      dataSourceConstructor: TerraformConstructor
    ) {
      return toHaveDataSourceWithProperties(
        received,
        dataSourceConstructor,
        {}
      );
    },
    toHaveDataSourceWithProperties(
      received: string,
      dataSourceConstructor: TerraformConstructor,
      properties: Record<string, any>
    ) {
      return toHaveDataSourceWithProperties(
        received,
        dataSourceConstructor,
        properties
      );
    },

    toBeValidTerraform(received: string) {
      return toBeValidTerraform(received);
    },
    toPlanSuccessfully(received: string) {
      return toPlanSuccessfully(received);
    },
  });
}
