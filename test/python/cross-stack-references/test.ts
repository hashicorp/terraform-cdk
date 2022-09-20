// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { onPosix, onWindows, TestDriver } from "../../test-helper";

describe("python cross stack references", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupPythonProject();
    await driver.synth();
  });

  onPosix("synth generates JSON on POSIX", () => {
    expect(driver.manifest()).toMatchInlineSnapshot(`
      "{
        \\"version\\": \\"stubbed\\",
        \\"stacks\\": {
          \\"source\\": {
            \\"name\\": \\"source\\",
            \\"constructPath\\": \\"source\\",
            \\"workingDirectory\\": \\"stacks/source\\",
            \\"synthesizedStackPath\\": \\"stacks/source/cdk.tf.json\\",
            \\"annotations\\": [],
            \\"dependencies\\": []
          },
          \\"passthrough\\": {
            \\"name\\": \\"passthrough\\",
            \\"constructPath\\": \\"passthrough\\",
            \\"workingDirectory\\": \\"stacks/passthrough\\",
            \\"synthesizedStackPath\\": \\"stacks/passthrough/cdk.tf.json\\",
            \\"annotations\\": [],
            \\"dependencies\\": [
              \\"source\\"
            ]
          },
          \\"sink\\": {
            \\"name\\": \\"sink\\",
            \\"constructPath\\": \\"sink\\",
            \\"workingDirectory\\": \\"stacks/sink\\",
            \\"synthesizedStackPath\\": \\"stacks/sink/cdk.tf.json\\",
            \\"annotations\\": [],
            \\"dependencies\\": [
              \\"source\\"
            ]
          },
          \\"fns\\": {
            \\"name\\": \\"fns\\",
            \\"constructPath\\": \\"fns\\",
            \\"workingDirectory\\": \\"stacks/fns\\",
            \\"synthesizedStackPath\\": \\"stacks/fns/cdk.tf.json\\",
            \\"annotations\\": [],
            \\"dependencies\\": [
              \\"source\\"
            ]
          },
          \\"functionOutput\\": {
            \\"name\\": \\"functionOutput\\",
            \\"constructPath\\": \\"functionOutput\\",
            \\"workingDirectory\\": \\"stacks/functionOutput\\",
            \\"synthesizedStackPath\\": \\"stacks/functionOutput/cdk.tf.json\\",
            \\"annotations\\": [],
            \\"dependencies\\": [
              \\"source\\"
            ]
          }
        }
      }"
    `);
  });

  onWindows("synth generates JSON on Windows", () => {
    expect(driver.manifest()).toMatchInlineSnapshot(`
"{
  \\"version\\": \\"stubbed\\",
  \\"stacks\\": {
    \\"source\\": {
      \\"name\\": \\"source\\",
      \\"constructPath\\": \\"source\\",
      \\"workingDirectory\\": \\"stacks\\\\\\\\source\\",
      \\"synthesizedStackPath\\": \\"stacks\\\\\\\\source\\\\\\\\cdk.tf.json\\",
      \\"annotations\\": [],
      \\"dependencies\\": []
    },
    \\"passthrough\\": {
      \\"name\\": \\"passthrough\\",
      \\"constructPath\\": \\"passthrough\\",
      \\"workingDirectory\\": \\"stacks\\\\\\\\passthrough\\",
      \\"synthesizedStackPath\\": \\"stacks\\\\\\\\passthrough\\\\\\\\cdk.tf.json\\",
      \\"annotations\\": [],
      \\"dependencies\\": [
        \\"source\\"
      ]
    },
    \\"sink\\": {
      \\"name\\": \\"sink\\",
      \\"constructPath\\": \\"sink\\",
      \\"workingDirectory\\": \\"stacks\\\\\\\\sink\\",
      \\"synthesizedStackPath\\": \\"stacks\\\\\\\\sink\\\\\\\\cdk.tf.json\\",
      \\"annotations\\": [],
      \\"dependencies\\": [
        \\"source\\"
      ]
    },
    \\"fns\\": {
      \\"name\\": \\"fns\\",
      \\"constructPath\\": \\"fns\\",
      \\"workingDirectory\\": \\"stacks\\\\\\\\fns\\",
      \\"synthesizedStackPath\\": \\"stacks\\\\\\\\fns\\\\\\\\cdk.tf.json\\",
      \\"annotations\\": [],
      \\"dependencies\\": [
        \\"source\\"
      ]
    },
    \\"functionOutput\\": {
      \\"name\\": \\"functionOutput\\",
      \\"constructPath\\": \\"functionOutput\\",
      \\"workingDirectory\\": \\"stacks\\\\\\\\functionOutput\\",
      \\"synthesizedStackPath\\": \\"stacks\\\\\\\\functionOutput\\\\\\\\cdk.tf.json\\",
      \\"annotations\\": [],
      \\"dependencies\\": [
        \\"source\\"
      ]
    }
  }
}"
`);
  });

  describe("deployed", () => {
    beforeAll(async () => {
      await driver.deploy(["source", "passthrough", "sink"]);
    });

    it("references primitive values", () => {
      expect(driver.readLocalFile("originNum")).toBe(
        driver.readLocalFile("passthroughNum")
      );
      expect(driver.readLocalFile("originStr")).toBe(
        driver.readLocalFile("passthroughStr")
      );
    });

    it("references can be passed through stacks", () => {
      expect(driver.readLocalFile("originNum")).toBe(
        driver.readLocalFile("sinkNum")
      );
      expect(driver.readLocalFile("originStr")).toBe(
        driver.readLocalFile("sinkStr")
      );
    });

    it("references complex values", () => {
      expect(driver.readLocalFile("originList")).toBe(
        driver.readLocalFile("passthroughList")
      );
    });

    describe("terraform functions", () => {
      beforeAll(async () => {
        await driver.deploy([
          "source",
          "passthrough",
          "sink",
          "fns",
          "functionOutput",
        ]);
      });

      it("can use reference in terraform function", () => {
        // num: Fn.sum([src.num, src.num]),
        const originNum = parseInt(driver.readLocalFile("originNum"), 10);
        const result = parseInt(driver.readLocalFile("fnsNum"), 10);

        expect(originNum * 2).toBe(result);
      });

      it("can use references from two stacks", () => {
        // str: Fn.join(",", [src.str, passthrough.str]),
        const originStr = driver.readLocalFile("originStr");
        const passthroughStr = driver.readLocalFile("passthroughStr");

        const result = driver.readLocalFile("fnsStr");
        expect(`${originStr},${passthroughStr}`).toBe(result);
      });

      it("references terraform function output", () => {
        const originNum = parseInt(driver.readLocalFile("originNum"), 10);
        const result = parseInt(driver.readLocalFile("functionOutputNum"), 10);

        expect(originNum * 2).toBe(result);
      });
    });
  });
});
