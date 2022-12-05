import { testCase, Synth } from "./helpers/convert";

describe("outputs", () => {
  testCase.test(
    "output",
    `
      output "cidr_out" {
          value = "test"
      }`,
    [],
    Synth.yes
  );
  testCase.test(
    "sensitive output",
    `
      output "cidr_out" {
          value = "test"
          sensitive = true
      }`,

    [],
    Synth.yes
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
    Synth.yes
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
    Synth.yes
  );

  testCase.test(
    "number output",
    `
    output "test" {
      value = 42
    }
    `,
    [],
    Synth.yes
  );
});
