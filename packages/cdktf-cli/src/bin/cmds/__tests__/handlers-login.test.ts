/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { login } from "../handlers";
import { TerraformLogin } from "../helper/terraform-login";

jest.mock("../helper/terraform-check", () => {
  return {
    __esmodule: true,
    terraformCheck: jest.fn().mockResolvedValue(true),
  };
});
jest.mock("../helper/version-check", () => {
  return {
    __esmodule: true,
    displayVersionMessage: jest.fn().mockResolvedValue(true),
  };
});
jest.mock("../helper/utilities", () => {
  const originalModule = jest.requireActual("../helper/utilities");
  return {
    __esmodule: true,
    ...originalModule,
    readStreamAsString: jest.fn().mockResolvedValue(""),
  };
});

jest.mock("../helper/terraform-cloud-client", () => {
  return {
    __esmodule: true,
    getAccountDetails: jest.fn().mockResolvedValue({
      data: {
        attributes: {
          email: "test@test.com",
          username: "test",
        },
      },
    }),
  };
});

describe("login", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("uses the token from the api", async () => {
    jest
      .spyOn(TerraformLogin.prototype, "saveTerraformCredentials")
      .mockResolvedValue();

    jest
      .spyOn(TerraformLogin.prototype, "askToLogin")
      .mockResolvedValue("token-123");

    const { getAccountDetails } = await import(
      "../helper/terraform-cloud-client"
    );
    await login({ tfeHostname: "foo-bar.com" });
    expect(getAccountDetails).toHaveBeenCalledWith("foo-bar.com", "token-123");
  });

  it("uses the token stdin", async () => {
    const { readStreamAsString } = await import("../helper/utilities");

    (readStreamAsString as jest.Mock).mockResolvedValue("token-stream\n");

    jest
      .spyOn(TerraformLogin.prototype, "saveTerraformCredentials")
      .mockResolvedValue();

    const askToLoginMock = jest
      .spyOn(TerraformLogin.prototype, "askToLogin")
      .mockResolvedValue("token-123");

    const { getAccountDetails } = await import(
      "../helper/terraform-cloud-client"
    );
    await login({ tfeHostname: "foo-bar.com" });
    expect(getAccountDetails).toHaveBeenCalledWith(
      "foo-bar.com",
      "token-stream",
    );
    expect(askToLoginMock).not.toHaveBeenCalled();
  });
});
