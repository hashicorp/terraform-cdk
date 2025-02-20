/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { testCase, Synth, Snapshot } from "./helpers/convert";

describe("outputs", () => {
  testCase.test(
    "output",
    `
      output "cidr_out" {
          value = "test"
      }`,
    [],
    Snapshot.yes,
    Synth.yes,
  );
  testCase.test(
    "sensitive output",
    `
      output "cidr_out" {
          value = "test"
          sensitive = true
      }`,

    [],
    Snapshot.yes,
    Synth.yes,
  );
  testCase.test(
    "output withdescription",
    `
      output "cidr_out" {
          value = "test"
          sensitive = true
          description = "Best output"
      }`,
    [],
    Snapshot.yes,
    Synth.yes,
  );

  testCase.test(
    "multiple outputs",
    `
      output "first_cidr_out" {
          value = "first"
      }
      output "second_cidr_out" {
          value = "second"
      }`,
    [],
    Snapshot.yes,
    Synth.yes,
  );

  testCase.test(
    "number output",
    `
    output "test" {
      value = 42
    }
    `,
    [],
    Snapshot.yes,
    Synth.yes,
  );
});
