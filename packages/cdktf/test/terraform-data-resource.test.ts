// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Testing, TerraformStack } from "../lib";
import { ref } from "../lib/tfExpression";
import { DataResource } from "../lib/terraform-data-resource";

test("built-in Terraform data resource", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new DataResource(stack, "test-data", {
    input: ref("var.input"),
    triggersReplace: [ref("var.triggersReplace1"), ref("var.triggersReplace2")],
  });

  // Note: the triggers_replace attribute is defined as dynamic in the schema,
  // which is treated as an object by the CDKTF provider generation and therefore
  // renders the array as a map instead.
  expect(Testing.synth(stack)).toMatchInlineSnapshot(`
    "{
      "resource": {
        "terraform_data": {
          "test-data": {
            "input": "\${var.input}",
            "triggers_replace": {
              "0": "\${var.triggersReplace1}",
              "1": "\${var.triggersReplace2}"
            }
          }
        }
      }
    }"
  `);
});
