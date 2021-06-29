//
// Testing a full cycle of diff, deploy and destroy
//
// @group typescript
//
import { TestDriver } from "../../test-helper";

const onWindows = process.platform === "win32" ? it : it.skip;
const onPosix = process.platform !== "win32" ? it : it.skip;

describe("full integration test", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupTypescriptProject();
  });

  test("synth", async () => {
    await driver.synth();
    expect(driver.synthesizedStack("first")).toMatchSnapshot();
    expect(driver.synthesizedStack("second")).toMatchSnapshot();
  });

  test("synth with json output", async () => {
    expect((await driver.synth("--json")).stdout).toMatchSnapshot();
  });

  test("diff", () => {
    expect(driver.diff("first")).toMatchInlineSnapshot(`
      "Stack: first
      Resources
       + NULL_RESOURCE       test                null_resource.test


      Diff: 1 to create, 0 to update, 0 to delete.
      "
    `);

    expect(driver.diff("second")).toMatchInlineSnapshot(`
      "Stack: second
      Resources
       + NULL_RESOURCE       test                null_resource.test


      Diff: 1 to create, 0 to update, 0 to delete.
      "
    `);

    expect(() => driver.diff()).toThrowError("Found more than one stack");
  });

  onPosix("list posix", () => {
    expect(driver.list()).toMatchInlineSnapshot(`
      "Stack name                      Path
      first                           cdktf.out/stacks/first
      second                          cdktf.out/stacks/second
      "
    `);
  });

  // onWindows() - disabled temporarily
  it.skip("list windows", () => {
    expect(driver.list()).toMatchInlineSnapshot(`
      "Stack name                      Path
      first                           cdktf.out\\stacks\\first
      second                          cdktf.out\\stacks\\second
      "
    `);
  });

  test("deploy", () => {
    expect(driver.deploy("first")).toMatchInlineSnapshot(`
      "Deploying Stack: first
      Resources
       ✔ NULL_RESOURCE       test                null_resource.test


      Summary: 1 created, 0 updated, 0 destroyed.
      "
    `);

    expect(driver.deploy("second")).toMatchInlineSnapshot(`
      "Deploying Stack: second
      Resources
       ✔ NULL_RESOURCE       test                null_resource.test


      Summary: 1 created, 0 updated, 0 destroyed.
      "
    `);

    expect(() => driver.deploy()).toThrowError(
      "Found more than one stack, please specify a target stack. Run cdktf <verb> <stack> with one of these stacks: first, second"
    );
  });

  test("destroy", () => {
    expect(driver.destroy("first")).toMatchInlineSnapshot(`
      "Destroying Stack: first
      Resources
       ✔ NULL_RESOURCE       test                null_resource.test


      Summary: 1 destroyed.
      "
    `);

    expect(driver.destroy("second")).toMatchInlineSnapshot(`
      "Destroying Stack: second
      Resources
       ✔ NULL_RESOURCE       test                null_resource.test


      Summary: 1 destroyed.
      "
    `);

    expect(() => driver.destroy()).toThrowError(
      "Found more than one stack, please specify a target stack. Run cdktf <verb> <stack> with one of these stacks: first, second"
    );
  });
});
