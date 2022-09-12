// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";

// Since chalk auto-detects the capabilities, colored output is
// deactivated by default in non-tty environments. We had an issue
// in the past, where this turned out to be a problem
// see https://github.com/hashicorp/terraform-cdk/issues/139

describe("test with colors", () => {
  let driver: TestDriver;

  test("build providers", async () => {
    driver = new TestDriver(__dirname, { FORCE_COLOR: "1" });
    driver.switchToTempDir();
    await driver.init("typescript");
  });
});
