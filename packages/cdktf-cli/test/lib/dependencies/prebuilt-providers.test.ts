// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import nock from "nock";
import { ProviderConstraint } from "../../../lib/dependencies/dependency-manager";
import {
  getNpmPackageName,
  getPrebuiltProviderVersion,
  getAllPrebuiltProviderVersions,
} from "../../../lib/dependencies/prebuilt-providers";
import "../../../lib/logging";

// Prevent logging outputs from polluting the test results
jest.mock("../../../lib/logging");

function buildNpmResponse(
  version = "0.0.0",
  name = "test",
  cdktfVersion = "^0.12.2"
): any {
  return {
    versions: {
      [version]: {
        cdktf: {
          provider: {
            name: `registry.terraform.io/hashicorp/${name}`,
            version: "0.3.1",
          },
        },
        peerDependencies: {
          cdktf: cdktfVersion,
        },
      },
    },
  };
}

describe("network issues", () => {
  beforeAll(() => {
    nock.disableNetConnect();
  });

  afterAll(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });

  describe("getPrebuiltProviderVersions", () => {
    it("fails when connection error", async () => {
      nock("https://registry.npmjs.org/")
        .get(new RegExp("/@cdktf/.*"))
        .replyWithError({ code: "ETIMEDOUT" });

      await expect(
        getAllPrebuiltProviderVersions("@cdktf/test")
      ).rejects.toThrowError("Connection error");
    });

    it("fails when npm responds with 5xx", async () => {
      nock("https://registry.npmjs.org/")
        .get(new RegExp("/@cdktf/.*"))
        .reply(502, "Gateway error");

      await expect(
        getAllPrebuiltProviderVersions("@cdktf/test")
      ).rejects.toThrowError(/Unexpected error/);
    });

    it("fails when package doesn't exist", async () => {
      nock("https://registry.npmjs.org/")
        .get(new RegExp("/@cdktf/.*"))
        .reply(404, "Not found");

      await expect(
        getAllPrebuiltProviderVersions("@cdktf/test")
      ).rejects.toThrowError(/not found/i);
    });

    it("succeeds when package found", async () => {
      nock("https://registry.npmjs.org/")
        .get(new RegExp("/@cdktf/.*"))
        .reply(200, buildNpmResponse("2.3.0"));

      await expect(
        getAllPrebuiltProviderVersions("@cdktf/test")
      ).resolves.toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            packageVersion: "2.3.0",
          }),
        ])
      );
    });
  });

  describe("getNpmPackageName", () => {
    it("fails when connection error", async () => {
      nock("https://raw.githubusercontent.com/")
        .get("/hashicorp/cdktf-repository-manager/main/provider.json")
        .replyWithError({ code: "ETIMEDOUT" });

      await expect(
        getNpmPackageName(ProviderConstraint.fromConfigEntry("test"))
      ).rejects.toThrowError("Connection error");
    });

    it("succeeds when connection works", async () => {
      nock("https://raw.githubusercontent.com/")
        .get("/hashicorp/cdktf-repository-manager/main/provider.json")
        .reply(200, {
          test: "hashicorp/test@~> 0.3.3",
        });

      await expect(
        getNpmPackageName(ProviderConstraint.fromConfigEntry("test"))
      ).resolves.toEqual("@cdktf/provider-test");
    });
  });

  describe("getPrebuiltProviderVersion", () => {
    it("returns null on connection error with github", async () => {
      nock("https://raw.githubusercontent.com/")
        .get("/hashicorp/cdktf-repository-manager/main/provider.json")
        .replyWithError({ code: "ETIMEDOUT" });

      await expect(
        getPrebuiltProviderVersion(
          ProviderConstraint.fromConfigEntry("test"),
          "0.12.2"
        )
      ).rejects.toThrowError("Connection error");
    });

    it("returns null on connection error with npm", async () => {
      nock("https://raw.githubusercontent.com/")
        .get("/hashicorp/cdktf-repository-manager/main/provider.json")
        .reply(200, {
          test: "hashicorp/test@~> 0.3.3",
        });

      nock("https://registry.npmjs.org/")
        .get(new RegExp("/@cdktf/.*"))
        .replyWithError({ code: "ETIMEDOUT" });

      await expect(
        getPrebuiltProviderVersion(
          ProviderConstraint.fromConfigEntry("test"),
          "0.12.2"
        )
      ).rejects.toThrowError("Connection error");
    });

    it("succeeds when both github and npm work", async () => {
      nock("https://raw.githubusercontent.com/")
        .get("/hashicorp/cdktf-repository-manager/main/provider.json")
        .reply(200, {
          test: "hashicorp/test@~> 0.3.3",
        });
      nock("https://registry.npmjs.org/")
        .get(new RegExp("/@cdktf/.*"))
        .reply(200, buildNpmResponse("2.3.0"));

      await expect(
        getPrebuiltProviderVersion(
          ProviderConstraint.fromConfigEntry("test"),
          "0.12.2"
        )
      ).resolves.toEqual("2.3.0");
    });
  });
});
