// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver, onlyHcl, onlyJson } from "../../test-helper";

describe("python full integration 3rd party", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupPythonProject();
    await driver.synth();
  });

  onlyJson("synth generates JSON", async () => {
    expect(driver.synthesizedStack("references").toString()).toMatchSnapshot();
  });

  onlyHcl("synth generates HCL", async () => {
    expect(driver.synthesizedStackContentsRaw("references")).toMatchSnapshot();
  });

  describe("references", () => {
    onlyJson("simple references", () => {
      expect(
        driver.synthesizedStack("references").byId("nginxContainer").image,
      ).toContain("nginxImage.repo_digest");
    });

    onlyJson("single-item references", () => {
      expect(
        driver.synthesizedStack("references").output("containerCapAdd"),
      ).toContain("nginxContainer.capabilities[0].add");
    });
  });

  describe("mutation", () => {
    onlyJson("direct mutation", () => {
      expect(
        driver.synthesizedStack("references").byId("nginxImage").keep_locally,
      ).toBeTruthy();
    });

    onlyJson("reference mutation", () => {
      expect(
        driver.synthesizedStack("references").byId("nginxContainer").privileged,
      ).toContain("nginxImage.keep_locally");
    });
  });
});
