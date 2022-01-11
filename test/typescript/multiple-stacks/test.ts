import { TestDriver, onPosix, onWindows } from "../../test-helper";

describe("full integration test", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupTypescriptProject();
  });

  test("synth", async () => {
    await driver.synth();
    expect(driver.synthesizedStack("first").toString()).toMatchSnapshot();
    expect(driver.synthesizedStack("second").toString()).toMatchSnapshot();
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

  onWindows("list windows", () => {
    expect(driver.list()).toMatchInlineSnapshot(`
      "Stack name                      Path
      first                           cdktf.out\\\\stacks\\\\first
      second                          cdktf.out\\\\stacks\\\\second
      "
    `);
  });

  // completions for stacks relies on a manifest.json being present
  // so this test must be run after something that synthesizes and
  // thus writes a Manifest (like e.g. cdktf list)
  test("shell completions complete stacks", async () => {
    const { stdout, stderr } = await driver.exec("cdktf", [
      "--get-yargs-completions",
      "cdktf",
      "diff",
    ]);

    expect(stdout).toContain('first:target stack "first"');
    expect(stdout).toContain('second:target stack "second"');
    expect(stderr).toEqual("");
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
