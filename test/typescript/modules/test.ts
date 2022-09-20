// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver, onWindows, onPosix } from "../../test-helper";
import * as fs from "fs-extra";
import * as path from "path";

describe("full integration test", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    driver.switchToTempDir();
    await driver.init("typescript");
    driver.copyFiles("main.ts", "cdktf.json");
    fs.copySync(
      path.join(__dirname, "local-module"),
      path.join(driver.workingDirectory, "local-module")
    );
    await driver.get();
  });

  onPosix("build modules posix", async () => {
    await driver.synth();
    expect(driver.synthesizedStack("hello-modules").toString())
      .toMatchInlineSnapshot(`
      "{
        \\"//\\": {
          \\"metadata\\": {
            \\"backend\\": \\"local\\",
            \\"stackName\\": \\"hello-modules\\",
            \\"version\\": \\"stubbed\\"
          },
          \\"outputs\\": {}
        },
        \\"module\\": {
          \\"gcloud\\": {
            \\"//\\": {
              \\"metadata\\": {
                \\"path\\": \\"hello-modules/gcloud\\",
                \\"uniqueId\\": \\"gcloud\\"
              }
            },
            \\"source\\": \\"terraform-google-modules/gcloud/google\\",
            \\"version\\": \\"2.0.3\\"
          },
          \\"iam\\": {
            \\"//\\": {
              \\"metadata\\": {
                \\"path\\": \\"hello-modules/iam\\",
                \\"uniqueId\\": \\"iam\\"
              }
            },
            \\"account_alias\\": \\"cdktf\\",
            \\"source\\": \\"terraform-aws-modules/iam/aws//modules/iam-account\\",
            \\"version\\": \\"3.12.0\\"
          },
          \\"localmodule\\": {
            \\"//\\": {
              \\"metadata\\": {
                \\"path\\": \\"hello-modules/local-module\\",
                \\"uniqueId\\": \\"localmodule\\"
              }
            },
            \\"set\\": [
              \\"test\\",
              \\"sets\\"
            ],
            \\"source\\": \\"./assets/localmodulelocalmodule/D2650B692714A27106B347431A9F0397\\"
          }
        },
        \\"terraform\\": {
          \\"backend\\": {
            \\"local\\": {
              \\"path\\": \\"terraform.tfstate\\"
            }
          }
        }
      }"
    `);
  });

  onWindows("build modules windows", async () => {
    await driver.synth();
    expect(driver.synthesizedStack("hello-modules").toString())
      .toMatchInlineSnapshot(`
"{
  \\"//\\": {
    \\"metadata\\": {
      \\"backend\\": \\"local\\",
      \\"stackName\\": \\"hello-modules\\",
      \\"version\\": \\"stubbed\\"
    },
    \\"outputs\\": {}
  },
  \\"module\\": {
    \\"gcloud\\": {
      \\"//\\": {
        \\"metadata\\": {
          \\"path\\": \\"hello-modules/gcloud\\",
          \\"uniqueId\\": \\"gcloud\\"
        }
      },
      \\"source\\": \\"terraform-google-modules/gcloud/google\\",
      \\"version\\": \\"2.0.3\\"
    },
    \\"iam\\": {
      \\"//\\": {
        \\"metadata\\": {
          \\"path\\": \\"hello-modules/iam\\",
          \\"uniqueId\\": \\"iam\\"
        }
      },
      \\"account_alias\\": \\"cdktf\\",
      \\"source\\": \\"terraform-aws-modules/iam/aws//modules/iam-account\\",
      \\"version\\": \\"3.12.0\\"
    },
    \\"localmodule\\": {
      \\"//\\": {
        \\"metadata\\": {
          \\"path\\": \\"hello-modules/local-module\\",
          \\"uniqueId\\": \\"localmodule\\"
        }
      },
      \\"set\\": [
        \\"test\\",
        \\"sets\\"
      ],
      \\"source\\": \\"./assets/localmodulelocalmodule/775938CF6EC9DF6809507F1BE0594E67\\"
    }
  },
  \\"terraform\\": {
    \\"backend\\": {
      \\"local\\": {
        \\"path\\": \\"terraform.tfstate\\"
      }
    }
  }
}"
`);
  });
});
