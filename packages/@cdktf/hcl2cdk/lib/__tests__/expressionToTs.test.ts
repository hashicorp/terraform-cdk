/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { convertTerraformExpressionToTs } from "../expressions";
import generate from "@babel/generator";
import * as t from "@babel/types";
import { ResourceScope } from "../types";
import { AttributeType } from "@cdktf/commons";

function code(e: t.Expression): string {
  return generate(e).code;
}

const awsProviderSchema = {
  format_version: "1.0",
  provider_schemas: {
    "registry.terraform.io/hashicorp/aws": {
      provider: {},
      resource_schemas: {
        aws_s3_bucket: {
          block: {
            attributes: {
              foo: {
                type: ["map", "string"],
                description_kind: "plain",
              },
            },
          },
        },
      },
      data_source_schemas: {
        aws_availability_zones: {
          version: 0,
          block: {
            attributes: {
              all_availability_zones: {
                type: "bool",
                description_kind: "plain",
                optional: true,
              },
              exclude_names: {
                type: ["set", "string"],
                description_kind: "plain",
                optional: true,
              },
              exclude_zone_ids: {
                type: ["set", "string"],
                description_kind: "plain",
                optional: true,
              },
              group_names: {
                type: ["set", "string"],
                description_kind: "plain",
                computed: true,
              },
              id: {
                type: "string",
                description_kind: "plain",
                optional: true,
                computed: true,
              },
              names: {
                type: ["list", "string"],
                description_kind: "plain",
                computed: true,
              },
              state: {
                type: "string",
                description_kind: "plain",
                optional: true,
              },
              zone_ids: {
                type: ["list", "string"],
                description_kind: "plain",
                computed: true,
              },
              testing_map: {
                type: ["map", "string"],
                description_kind: "plain",
                computed: true,
              },
            },
            block_types: {
              filter: {
                nesting_mode: "set",
                block: {
                  attributes: {
                    name: {
                      type: "string",
                      description_kind: "plain",
                      required: true,
                    },
                    values: {
                      type: ["set", "string"],
                      description_kind: "plain",
                      required: true,
                    },
                  },
                  description_kind: "plain",
                },
              },
              timeouts: {
                nesting_mode: "single",
                block: {
                  attributes: {
                    read: {
                      type: "string",
                      description_kind: "plain",
                      optional: true,
                    },
                  },
                  description_kind: "plain",
                },
              },
            },
            description_kind: "plain",
          },
        },
      },
    },
  },
};

const externalProviderSchema = {
  format_version: "1.0",
  provider_schemas: {
    "registry.terraform.io/hashicorp/external": {
      provider: {},
      resource_schemas: {},
      data_source_schemas: {
        external: {
          version: 0,
          block: {
            attributes: {
              id: {
                type: "string",
                description:
                  "The id of the data source. This will always be set to `-`",
                description_kind: "plain",
                computed: true,
              },
              program: {
                type: ["list", "string"],
                description:
                  "A list of strings, whose first element is the program to run and whose subsequent elements are optional command line arguments to the program. Terraform does not execute the program through a shell, so it is not necessary to escape shell metacharacters nor add quotes around arguments containing spaces.",
                description_kind: "plain",
                required: true,
              },
              query: {
                type: ["map", "string"],
                description:
                  "A map of string values to pass to the external program as the query arguments. If not supplied, the program will receive an empty object as its input.",
                description_kind: "plain",
                optional: true,
              },
              result: {
                type: ["map", "string"],
                description:
                  "A map of string values returned from the external program.",
                description_kind: "plain",
                computed: true,
              },
              working_dir: {
                type: "string",
                description:
                  "Working directory of the program. If not supplied, the program will run in the current directory.",
                description_kind: "plain",
                optional: true,
              },
            },
            description:
              'The `external` data source allows an external program implementing a specific protocol (defined below) to act as a data source, exposing arbitrary data for use elsewhere in the Terraform configuration.\n\n**Warning** This mechanism is provided as an "escape hatch" for exceptional situations where a first-class Terraform provider is not more appropriate. Its capabilities are limited in comparison to a true data source, and implementing a data source via an external program is likely to hurt the portability of your Terraform configuration by creating dependencies on external programs and libraries that may not be available (or may need to be used differently) on different operating systems.\n\n**Warning** Terraform Enterprise does not guarantee availability of any particular language runtimes or external programs beyond standard shell utilities, so it is not recommended to use this data source within configurations that are applied within Terraform Enterprise.',
            description_kind: "plain",
          },
        },
      },
    },
  },
};

