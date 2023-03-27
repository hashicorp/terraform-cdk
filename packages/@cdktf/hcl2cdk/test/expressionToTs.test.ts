/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { convertTerraformExpressionToTs } from "../lib/expressions";
import generate from "@babel/generator";
import * as t from "@babel/types";
import { Scope } from "../lib/types";

function code(e: t.Expression): string {
  return generate(e).code;
}

type GetScopeParams = {
  resources?: string[];
  data?: string[];
  variables?: string[];
  locals?: string[];
};

function getScope({
  resources,
  data,
  variables,
  locals,
}: GetScopeParams = {}): Scope {
  const scopeVariables: Scope["variables"] = {};

  resources?.forEach((varName) => {
    let [resourceType, resourceName] = varName.split(".");
    if (!resourceName) {
      resourceName = varName;
      resourceType = "aws_s3_bucket";
    }

    scopeVariables[varName] = {
      resource: resourceType,
      variableName: resourceName,
    };
  });

  data?.forEach((varName) => {
    scopeVariables[varName] = {
      resource: "data.aws_s3_bucket",
      variableName: varName,
    };
  });

  variables?.forEach((varName) => {
    scopeVariables[varName] = {
      resource: "var",
      variableName: varName,
    };
  });

  locals?.forEach((varName) => {
    scopeVariables[varName] = {
      resource: "local",
      variableName: varName,
    };
  });

  const scope = {
    providerSchema: {},
    providerGenerator: {},
    constructs: new Set<string>(),
    variables: scopeVariables,
    hasTokenBasedTypeCoercion: true,
  };

  return scope;
}

