// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// SPDX-License-Identifier: MPL-2.0
// DOCS_BLOCK_START:unit-tests
import { Testing } from "cdktf";
import { Image } from "../.gen/providers/docker/image";
import { Container } from "../.gen/providers/docker/container";
import { MyApplicationsAbstraction } from "../unit-tests"; // Could be a class extending from Construct

export class something {}

describe("Unit testing using assertions", () => {
  beforeAll(async () => {});
  it("should use an docker provider", () => {
    expect(
      Testing.synthScope((scope) => {
        new MyApplicationsAbstraction(scope, "test");
      })
    ).toHaveResource(Container);
  });
  it("should use an docker provider with properties", () => {
    expect(
      Testing.synthScope((scope) => {
        new MyApplicationsAbstraction(scope, "test");
      })
    ).toHaveResourceWithProperties(Image, { name: "ubuntu:latest" });
  });
});
// DOCS_BLOCK_END:unit-tests
