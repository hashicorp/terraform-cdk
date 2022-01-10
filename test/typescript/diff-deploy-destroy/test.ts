import { TestDriver } from "../../test-helper";

describe("full integration test", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupTypescriptProject();
  });

  test("diff", () => {
    expect(driver.diff()).toMatchInlineSnapshot(`
      "Stack: [1mhello-deploy[22m
      [1mResources[22m
       [32m+ [39mNULL_RESOURCE       test                [90mnull_resource.test[39m


      [1mDiff: [22m1 to create, 0 to update, 0 to delete.
      "
    `);
  });

  test("deploy", () => {
    expect(driver.deploy()).toMatchInlineSnapshot(`
      "Deploying Stack: [1mhello-deploy[22m
      [1mResources[22m
       [32m✔ [39mNULL_RESOURCE       test                [90mnull_resource.test[39m


      [1mSummary: [22m1 created, 0 updated, 0 destroyed.
      "
    `);
  });

  test("destroy", () => {
    expect(driver.destroy()).toMatchInlineSnapshot(`
      "Destroying Stack: [1mhello-deploy[22m
      [1mResources[22m
       [31m✔ [39mNULL_RESOURCE       test                [90mnull_resource.test[39m


      [1mSummary: [22m1 destroyed.
      "
    `);
  });
});
