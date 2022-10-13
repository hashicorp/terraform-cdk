// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";

describe("python full integration 3rd party", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupPythonProject();
    await driver.synth();
  });

  test("synth generates JSON", async () => {
    expect(driver.synthesizedStack("references").toString()).toMatchSnapshot();
  });

  describe("references", () => {
    test("simple references", () => {
      expect(
        driver.synthesizedStack("references").byId("nginxContainer").image
      ).toContain("nginxImage.repo_digest");
    });

    test("single-item references", () => {
      expect(
        driver.synthesizedStack("references").output("containerCapAdd")
      ).toContain("nginxContainer.capabilities[0].add");
    });
  });

  describe("mutation", () => {
    test("direct mutation", () => {
      expect(
        driver.synthesizedStack("references").byId("nginxImage").keep_locally
      ).toBeTruthy();
    });

    test("reference mutation", () => {
      expect(
        driver.synthesizedStack("references").byId("nginxContainer").privileged
      ).toContain("nginxImage.keep_locally");
    });
  });
});