describe("expressionToTs", () => {
  test("converts a simple string to a string", async () => {
    const expression = "hello";
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(expression, scope, []);
    expect(code(result)).toMatchInlineSnapshot(`"\\"hello\\""`);
  });

  test("converts a simple expression with a template", async () => {
    const expression = "${22}";
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(expression, scope, []);
    expect(code(result)).toMatchInlineSnapshot(`"22"`);
  });

  test("converts a variable reference", async () => {
    const expression = "${var.foo}";
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(expression, scope, []);
    expect(code(result)).toMatchInlineSnapshot(`"foo.value"`);
  });

  test("convert a variable reference with snake case", async () => {
    const expression = "${var.foo_bar}";
    const scope = getScope({ variables: ["foo_bar"] });
    const result = await convertTerraformExpressionToTs(expression, scope, []);
    expect(code(result)).toMatchInlineSnapshot(`"foo_bar.value"`);
  });

  test("convert a function call", async () => {
    const expression = `\${replace("hello", "l", "w")}`;
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(expression, scope, []);
    expect(code(result)).toMatchInlineSnapshot(
      `"replace(\\"hello\\", \\"l\\", \\"w\\")"`
    );
  });

  test("converts a function call with an expression", async () => {
    const expression = `\${replace("hello-\${22+22}", "44", "world")}`;
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(expression, scope, []);
    expect(code(result)).toMatchInlineSnapshot(
      `"replace(\\"hello-\\" + Op.add(22, 22), \\"44\\", \\"world\\")"`
    );
  });

  test("convert a variable reference", async () => {
    const expression = `\${var.foo_bar}`;
    const scope = getScope({ variables: ["foo_bar"] });
    const result = await convertTerraformExpressionToTs(expression, scope, []);
    // TODO: This seems broken
    expect(code(result)).toMatchInlineSnapshot(`"foo_bar.value"`);
  });

  test("convert a resource reference", async () => {
    const expression = `"simple-\${aws_s3_bucket.foo.id}"`;
    const scope = getScope({ resources: ["aws_s3_bucket.foo"] });
    const result = await convertTerraformExpressionToTs(expression, scope, []);
    expect(code(result)).toMatchInlineSnapshot(
      `"\\"simple-\\" + awsS3BucketFoo.id"`
    );
  });

  test("convert a resource reference with nested properties", async () => {
    const expression = `"simple-\${aws_s3_bucket.foo.prop.test}"`;
    const scope = getScope({ resources: ["aws_s3_bucket.foo"] });
    const result = await convertTerraformExpressionToTs(expression, scope, []);
    expect(code(result)).toMatchInlineSnapshot(
      `"\\"simple-\\" + awsS3BucketFoo.prop.test"`
    );
  });

  test("convert a local reference", async () => {
    const expression = `"simple-\${local.foo}"`;
    const scope = getScope({ locals: ["foo"] });
    const result = await convertTerraformExpressionToTs(expression, scope, []);
    expect(code(result)).toMatchInlineSnapshot(`"\\"simple-\\" + foo"`);
  });

  test("plain resource references in arithmetics", async () => {
    const expression =
      "${aws_s3_bucket.examplebucket.count + aws_s3_bucket.otherbucket.count }";
    const scope = getScope({
      resources: ["aws_s3_bucket.examplebucket", "aws_s3_bucket.otherbucket"],
    });
    const result = await convertTerraformExpressionToTs(expression, scope, []);
    expect(code(result)).toMatchInlineSnapshot(
      `"Op.add(awsS3BucketExamplebucket.count, awsS3BucketOtherbucket.count)"`
    );
  });

  test("use fqn for splat reference", async () => {
    const expression = `\${aws_s3_bucket.foo.*.id}`;
    const scope = getScope({ resources: ["aws_s3_bucket.foo"] });
    const result = await convertTerraformExpressionToTs(expression, scope, []);
    expect(code(result)).toMatchInlineSnapshot(
      `"awsS3BucketFoo.fqn + \\".*.id\\""`
    );
  });

  test("use no fqn if property is present on numeric access", async () => {
    const expression =
      "${aws_s3_bucket.examplebucket.network_interface.0.access_config.0.assigned_nat_ip}";
    const scope = getScope({ resources: ["aws_s3_bucket.examplebucket"] });
    const result = await convertTerraformExpressionToTs(expression, scope, []);
    expect(code(result)).toMatchInlineSnapshot(
      `"awsS3BucketExamplebucket.network_interface + \\".0.access_config.0.assigned_nat_ip\\""`
    );
  });

  test("detects splat reference within function", async () => {
    const expression = "${toset(aws_s3_bucket.examplebucket.*)}";
    const scope = getScope({ resources: ["aws_s3_bucket.examplebucket"] });
    const result = await convertTerraformExpressionToTs(expression, scope, []);
    expect(code(result)).toMatchInlineSnapshot(
      `"toset(awsS3BucketExamplebucket.fqn + \\".*\\")"`
    );
  });

  test("convert conditional", async () => {
    const expression =
      "${aws_kms_key.key.deletion_window_in_days > 3 ? aws_s3_bucket.examplebucket.id : []}";
    const scope = getScope({ resources: ["aws_kms_key.key", "examplebucket"] });
    const result = await convertTerraformExpressionToTs(expression, scope, []);
    expect(code(result)).toMatchInlineSnapshot(
      `"conditional(Op.gt(awsKmsKeyKey.deletion_window_in_days, 3), examplebucket.id, [])"`
    );
  });

  test("converts a function with references", async () => {
    const expression = "${element(aws_s3_bucket.examplebucket, 0).id}";
    const scope = getScope({ resources: ["aws_s3_bucket.examplebucket"] });
    const result = await convertTerraformExpressionToTs(expression, scope, []);
    expect(code(result)).toMatchInlineSnapshot(
      `"element(awsS3BucketExamplebucket, 0) + \\".id\\""`
    );
  });

  test("converts a function with splat reference", async () => {
    const expression = "${element(aws_s3_bucket.examplebucket.*.id, 0)}";
    const scope = getScope({ resources: ["aws_s3_bucket.examplebucket"] });
    const result = await convertTerraformExpressionToTs(expression, scope, []);
    expect(code(result)).toMatchInlineSnapshot(
      `"element(awsS3BucketExamplebucket.fqn + \\".*.id\\", 0)"`
    );
  });

  test("convert for loops", async () => {
    const expression =
      "${{ for name, user in var.users : user.role => name...}}";

    const scope = getScope();
    const result = await convertTerraformExpressionToTs(expression, scope, []);
    expect(code(result)).toMatchInlineSnapshot(
      `"\\"\${{ for name, user in\\" + users.value + \\" : user.role => name...}}\\""`
    );
  });

  test("for expressions", async () => {
    const expression = "{for s in var.list : s => upper(s)}";

    const scope = getScope();
    const result = await convertTerraformExpressionToTs(expression, scope, []);
    expect(code(result)).toMatchInlineSnapshot(
      `"\\"\${{ for s in\\" + list.value + \\" : s => upper(s)}}\\""`
    );
  });

  test("for list expression ", async () => {
    const expression = "[for s in var.list : upper(s)]";

    const scope = getScope();
    const result = await convertTerraformExpressionToTs(expression, scope, []);
    expect(code(result)).toMatchInlineSnapshot(
      `"\\"\${[ for s in\\" + list.value + \\" : upper(s)]}\\""`
    );
  });

  test("for list with conditional", async () => {
    const expression = '[for s in var.list : upper(s) if s != ""]';
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(expression, scope, []);
    expect(code(result)).toMatchInlineSnapshot(
      `"\\"\${[ for s in\\" + list.value + \\" : upper(s) if s != \\\\\\"\\\\\\"]}\\""`
    );
  });

  test("convert property access resources", async () => {
    const expression = "${aws_s3_bucket.examplebucket[0].id}";
    const scope = getScope({ resources: ["aws_s3_bucket.examplebucket"] });
    const result = await convertTerraformExpressionToTs(expression, scope, []);
    expect(code(result)).toMatchInlineSnapshot(
      `"awsS3BucketExamplebucket + \\".0.id\\""`
    );
  });

  test("convert function with arrays and comments", async () => {
    const expression = `\${compact([
            # The example "bucket"
            aws_s3_bucket.examplebucket,
        
            # The "Learn" single page application. This is not configured in all environments.
            var.input,
          ])}`;
    const scope = getScope({
      resources: ["aws_s3_bucket.examplebucket"],
      variables: ["input"],
    });
    const result = await convertTerraformExpressionToTs(expression, scope, []);
    // TODO: See if we have a way to preserve comments
    expect(code(result)).toMatchInlineSnapshot(
      `"compact([awsS3BucketExamplebucket, input.value])"`
    );
  });

  test("convert references for same reference", async () => {
    const expression = `\${var.input == "test" ? "azure-ad-int" : "azure-ad-\${var.input}"}`;
    const scope = getScope({ variables: ["input"] });
    const result = await convertTerraformExpressionToTs(expression, scope, []);
    expect(code(result)).toMatchInlineSnapshot(
      `"conditional(Op.equal(input.value, \\"test\\"), \\"azure-ad-int\\", \\"azure-ad-\\" + input.value)"`
    );
  });
});
