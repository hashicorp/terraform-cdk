// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver, onPosix, onWindows } from "../../test-helper";

describe("multiple stacks", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupTypescriptProject();
  });

  describe("CLI-driven workflow", () => {
    test("synth", async () => {
      await driver.synth();
      expect(driver.synthesizedStack("first").toString()).toMatchSnapshot();
      expect(driver.synthesizedStack("second").toString()).toMatchSnapshot();
    });

    test("diff", () => {
      const firstOut = driver.diff("first");
      expect(firstOut).toContain(`null_resource.test`);
      expect(firstOut).toContain(`first`);
      expect(firstOut).not.toContain(`second`);

      const secondOut = driver.diff("second");
      expect(secondOut).toContain(`null_resource.test`);
      expect(secondOut).toContain(`second`);
      expect(secondOut).not.toContain(`first`);

      expect(() => driver.diff()).toThrowError("Found more than one stack");
    });

    onPosix("list posix", () => {
      expect(driver.list()).toMatchInlineSnapshot(`
        "
        Stack name                      Path
        first                           cdktf.out/stacks/first
        second                          cdktf.out/stacks/second
        "
      `);
    });

    onWindows("list windows", () => {
      expect(driver.list()).toMatchInlineSnapshot(`
      "
      Stack name                      Path
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

    test("deploy", async () => {
      expect(await driver.deploy(["first"])).toContain(`Apply complete!`);
      expect(await driver.deploy(["first", "second"])).toContain(
        `Apply complete!`
      );

      expect(driver.deploy()).rejects.toThrowError(
        "Found more than one stack, please specify a target stack. Run cdktf deploy <stack> with one of these stacks: first, second"
      );
    });

    test("destroy", () => {
      expect(driver.destroy(["first", "second"])).toContain(
        `Destroy complete!`
      );

      expect(() => driver.destroy()).toThrowError(
        "Found more than one stack, please specify a target stack. Run cdktf destroy <stack> with one of these stacks: first, second"
      );
    });
  });
});
