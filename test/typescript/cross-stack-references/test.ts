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
        "version": "stubbed",
        "stacks": {
          "origin": {
            "name": "origin",
            "constructPath": "origin",
            "workingDirectory": "stacks/origin",
            "synthesizedStackPath": "stacks/origin/cdk.tf.json",
            "stackMetadataPath": "stacks/origin/metadata.json",
            "annotations": [],
            "dependencies": []
          },
          "passthrough": {
            "name": "passthrough",
            "constructPath": "passthrough",
            "workingDirectory": "stacks/passthrough",
            "synthesizedStackPath": "stacks/passthrough/cdk.tf.json",
            "stackMetadataPath": "stacks/passthrough/metadata.json",
            "annotations": [],
            "dependencies": [
              "origin"
            ]
          },
          "sink": {
            "name": "sink",
            "constructPath": "sink",
            "workingDirectory": "stacks/sink",
            "synthesizedStackPath": "stacks/sink/cdk.tf.json",
            "stackMetadataPath": "stacks/sink/metadata.json",
            "annotations": [],
            "dependencies": [
              "origin"
            ]
          },
          "fns": {
            "name": "fns",
            "constructPath": "fns",
            "workingDirectory": "stacks/fns",
            "synthesizedStackPath": "stacks/fns/cdk.tf.json",
            "stackMetadataPath": "stacks/fns/metadata.json",
            "annotations": [],
            "dependencies": [
              "origin"
            ]
          },
          "functionOutput": {
            "name": "functionOutput",
            "constructPath": "functionOutput",
            "workingDirectory": "stacks/functionOutput",
            "synthesizedStackPath": "stacks/functionOutput/cdk.tf.json",
            "stackMetadataPath": "stacks/functionOutput/metadata.json",
            "annotations": [],
            "dependencies": [
              "origin"
            ]
          },
          "pinnedFns": {
            "name": "pinnedFns",
            "constructPath": "pinnedFns",
            "workingDirectory": "stacks/pinnedFns",
            "synthesizedStackPath": "stacks/pinnedFns/cdk.tf.json",
            "stackMetadataPath": "stacks/pinnedFns/metadata.json",
            "annotations": [],
            "dependencies": [
              "origin"
            ]
          },
          "functionOutputPinned": {
            "name": "functionOutputPinned",
            "constructPath": "functionOutputPinned",
            "workingDirectory": "stacks/functionOutputPinned",
            "synthesizedStackPath": "stacks/functionOutputPinned/cdk.tf.json",
            "stackMetadataPath": "stacks/functionOutputPinned/metadata.json",
            "annotations": [],
            "dependencies": [
              "pinnedFns"
            ]
          },
          "secondOrigin": {
            "name": "secondOrigin",
            "constructPath": "secondOrigin",
            "workingDirectory": "stacks/secondOrigin",
            "synthesizedStackPath": "stacks/secondOrigin/cdk.tf.json",
            "stackMetadataPath": "stacks/secondOrigin/metadata.json",
            "annotations": [],
            "dependencies": []
          },
          "switchedStack": {
            "name": "switchedStack",
            "constructPath": "switchedStack",
            "workingDirectory": "stacks/switchedStack",
            "synthesizedStackPath": "stacks/switchedStack/cdk.tf.json",
            "stackMetadataPath": "stacks/switchedStack/metadata.json",
            "annotations": [],
            "dependencies": []
          }
        }
      }"
    `);
  });

  onPosixWithHcl("synth generates HCL on POSIX", () => {
    expect(driver.manifest()).toMatchInlineSnapshot(`
      "{
        "version": "stubbed",
        "stacks": {
          "origin": {
            "name": "origin",
            "constructPath": "origin",
            "workingDirectory": "stacks/origin",
            "synthesizedStackPath": "stacks/origin/cdk.tf",
            "stackMetadataPath": "stacks/origin/metadata.json",
            "annotations": [],
            "dependencies": []
          },
          "passthrough": {
            "name": "passthrough",
            "constructPath": "passthrough",
            "workingDirectory": "stacks/passthrough",
            "synthesizedStackPath": "stacks/passthrough/cdk.tf",
            "stackMetadataPath": "stacks/passthrough/metadata.json",
            "annotations": [],
            "dependencies": [
              "origin"
            ]
          },
          "sink": {
            "name": "sink",
            "constructPath": "sink",
            "workingDirectory": "stacks/sink",
            "synthesizedStackPath": "stacks/sink/cdk.tf",
            "stackMetadataPath": "stacks/sink/metadata.json",
            "annotations": [],
            "dependencies": [
              "origin"
            ]
          },
          "fns": {
            "name": "fns",
            "constructPath": "fns",
            "workingDirectory": "stacks/fns",
            "synthesizedStackPath": "stacks/fns/cdk.tf",
            "stackMetadataPath": "stacks/fns/metadata.json",
            "annotations": [],
            "dependencies": [
              "origin"
            ]
          },
          "functionOutput": {
            "name": "functionOutput",
            "constructPath": "functionOutput",
            "workingDirectory": "stacks/functionOutput",
            "synthesizedStackPath": "stacks/functionOutput/cdk.tf",
            "stackMetadataPath": "stacks/functionOutput/metadata.json",
            "annotations": [],
            "dependencies": [
              "origin"
            ]
          },
          "pinnedFns": {
            "name": "pinnedFns",
            "constructPath": "pinnedFns",
            "workingDirectory": "stacks/pinnedFns",
            "synthesizedStackPath": "stacks/pinnedFns/cdk.tf",
            "stackMetadataPath": "stacks/pinnedFns/metadata.json",
            "annotations": [],
            "dependencies": [
              "origin"
            ]
          },
          "functionOutputPinned": {
            "name": "functionOutputPinned",
            "constructPath": "functionOutputPinned",
            "workingDirectory": "stacks/functionOutputPinned",
            "synthesizedStackPath": "stacks/functionOutputPinned/cdk.tf",
            "stackMetadataPath": "stacks/functionOutputPinned/metadata.json",
            "annotations": [],
            "dependencies": [
              "pinnedFns"
            ]
          },
          "secondOrigin": {
            "name": "secondOrigin",
            "constructPath": "secondOrigin",
            "workingDirectory": "stacks/secondOrigin",
            "synthesizedStackPath": "stacks/secondOrigin/cdk.tf",
            "stackMetadataPath": "stacks/secondOrigin/metadata.json",
            "annotations": [],
            "dependencies": []
          },
          "switchedStack": {
            "name": "switchedStack",
            "constructPath": "switchedStack",
            "workingDirectory": "stacks/switchedStack",
            "synthesizedStackPath": "stacks/switchedStack/cdk.tf",
            "stackMetadataPath": "stacks/switchedStack/metadata.json",
            "annotations": [],
            "dependencies": []
          }
        }
      }"
    `);
  });

  onWindowsWithoutHcl("synth generates JSON on Windows", () => {
    expect(driver.manifest()).toMatchInlineSnapshot(`
      "{
        "version": "stubbed",
        "stacks": {
          "origin": {
            "name": "origin",
            "constructPath": "origin",
            "workingDirectory": "stacks\\\\origin",
            "synthesizedStackPath": "stacks\\\\origin\\\\cdk.tf.json",
            "annotations": [],
            "dependencies": []
          },
          "passthrough": {
            "name": "passthrough",
            "constructPath": "passthrough",
            "workingDirectory": "stacks\\\\passthrough",
            "synthesizedStackPath": "stacks\\\\passthrough\\\\cdk.tf.json",
            "annotations": [],
            "dependencies": [
              "origin"
            ]
          },
          "sink": {
            "name": "sink",
            "constructPath": "sink",
            "workingDirectory": "stacks\\\\sink",
            "synthesizedStackPath": "stacks\\\\sink\\\\cdk.tf.json",
            "annotations": [],
            "dependencies": [
              "origin"
            ]
          },
          "fns": {
            "name": "fns",
            "constructPath": "fns",
            "workingDirectory": "stacks\\\\fns",
            "synthesizedStackPath": "stacks\\\\fns\\\\cdk.tf.json",
            "annotations": [],
            "dependencies": [
              "origin"
            ]
          },
          "functionOutput": {
            "name": "functionOutput",
            "constructPath": "functionOutput",
            "workingDirectory": "stacks\\\\functionOutput",
            "synthesizedStackPath": "stacks\\\\functionOutput\\\\cdk.tf.json",
            "annotations": [],
            "dependencies": [
              "origin"
            ]
          },
          "pinnedFns": {
            "name": "pinnedFns",
            "constructPath": "pinnedFns",
            "workingDirectory": "stacks\\\\pinnedFns",
            "synthesizedStackPath": "stacks\\\\pinnedFns\\\\cdk.tf.json",
            "annotations": [],
            "dependencies": [
              "origin"
            ]
          },
          "functionOutputPinned": {
            "name": "functionOutputPinned",
            "constructPath": "functionOutputPinned",
            "workingDirectory": "stacks\\\\functionOutputPinned",
            "synthesizedStackPath": "stacks\\\\functionOutputPinned\\\\cdk.tf.json",
            "annotations": [],
            "dependencies": [
              "pinnedFns"
            ]
          },
          "secondOrigin": {
            "name": "secondOrigin",
            "constructPath": "secondOrigin",
            "workingDirectory": "stacks\\\\secondOrigin",
            "synthesizedStackPath": "stacks\\\\secondOrigin\\\\cdk.tf.json",
            "annotations": [],
            "dependencies": []
          },
          "switchedStack": {
            "name": "switchedStack",
            "constructPath": "switchedStack",
            "workingDirectory": "stacks\\\\switchedStack",
            "synthesizedStackPath": "stacks\\\\switchedStack\\\\cdk.tf.json",
            "annotations": [],
            "dependencies": []
          }
        }
      }"
    `);
  });

  onWindowsWithHcl("synth generates HCL on Windows", () => {
    expect(driver.manifest()).toMatchInlineSnapshot(`
      "{
        "version": "stubbed",
        "stacks": {
          "origin": {
            "name": "origin",
            "constructPath": "origin",
            "workingDirectory": "stacks\\\\origin",
            "synthesizedStackPath": "stacks\\\\origin\\\\cdk.tf",
            "annotations": [],
            "dependencies": []
          },
          "passthrough": {
            "name": "passthrough",
            "constructPath": "passthrough",
            "workingDirectory": "stacks\\\\passthrough",
            "synthesizedStackPath": "stacks\\\\passthrough\\\\cdk.tf",
            "annotations": [],
            "dependencies": [
              "origin"
            ]
          },
          "sink": {
            "name": "sink",
            "constructPath": "sink",
            "workingDirectory": "stacks\\\\sink",
            "synthesizedStackPath": "stacks\\\\sink\\\\cdk.tf",
            "annotations": [],
            "dependencies": [
              "origin"
            ]
          },
          "fns": {
            "name": "fns",
            "constructPath": "fns",
            "workingDirectory": "stacks\\\\fns",
            "synthesizedStackPath": "stacks\\\\fns\\\\cdk.tf",
            "annotations": [],
            "dependencies": [
              "origin"
            ]
          },
          "functionOutput": {
            "name": "functionOutput",
            "constructPath": "functionOutput",
            "workingDirectory": "stacks\\\\functionOutput",
            "synthesizedStackPath": "stacks\\\\functionOutput\\\\cdk.tf",
            "annotations": [],
            "dependencies": [
              "origin"
            ]
          },
          "pinnedFns": {
            "name": "pinnedFns",
            "constructPath": "pinnedFns",
            "workingDirectory": "stacks\\\\pinnedFns",
            "synthesizedStackPath": "stacks\\\\pinnedFns\\\\cdk.tf",
            "annotations": [],
            "dependencies": [
              "origin"
            ]
          },
          "functionOutputPinned": {
            "name": "functionOutputPinned",
            "constructPath": "functionOutputPinned",
            "workingDirectory": "stacks\\\\functionOutputPinned",
            "synthesizedStackPath": "stacks\\\\functionOutputPinned\\\\cdk.tf",
            "annotations": [],
            "dependencies": [
              "pinnedFns"
            ]
          },
          "secondOrigin": {
            "name": "secondOrigin",
            "constructPath": "secondOrigin",
            "workingDirectory": "stacks\\\\secondOrigin",
            "synthesizedStackPath": "stacks\\\\secondOrigin\\\\cdk.tf",
            "annotations": [],
            "dependencies": []
          },
          "switchedStack": {
            "name": "switchedStack",
            "constructPath": "switchedStack",
            "workingDirectory": "stacks\\\\switchedStack",
            "synthesizedStackPath": "stacks\\\\switchedStack\\\\cdk.tf",
            "annotations": [],
            "dependencies": []
          }
        }
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
          "version": "stubbed",
          "stacks": {
            "origin": {
              "name": "origin",
              "constructPath": "origin",
              "workingDirectory": "stacks/origin",
              "synthesizedStackPath": "stacks/origin/cdk.tf.json",
              "stackMetadataPath": "stacks/origin/metadata.json",
              "annotations": [],
              "dependencies": []
            },
            "passthrough": {
              "name": "passthrough",
              "constructPath": "passthrough",
              "workingDirectory": "stacks/passthrough",
              "synthesizedStackPath": "stacks/passthrough/cdk.tf.json",
              "stackMetadataPath": "stacks/passthrough/metadata.json",
              "annotations": [],
              "dependencies": [
                "origin"
              ]
            },
            "sink": {
              "name": "sink",
              "constructPath": "sink",
              "workingDirectory": "stacks/sink",
              "synthesizedStackPath": "stacks/sink/cdk.tf.json",
              "stackMetadataPath": "stacks/sink/metadata.json",
              "annotations": [],
              "dependencies": [
                "origin"
              ]
            },
            "fns": {
              "name": "fns",
              "constructPath": "fns",
              "workingDirectory": "stacks/fns",
              "synthesizedStackPath": "stacks/fns/cdk.tf.json",
              "stackMetadataPath": "stacks/fns/metadata.json",
              "annotations": [],
              "dependencies": [
                "origin"
              ]
            },
            "functionOutput": {
              "name": "functionOutput",
              "constructPath": "functionOutput",
              "workingDirectory": "stacks/functionOutput",
              "synthesizedStackPath": "stacks/functionOutput/cdk.tf.json",
              "stackMetadataPath": "stacks/functionOutput/metadata.json",
              "annotations": [],
              "dependencies": [
                "origin"
              ]
            },
            "pinnedFns": {
              "name": "pinnedFns",
              "constructPath": "pinnedFns",
              "workingDirectory": "stacks/pinnedFns",
              "synthesizedStackPath": "stacks/pinnedFns/cdk.tf.json",
              "stackMetadataPath": "stacks/pinnedFns/metadata.json",
              "annotations": [],
              "dependencies": [
                "origin"
              ]
            },
            "functionOutputPinned": {
              "name": "functionOutputPinned",
              "constructPath": "functionOutputPinned",
              "workingDirectory": "stacks/functionOutputPinned",
              "synthesizedStackPath": "stacks/functionOutputPinned/cdk.tf.json",
              "stackMetadataPath": "stacks/functionOutputPinned/metadata.json",
              "annotations": [],
              "dependencies": [
                "pinnedFns"
              ]
            },
            "secondOrigin": {
              "name": "secondOrigin",
              "constructPath": "secondOrigin",
              "workingDirectory": "stacks/secondOrigin",
              "synthesizedStackPath": "stacks/secondOrigin/cdk.tf.json",
              "stackMetadataPath": "stacks/secondOrigin/metadata.json",
              "annotations": [],
              "dependencies": []
            },
            "switchedStack": {
              "name": "switchedStack",
              "constructPath": "switchedStack",
              "workingDirectory": "stacks/switchedStack",
              "synthesizedStackPath": "stacks/switchedStack/cdk.tf.json",
              "stackMetadataPath": "stacks/switchedStack/metadata.json",
              "annotations": [],
              "dependencies": [
                "secondOrigin"
              ]
            }
          }
        }"
      `);

        driver.setEnv("SWITCH_STACK", undefined);
        await driver.deploy(["secondOrigin", "switchedStack"]);
        expect(driver.manifest()).toMatchInlineSnapshot(`
        "{
          "version": "stubbed",
          "stacks": {
            "origin": {
              "name": "origin",
              "constructPath": "origin",
              "workingDirectory": "stacks/origin",
              "synthesizedStackPath": "stacks/origin/cdk.tf.json",
              "stackMetadataPath": "stacks/origin/metadata.json",
              "annotations": [],
              "dependencies": []
            },
            "passthrough": {
              "name": "passthrough",
              "constructPath": "passthrough",
              "workingDirectory": "stacks/passthrough",
              "synthesizedStackPath": "stacks/passthrough/cdk.tf.json",
              "stackMetadataPath": "stacks/passthrough/metadata.json",
              "annotations": [],
              "dependencies": [
                "origin"
              ]
            },
            "sink": {
              "name": "sink",
              "constructPath": "sink",
              "workingDirectory": "stacks/sink",
              "synthesizedStackPath": "stacks/sink/cdk.tf.json",
              "stackMetadataPath": "stacks/sink/metadata.json",
              "annotations": [],
              "dependencies": [
                "origin"
              ]
            },
            "fns": {
              "name": "fns",
              "constructPath": "fns",
              "workingDirectory": "stacks/fns",
              "synthesizedStackPath": "stacks/fns/cdk.tf.json",
              "stackMetadataPath": "stacks/fns/metadata.json",
              "annotations": [],
              "dependencies": [
                "origin"
              ]
            },
            "functionOutput": {
              "name": "functionOutput",
              "constructPath": "functionOutput",
              "workingDirectory": "stacks/functionOutput",
              "synthesizedStackPath": "stacks/functionOutput/cdk.tf.json",
              "stackMetadataPath": "stacks/functionOutput/metadata.json",
              "annotations": [],
              "dependencies": [
                "origin"
              ]
            },
            "pinnedFns": {
              "name": "pinnedFns",
              "constructPath": "pinnedFns",
              "workingDirectory": "stacks/pinnedFns",
              "synthesizedStackPath": "stacks/pinnedFns/cdk.tf.json",
              "stackMetadataPath": "stacks/pinnedFns/metadata.json",
              "annotations": [],
              "dependencies": [
                "origin"
              ]
            },
            "functionOutputPinned": {
              "name": "functionOutputPinned",
              "constructPath": "functionOutputPinned",
              "workingDirectory": "stacks/functionOutputPinned",
              "synthesizedStackPath": "stacks/functionOutputPinned/cdk.tf.json",
              "stackMetadataPath": "stacks/functionOutputPinned/metadata.json",
              "annotations": [],
              "dependencies": [
                "pinnedFns"
              ]
            },
            "secondOrigin": {
              "name": "secondOrigin",
              "constructPath": "secondOrigin",
              "workingDirectory": "stacks/secondOrigin",
              "synthesizedStackPath": "stacks/secondOrigin/cdk.tf.json",
              "stackMetadataPath": "stacks/secondOrigin/metadata.json",
              "annotations": [],
              "dependencies": []
            },
            "switchedStack": {
              "name": "switchedStack",
              "constructPath": "switchedStack",
              "workingDirectory": "stacks/switchedStack",
              "synthesizedStackPath": "stacks/switchedStack/cdk.tf.json",
              "stackMetadataPath": "stacks/switchedStack/metadata.json",
              "annotations": [],
              "dependencies": []
            }
          }
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
            "version": "stubbed",
            "stacks": {
              "origin": {
                "name": "origin",
                "constructPath": "origin",
                "workingDirectory": "stacks\\\\origin",
                "synthesizedStackPath": "stacks\\\\origin\\\\cdk.tf.json",
                "annotations": [],
                "dependencies": []
              },
              "passthrough": {
                "name": "passthrough",
                "constructPath": "passthrough",
                "workingDirectory": "stacks\\\\passthrough",
                "synthesizedStackPath": "stacks\\\\passthrough\\\\cdk.tf.json",
                "annotations": [],
                "dependencies": [
                  "origin"
                ]
              },
              "sink": {
                "name": "sink",
                "constructPath": "sink",
                "workingDirectory": "stacks\\\\sink",
                "synthesizedStackPath": "stacks\\\\sink\\\\cdk.tf.json",
                "annotations": [],
                "dependencies": [
                  "origin"
                ]
              },
              "fns": {
                "name": "fns",
                "constructPath": "fns",
                "workingDirectory": "stacks\\\\fns",
                "synthesizedStackPath": "stacks\\\\fns\\\\cdk.tf.json",
                "annotations": [],
                "dependencies": [
                  "origin"
                ]
              },
              "functionOutput": {
                "name": "functionOutput",
                "constructPath": "functionOutput",
                "workingDirectory": "stacks\\\\functionOutput",
                "synthesizedStackPath": "stacks\\\\functionOutput\\\\cdk.tf.json",
                "annotations": [],
                "dependencies": [
                  "origin"
                ]
              },
              "pinnedFns": {
                "name": "pinnedFns",
                "constructPath": "pinnedFns",
                "workingDirectory": "stacks\\\\pinnedFns",
                "synthesizedStackPath": "stacks\\\\pinnedFns\\\\cdk.tf.json",
                "annotations": [],
                "dependencies": [
                  "origin"
                ]
              },
              "functionOutputPinned": {
                "name": "functionOutputPinned",
                "constructPath": "functionOutputPinned",
                "workingDirectory": "stacks\\\\functionOutputPinned",
                "synthesizedStackPath": "stacks\\\\functionOutputPinned\\\\cdk.tf.json",
                "annotations": [],
                "dependencies": [
                  "pinnedFns"
                ]
              },
              "secondOrigin": {
                "name": "secondOrigin",
                "constructPath": "secondOrigin",
                "workingDirectory": "stacks\\\\secondOrigin",
                "synthesizedStackPath": "stacks\\\\secondOrigin\\\\cdk.tf.json",
                "annotations": [],
                "dependencies": []
              },
              "switchedStack": {
                "name": "switchedStack",
                "constructPath": "switchedStack",
                "workingDirectory": "stacks\\\\switchedStack",
                "synthesizedStackPath": "stacks\\\\switchedStack\\\\cdk.tf.json",
                "annotations": [],
                "dependencies": [
                  "secondOrigin"
                ]
              }
            }
          }"
        `);

        driver.setEnv("SWITCH_STACK", undefined);
        await driver.deploy(["secondOrigin", "switchedStack"]);
        expect(driver.manifest()).toMatchInlineSnapshot(`
          "{
            "version": "stubbed",
            "stacks": {
              "origin": {
                "name": "origin",
                "constructPath": "origin",
                "workingDirectory": "stacks\\\\origin",
                "synthesizedStackPath": "stacks\\\\origin\\\\cdk.tf.json",
                "annotations": [],
                "dependencies": []
              },
              "passthrough": {
                "name": "passthrough",
                "constructPath": "passthrough",
                "workingDirectory": "stacks\\\\passthrough",
                "synthesizedStackPath": "stacks\\\\passthrough\\\\cdk.tf.json",
                "annotations": [],
                "dependencies": [
                  "origin"
                ]
              },
              "sink": {
                "name": "sink",
                "constructPath": "sink",
                "workingDirectory": "stacks\\\\sink",
                "synthesizedStackPath": "stacks\\\\sink\\\\cdk.tf.json",
                "annotations": [],
                "dependencies": [
                  "origin"
                ]
              },
              "fns": {
                "name": "fns",
                "constructPath": "fns",
                "workingDirectory": "stacks\\\\fns",
                "synthesizedStackPath": "stacks\\\\fns\\\\cdk.tf.json",
                "annotations": [],
                "dependencies": [
                  "origin"
                ]
              },
              "functionOutput": {
                "name": "functionOutput",
                "constructPath": "functionOutput",
                "workingDirectory": "stacks\\\\functionOutput",
                "synthesizedStackPath": "stacks\\\\functionOutput\\\\cdk.tf.json",
                "annotations": [],
                "dependencies": [
                  "origin"
                ]
              },
              "pinnedFns": {
                "name": "pinnedFns",
                "constructPath": "pinnedFns",
                "workingDirectory": "stacks\\\\pinnedFns",
                "synthesizedStackPath": "stacks\\\\pinnedFns\\\\cdk.tf.json",
                "annotations": [],
                "dependencies": [
                  "origin"
                ]
              },
              "functionOutputPinned": {
                "name": "functionOutputPinned",
                "constructPath": "functionOutputPinned",
                "workingDirectory": "stacks\\\\functionOutputPinned",
                "synthesizedStackPath": "stacks\\\\functionOutputPinned\\\\cdk.tf.json",
                "annotations": [],
                "dependencies": [
                  "pinnedFns"
                ]
              },
              "secondOrigin": {
                "name": "secondOrigin",
                "constructPath": "secondOrigin",
                "workingDirectory": "stacks\\\\secondOrigin",
                "synthesizedStackPath": "stacks\\\\secondOrigin\\\\cdk.tf.json",
                "annotations": [],
                "dependencies": []
              },
              "switchedStack": {
                "name": "switchedStack",
                "constructPath": "switchedStack",
                "workingDirectory": "stacks\\\\switchedStack",
                "synthesizedStackPath": "stacks\\\\switchedStack\\\\cdk.tf.json",
                "annotations": [],
                "dependencies": []
              }
            }
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
