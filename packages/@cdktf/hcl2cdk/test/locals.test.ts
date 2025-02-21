/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { testCase, Synth, Snapshot } from "./helpers/convert";

describe("locals", () => {
  testCase.test(
    "locals",
    `
    locals {
      service_name = "forum"
      owner        = "Community Team"
      is_it_great  = true
      how_many     = 42
    }
    output "combined-so-it-does-not-get-removed" {
      value = "\${local.service_name},\${local.owner},\${local.is_it_great},\${local.how_many}"
    }
    `,
    [],
    Snapshot.yes,
    Synth.yes,
  );

  testCase.test(
    "multiple locals blocks",
    `
    locals {
      service_name = "forum"
      owner        = "Community Team"
    }

    locals {
      is_it_great  = true
      how_many     = 42
    }
    
    output "combined-so-it-does-not-get-removed" {
      value = "\${local.service_name},\${local.owner},\${local.is_it_great},\${local.how_many}"
    }`,
    [],
    Snapshot.yes,
    Synth.yes,
  );
});