type GetScopeParams = {
  provider?: Record<string, any>;
  resources?: string[];
  data?: string[];
  variables?: string[];
  locals?: string[];
  forEachIteratorName?: string;
  withinOverrideExpression?: boolean;
  scopedVariables?: Record<string, string>;
};

function getScope({
  provider,
  resources,
  data,
  variables,
  locals,
  forEachIteratorName,
  scopedVariables,
  withinOverrideExpression = false,
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
    providerSchema: provider ?? {},
    providerGenerator: {},
    constructs: new Set<string>(),
    variables: scopeVariables,
    hasTokenBasedTypeCoercion: true,
    scopedVariables: scopedVariables || {},
    forEachIteratorName,
    withinOverrideExpression,
    nodeIds: [],
    importables: [],
    topLevelConfig: {},
  };

  return scope;
}

const getType = (): AttributeType => "string";

describe("expressionToTs", () => {
  test("converts a simple string to a string", async () => {
    const expression = "hello";
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(`""hello""`);
  });

  test("converts a simple expression with a template", async () => {
    const expression = "${22}";
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(`"Token.asString(22)"`);
  });

  test("converts a variable reference", async () => {
    const expression = "${var.foo}";
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(`"foo.stringValue"`);
  });

  test("convert a variable reference with snake case", async () => {
    const expression = "${var.foo_bar}";
    const scope = getScope({ variables: ["foo_bar"] });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(fooBar.value)"`
    );
  });

  test("convert a function call", async () => {
    const expression = `\${replace("hello", "l", "w")}`;
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Fn.replace("hello", "l", "w"))"`
    );
  });

  test("converts a function call with an expression", async () => {
    const expression = `\${replace("hello-\${22+22}", "44", "world")}`;
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Fn.replace("hello-" + Token.asString(Op.add(22, 22)), "44", "world"))"`
    );
  });

  test("converts string concatenation of iterator key", async () => {
    const expression = '${"dynamic-ingress-${ingress.key}"}';
    const scope = getScope({
      scopedVariables: {
        ingress: "dynamic_iterator0",
      },
    });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `""dynamic-ingress-\${" + Token.asString(dynamic_iterator0.key) + "}""`
    );
  });

  test("convert a variable reference", async () => {
    const expression = `\${var.foo_bar}`;
    const scope = getScope({ variables: ["foo_bar"] });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    // TODO: This seems broken
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(fooBar.value)"`
    );
  });

  test("convert a resource reference", async () => {
    const expression = `"simple-\${aws_s3_bucket.foo.id}"`;
    const scope = getScope({ resources: ["aws_s3_bucket.foo"] });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(`""simple-\${" + foo.id + "}""`);
  });

  test("convert a resource reference with nested properties", async () => {
    const expression = `"simple-\${aws_s3_bucket.foo.prop.test}"`;
    const scope = getScope({ resources: ["aws_s3_bucket.foo"] });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `""simple-\${" + foo.prop.test + "}""`
    );
  });

  test("convert a local reference", async () => {
    const expression = `"simple-\${local.foo}"`;
    const scope = getScope({ locals: ["foo"] });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(`""simple-\${" + foo + "}""`);
  });

  test("plain resource references in arithmetics", async () => {
    const expression =
      "${aws_s3_bucket.examplebucket.count + aws_s3_bucket.otherbucket.count }";
    const scope = getScope({
      resources: ["aws_s3_bucket.examplebucket", "aws_s3_bucket.otherbucket"],
    });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Op.add(examplebucket.count, otherbucket.count))"`
    );
  });

  test("use fqn for splat reference", async () => {
    const expression = `\${aws_s3_bucket.foo.*.id}`;
    const scope = getScope({ resources: ["aws_s3_bucket.foo"] });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Fn.lookupNested(foo, ["*", "id"]))"`
    );
  });

  test("use fqn if property is present on numeric access using dot notation", async () => {
    const expression =
      "${aws_s3_bucket.examplebucket.network_interface.0.access_config.0.assigned_nat_ip}";
    const scope = getScope({ resources: ["aws_s3_bucket.examplebucket"] });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Fn.lookupNested(examplebucket.networkInterface, ["0", "access_config", "0", "assigned_nat_ip"]))"`
    );
  });

  test("use fqn if property is present on numeric access", async () => {
    const expression =
      "${aws_s3_bucket.examplebucket.network_interface[0].access_config[0].assigned_nat_ip}";
    const scope = getScope({ resources: ["aws_s3_bucket.examplebucket"] });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Fn.lookupNested(examplebucket.networkInterface, ["0", "access_config", "0", "assigned_nat_ip"]))"`
    );
  });

  test("use no fqn if property is present on numeric access using []", async () => {
    const expression =
      "${aws_s3_bucket.examplebucket.network_interface[0].access_config[0].assigned_nat_ip}";
    const scope = getScope({ resources: ["aws_s3_bucket.examplebucket"] });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Fn.lookupNested(examplebucket.networkInterface, ["0", "access_config", "0", "assigned_nat_ip"]))"`
    );
  });

  test("detects splat reference within function", async () => {
    const expression = "${toset(aws_s3_bucket.examplebucket.*)}";
    const scope = getScope({ resources: ["aws_s3_bucket.examplebucket"] });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Fn.toset(Fn.lookupNested(examplebucket, ["*"])))"`
    );
  });

  test("convert conditional", async () => {
    const expression =
      "${aws_kms_key.key.deletion_window_in_days > 3 ? aws_s3_bucket.examplebucket.id : []}";
    const scope = getScope({ resources: ["aws_kms_key.key", "examplebucket"] });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(conditional(Op.gt(key.deletionWindowInDays, 3), examplebucket.id, []))"`
    );
  });

  test("converts a function with references", async () => {
    const expression = "${element(aws_s3_bucket.examplebucket, 0).id}";
    const scope = getScope({ resources: ["aws_s3_bucket.examplebucket"] });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Fn.lookupNested(Fn.element(examplebucket, 0), ["id"]))"`
    );
  });

  test("converts a function with splat reference", async () => {
    const expression = "${element(aws_s3_bucket.examplebucket.*.id, 0)}";
    const scope = getScope({ resources: ["aws_s3_bucket.examplebucket"] });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Fn.element(Fn.lookupNested(examplebucket, ["*", "id"]), 0))"`
    );
  });

  test("convert for loops", async () => {
    const expression =
      "${{ for name, user in var.users : user.role => name...}}";

    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `""\${{ for name, user in \${" + users.value + "} : user.role => name...}}""`
    );
  });

  test("for expressions", async () => {
    const expression = "{for s in var.list : s => upper(s)}";

    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `""\${{ for s in \${" + list.value + "} : s => upper(s)}}""`
    );
  });

  test("for list expression ", async () => {
    const expression = "[for s in var.list : upper(s)]";

    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `""\${[ for s in \${" + list.value + "} : upper(s)]}""`
    );
  });

  test("for list with conditional", async () => {
    const expression = '[for s in var.list : upper(s) if s != ""]';
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `""\${[ for s in \${" + list.value + "} : upper(s) if s != \\"\\"]}""`
    );
  });

  test("convert property access resources", async () => {
    const expression = "${aws_s3_bucket.examplebucket[0].id}";
    const scope = getScope({ resources: ["aws_s3_bucket.examplebucket"] });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Fn.lookupNested(examplebucket, ["0", "id"]))"`
    );
  });

  test("convert unary operators", async () => {
    const expression = `\${!var.enabled}`;
    const scope = getScope({ variables: ["enabled"] });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      () => "bool"
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asBoolean(Op.not(enabled.value))"`
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
      scope,
      expression,
      getType
    );
    // TODO: See if we have a way to preserve comments
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Fn.compact(Token.asList([examplebucket, input.value])))"`
    );
  });

  test("convert references for same reference", async () => {
    const expression = `\${var.input == "test" ? "azure-ad-int" : "azure-ad-\${var.input}"}`;
    const scope = getScope({ variables: ["input"] });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(conditional(Op.eq(input.value, "test"), "azure-ad-int", "azure-ad-\${" + input.value + "}"))"`
    );
  });

  test("nested variable access", async () => {
    const expression = `\${element(var.test2["val1"], 0)}`;
    const scope = getScope({ variables: ["test2"] });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Fn.element(Fn.lookupNested(test2.value, ["\\"val1\\""]), 0))"`
    );
  });

  test("complicated nested local value", async () => {
    const expression = "${flatten(var.vnets[*].subnets[*].name)}";
    const scope = getScope({ variables: ["vnets"] });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Fn.flatten(Fn.lookupNested(vnets.value, ["*", "subnets", "*", "name"])))"`
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
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `""\${{ for vnet in \${" + Fn.lookupNested(vnets.value, ["*"]) + "} : (vnet.vnet_name) => vnet.subnets[*].name}}""`
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
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Fn.flatten("\${[ for k, v in \${" + route.value + "} : [\\n      for n, s in v : [\\n        {\\n          key = k,\\n          name = n,\\n          svc_url = s\\n        }\\n      ]\\n    ]]}"))"`
    );
  });

  test("simple local variable access", async () => {
    const expression = "${!local.enabled}";
    const scope = getScope({ locals: ["enabled"] });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Op.not(enabled))"`
    );
  });

  test("multi local access", async () => {
    const expression =
      '"${local.service_name},${local.owner},${local.is_it_great},${local.how_many}"';
    const scope = getScope({
      locals: ["service_name", "owner", "is_it_great", "how_many"],
    });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `""\${" + serviceName + "},\${" + owner + "},\${" + isItGreat + "},\${" + howMany + "}""`
    );
  });

  test("binary operations within literals and variables", async () => {
    const expression = '"${var.test} + 1"';
    const scope = getScope({ variables: ["test"] });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `""\${" + test.value + "} + 1""`
    );
  });

  test("local variable access", async () => {
    const expression = '"${local.enabled}"';
    const scope = getScope({ locals: ["enabled"] });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(`"enabled"`);
  });

  test("converts traversals that cannot be references", async () => {
    const expression = "${self.path}";
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(TerraformSelf.getAny("path"))"`
    );
  });

  test("converts join function with variables", async () => {
    const expression = '${join("-", [var.tags.app, var.tags.env])}';
    const scope = getScope({ variables: ["tags"] });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Fn.join("-", Token.asList([Fn.lookupNested(tags.value, ["app"]), Fn.lookupNested(tags.value, ["env"])])))"`
    );
  });

  test("converts join function with many arguments variables", async () => {
    const expression =
      '${join("-", var.tags.app, var.tags.env, var.tags.other)}';
    const scope = getScope({ variables: ["tags"] });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Fn.join("-", Token.asList(Fn.concat([Fn.lookupNested(tags.value, ["app"]), Fn.lookupNested(tags.value, ["env"]), Fn.lookupNested(tags.value, ["other"])]))))"`
    );
  });

  test("doesn't wrap any extra templates", async () => {
    const expression = `"app-\${terraform.workspace}"`;
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `""app-\${terraform.workspace}""`
    );
  });

  test("converts a for expression", async () => {
    const expression = `[for record in aws_route53_record.example : record.fqdn]`;
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `""\${[ for record in \${" + example.fqn + "} : record.fqdn]}""`
    );
  });

  test("converts a data source", async () => {
    const expression = `"\${data.aws_route53_zone.example.zone_id}"`;
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(example.zoneId)"`
    );
  });

  test("convert an each expression", async () => {
    const expression = `"\${each.value.name}"`;
    const scope = getScope({ forEachIteratorName: "myIterator" });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Fn.lookupNested(myIterator.value, ["name"]))"`
    );
  });

  test("converts a property of a function containing a resource", async () => {
    const expression = `"\${element(aws_s3_bucket.examplebucket, 0).id}"`;
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Fn.lookupNested(Fn.element(examplebucket, 0), ["id"]))"`
    );
  });

  test("convert a function with references with splats", async () => {
    const expression = `"\${concat(var.private_subnets.*.id, var.public_subnets.*.id)}"`;
    const scope = getScope({
      variables: ["private_subnets", "public_subnets"],
    });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Fn.concat([Fn.lookupNested(privateSubnets.value, ["*", "id"]), Fn.lookupNested(publicSubnets.value, ["*", "id"])]))"`
    );
  });

  test("convert a iterator variable", async () => {
    const expression = `"\${each.key}"`;
    const scope = getScope({
      variables: ["private_subnets", "public_subnets"],
      forEachIteratorName: "myIterator",
    });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(myIterator.key)"`
    );
  });

  test("convert a self reference", async () => {
    const expression = `"\${self.subnet.id}"`;
    const scope = getScope({
      variables: ["private_subnets", "public_subnets"],
      forEachIteratorName: "myIterator",
    });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(TerraformSelf.getAny("subnet.id"))"`
    );
  });

  test("convert heredocs", async () => {
    const expression = `<<EOF
[{
    "Condition": {
        "KeyPrefixEquals": "docs/"
    },
    "Redirect": {
        "ReplaceKeyPrefixWith": "documents/"
    }
}]
EOF
`;
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `""[{\\n    \\"Condition\\": {\\n        \\"KeyPrefixEquals\\": \\"docs/\\"\\n    },\\n    \\"Redirect\\": {\\n        \\"ReplaceKeyPrefixWith\\": \\"documents/\\"\\n    }\\n}]\\n""`
    );
  });

  test("convert heredocs without a trailing newline", async () => {
    const expression = `<<EOF
hello world
EOF`;
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(`""hello world\\n""`);
  });

  test("convert indented heredocs", async () => {
    const expression = `<<-EOF
              hello world
          EOF`;
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(`""hello world\\n""`);
  });

  test("convert override expressions", async () => {
    const expression = '"${required_resource_access.value["resource_access"]}"';
    const scope = getScope({
      withinOverrideExpression: true,
      scopedVariables: {
        required_resource_access: "dynamic-block",
      },
    });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `""\${required_resource_access.value[\\"resource_access\\"]}""`
    );
  });

  test("convert using operations while containing substring", async () => {
    const expression =
      // prettier-ignore
      '"${length(var.image_id) > 4 && substr(var.image_id, 0, 4) == \"ami-\"}"';
    const scope = getScope({});
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Op.and(Op.gt(Fn.lengthOf(imageId.value), 4), Op.eq(Fn.substr(imageId.stringValue, 0, 4), "ami-")))"`
    );
  });

  test("convert a data source with numeric access", async () => {
    const expression = `"\${data.aws_availability_zones.changeme_az_list_ebs_snapshot.names[0]}"`;
    const scope = getScope({
      provider: awsProviderSchema,
      data: ["aws_subnet_ids"],
    });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Fn.lookupNested(changemeAzListEbsSnapshot.names, ["0"]))"`
    );
  });

  test("convert a reference to a map access", async () => {
    const expression = `"\${data.aws_availability_zones.changeme_az_list_ebs_snapshot.testing_map.foo}"`;
    const scope = getScope({
      provider: awsProviderSchema,
      data: ["aws_subnet_ids"],
    });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Fn.lookupNested(changemeAzListEbsSnapshot, ["testing_map", "foo"]))"`
    );
  });

  test("convert attribute up to a map and not within attribute reference", async () => {
    const expression = `"\${data.aws_availability_zones.changeme_az_list_ebs_snapshot.testing_map}"`;
    const scope = getScope({
      provider: awsProviderSchema,
    });

    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      () => ["map", "string"]
    );

    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asStringMap(changemeAzListEbsSnapshot.testingMap)"`
    );
  });

  test("don't convert external unknown fields", async () => {
    const expression = `"\${data.external.changeme_external_thumbprint_data.result.thumbprint}"`;
    const scope = getScope({
      provider: externalProviderSchema,
      data: ["aws_subnet_ids"],
    });

    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      () => ["map", "string"]
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asStringMap(Fn.lookupNested(changemeExternalThumbprintData, ["result", "thumbprint"]))"`
    );
  });

  test("convert resource reference with map attribute", async () => {
    const expression = `"\${aws_s3_bucket.examplebucket.foo.bar}"`;
    const scope = getScope({
      provider: awsProviderSchema,
      resources: ["aws_s3_bucket"],
    });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      () => "string"
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Fn.lookupNested(examplebucket, ["foo", "bar"]))"`
    );
  });

  test("convert complex variable reference in template", async () => {
    const expression = `"\${var.default_tags.project}-client-tg"`;
    const scope = getScope({
      provider: awsProviderSchema,
      resources: ["aws_s3_bucket"],
      variables: ["default_tags"],
    });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      () => "string"
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Fn.lookupNested(defaultTags.value, ["project"])) + "-client-tg""`
    );
  });

  test("convert boolean values", async () => {
    const expression = `"\${false}"`;
    const scope = getScope({
      provider: awsProviderSchema,
    });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      () => "bool"
    );
    expect(code(result)).toMatchInlineSnapshot(`"false"`);
  });

  test("convert a data source with count", async () => {
    const expression = `"\${data.aws_availability_zones.available.names[count.index]}"`;
    const scope = getScope({
      provider: awsProviderSchema,
      data: ["aws_availability_zones"],
    });
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Fn.lookupNested(available.names, ["\${count.index}"]))"`
    );
  });

  test("accept escaped quotes within string", async () => {
    const expression = `"\${jsonencode({
          "Statement" = [{
            "Action" = "s3:*",
            "Effect" = "Allow",
          }],
        })}"`;
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );
    expect(code(result)).toMatchInlineSnapshot(`
      "Token.asString(Fn.jsonencode({
        "Statement": [{
          "Action": "s3:*",
          "Effect": "Allow"
        }]
      }))"
    `);
  });

  test("support variadic parameters in any position", async () => {
    const expression = `"\${cidrsubnets("fd00:fd12:3456:7890::/56", 16, 16, 16, 32)}"`;
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );

    expect(code(result)).toMatchInlineSnapshot(
      `"Token.asString(Fn.cidrsubnets("fd00:fd12:3456:7890::/56", [16, 16, 16, 32]))"`
    );
  });

  test("converts template expression with escaped ${} expression", async () => {
    const expression = '["$${path:name.givenName}"]'; // from aws_ssoadmin_instance_access_control_attributes example
    const scope = getScope();
    const result = await convertTerraformExpressionToTs(
      scope,
      expression,
      getType
    );

    expect(code(result)).toMatchInlineSnapshot(
      `"["$\${path:name.givenName}"]"`
    );
  });
});
