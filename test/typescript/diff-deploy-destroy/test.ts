import { TestDriver } from "../../test-helper";

describe("full integration test", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupTypescriptProject();
  });

  test("diff", () => {
    expect(driver.diff()).toMatchInlineSnapshot(`
      "Stack: hello-deploy
      Resources
       + NULL_RESOURCE       test                null_resource.test


      Diff: 1 to create, 0 to update, 0 to delete.
      "
    `);
  });

  test("deploy", () => {
    expect(driver.deploy()).toMatchInlineSnapshot(`
      "Deploying Stack: hello-deploy
      Resources
       ✔ NULL_RESOURCE       test                null_resource.test


      Summary: 1 created, 0 updated, 0 destroyed.
      "
    `);
  });

  test("destroy", () => {
    expect(driver.destroy()).toMatchInlineSnapshot(`
      "Destroying Stack: hello-deploy
      Resources
       ✔ NULL_RESOURCE       test                null_resource.test


      Summary: 1 destroyed.
      "
    `);
  });
});
