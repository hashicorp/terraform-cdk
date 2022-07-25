import { TestDriver } from "../../test-helper";

describe("java testing assertions", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupJavaProject();
    await driver.copyFile(
      "MainTest.java",
      "src/main/java/com/mycompany/app/MainTest.java"
    );
  }, 6000000);

  test("run java testing suite", async () => {
    var res = await driver.exec('mvn test -Dtest="MainTest"');
    expect(res.stderr).toBe("");
  }, 6000000);
});
