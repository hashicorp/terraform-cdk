// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";

describe("import block", () => {
  let driverImportFrom: TestDriver;
  let driverImportTo: TestDriver;

  beforeAll(async () => {
    driverImportFrom = new TestDriver(`${__dirname}/importFrom`);
    await driverImportFrom.setupTypescriptProject();

    driverImportTo = new TestDriver(`${__dirname}/importTo`);
    await driverImportTo.setupTypescriptProject();
  }, 600_000);

  test("resource is imported correctly", async () => {
    const result = await driverImportFrom.exec("cat package.json");
    console.log("all the files", result);
    await driverImportFrom.deploy(["ts-import-from"]);

    await driverImportTo.deploy(["ts-import-to"]);

    const res = await driverImportTo.exec(
      "cat $PWD/cdktf.out/stacks/ts-import-to/cdk.tf.json"
    );
    console.log(res);
  }, 600_000);
});
