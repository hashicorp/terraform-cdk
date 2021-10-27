import { TestDriver } from "../../test-helper";

describe("full integration test synth", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupTypescriptProject();
    await driver.synth();
  });

  test("synth generates JSON", () => {
    expect(driver.synthesizedStack("hello-terra")).toMatchSnapshot();
  });

  // test("object references resolve to right source", ()=> {

  // })
});
