// Copyright IBM Corp. 2019, 2025
// SPDX-License-Identifier: MPL-2.0
import { TestDriver, onlyHcl, onlyJson } from "../../test-helper";

describe("renamed providers", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupTypescriptProject();
    await driver.synth();
  });

  onlyJson("synthesizes correct JSON", () => {
    const out = driver.synthesizedStackContentsRaw("renamed-providers");
    expect(out).toMatchInlineSnapshot(`
      "{
        "//": {
          "metadata": {
            "backend": "local",
            "stackName": "renamed-providers",
            "version": "stubbed"
          },
          "outputs": {
          }
        },
        "provider": {
          "abitbucket": [
            {
              "password": "bar",
              "username": "foo"
            }
          ],
          "bitbucket": [
            {
              "password": "bar",
              "username": "foo"
            }
          ]
        },
        "resource": {
          "bitbucket_repository": {
            "test-repo": {
              "//": {
                "metadata": {
                  "path": "renamed-providers/test-repo",
                  "uniqueId": "test-repo"
                }
              },
              "name": "test",
              "owner": "foo"
            },
            "test-repo2": {
              "//": {
                "metadata": {
                  "path": "renamed-providers/test-repo2",
                  "uniqueId": "test-repo2"
                }
              },
              "name": "test2",
              "owner": "foo",
              "provider": "abitbucket"
            }
          }
        },
        "terraform": {
          "backend": {
            "local": {
              "path": "terraform.tfstate"
            }
          },
          "required_providers": {
            "abitbucket": {
              "source": "aeirola/bitbucket",
              "version": "2.0.2"
            },
            "bitbucket": {
              "source": "Runelab/bitbucket",
              "version": "2.1.0"
            }
          }
        }
      }"
    `);
  });

  onlyHcl("synthesizes correct HCL", () => {
    const out = driver.synthesizedStackContentsRaw("renamed-providers");
    expect(out).toMatchInlineSnapshot(`
      "terraform {
        required_providers {
          bitbucket = {
            version = "2.1.0"
            source  = "Runelab/bitbucket"
          }
          abitbucket = {
            version = "2.0.2"
            source  = "aeirola/bitbucket"
          }
        }
        backend "local" {
          path = "terraform.tfstate"
        }


      }

      provider "bitbucket" {
        password = "bar"
        username = "foo"
      }
      resource "bitbucket_repository" "test-repo" {
        name  = "test"
        owner = "foo"
      }

      provider "abitbucket" {
        password = "bar"
        username = "foo"
      }
      resource "bitbucket_repository" "test-repo2" {
        name     = "test2"
        owner    = "foo"
        provider = "abitbucket"
      }"
    `);
  });
});
