import { TestDriver } from "../../test-helper";

describe("full integration test synth", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupTypescriptProject();
    await driver.synth();
  });

  test("debug command", async () => {
    const { stdout: foo } = await driver.exec(`npm list cdktf --json`);
    console.log("foo", foo);
    driver.setEnv("CDKTF_LOG_LEVEL", "debug");
    const debug = await driver.exec(`cdktf debug --json`);
    driver.setEnv("CDKTF_LOG_LEVEL", "warning");
    console.log("debug", debug);
    const { stdout } = await driver.exec(`cdktf debug --json`);
    const { cdktf, constructs } = JSON.parse(stdout);
    expect(cdktf.length).not.toBe(0);
    expect(constructs.length).not.toBe(0);
  });

  test("synth generates JSON", () => {
    expect(driver.synthesizedStack("hello-terra").toString()).toMatchSnapshot();
  });
});
