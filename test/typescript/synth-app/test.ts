import { TestDriver } from "../../test-helper";

describe("full integration test synth", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupTypescriptProject();
    await driver.synth();
  });

  test("synth generates JSON", () => {
    expect(driver.synthesizedStack("hello-terra").toString()).toMatchSnapshot();
  });
});
