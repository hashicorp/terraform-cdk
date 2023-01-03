// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import "cdktf/lib/testing/adapters/jest";
import { Testing } from "cdktf";
import { DockerProvider } from "../.gen/providers/docker/provider";
import { Container } from "../.gen/providers/docker/container";
import { Network } from "../.gen/providers/docker/network";
import { MyStack } from "../main"; // Could be a class extending from Construct

describe("Unit testing using assertions", () => {
  beforeAll(async () => {});
  it("should use an docker provider", () => {
    expect(
      Testing.synthScope((scope) => {
        new MyStack(scope, "test");
      })
    ).toHaveProvider(DockerProvider);
  });
  it("should use an docker provider with properties", () => {
    expect(
      Testing.synthScope((scope) => {
        new MyStack(scope, "test");
      })
    ).toHaveProviderWithProperties(DockerProvider, {
      host: "unix:///var/run/docker.sock",
    });
  });
  it("should not have resource with property", () => {
    expect(
      Testing.synthScope((scope) => {
        new MyStack(scope, "test");
      })
    ).toNotHaveResourceWithProperties(Container, ["command"]);
  });
  it("should not have data source with property", () => {
    expect(
      Testing.synthScope((scope) => {
        new MyStack(scope, "test");
      })
    ).toNotHaveDataSourceWithProperties(Network, ["id"]);
  });
  it("should not have provider with property", () => {
    expect(
      Testing.synthScope((scope) => {
        new MyStack(scope, "test");
      })
    ).toNotHaveProviderWithProperties(DockerProvider, ["image"]);
  });
});
