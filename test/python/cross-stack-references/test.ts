// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  onPosixWithHcl,
  onPosixWithoutHcl,
  onWindowsWithHcl,
  onWindowsWithoutHcl,
  TestDriver,
} from "../../test-helper";

describe("python cross stack references", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupPythonProject();
    await driver.synth();
  });

  onPosixWithoutHcl("synth generates JSON on POSIX", () => {
    expect(driver.manifest()).toMatchInlineSnapshot(`
      "{
        "stacks": {
          "fns": {
            "annotations": [
            ],
            "constructPath": "fns",
            "dependencies": [
              "source"
            ],
            "name": "fns",
            "stackMetadataPath": "stacks/fns/metadata.json",
            "synthesizedStackPath": "stacks/fns/cdk.tf.json",
            "workingDirectory": "stacks/fns"
          },
          "functionOutput": {
            "annotations": [
            ],
            "constructPath": "functionOutput",
            "dependencies": [
              "source"
            ],
            "name": "functionOutput",
            "stackMetadataPath": "stacks/functionOutput/metadata.json",
            "synthesizedStackPath": "stacks/functionOutput/cdk.tf.json",
            "workingDirectory": "stacks/functionOutput"
          },
          "passthrough": {
            "annotations": [
            ],
            "constructPath": "passthrough",
            "dependencies": [
              "source"
            ],
            "name": "passthrough",
            "stackMetadataPath": "stacks/passthrough/metadata.json",
            "synthesizedStackPath": "stacks/passthrough/cdk.tf.json",
            "workingDirectory": "stacks/passthrough"
          },
          "sink": {
            "annotations": [
            ],
            "constructPath": "sink",
            "dependencies": [
              "source"
            ],
            "name": "sink",
            "stackMetadataPath": "stacks/sink/metadata.json",
            "synthesizedStackPath": "stacks/sink/cdk.tf.json",
            "workingDirectory": "stacks/sink"
          },
          "source": {
            "annotations": [
            ],
            "constructPath": "source",
            "dependencies": [
            ],
            "name": "source",
            "stackMetadataPath": "stacks/source/metadata.json",
            "synthesizedStackPath": "stacks/source/cdk.tf.json",
            "workingDirectory": "stacks/source"
          }
        },
        "version": "stubbed"
      }"
    `);
  });

  onPosixWithHcl("synth generates HCL on POSIX", () => {
    expect(driver.manifest()).toMatchInlineSnapshot(`
      "{
        "stacks": {
          "fns": {
            "annotations": [
            ],
            "constructPath": "fns",
            "dependencies": [
              "source"
            ],
            "name": "fns",
            "stackMetadataPath": "stacks/fns/metadata.json",
            "synthesizedStackPath": "stacks/fns/cdk.tf",
            "workingDirectory": "stacks/fns"
          },
          "functionOutput": {
            "annotations": [
            ],
            "constructPath": "functionOutput",
            "dependencies": [
              "source"
            ],
            "name": "functionOutput",
            "stackMetadataPath": "stacks/functionOutput/metadata.json",
            "synthesizedStackPath": "stacks/functionOutput/cdk.tf",
            "workingDirectory": "stacks/functionOutput"
          },
          "passthrough": {
            "annotations": [
            ],
            "constructPath": "passthrough",
            "dependencies": [
              "source"
            ],
            "name": "passthrough",
            "stackMetadataPath": "stacks/passthrough/metadata.json",
            "synthesizedStackPath": "stacks/passthrough/cdk.tf",
            "workingDirectory": "stacks/passthrough"
          },
          "sink": {
            "annotations": [
            ],
            "constructPath": "sink",
            "dependencies": [
              "source"
            ],
            "name": "sink",
            "stackMetadataPath": "stacks/sink/metadata.json",
            "synthesizedStackPath": "stacks/sink/cdk.tf",
            "workingDirectory": "stacks/sink"
          },
          "source": {
            "annotations": [
            ],
            "constructPath": "source",
            "dependencies": [
            ],
            "name": "source",
            "stackMetadataPath": "stacks/source/metadata.json",
            "synthesizedStackPath": "stacks/source/cdk.tf",
            "workingDirectory": "stacks/source"
          }
        },
        "version": "stubbed"
      }"
    `);
  });

  onWindowsWithoutHcl("synth generates JSON on Windows", () => {
    expect(driver.manifest()).toMatchInlineSnapshot(`
      "{
        "stacks": {
          "fns": {
            "annotations": [
            ],
            "constructPath": "fns",
            "dependencies": [
              "source"
            ],
            "name": "fns",
            "stackMetadataPath": "stacks\\\\fns\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\fns\\\\cdk.tf.json",
            "workingDirectory": "stacks\\\\fns"
          },
          "functionOutput": {
            "annotations": [
            ],
            "constructPath": "functionOutput",
            "dependencies": [
              "source"
            ],
            "name": "functionOutput",
            "stackMetadataPath": "stacks\\\\functionOutput\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\functionOutput\\\\cdk.tf.json",
            "workingDirectory": "stacks\\\\functionOutput"
          },
          "passthrough": {
            "annotations": [
            ],
            "constructPath": "passthrough",
            "dependencies": [
              "source"
            ],
            "name": "passthrough",
            "stackMetadataPath": "stacks\\\\passthrough\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\passthrough\\\\cdk.tf.json",
            "workingDirectory": "stacks\\\\passthrough"
          },
          "sink": {
            "annotations": [
            ],
            "constructPath": "sink",
            "dependencies": [
              "source"
            ],
            "name": "sink",
            "stackMetadataPath": "stacks\\\\sink\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\sink\\\\cdk.tf.json",
            "workingDirectory": "stacks\\\\sink"
          },
          "source": {
            "annotations": [
            ],
            "constructPath": "source",
            "dependencies": [
            ],
            "name": "source",
            "stackMetadataPath": "stacks\\\\source\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\source\\\\cdk.tf.json",
            "workingDirectory": "stacks\\\\source"
          }
        },
        "version": "stubbed"
      }"
    `);
  });

  onWindowsWithHcl("synth generates HCL on Windows", () => {
    expect(driver.manifest()).toMatchInlineSnapshot(`
      "{
        "stacks": {
          "fns": {
            "annotations": [
            ],
            "constructPath": "fns",
            "dependencies": [
              "source"
            ],
            "name": "fns",
            "stackMetadataPath": "stacks\\\\fns\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\fns\\\\cdk.tf",
            "workingDirectory": "stacks\\\\fns"
          },
          "functionOutput": {
            "annotations": [
            ],
            "constructPath": "functionOutput",
            "dependencies": [
              "source"
            ],
            "name": "functionOutput",
            "stackMetadataPath": "stacks\\\\functionOutput\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\functionOutput\\\\cdk.tf",
            "workingDirectory": "stacks\\\\functionOutput"
          },
          "passthrough": {
            "annotations": [
            ],
            "constructPath": "passthrough",
            "dependencies": [
              "source"
            ],
            "name": "passthrough",
            "stackMetadataPath": "stacks\\\\passthrough\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\passthrough\\\\cdk.tf",
            "workingDirectory": "stacks\\\\passthrough"
          },
          "sink": {
            "annotations": [
            ],
            "constructPath": "sink",
            "dependencies": [
              "source"
            ],
            "name": "sink",
            "stackMetadataPath": "stacks\\\\sink\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\sink\\\\cdk.tf",
            "workingDirectory": "stacks\\\\sink"
          },
          "source": {
            "annotations": [
            ],
            "constructPath": "source",
            "dependencies": [
            ],
            "name": "source",
            "stackMetadataPath": "stacks\\\\source\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\source\\\\cdk.tf",
            "workingDirectory": "stacks\\\\source"
          }
        },
        "version": "stubbed"
      }"
    `);
  });

  describe("deployed", () => {
    beforeAll(async () => {
      await driver.deploy(["source", "passthrough", "sink"]);
    });

    it("references primitive values", () => {
      expect(driver.readLocalFile("originNum")).toBe(
        driver.readLocalFile("passthroughNum"),
      );
      expect(driver.readLocalFile("originStr")).toBe(
        driver.readLocalFile("passthroughStr"),
      );
    });

    it("references can be passed through stacks", () => {
      expect(driver.readLocalFile("originNum")).toBe(
        driver.readLocalFile("sinkNum"),
      );
      expect(driver.readLocalFile("originStr")).toBe(
        driver.readLocalFile("sinkStr"),
      );
    });

    it("references complex values", () => {
      expect(driver.readLocalFile("originList")).toBe(
        driver.readLocalFile("passthroughList"),
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
