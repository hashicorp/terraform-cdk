// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { ReportRequest, ReportParams } from "../lib/checkpoint";
import nock from "nock";

describe("ReportRequest", () => {
  const reportParams: ReportParams = {
    command: "foo",
    product: "cdktf",
    version: "0.1",
    dateTime: new Date(),
    payload: {},
    language: "typescript",
  };

  it("handles request errors", async () => {
    nock("https://checkpoint-api.hashicorp.com")
      .post(new RegExp("/v1/.*"))
      .replyWithError("some request error happened");

    await ReportRequest(reportParams);
  });

  describe("CHECKPOINT_DISABLE", () => {
    let checkPointDisable: any;

    beforeEach(() => {
      checkPointDisable = process.env.CHECKPOINT_DISABLE;
    });

    afterEach(() => {
      process.env.CHECKPOINT_DISABLE = checkPointDisable;
    });

    it("does not perform request when disabled via ENV", async () => {
      process.env.CHECKPOINT_DISABLE = "truthy";

      const scope = nock("https://checkpoint-api.hashicorp.com")
        .post(new RegExp("/v1/.*"))
        .reply();

      await ReportRequest(reportParams);
      expect(scope.isDone()).toBeFalsy();
    });

    it("does perform request by default", async () => {
      delete process.env.CHECKPOINT_DISABLE;
      const scope = nock("https://checkpoint-api.hashicorp.com")
        .post(new RegExp("/v1/*"))
        .reply(201, "");

      await ReportRequest(reportParams);
      expect(scope.isDone).toBeTruthy();
    });
  });
});
