/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { testCase, Synth, binding } from "./helpers/convert";

describe("post-process", () => {
  testCase.test(
    "provider with var reference",
    `
    variable "domain" {
      description = "A domain"
    }

    provider "auth0" {
      domain        = var.domain
      client_id     = "client_id"
      client_secret = "client_secret"
    }
    `,
    [binding.auth0],
    Synth.yes_all_languages,
    { resources: [] }
  );
});
