// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { onlyJson, TestDriver } from "../../../test-helper";

describe("full integration test", () => {
  describe("deploy", () => {
    onlyJson(
      "build providers",
      async () => {
        const driver = new TestDriver(__dirname);
        await driver.setupTypescriptProject();
        await driver.synth();

        const stack = driver.synthesizedStack("using-all-providers");
        expect(stack.byId("test")).toBeTruthy();
      },
      600_000
    );
  });
});
