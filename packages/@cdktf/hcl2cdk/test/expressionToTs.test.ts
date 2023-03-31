/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { convertTerraformExpressionToTs } from "../lib/expressions";
import generate from "@babel/generator";
import * as t from "@babel/types";
import { ResourceScope } from "../lib/types";
import { AttributeType } from "@cdktf/provider-generator";

function code(e: t.Expression): string {
  return generate(e).code;
}

type GetScopeParams = {
  resources?: string[];
  data?: string[];
  variables?: string[];
  locals?: string[];
  forEachIteratorName?: string;
};

function getScope({
  resources,
  data,
  variables,
  locals,
  forEachIteratorName,
}: GetScopeParams = {}): ResourceScope {
  const scopeVariables: ResourceScope["variables"] = {};

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
    forEachIteratorName,
  };

  return scope;
}

const getType = (): AttributeType => "string";

describe("expressionToTs", () => {
  test("converts a simple string to a string", async () => {
    const expression = "hello";
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(`"\\"hello\\""`);
  });

  test("converts a simple expression with a template", async () => {
    const expression = "${22}";
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(`"cdktf.Token.asString(22)"`);
  });

  test("converts a variable reference", async () => {
    const expression = "${var.foo}";
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(`"foo.stringValue"`);
  });

  test("convert a variable reference with snake case", async () => {
    const expression = "${var.foo_bar}";
    const scope = getScope({ variables: ["foo_bar"] });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"cdktf.Token.asString(fooBar.value)"`
    );
  });

  test("convert a function call", async () => {
    const expression = `\${replace("hello", "l", "w")}`;
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"cdktf.Fn.replace(\\"hello\\", \\"l\\", \\"w\\")"`
    );
  });

  test("converts a function call with an expression", async () => {
    const expression = `\${replace("hello-\${22+22}", "44", "world")}`;
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"cdktf.Fn.replace(\\"hello-\\" + cdktf.Op.add(22, 22), \\"44\\", \\"world\\")"`
    );
  });

  test("convert a variable reference", async () => {
    const expression = `\${var.foo_bar}`;
    const scope = getScope({ variables: ["foo_bar"] });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    // TODO: This seems broken
    expect(code(result)).toMatchInlineSnapshot(
      `"cdktf.Token.asString(fooBar.value)"`
    );
  });

  test("convert a resource reference", async () => {
    const expression = `"simple-\${aws_s3_bucket.foo.id}"`;
    const scope = getScope({ resources: ["aws_s3_bucket.foo"] });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"\\"simple-\${\\" + awsS3BucketFoo.id + \\"}\\""`
    );
  });

  test("convert a resource reference with nested properties", async () => {
    const expression = `"simple-\${aws_s3_bucket.foo.prop.test}"`;
    const scope = getScope({ resources: ["aws_s3_bucket.foo"] });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"\\"simple-\${\\" + awsS3BucketFoo.prop.test + \\"}\\""`
    );
  });

  test("convert a local reference", async () => {
    const expression = `"simple-\${local.foo}"`;
    const scope = getScope({ locals: ["foo"] });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"\\"simple-\${\\" + foo + \\"}\\""`
    );
  });

  test("plain resource references in arithmetics", async () => {
    const expression =
      "${aws_s3_bucket.examplebucket.count + aws_s3_bucket.otherbucket.count }";
    const scope = getScope({
      resources: ["aws_s3_bucket.examplebucket", "aws_s3_bucket.otherbucket"],
    });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"cdktf.Token.asString(cdktf.Op.add(awsS3BucketExamplebucket.count, awsS3BucketOtherbucket.count))"`
    );
  });

  test("use fqn for splat reference", async () => {
    const expression = `\${aws_s3_bucket.foo.*.id}`;
    const scope = getScope({ resources: ["aws_s3_bucket.foo"] });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"\\"\${\\" + awsS3BucketFoo.fqn + \\"}.*.id\\""`
    );
  });

  test("use no fqn if property is present on numeric access", async () => {
    const expression =
      "${aws_s3_bucket.examplebucket.network_interface.0.access_config.0.assigned_nat_ip}";
    const scope = getScope({ resources: ["aws_s3_bucket.examplebucket"] });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"\\"\${\\" + awsS3BucketExamplebucket.networkInterface + \\"}[0].access_config[0].assigned_nat_ip\\""`
    );
  });

  test("use no fqn if property is present on numeric access", async () => {
    const expression =
      "${aws_s3_bucket.examplebucket.network_interface[0].access_config[0].assigned_nat_ip}";
    const scope = getScope({ resources: ["aws_s3_bucket.examplebucket"] });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"\\"\${\\" + awsS3BucketExamplebucket.networkInterface + \\"}[0].access_config[0].assigned_nat_ip\\""`
    );
  });

  test("detects splat reference within function", async () => {
    const expression = "${toset(aws_s3_bucket.examplebucket.*)}";
    const scope = getScope({ resources: ["aws_s3_bucket.examplebucket"] });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"cdktf.Token.asString(cdktf.Fn.toset(\\"\${\\" + awsS3BucketExamplebucket.fqn + \\"}.*\\"))"`
    );
  });

  test("convert conditional", async () => {
    const expression =
      "${aws_kms_key.key.deletion_window_in_days > 3 ? aws_s3_bucket.examplebucket.id : []}";
    const scope = getScope({ resources: ["aws_kms_key.key", "examplebucket"] });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"cdktf.Token.asString(cdktf.conditional(cdktf.Op.gt(awsKmsKeyKey.deletionWindowInDays, 3), examplebucket.id, []))"`
    );
  });

  test("converts a function with references", async () => {
    const expression = "${element(aws_s3_bucket.examplebucket, 0).id}";
    const scope = getScope({ resources: ["aws_s3_bucket.examplebucket"] });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"cdktf.Token.asString(cdktf.propertyAccess(cdktf.Fn.element(awsS3BucketExamplebucket, 0), [\\"id\\"]))"`
    );
  });

  test("converts a function with splat reference", async () => {
    const expression = "${element(aws_s3_bucket.examplebucket.*.id, 0)}";
    const scope = getScope({ resources: ["aws_s3_bucket.examplebucket"] });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"cdktf.Token.asString(cdktf.Fn.element(\\"\${\\" + awsS3BucketExamplebucket.fqn + \\"}.*.id\\", 0))"`
    );
  });

  test("convert for loops", async () => {
    const expression =
      "${{ for name, user in var.users : user.role => name...}}";

    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"\\"\${{ for name, user in \${\\" + users.value + \\"} : user.role => name...}}\\""`
    );
  });

  test("for expressions", async () => {
    const expression = "{for s in var.list : s => upper(s)}";

    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"\\"\${{ for s in \${\\" + list.value + \\"} : s => upper(s)}}\\""`
    );
  });

  test("for list expression ", async () => {
    const expression = "[for s in var.list : upper(s)]";

    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"\\"\${[ for s in \${\\" + list.value + \\"} : upper(s)]}\\""`
    );
  });

  test("for list with conditional", async () => {
    const expression = '[for s in var.list : upper(s) if s != ""]';
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"\\"\${[ for s in \${\\" + list.value + \\"} : upper(s) if s != \\\\\\"\\\\\\"]}\\""`
    );
  });

  test("convert property access resources", async () => {
    const expression = "${aws_s3_bucket.examplebucket[0].id}";
    const scope = getScope({ resources: ["aws_s3_bucket.examplebucket"] });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"\\"\${\\" + awsS3BucketExamplebucket + \\"}[0].id\\""`
    );
  });

  test("convert unary operators", async () => {
    const expression = "${!var.enabled}";
    const scope = getScope({ variables: ["enabled"] });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"cdktf.Token.asString(cdktf.Op.not(enabled.value))"`
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
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    // TODO: See if we have a way to preserve comments
    expect(code(result)).toMatchInlineSnapshot(
      `"cdktf.Token.asString(cdktf.Fn.compact(cdktf.Token.asList([awsS3BucketExamplebucket, input.value])))"`
    );
  });

  test("convert references for same reference", async () => {
    const expression = `\${var.input == "test" ? "azure-ad-int" : "azure-ad-\${var.input}"}`;
    const scope = getScope({ variables: ["input"] });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"cdktf.Token.asString(cdktf.conditional(cdktf.Op.eq(input.value, \\"test\\"), \\"azure-ad-int\\", \\"azure-ad-\${\\" + input.value + \\"}\\"))"`
    );
  });

  test("nested variable access", async () => {
    const expression = `\${element(var.test2["val1"], 0)}`;
    const scope = getScope({ variables: ["test2"] });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"cdktf.Token.asString(cdktf.Fn.element(\\"\${\\" + test2.value + \\"}[\\\\\\"val1\\\\\\"]\\", 0))"`
    );
  });

  test("compliated nested local value", async () => {
    const expression = "${flatten(var.vnets[*].subnets[*].name)}";
    const scope = getScope({ variables: ["vnets"] });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"cdktf.Token.asString(cdktf.Fn.flatten(\\"\${\\" + vnets.value + \\"}[*].subnets[*].name\\"))"`
    );
  });

  // TOIMPROVE: I don't think we can handle this case yet, since the variable
  // needs to be wrapped in an iterator. I'm leaving this in, but it's broken
  test("complicated nested variable access with map", async () => {
    const expression = `{ 
    for vnet in var.vnets[*]:
    (vnet.vnet_name) => vnet.subnets[*].name
  }`;
    const scope = getScope({ variables: ["vnets"] });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"\\"\${{ for vnet in \${\\" + (\\"\${\\" + vnets.value + \\"}[*]\\") + \\"} : (vnet.vnet_name) => vnet.subnets[*].name}}\\""`
    );
  });

  test("complicated nested variable access with list", async () => {
    const expression = `\${flatten([
    for k, v in var.route : [
      for n, s in v : [
        {
          key = k,
          name = n,
          svc_url = s
        }
      ]
    ]
  ])}`;
    const scope = getScope({ variables: ["route"] });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"cdktf.Token.asString(cdktf.Fn.flatten(\\"\${[ for k, v in \${\\" + route.value + \\"} : [\\\\n      for n, s in v : [\\\\n        {\\\\n          key = k,\\\\n          name = n,\\\\n          svc_url = s\\\\n        }\\\\n      ]\\\\n    ]]}\\"))"`
    );
  });

  test("simple local variable access", async () => {
    const expression = "${!local.enabled}";
    const scope = getScope({ locals: ["enabled"] });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"cdktf.Token.asString(cdktf.Op.not(enabled))"`
    );
  });

  test("multi local access", async () => {
    const expression =
      '"${local.service_name},${local.owner},${local.is_it_great},${local.how_many}"';
    const scope = getScope({
      locals: ["service_name", "owner", "is_it_great", "how_many"],
    });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"\\"\${\\" + serviceName + \\"},\${\\" + owner + \\"},\${\\" + isItGreat + \\"},\${\\" + howMany + \\"}\\""`
    );
  });

  test("binary operations within literals and variables", async () => {
    const expression = '"${var.test} + 1"';
    const scope = getScope({ variables: ["test"] });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"\\"\${\\" + test.value + \\"} + 1\\""`
    );
  });

  test("local variable access", async () => {
    const expression = '"${local.enabled}"';
    const scope = getScope({ locals: ["enabled"] });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(`"enabled"`);
  });

  test("converts traversals that cannot be references", async () => {
    const expression = "${self.path}";
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"cdktf.Token.asString(cdktf.TerraformSelf.getAny(\\"path\\"))"`
    );
  });

  test("converts join function with variables", async () => {
    const expression = '${join("-", [var.tags.app, var.tags.env])}';
    const scope = getScope({ variables: ["tags"] });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"cdktf.Fn.join(\\"-\\", cdktf.Token.asList([\\"\${\\" + tags.value + \\"}.app\\", \\"\${\\" + tags.value + \\"}.env\\"]))"`
    );
  });

  test("doesn't wrap any extra templates", async () => {
    const expression = `"app-\${terraform.workspace}"`;
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"\\"app-\${terraform.workspace}\\""`
    );
  });

  test("converts a for expression", async () => {
    const expression = `[for record in aws_route53_record.example : record.fqdn]`;
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"\\"\${[ for record in \${\\" + awsRoute53RecordExample.fqn + \\"} : record.fqdn]}\\""`
    );
  });

  test("converts a data source", async () => {
    const expression = `"\${data.aws_route53_zone.example.zone_id}"`;
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"cdktf.Token.asString(dataAwsRoute53ZoneExample.zoneId)"`
    );
  });

  test("convert an each expression", async () => {
    const expression = `"\${each.value.name}"`;
    const scope = getScope({ forEachIteratorName: "myIterator" });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"cdktf.Token.asString(cdktf.propertyAccess(myIterator.value, [\\"name\\"]))"`
    );
  });

  test("converts a property of a function containing a resource", async () => {
    const expression = `"\${element(aws_s3_bucket.examplebucket, 0).id}"`;
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"cdktf.Token.asString(cdktf.propertyAccess(cdktf.Fn.element(awsS3BucketExamplebucket, 0), [\\"id\\"]))"`
    );
  });

  test("convert a function with references with splats", async () => {
    const expression = `"\${concat(var.private_subnets.*.id, var.public_subnets.*.id)}"`;
    const scope = getScope({
      variables: ["private_subnets", "public_subnets"],
    });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"cdktf.Token.asString(cdktf.Fn.concat([\\"\${\\" + privateSubnets.value + \\"}.*.id\\", \\"\${\\" + publicSubnets.value + \\"}.*.id\\"]))"`
    );
  });

  test("convert a iterator variable", async () => {
    const expression = `"\${each.key}"`;
    const scope = getScope({
      variables: ["private_subnets", "public_subnets"],
      forEachIteratorName: "myIterator",
    });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"cdktf.Token.asString(myIterator.key)"`
    );
  });

  test("convert a self reference", async () => {
    const expression = `"\${self.subnet.id}"`;
    const scope = getScope({
      variables: ["private_subnets", "public_subnets"],
      forEachIteratorName: "myIterator",
    });
    const result = await convertTerraformExpressionToTs(
      expression,
      scope,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"cdktf.Token.asString(cdktf.TerraformSelf.getAny(\\"subnet.id\\"))"`
    );
  });
});
