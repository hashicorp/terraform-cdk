// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { getReferencesInExpression, getExpressionAst } from "../lib";

describe("getReferencesInExpression", () => {
  test.each([
    ["parses a simple string", '"foo"'],
    ["parses a reference string", '"${var.foo}"'],
    ["parses three part references", '"${module.foo.output}"'],
    ["parses four part references", '"${data.type.name.attr}"'],
    [
      "parses a terraform function",
      '"${replace(module.foo.output, "-", var.bar)}"',
    ],
    [
      "parses nested terraform functions",
      '"${split(var.separator, lower(replace(module.foo.output, "-", var.bar)))}"',
    ],
    [
      "parses embedded vars",
      '"Hey, did you hear about ${module.foo.output}s new album?"',
    ],
    ["parses lists", '"${[5, "${module.foo.output}", "val", true]}"'],
    [
      "parses maps",
      '"${{ x = "${module.foo.output}", y = "val", z = true, a = "${replace(module.foo.output, "-", var.bar)}" }}"',
    ],
    ["parses variable arithmetics", '"${var.members + var.admins}"'],
    [
      "parses ternary expressions",
      '"${aws_kms_key.examplekms.deletion_window_in_days > 3 ? aws_s3_bucket.examplebucket.id : []}"',
    ],
    [
      "parses multi-line for loops",
      '"${{\n            for name, user in var.users : name => user\n            if user.is_admin\n          }}"',
    ],
    [
      "parses for in loops",
      '"${{ for name, user in var.users : user.role => name... }}"',
    ],
    [
      "parses terraform functions with file access",
      '"${ element(aws_s3_bucket.examplebucket_two, 0).id }"',
    ],
    ["parses splat expressions", '"${ toset(aws_s3_bucket.examplebucket.*) }"'],
    ["property access", `"\${ var.setting["bucket_name"] }"`],
    ["mixed property access", `"\${ var.setting["bucket_name"].arn }"`],
    ["variable property access", `"\${ var.settings[var.bucket_name_key] }"`],
    [
      "partial variable property access",
      `"\${ var.settings["\${var.prefix}-my-bucket"] }"`,
    ],
    ["list expressions", `"\${ [var.tags.app, var.tags.env] }"`],
  ])("%s", async (_, input) => {
    const res = await getReferencesInExpression("main.tf", input);

    expect(res).toMatchSnapshot();
  });

  test("selects the right parts in multi-line expressions", async () => {
    const input = `\${merge(
      var.settings,
      var.other_settings, # best one
      var.yet_another_setting,
      var.final_setting,
    )}`;
    const references = await getReferencesInExpression("main.tf", input);

    return expect(
      references.map((ref) =>
        input.substring(ref.startPosition, ref.endPosition),
      ),
    ).toMatchInlineSnapshot(`
              [
                "var.settings",
                "var.other_settings",
                "var.yet_another_setting",
                "var.final_setting",
              ]
            `);
  });

  test("fails on malformed expressions", () => {
    return expect(
      getReferencesInExpression("main.tf", '"${module.foo.output"'),
    ).rejects.toMatchSnapshot();
  });
});

describe("getExpressionAst", () => {
  test.each([
    ["parses a simple string", "foo"],
    ["parses a reference string", '"${var.foo}"'],
    ["parses three part references", '"${module.foo.output}"'],
    ["parses four part references", '"${data.type.name.attr}"'],
    [
      "parses a terraform function",
      '"${replace(module.foo.output, "-", var.bar)}"',
    ],
    [
      "parses nested terraform functions",
      '"${split(var.separator, lower(replace(module.foo.output, "-", var.bar)))}"',
    ],
    [
      "parses embedded vars",
      '"Hey, did you hear about ${module.foo.output}s new album?"',
    ],
    ["parses lists", '[5, "${module.foo.output}", "val", true]'],
    [
      "parses maps",
      '{ x = "${module.foo.output}", y = "val", z = true, a = "${replace(module.foo.output, "-", var.bar)}" }',
    ],
    ["parses variable arithmetics", '"${var.members + var.admins}"'],
    [
      "parses ternary expressions",
      '"${aws_kms_key.examplekms.deletion_window_in_days > 3 ? aws_s3_bucket.examplebucket.id : []}"',
    ],
    [
      "parses multi-line for loops",
      '"${{\n            for name, user in var.users : name => user\n            if !user.is_admin\n          }}"',
    ],
    [
      "parses for in loops",
      '"${{ for name, user in var.users : user.role => name... }}"',
    ],
    [
      "parses terraform functions with file access",
      '"${ element(aws_s3_bucket.examplebucket_two, 0).id }"',
    ],
    ["parses splat expressions", '"${ toset(aws_s3_bucket.examplebucket.*) }"'],
    ["property access", `"\${ var.setting["bucket_name"] }"`],
    ["mixed property access", `"\${ var.setting["bucket_name"].arn }"`],
    ["variable property access", `"\${ var.settings[var.bucket_name_key] }"`],
    [
      "partial variable property access",
      `"\${ var.settings["\${var.prefix}-my-bucket"] }"`,
    ],
    ["list expressions", `"\${ [var.tags.app, var.tags.env] }"`],
  ])("%s", async (_, input) => {
    return expect(
      getExpressionAst("main.tf", input),
    ).resolves.toMatchSnapshot();
  });

  test("fails on malformed expressions", async () => {
    return expect(
      getExpressionAst("main.tf", '"${module.foo.output"'),
    ).rejects.toMatchSnapshot();
  });
});
