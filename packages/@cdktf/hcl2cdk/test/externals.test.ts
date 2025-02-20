/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { testCase, Synth, binding, Snapshot } from "./helpers/convert";

describe("externals", () => {
  testCase.test(
    "handle simple external data",
    `
    provider "external" {
    }

    variable "fargate_region" {
      type    = string
      default = "us-east-1"
    }

    data "external" "thumbprint" {
      program    = ["\${path.module}/oidc_thumbprint.sh", var.fargate_region]
    }

    output "foo" {
      value = data.external.thumbprint.result.thumbprint
    }
      `,
    [binding.external],
    Snapshot.yes,
    Synth.yes,
    {
      dataSources: ["external"],
    },
  );
});
