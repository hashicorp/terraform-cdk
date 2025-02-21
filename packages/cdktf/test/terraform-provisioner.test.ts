// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Testing, TerraformStack, TerraformSelf } from "../lib";
import { TestResource } from "./helper";
import { TestProvider } from "./helper/provider";

test("self with nested keys", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "foo", {});
  new TestResource(stack, "bar", {
    name: "test",
    provisioners: [
      {
        when: "destroy",
        type: "local-exec",
        environment: {
          ECR_IMAGE_COMMAND: "delete",
          ECR_IMAGE_SOURCE_IMAGE: TerraformSelf.getString(
            "triggers_replace.sourceImage",
          ),
          ECR_IMAGE_TARGET_IMAGE: TerraformSelf.getString(
            "image_name_with_hash",
          ),
          ECR_IMAGE_TARGET_REGION: TerraformSelf.getString(
            "triggers_replace.target_region",
          ),
        },
        interpreter: ["bash"],
        command: "say 'hello world'",
      },
    ],
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});
