/**
 * Copyright IBM Corp. 2019, 2025
 * SPDX-License-Identifier: MPL-2.0
 */

import { testCase, Synth, binding, Snapshot } from "./helpers/convert";

describe("Partial code (missing properties)", () => {
  testCase.test(
    "missing top-level required property",
    `
    resource "docker_config" "service_config" {
        name = "my-config"
        # other required properties are missing:
        # data = base64encode(...)
      }
      `,
    [binding.docker],
    Snapshot.yes_all_languages,
    Synth.never,
    {
      resources: ["docker_config"],
    },
  );
});
