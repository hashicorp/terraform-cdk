// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";

describe("csharp testing assertions", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupCsharpProject();
    await driver.copyFiles("TestProgram.cs");
    await driver.exec("dotnet add reference .gen/docker/docker.csproj");
  }, 6000000);

  async function runTests() {
    await driver.exec("dotnet test");
  }

  test("run csharp testing suite", async () => {
    await expect(runTests()).resolves.not.toThrow();
  }, 6000000);
});
