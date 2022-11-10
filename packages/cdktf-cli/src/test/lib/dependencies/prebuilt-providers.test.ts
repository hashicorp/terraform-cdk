// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import nock from "nock";
import { ProviderConstraint } from "../../../lib/dependencies/dependency-manager";
import {
  getNpmPackageName,
  getPrebuiltProviderVersions,
  getAllPrebuiltProviderVersions,
  getPrebuiltProviderRepositoryName,
  resetFetchCache,
} from "../../../lib/dependencies/prebuilt-providers";
import "../../../lib/logging";

// Prevent logging outputs from polluting the test results
jest.mock("../../../lib/logging");

function buildNpmResponse(
  version = "0.0.0",
  name = "test",
  cdktfVersion = "^0.12.2",
  hasRepository = true
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
    repository:
      (hasRepository && {
        type: "git",
        url: `git+https://github.com/cdktf/cdktf-provider-${name}.git`,
      }) ||
      {},
  };
}

describe("prebuilt-providers", () => {
  beforeAll(() => {
    nock.disableNetConnect();
  });

  afterAll(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });

  afterEach(() => {
    resetFetchCache();
    nock.cleanAll();
  });

  describe("getPrebuiltProviderRepositoryName", () => {
    it("reads the repository field", async () => {
      nock("https://registry.npmjs.org/")
        .get(new RegExp("/@cdktf/.*"))
        .reply(200, buildNpmResponse("2.3.0", "test1"));

      await expect(
        getPrebuiltProviderRepositoryName("@cdktf/provider-test1")
      ).resolves.toEqual("github.com/cdktf/cdktf-provider-test1");
    });
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

    it("returns using cache the second time", async () => {
      nock("https://registry.npmjs.org/")
        .get(new RegExp("/@cdktf/.*"))
        .reply(200, buildNpmResponse("2.4.2", "cachey"));

      await expect(
        getAllPrebuiltProviderVersions("@cdktf/cachey")
      ).resolves.toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            packageVersion: "2.4.2",
          }),
        ])
      );

      // Since we're expecting the cache to respond, the actual URL can fail
      const scope = nock("https://registry.npmjs.org/")
        .get(new RegExp("/@cdktf/.*"))
        .reply(500);

      await expect(
        getAllPrebuiltProviderVersions("@cdktf/cachey")
      ).resolves.toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            packageVersion: "2.4.2",
          }),
        ])
      );

      // ensure we never made the request
      expect(scope.isDone()).toBeFalsy();
      nock.cleanAll();
    });
  });

  describe("getNpmPackageName", () => {
    it("fails when connection error", async () => {
      nock("https://www.cdk.tf/")
        .get("/.well-known/prebuilt-providers.json")
        .replyWithError({ code: "ETIMEDOUT" });

      await expect(
        getNpmPackageName(ProviderConstraint.fromConfigEntry("test"))
      ).rejects.toThrowError("Connection error");
    });

    it("succeeds when cdk.tf redirect and Github work", async () => {
      nock("https://www.cdk.tf/")
        .get("/.well-known/prebuilt-providers.json")
        .reply(307, undefined, {
          Location:
            "https://raw.githubusercontent.com/cdktf/cdktf-repository-manager/main/provider.json",
        });

      nock("https://raw.githubusercontent.com/")
        .get("/cdktf/cdktf-repository-manager/main/provider.json")
        .reply(200, {
          test: "hashicorp/test@~> 0.3.3",
        });

      await expect(
        getNpmPackageName(ProviderConstraint.fromConfigEntry("test"))
      ).resolves.toEqual("@cdktf/provider-test");
    });

    it("succeeds when cdk.tf directly returns result", async () => {
      nock("https://www.cdk.tf/")
        .get("/.well-known/prebuilt-providers.json")
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
      nock("https://www.cdk.tf/")
        .get("/.well-known/prebuilt-providers.json")
        .replyWithError({ code: "ETIMEDOUT" });

      await expect(
        getPrebuiltProviderVersions(
          ProviderConstraint.fromConfigEntry("test"),
          "0.12.2"
        )
      ).rejects.toThrowError("Connection error");
    });

    it("returns null on connection error with npm", async () => {
      nock("https://www.cdk.tf/")
        .get("/.well-known/prebuilt-providers.json")
        .reply(200, {
          test: "hashicorp/test@~> 0.3.3",
        });

      nock("https://registry.npmjs.org/")
        .get(new RegExp("/@cdktf/.*"))
        .replyWithError({ code: "ETIMEDOUT" });

      await expect(
        getPrebuiltProviderVersions(
          ProviderConstraint.fromConfigEntry("test"),
          "0.12.2"
        )
      ).rejects.toThrowError("Connection error");
    });

    it("succeeds when both cdk.tf and npm work", async () => {
      nock("https://www.cdk.tf/")
        .get("/.well-known/prebuilt-providers.json")
        .reply(200, {
          test: "hashicorp/test@~> 0.3.3",
        });
      nock("https://registry.npmjs.org/")
        .get(new RegExp("/@cdktf/.*"))
        .reply(200, buildNpmResponse("2.3.0"));

      await expect(
        getPrebuiltProviderVersions(
          ProviderConstraint.fromConfigEntry("test"),
          "0.12.2"
        )
      ).resolves.toEqual(["2.3.0"]);
    });
  });
});
