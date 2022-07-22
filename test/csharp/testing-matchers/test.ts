import { TestDriver } from "../../test-helper";

describe("csharp testing assertions", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupCsharpProject();
    await driver.copyFiles("Test.cs");
    await driver.copyFiles("update-csproj.sh");
    await driver.exec("dotnet add reference .gen/docker/docker.csproj");
    await driver.exec(
      "dotnet add package Microsoft.NET.Test.Sdk --version 17.2.0"
    );
    await driver.exec("dotnet add package xunit --version 2.4.1");
    await driver.exec(
      "dotnet add package xunit.runner.visualstudio --version 2.4.5"
    );
    await driver.exec("bash update-csproj.sh");
  }, 6000000);

  test("run csharp testing suite", async () => {
    expect(async () => await driver.exec("dotnet test")).not.toThrow();
  }, 6000000);
});
