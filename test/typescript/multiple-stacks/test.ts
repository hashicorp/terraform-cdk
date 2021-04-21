/**
 * Testing a full cycle of diff, deploy and destroy
 *
 * @group typescript
 */

import { TestDriver } from "../../test-helper";

describe("full integration test", () => {
  let driver: TestDriver;

  beforeAll(() => {
    driver = new TestDriver(__dirname)
    driver.setupTypescriptProject()
  });

  test("synth", () => {
    driver.synth()
    expect(driver.synthesizedStack('first')).toMatchSnapshot()
    expect(driver.synthesizedStack('second')).toMatchSnapshot()
  });

  test("synth with json output", () => {
    expect(driver.synth('--json')).toMatchSnapshot()
  });

  test("diff", () => {
    expect(driver.diff('first')).toMatchInlineSnapshot(`
      "Stack: first
      Resources
       + NULL_RESOURCE       test                null_resource.test


      Diff: 1 to create, 0 to update, 0 to delete.
      "
    `);


    expect(driver.diff('second')).toMatchInlineSnapshot(`
      "Stack: second
      Resources
       + NULL_RESOURCE       test                null_resource.test


      Diff: 1 to create, 0 to update, 0 to delete.
      "
    `);

    expect(() => driver.diff()).toThrowError('Found more than one stack')
  });

  test("list", () => {
    expect(driver.list()).toMatchInlineSnapshot(`
      "Stack name                      Path
      first                           cdktf.out/stacks/first
      second                          cdktf.out/stacks/second
      "
    `);
  });

  test("deploy", () => {
    expect(driver.deploy('first')).toMatchInlineSnapshot(`
      "Deploying Stack: first
      Resources
       ✔ NULL_RESOURCE       test                null_resource.test


      Summary: 1 created, 0 updated, 0 destroyed.
      "
    `);

    expect(driver.deploy('second')).toMatchInlineSnapshot(`
      "Deploying Stack: second
      Resources
       ✔ NULL_RESOURCE       test                null_resource.test


      Summary: 1 created, 0 updated, 0 destroyed.
      "
    `);

    let error;
    try { driver.deploy() } catch(e) { error = e.message }
    expect(error).toMatch('Found more than one stack, please specify a target stack first, second');
  });

  test("destroy", () => {
    expect(driver.destroy('first')).toMatchInlineSnapshot(`
      "Destroying Stack: first
      Resources
       ✔ NULL_RESOURCE       test                null_resource.test


      Summary: 1 destroyed.
      "
    `);

    expect(driver.destroy('second')).toMatchInlineSnapshot(`
      "Destroying Stack: second
      Resources
       ✔ NULL_RESOURCE       test                null_resource.test


      Summary: 1 destroyed.
      "
    `);

    let error;
    try { driver.destroy() } catch(e) { error = e.message }
    expect(error).toMatch('Found more than one stack, please specify a target stack first, second');
  });
});
