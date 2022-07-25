import { TestDriver } from "../../test-helper";

describe("csharp testing assertions", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupCsharpProject();
    await driver.copyFiles("TestProgram.cs");
    await driver.exec("dotnet add reference .gen/docker/docker.csproj");
  }, 6000000);

  test("run csharp testing suite", async () => {
    var res = await driver.exec("dotnet test");
    expect(res.stderr).toBe("");
  }, 6000000);
});
