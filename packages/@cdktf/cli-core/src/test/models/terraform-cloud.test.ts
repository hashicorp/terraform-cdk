// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

import { logger } from "@cdktf/commons";
import { logBetterErrorAndThrow } from "../../lib/models/terraform-cloud";
jest.mock("../../lib/logging");

describe("BeautifyErrors", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("beautifies errors", () => {
    logBetterErrorAndThrow("test", {
      isAxiosError: true,
      response: {
        status: 404,
        headers: {
          Authorization: "Bearer TOKEN",
        },
      },
    });
    expect(logger.error).toHaveBeenCalledWith(
      expect.stringContaining("Error in test")
    );
  });

  it("doesn't print sensitive headers", () => {
    logBetterErrorAndThrow("test", {
      isAxiosError: true,
      response: {
        status: 404,
        headers: {
          Authorization: "Bearer TOKEN",
        },
      },
    });
    expect(logger.error).not.toHaveBeenCalledWith(
      expect.stringContaining(`"Authorization":"Bearer TOKEN"`)
    );
    expect(logger.error).toHaveBeenCalledWith(
      expect.stringContaining(`"Authorization":"REDACTED"`)
    );
  });
});
