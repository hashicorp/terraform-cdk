import { TestDriver } from "../../test-helper";

describe("java testing assertions", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupJavaProject();
    await driver.copyFile(
      "JunitTesting.java",
      "src/main/java/com/mycompany/app/JunitTesting.java"
    );
    await driver.copyFiles("update-pom.sh");
    await driver.exec("bash update-pom.sh");
    await driver.exec("mvn clean install");
  }, 6000000);

  test("run java testing suite", async () => {
    const res = await driver.exec('mvn test -Dtest="JunitTesting"');
  }, 6000000);
});
