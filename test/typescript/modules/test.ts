// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  TestDriver,
  onPosixWithoutHcl,
  onPosixWithHcl,
  onWindowsWithoutHcl,
  onWindowsWithHcl,
} from "../../test-helper";
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
      path.join(driver.workingDirectory, "local-module"),
    );
    await driver.get();
  });

  onPosixWithoutHcl("build modules posix", async () => {
    await driver.synth();
    expect(driver.synthesizedStack("hello-modules").toString())
      .toMatchInlineSnapshot(`
      "{
        "//": {
          "metadata": {
            "backend": "local",
            "stackName": "hello-modules",
            "version": "stubbed"
          },
          "outputs": {}
        },
        "module": {
          "gcloud": {
            "//": {
              "metadata": {
                "path": "hello-modules/gcloud",
                "uniqueId": "gcloud"
              }
            },
            "source": "terraform-google-modules/gcloud/google",
            "version": "2.0.3"
          },
          "iam": {
            "//": {
              "metadata": {
                "path": "hello-modules/iam",
                "uniqueId": "iam"
              }
            },
            "account_alias": "cdktf",
            "source": "terraform-aws-modules/iam/aws//modules/iam-account",
            "version": "3.12.0"
          },
          "local-module": {
            "//": {
              "metadata": {
                "path": "hello-modules/local-module",
                "uniqueId": "local-module"
              }
            },
            "set": [
              "test",
              "sets"
            ],
            "source": "./assets/__cdktf_module_asset_26CE565C/1A068C39166AE65C43D174678BD00022"
          }
        },
        "terraform": {
          "backend": {
            "local": {
              "path": "terraform.tfstate"
            }
          }
        }
      }"
    `);
  });

  onPosixWithHcl("build modules in HCL posix", async () => {
    await driver.synth();
    expect(driver.synthesizedStackContentsRaw("hello-modules").toString())
      .toMatchInlineSnapshot(`
      "terraform {
        required_providers {

        }
        backend "local" {
          path = "terraform.tfstate"
        }


      }
      module "local-module" {
        set = [
          "test",
          "sets",
        ]
        source = "./assets/__cdktf_module_asset_26CE565C/1A068C39166AE65C43D174678BD00022"
      }
      module "gcloud" {
        source  = "terraform-google-modules/gcloud/google"
        version = "2.0.3"
      }
      module "iam" {
        account_alias = "cdktf"
        source        = "terraform-aws-modules/iam/aws//modules/iam-account"
        version       = "3.12.0"
      }"
    `);
  });

  onWindowsWithoutHcl("build modules windows", async () => {
    await driver.synth();
    expect(driver.synthesizedStack("hello-modules").toString())
      .toMatchInlineSnapshot(`
      "{
        "//": {
          "metadata": {
            "backend": "local",
            "stackName": "hello-modules",
            "version": "stubbed"
          },
          "outputs": {}
        },
        "module": {
          "gcloud": {
            "//": {
              "metadata": {
                "path": "hello-modules/gcloud",
                "uniqueId": "gcloud"
              }
            },
            "source": "terraform-google-modules/gcloud/google",
            "version": "2.0.3"
          },
          "iam": {
            "//": {
              "metadata": {
                "path": "hello-modules/iam",
                "uniqueId": "iam"
              }
            },
            "account_alias": "cdktf",
            "source": "terraform-aws-modules/iam/aws//modules/iam-account",
            "version": "3.12.0"
          },
          "local-module": {
            "//": {
              "metadata": {
                "path": "hello-modules/local-module",
                "uniqueId": "local-module"
              }
            },
            "set": [
              "test",
              "sets"
            ],
            "source": "./assets/local-module-local-module/405986F9ABA62210358043A25250C05C"
          }
        },
        "terraform": {
          "backend": {
            "local": {
              "path": "terraform.tfstate"
            }
          }
        }
      }"
    `);
  });

  onWindowsWithHcl("build modules windows", async () => {
    await driver.synth();
    expect(driver.synthesizedStackContentsRaw("hello-modules").toString())
      .toMatchInlineSnapshot(`
          "terraform {
            required_providers {

            }
            backend "local" {
              path = "terraform.tfstate"
            }


          }
          module "local-module" {
            source = "./assets/local-module-local-module/405986F9ABA62210358043A25250C05C"
          }
          module "gcloud" {
            source  = "terraform-google-modules/gcloud/google"
            version = "2.0.3"
          }
          module "iam" {
            source  = "terraform-aws-modules/iam/aws//modules/iam-account"
            version = "3.12.0"
          }"
      `);
  });
});
