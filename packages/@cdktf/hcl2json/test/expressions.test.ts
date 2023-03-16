// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { getReferencesInExpression, getExpressionAst } from "../lib";

function parseExpression(expr: string) {
  return () =>
    expect(
      getReferencesInExpression("main.tf", expr)
    ).resolves.toMatchSnapshot();
}
function getAst(expr: string) {
  return () =>
    expect(getExpressionAst("main.tf", expr)).resolves.toMatchSnapshot();
}

describe("getReferencesInExpression", () => {
  test("parses a simple string", parseExpression("foo"));
  test("parses a reference string", parseExpression("${var.foo}"));
  test("parses three part references", parseExpression("${module.foo.output}"));
  test(
    "parses four part references",
    parseExpression("${data.type.name.attr}")
  );
  test(
    "parses a terraform function",
    parseExpression('${replace(module.foo.output, "-", var.bar)}')
  );

  test(
    "parses nested terraform functions",
    parseExpression(
      '${split(var.separator, lower(replace(module.foo.output, "-", var.bar)))}'
    )
  );

  test(
    "parses embedded vars",
    parseExpression("Hey, did you hear about ${module.foo.output}s new album?")
  );
  test(
    "parses lists",
    parseExpression('[5, ${module.foo.output}, "val", true]')
  );

  test(
    "parses maps",
    parseExpression(
      '{ x = ${module.foo.output}, y = "val", z = true, a = ${replace(module.foo.output, "-", var.bar)} }'
    )
  );

  test(
    "parses variable arithmetics",
    parseExpression("${var.members + var.admins}")
  );

  test(
    "parses ternary expressions",
    parseExpression(
      "${aws_kms_key.examplekms.deletion_window_in_days > 3 ? aws_s3_bucket.examplebucket.id : []}"
    )
  );

  test(
    "parses multi-line for loops",
    parseExpression(
      "${{\n            for name, user in var.users : name => user\n            if !user.is_admin\n          }}"
    )
  );

  test(
    "parses for in loops",
    parseExpression("${{ for name, user in var.users : user.role => name... }}")
  );

  test(
    "parses terraform functions with file access",
    parseExpression("${ element(aws_s3_bucket.examplebucket_two, 0).id }")
  );

  test(
    "parses splat expressions",
    parseExpression("${ toset(aws_s3_bucket.examplebucket.*) }")
  );

  test("property access", parseExpression(`\${ var.setting["bucket_name"] }`));

  test(
    "mixed property access",
    parseExpression(`\${ var.setting["bucket_name"].arn }`)
  );

  test(
    "variable property access",
    parseExpression(`\${ var.settings[var.bucket_name_key] }`)
  );

  test(
    "partial variable property access",
    parseExpression(`\${ var.settings["\${var.prefix}-my-bucket"] }`)
  );

  test(
    "list expressions",
    parseExpression(`\${ [var.tags.app, var.tags.env] }`)
  );

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
        input.substring(ref.startPosition, ref.endPosition)
      )
    ).toMatchInlineSnapshot(`
              Array [
                "var.settings",
                "var.other_settings",
                "var.yet_another_setting",
                "var.final_setting",
              ]
            `);
  });

  test("fails on malformed expressions", () => {
    expect(
      getReferencesInExpression("main.tf", "${module.foo.output")
    ).rejects.toMatchSnapshot();
  });
});

describe("getExpressionAst", () => {
  test("parses a simple string", getAst("foo"));
  test("parses a reference string", getAst("${var.foo}"));
  test("parses three part references", getAst("${module.foo.output}"));
  test("parses four part references", getAst("${data.type.name.attr}"));
  test(
    "parses a terraform function",
    getAst('${replace(module.foo.output, "-", var.bar)}')
  );

  test(
    "parses nested terraform functions",
    getAst(
      '${split(var.separator, lower(replace(module.foo.output, "-", var.bar)))}'
    )
  );

  test(
    "parses embedded vars",
    getAst("Hey, did you hear about ${module.foo.output}s new album?")
  );
  test("parses lists", getAst('[5, ${module.foo.output}, "val", true]'));

  test(
    "parses maps",
    getAst(
      '{ x = ${module.foo.output}, y = "val", z = true, a = ${replace(module.foo.output, "-", var.bar)} }'
    )
  );

  test("parses variable arithmetics", getAst("${var.members + var.admins}"));

  test(
    "parses ternary expressions",
    getAst(
      "${aws_kms_key.examplekms.deletion_window_in_days > 3 ? aws_s3_bucket.examplebucket.id : []}"
    )
  );

  test.skip(
    "parses multi-line for loops",
    getAst(
      "${{\n            for name, user in var.users : name => user\n            if !user.is_admin\n          }}"
    )
  );

  test.skip(
    "parses for in loops",
    getAst("${{ for name, user in var.users : user.role => name... }}")
  );

  test.skip(
    "parses terraform functions with file access",
    getAst("${ element(aws_s3_bucket.examplebucket_two, 0).id }")
  );

  test.skip(
    "parses splat expressions",
    getAst("${ toset(aws_s3_bucket.examplebucket.*) }")
  );

  test.skip("property access", getAst(`\${ var.setting["bucket_name"] }`));

  test.skip(
    "mixed property access",
    getAst(`\${ var.setting["bucket_name"].arn }`)
  );

  test.skip(
    "variable property access",
    getAst(`\${ var.settings[var.bucket_name_key] }`)
  );

  test.skip(
    "partial variable property access",
    getAst(`\${ var.settings["\${var.prefix}-my-bucket"] }`)
  );

  test.skip("list expressions", getAst(`\${ [var.tags.app, var.tags.env] }`));

  test("fails on malformed expressions", () => {
    expect(
      getExpressionAst("main.tf", "${module.foo.output")
    ).rejects.toMatchSnapshot();
  });
});
