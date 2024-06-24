// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  TestDriver,
  onPosixWithHcl,
  onPosixWithoutHcl,
  onWindowsWithHcl,
  onWindowsWithoutHcl,
} from "../../test-helper";

describe("cross stack references", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupTypescriptProject();
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
              "origin"
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
              "origin"
            ],
            "name": "functionOutput",
            "stackMetadataPath": "stacks/functionOutput/metadata.json",
            "synthesizedStackPath": "stacks/functionOutput/cdk.tf.json",
            "workingDirectory": "stacks/functionOutput"
          },
          "functionOutputPinned": {
            "annotations": [
            ],
            "constructPath": "functionOutputPinned",
            "dependencies": [
              "pinnedFns"
            ],
            "name": "functionOutputPinned",
            "stackMetadataPath": "stacks/functionOutputPinned/metadata.json",
            "synthesizedStackPath": "stacks/functionOutputPinned/cdk.tf.json",
            "workingDirectory": "stacks/functionOutputPinned"
          },
          "origin": {
            "annotations": [
            ],
            "constructPath": "origin",
            "dependencies": [
            ],
            "name": "origin",
            "stackMetadataPath": "stacks/origin/metadata.json",
            "synthesizedStackPath": "stacks/origin/cdk.tf.json",
            "workingDirectory": "stacks/origin"
          },
          "passthrough": {
            "annotations": [
            ],
            "constructPath": "passthrough",
            "dependencies": [
              "origin"
            ],
            "name": "passthrough",
            "stackMetadataPath": "stacks/passthrough/metadata.json",
            "synthesizedStackPath": "stacks/passthrough/cdk.tf.json",
            "workingDirectory": "stacks/passthrough"
          },
          "pinnedFns": {
            "annotations": [
            ],
            "constructPath": "pinnedFns",
            "dependencies": [
              "origin"
            ],
            "name": "pinnedFns",
            "stackMetadataPath": "stacks/pinnedFns/metadata.json",
            "synthesizedStackPath": "stacks/pinnedFns/cdk.tf.json",
            "workingDirectory": "stacks/pinnedFns"
          },
          "secondOrigin": {
            "annotations": [
            ],
            "constructPath": "secondOrigin",
            "dependencies": [
            ],
            "name": "secondOrigin",
            "stackMetadataPath": "stacks/secondOrigin/metadata.json",
            "synthesizedStackPath": "stacks/secondOrigin/cdk.tf.json",
            "workingDirectory": "stacks/secondOrigin"
          },
          "sink": {
            "annotations": [
            ],
            "constructPath": "sink",
            "dependencies": [
              "origin"
            ],
            "name": "sink",
            "stackMetadataPath": "stacks/sink/metadata.json",
            "synthesizedStackPath": "stacks/sink/cdk.tf.json",
            "workingDirectory": "stacks/sink"
          },
          "switchedStack": {
            "annotations": [
            ],
            "constructPath": "switchedStack",
            "dependencies": [
            ],
            "name": "switchedStack",
            "stackMetadataPath": "stacks/switchedStack/metadata.json",
            "synthesizedStackPath": "stacks/switchedStack/cdk.tf.json",
            "workingDirectory": "stacks/switchedStack"
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
              "origin"
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
              "origin"
            ],
            "name": "functionOutput",
            "stackMetadataPath": "stacks/functionOutput/metadata.json",
            "synthesizedStackPath": "stacks/functionOutput/cdk.tf",
            "workingDirectory": "stacks/functionOutput"
          },
          "functionOutputPinned": {
            "annotations": [
            ],
            "constructPath": "functionOutputPinned",
            "dependencies": [
              "pinnedFns"
            ],
            "name": "functionOutputPinned",
            "stackMetadataPath": "stacks/functionOutputPinned/metadata.json",
            "synthesizedStackPath": "stacks/functionOutputPinned/cdk.tf",
            "workingDirectory": "stacks/functionOutputPinned"
          },
          "origin": {
            "annotations": [
            ],
            "constructPath": "origin",
            "dependencies": [
            ],
            "name": "origin",
            "stackMetadataPath": "stacks/origin/metadata.json",
            "synthesizedStackPath": "stacks/origin/cdk.tf",
            "workingDirectory": "stacks/origin"
          },
          "passthrough": {
            "annotations": [
            ],
            "constructPath": "passthrough",
            "dependencies": [
              "origin"
            ],
            "name": "passthrough",
            "stackMetadataPath": "stacks/passthrough/metadata.json",
            "synthesizedStackPath": "stacks/passthrough/cdk.tf",
            "workingDirectory": "stacks/passthrough"
          },
          "pinnedFns": {
            "annotations": [
            ],
            "constructPath": "pinnedFns",
            "dependencies": [
              "origin"
            ],
            "name": "pinnedFns",
            "stackMetadataPath": "stacks/pinnedFns/metadata.json",
            "synthesizedStackPath": "stacks/pinnedFns/cdk.tf",
            "workingDirectory": "stacks/pinnedFns"
          },
          "secondOrigin": {
            "annotations": [
            ],
            "constructPath": "secondOrigin",
            "dependencies": [
            ],
            "name": "secondOrigin",
            "stackMetadataPath": "stacks/secondOrigin/metadata.json",
            "synthesizedStackPath": "stacks/secondOrigin/cdk.tf",
            "workingDirectory": "stacks/secondOrigin"
          },
          "sink": {
            "annotations": [
            ],
            "constructPath": "sink",
            "dependencies": [
              "origin"
            ],
            "name": "sink",
            "stackMetadataPath": "stacks/sink/metadata.json",
            "synthesizedStackPath": "stacks/sink/cdk.tf",
            "workingDirectory": "stacks/sink"
          },
          "switchedStack": {
            "annotations": [
            ],
            "constructPath": "switchedStack",
            "dependencies": [
            ],
            "name": "switchedStack",
            "stackMetadataPath": "stacks/switchedStack/metadata.json",
            "synthesizedStackPath": "stacks/switchedStack/cdk.tf",
            "workingDirectory": "stacks/switchedStack"
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
              "origin"
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
              "origin"
            ],
            "name": "functionOutput",
            "stackMetadataPath": "stacks\\\\functionOutput\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\functionOutput\\\\cdk.tf.json",
            "workingDirectory": "stacks\\\\functionOutput"
          },
          "functionOutputPinned": {
            "annotations": [
            ],
            "constructPath": "functionOutputPinned",
            "dependencies": [
              "pinnedFns"
            ],
            "name": "functionOutputPinned",
            "stackMetadataPath": "stacks\\\\functionOutputPinned\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\functionOutputPinned\\\\cdk.tf.json",
            "workingDirectory": "stacks\\\\functionOutputPinned"
          },
          "origin": {
            "annotations": [
            ],
            "constructPath": "origin",
            "dependencies": [
            ],
            "name": "origin",
            "stackMetadataPath": "stacks\\\\origin\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\origin\\\\cdk.tf.json",
            "workingDirectory": "stacks\\\\origin"
          },
          "passthrough": {
            "annotations": [
            ],
            "constructPath": "passthrough",
            "dependencies": [
              "origin"
            ],
            "name": "passthrough",
            "stackMetadataPath": "stacks\\\\passthrough\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\passthrough\\\\cdk.tf.json",
            "workingDirectory": "stacks\\\\passthrough"
          },
          "pinnedFns": {
            "annotations": [
            ],
            "constructPath": "pinnedFns",
            "dependencies": [
              "origin"
            ],
            "name": "pinnedFns",
            "stackMetadataPath": "stacks\\\\pinnedFns\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\pinnedFns\\\\cdk.tf.json",
            "workingDirectory": "stacks\\\\pinnedFns"
          },
          "secondOrigin": {
            "annotations": [
            ],
            "constructPath": "secondOrigin",
            "dependencies": [
            ],
            "name": "secondOrigin",
            "stackMetadataPath": "stacks\\\\secondOrigin\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\secondOrigin\\\\cdk.tf.json",
            "workingDirectory": "stacks\\\\secondOrigin"
          },
          "sink": {
            "annotations": [
            ],
            "constructPath": "sink",
            "dependencies": [
              "origin"
            ],
            "name": "sink",
            "stackMetadataPath": "stacks\\\\sink\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\sink\\\\cdk.tf.json",
            "workingDirectory": "stacks\\\\sink"
          },
          "switchedStack": {
            "annotations": [
            ],
            "constructPath": "switchedStack",
            "dependencies": [
            ],
            "name": "switchedStack",
            "stackMetadataPath": "stacks\\\\switchedStack\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\switchedStack\\\\cdk.tf.json",
            "workingDirectory": "stacks\\\\switchedStack"
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
              "origin"
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
              "origin"
            ],
            "name": "functionOutput",
            "stackMetadataPath": "stacks\\\\functionOutput\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\functionOutput\\\\cdk.tf",
            "workingDirectory": "stacks\\\\functionOutput"
          },
          "functionOutputPinned": {
            "annotations": [
            ],
            "constructPath": "functionOutputPinned",
            "dependencies": [
              "pinnedFns"
            ],
            "name": "functionOutputPinned",
            "stackMetadataPath": "stacks\\\\functionOutputPinned\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\functionOutputPinned\\\\cdk.tf",
            "workingDirectory": "stacks\\\\functionOutputPinned"
          },
          "origin": {
            "annotations": [
            ],
            "constructPath": "origin",
            "dependencies": [
            ],
            "name": "origin",
            "stackMetadataPath": "stacks\\\\origin\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\origin\\\\cdk.tf",
            "workingDirectory": "stacks\\\\origin"
          },
          "passthrough": {
            "annotations": [
            ],
            "constructPath": "passthrough",
            "dependencies": [
              "origin"
            ],
            "name": "passthrough",
            "stackMetadataPath": "stacks\\\\passthrough\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\passthrough\\\\cdk.tf",
            "workingDirectory": "stacks\\\\passthrough"
          },
          "pinnedFns": {
            "annotations": [
            ],
            "constructPath": "pinnedFns",
            "dependencies": [
              "origin"
            ],
            "name": "pinnedFns",
            "stackMetadataPath": "stacks\\\\pinnedFns\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\pinnedFns\\\\cdk.tf",
            "workingDirectory": "stacks\\\\pinnedFns"
          },
          "secondOrigin": {
            "annotations": [
            ],
            "constructPath": "secondOrigin",
            "dependencies": [
            ],
            "name": "secondOrigin",
            "stackMetadataPath": "stacks\\\\secondOrigin\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\secondOrigin\\\\cdk.tf",
            "workingDirectory": "stacks\\\\secondOrigin"
          },
          "sink": {
            "annotations": [
            ],
            "constructPath": "sink",
            "dependencies": [
              "origin"
            ],
            "name": "sink",
            "stackMetadataPath": "stacks\\\\sink\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\sink\\\\cdk.tf",
            "workingDirectory": "stacks\\\\sink"
          },
          "switchedStack": {
            "annotations": [
            ],
            "constructPath": "switchedStack",
            "dependencies": [
            ],
            "name": "switchedStack",
            "stackMetadataPath": "stacks\\\\switchedStack\\\\metadata.json",
            "synthesizedStackPath": "stacks\\\\switchedStack\\\\cdk.tf",
            "workingDirectory": "stacks\\\\switchedStack"
          }
        },
        "version": "stubbed"
      }"
    `);
  });

  describe("deployed", () => {
    beforeAll(async () => {
      await driver.deploy(["origin", "passthrough", "sink"]);
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
          "origin",
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

    // Check for Deadly embrace scenario: https://github.com/aws/aws-cdk/pull/12778
    onPosixWithoutHcl(
      "can remove references to deployed stacks on POSIX",
      async () => {
        driver.setEnv("SWITCH_STACK", "on");
        console.log(driver.workingDirectory);
        await driver.deploy(["secondOrigin", "switchedStack"]);

        expect(driver.manifest()).toMatchInlineSnapshot(`
          "{
            "stacks": {
              "fns": {
                "annotations": [
                ],
                "constructPath": "fns",
                "dependencies": [
                  "origin"
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
                  "origin"
                ],
                "name": "functionOutput",
                "stackMetadataPath": "stacks/functionOutput/metadata.json",
                "synthesizedStackPath": "stacks/functionOutput/cdk.tf.json",
                "workingDirectory": "stacks/functionOutput"
              },
              "functionOutputPinned": {
                "annotations": [
                ],
                "constructPath": "functionOutputPinned",
                "dependencies": [
                  "pinnedFns"
                ],
                "name": "functionOutputPinned",
                "stackMetadataPath": "stacks/functionOutputPinned/metadata.json",
                "synthesizedStackPath": "stacks/functionOutputPinned/cdk.tf.json",
                "workingDirectory": "stacks/functionOutputPinned"
              },
              "origin": {
                "annotations": [
                ],
                "constructPath": "origin",
                "dependencies": [
                ],
                "name": "origin",
                "stackMetadataPath": "stacks/origin/metadata.json",
                "synthesizedStackPath": "stacks/origin/cdk.tf.json",
                "workingDirectory": "stacks/origin"
              },
              "passthrough": {
                "annotations": [
                ],
                "constructPath": "passthrough",
                "dependencies": [
                  "origin"
                ],
                "name": "passthrough",
                "stackMetadataPath": "stacks/passthrough/metadata.json",
                "synthesizedStackPath": "stacks/passthrough/cdk.tf.json",
                "workingDirectory": "stacks/passthrough"
              },
              "pinnedFns": {
                "annotations": [
                ],
                "constructPath": "pinnedFns",
                "dependencies": [
                  "origin"
                ],
                "name": "pinnedFns",
                "stackMetadataPath": "stacks/pinnedFns/metadata.json",
                "synthesizedStackPath": "stacks/pinnedFns/cdk.tf.json",
                "workingDirectory": "stacks/pinnedFns"
              },
              "secondOrigin": {
                "annotations": [
                ],
                "constructPath": "secondOrigin",
                "dependencies": [
                ],
                "name": "secondOrigin",
                "stackMetadataPath": "stacks/secondOrigin/metadata.json",
                "synthesizedStackPath": "stacks/secondOrigin/cdk.tf.json",
                "workingDirectory": "stacks/secondOrigin"
              },
              "sink": {
                "annotations": [
                ],
                "constructPath": "sink",
                "dependencies": [
                  "origin"
                ],
                "name": "sink",
                "stackMetadataPath": "stacks/sink/metadata.json",
                "synthesizedStackPath": "stacks/sink/cdk.tf.json",
                "workingDirectory": "stacks/sink"
              },
              "switchedStack": {
                "annotations": [
                ],
                "constructPath": "switchedStack",
                "dependencies": [
                  "secondOrigin"
                ],
                "name": "switchedStack",
                "stackMetadataPath": "stacks/switchedStack/metadata.json",
                "synthesizedStackPath": "stacks/switchedStack/cdk.tf.json",
                "workingDirectory": "stacks/switchedStack"
              }
            },
            "version": "stubbed"
          }"
        `);

        driver.setEnv("SWITCH_STACK", undefined);
        await driver.deploy(["secondOrigin", "switchedStack"]);
        expect(driver.manifest()).toMatchInlineSnapshot(`
          "{
            "stacks": {
              "fns": {
                "annotations": [
                ],
                "constructPath": "fns",
                "dependencies": [
                  "origin"
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
                  "origin"
                ],
                "name": "functionOutput",
                "stackMetadataPath": "stacks/functionOutput/metadata.json",
                "synthesizedStackPath": "stacks/functionOutput/cdk.tf.json",
                "workingDirectory": "stacks/functionOutput"
              },
              "functionOutputPinned": {
                "annotations": [
                ],
                "constructPath": "functionOutputPinned",
                "dependencies": [
                  "pinnedFns"
                ],
                "name": "functionOutputPinned",
                "stackMetadataPath": "stacks/functionOutputPinned/metadata.json",
                "synthesizedStackPath": "stacks/functionOutputPinned/cdk.tf.json",
                "workingDirectory": "stacks/functionOutputPinned"
              },
              "origin": {
                "annotations": [
                ],
                "constructPath": "origin",
                "dependencies": [
                ],
                "name": "origin",
                "stackMetadataPath": "stacks/origin/metadata.json",
                "synthesizedStackPath": "stacks/origin/cdk.tf.json",
                "workingDirectory": "stacks/origin"
              },
              "passthrough": {
                "annotations": [
                ],
                "constructPath": "passthrough",
                "dependencies": [
                  "origin"
                ],
                "name": "passthrough",
                "stackMetadataPath": "stacks/passthrough/metadata.json",
                "synthesizedStackPath": "stacks/passthrough/cdk.tf.json",
                "workingDirectory": "stacks/passthrough"
              },
              "pinnedFns": {
                "annotations": [
                ],
                "constructPath": "pinnedFns",
                "dependencies": [
                  "origin"
                ],
                "name": "pinnedFns",
                "stackMetadataPath": "stacks/pinnedFns/metadata.json",
                "synthesizedStackPath": "stacks/pinnedFns/cdk.tf.json",
                "workingDirectory": "stacks/pinnedFns"
              },
              "secondOrigin": {
                "annotations": [
                ],
                "constructPath": "secondOrigin",
                "dependencies": [
                ],
                "name": "secondOrigin",
                "stackMetadataPath": "stacks/secondOrigin/metadata.json",
                "synthesizedStackPath": "stacks/secondOrigin/cdk.tf.json",
                "workingDirectory": "stacks/secondOrigin"
              },
              "sink": {
                "annotations": [
                ],
                "constructPath": "sink",
                "dependencies": [
                  "origin"
                ],
                "name": "sink",
                "stackMetadataPath": "stacks/sink/metadata.json",
                "synthesizedStackPath": "stacks/sink/cdk.tf.json",
                "workingDirectory": "stacks/sink"
              },
              "switchedStack": {
                "annotations": [
                ],
                "constructPath": "switchedStack",
                "dependencies": [
                ],
                "name": "switchedStack",
                "stackMetadataPath": "stacks/switchedStack/metadata.json",
                "synthesizedStackPath": "stacks/switchedStack/cdk.tf.json",
                "workingDirectory": "stacks/switchedStack"
              }
            },
            "version": "stubbed"
          }"
        `);
      }
    );

    onWindowsWithoutHcl(
      "can remove references to deployed stacks on Windows",
      async () => {
        driver.setEnv("SWITCH_STACK", "on");
        console.log(driver.workingDirectory);
        await driver.deploy(["secondOrigin", "switchedStack"]);

        expect(driver.manifest()).toMatchInlineSnapshot(`
          "{
            "stacks": {
              "fns": {
                "annotations": [
                ],
                "constructPath": "fns",
                "dependencies": [
                  "origin"
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
                  "origin"
                ],
                "name": "functionOutput",
                "stackMetadataPath": "stacks\\\\functionOutput\\\\metadata.json",
                "synthesizedStackPath": "stacks\\\\functionOutput\\\\cdk.tf.json",
                "workingDirectory": "stacks\\\\functionOutput"
              },
              "functionOutputPinned": {
                "annotations": [
                ],
                "constructPath": "functionOutputPinned",
                "dependencies": [
                  "pinnedFns"
                ],
                "name": "functionOutputPinned",
                "stackMetadataPath": "stacks\\\\functionOutputPinned\\\\metadata.json",
                "synthesizedStackPath": "stacks\\\\functionOutputPinned\\\\cdk.tf.json",
                "workingDirectory": "stacks\\\\functionOutputPinned"
              },
              "origin": {
                "annotations": [
                ],
                "constructPath": "origin",
                "dependencies": [
                ],
                "name": "origin",
                "stackMetadataPath": "stacks\\\\origin\\\\metadata.json",
                "synthesizedStackPath": "stacks\\\\origin\\\\cdk.tf.json",
                "workingDirectory": "stacks\\\\origin"
              },
              "passthrough": {
                "annotations": [
                ],
                "constructPath": "passthrough",
                "dependencies": [
                  "origin"
                ],
                "name": "passthrough",
                "stackMetadataPath": "stacks\\\\passthrough\\\\metadata.json",
                "synthesizedStackPath": "stacks\\\\passthrough\\\\cdk.tf.json",
                "workingDirectory": "stacks\\\\passthrough"
              },
              "pinnedFns": {
                "annotations": [
                ],
                "constructPath": "pinnedFns",
                "dependencies": [
                  "origin"
                ],
                "name": "pinnedFns",
                "stackMetadataPath": "stacks\\\\pinnedFns\\\\metadata.json",
                "synthesizedStackPath": "stacks\\\\pinnedFns\\\\cdk.tf.json",
                "workingDirectory": "stacks\\\\pinnedFns"
              },
              "secondOrigin": {
                "annotations": [
                ],
                "constructPath": "secondOrigin",
                "dependencies": [
                ],
                "name": "secondOrigin",
                "stackMetadataPath": "stacks\\\\secondOrigin\\\\metadata.json",
                "synthesizedStackPath": "stacks\\\\secondOrigin\\\\cdk.tf.json",
                "workingDirectory": "stacks\\\\secondOrigin"
              },
              "sink": {
                "annotations": [
                ],
                "constructPath": "sink",
                "dependencies": [
                  "origin"
                ],
                "name": "sink",
                "stackMetadataPath": "stacks\\\\sink\\\\metadata.json",
                "synthesizedStackPath": "stacks\\\\sink\\\\cdk.tf.json",
                "workingDirectory": "stacks\\\\sink"
              },
              "switchedStack": {
                "annotations": [
                ],
                "constructPath": "switchedStack",
                "dependencies": [
                  "secondOrigin"
                ],
                "name": "switchedStack",
                "stackMetadataPath": "stacks\\\\switchedStack\\\\metadata.json",
                "synthesizedStackPath": "stacks\\\\switchedStack\\\\cdk.tf.json",
                "workingDirectory": "stacks\\\\switchedStack"
              }
            },
            "version": "stubbed"
          }"
        `);

        driver.setEnv("SWITCH_STACK", undefined);
        await driver.deploy(["secondOrigin", "switchedStack"]);
        expect(driver.manifest()).toMatchInlineSnapshot(`
          "{
            "stacks": {
              "fns": {
                "annotations": [
                ],
                "constructPath": "fns",
                "dependencies": [
                  "origin"
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
                  "origin"
                ],
                "name": "functionOutput",
                "stackMetadataPath": "stacks\\\\functionOutput\\\\metadata.json",
                "synthesizedStackPath": "stacks\\\\functionOutput\\\\cdk.tf.json",
                "workingDirectory": "stacks\\\\functionOutput"
              },
              "functionOutputPinned": {
                "annotations": [
                ],
                "constructPath": "functionOutputPinned",
                "dependencies": [
                  "pinnedFns"
                ],
                "name": "functionOutputPinned",
                "stackMetadataPath": "stacks\\\\functionOutputPinned\\\\metadata.json",
                "synthesizedStackPath": "stacks\\\\functionOutputPinned\\\\cdk.tf.json",
                "workingDirectory": "stacks\\\\functionOutputPinned"
              },
              "origin": {
                "annotations": [
                ],
                "constructPath": "origin",
                "dependencies": [
                ],
                "name": "origin",
                "stackMetadataPath": "stacks\\\\origin\\\\metadata.json",
                "synthesizedStackPath": "stacks\\\\origin\\\\cdk.tf.json",
                "workingDirectory": "stacks\\\\origin"
              },
              "passthrough": {
                "annotations": [
                ],
                "constructPath": "passthrough",
                "dependencies": [
                  "origin"
                ],
                "name": "passthrough",
                "stackMetadataPath": "stacks\\\\passthrough\\\\metadata.json",
                "synthesizedStackPath": "stacks\\\\passthrough\\\\cdk.tf.json",
                "workingDirectory": "stacks\\\\passthrough"
              },
              "pinnedFns": {
                "annotations": [
                ],
                "constructPath": "pinnedFns",
                "dependencies": [
                  "origin"
                ],
                "name": "pinnedFns",
                "stackMetadataPath": "stacks\\\\pinnedFns\\\\metadata.json",
                "synthesizedStackPath": "stacks\\\\pinnedFns\\\\cdk.tf.json",
                "workingDirectory": "stacks\\\\pinnedFns"
              },
              "secondOrigin": {
                "annotations": [
                ],
                "constructPath": "secondOrigin",
                "dependencies": [
                ],
                "name": "secondOrigin",
                "stackMetadataPath": "stacks\\\\secondOrigin\\\\metadata.json",
                "synthesizedStackPath": "stacks\\\\secondOrigin\\\\cdk.tf.json",
                "workingDirectory": "stacks\\\\secondOrigin"
              },
              "sink": {
                "annotations": [
                ],
                "constructPath": "sink",
                "dependencies": [
                  "origin"
                ],
                "name": "sink",
                "stackMetadataPath": "stacks\\\\sink\\\\metadata.json",
                "synthesizedStackPath": "stacks\\\\sink\\\\cdk.tf.json",
                "workingDirectory": "stacks\\\\sink"
              },
              "switchedStack": {
                "annotations": [
                ],
                "constructPath": "switchedStack",
                "dependencies": [
                ],
                "name": "switchedStack",
                "stackMetadataPath": "stacks\\\\switchedStack\\\\metadata.json",
                "synthesizedStackPath": "stacks\\\\switchedStack\\\\cdk.tf.json",
                "workingDirectory": "stacks\\\\switchedStack"
              }
            },
            "version": "stubbed"
          }"
        `);
      }
    );

    it("can pin function outputs to a stack by using terraform locals", async () => {
      await driver.deploy(["origin", "pinnedFns", "functionOutputPinned"]);

      const pinnedStr = driver.readLocalFile("pinnedFnsStr");
      const outputPinnedStr = driver.readLocalFile("functionOutputPinnedStr");
      expect(pinnedStr).toEqual(outputPinnedStr);
    });
  });
});
