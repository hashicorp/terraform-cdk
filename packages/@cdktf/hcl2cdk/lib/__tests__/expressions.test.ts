// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import generate from "@babel/generator";
import * as t from "@babel/types";
import {
  iteratorVariableToAst,
  referencesToAst,
  getPropertyAccessPath,
} from "../expressions";
import { ProgramScope } from "../types";
import {
  extractReferencesFromExpression,
  referenceToAst,
} from "../expressions";

const nodeIds = [
  "var.input",
  "module.vpc",
  "data.aws_s3_bucket.examplebucket",
  "aws_s3_bucket.examplebucket",
  "aws_s3_bucket.otherbucket",
  "var.users",
  "aws_kms_key.key",
  "local.service_name",
];

describe("expressions", () => {
  describe("#extractReferencesFromExpression", () => {
    it("finds no references in literals", () => {
      expect(
        extractReferencesFromExpression("nothingtobeseen", nodeIds)
      ).resolves.toEqual([]);
    });

    it("finds no references in literals with functions", () => {
      expect(
        extractReferencesFromExpression("${foo(nothingtobeseen)}", nodeIds)
      ).resolves.toEqual([]);
    });

    it("finds no references in literals with functions and artihmetics", () => {
      expect(
        extractReferencesFromExpression(
          "${foo(nothingtobeseen - 2) + 3}",
          nodeIds
        )
      ).resolves.toEqual([]);
    });

    it("finds plain var reference", () => {
      expect(
        extractReferencesFromExpression("${var.input}", nodeIds)
      ).resolves.toEqual([
        {
          referencee: { id: "var.input", full: "var.input" },
          useFqn: false,
          isVariable: true,
          start: 2,
          end: 11,
        },
      ]);
    });

    it("finds plain module reference", () => {
      expect(
        extractReferencesFromExpression("${module.vpc.public_subnets}", nodeIds)
      ).resolves.toEqual([
        {
          referencee: {
            id: "module.vpc",
            full: "module.vpc.public_subnets",
          },
          useFqn: false,
          isVariable: false,
          start: 2,
          end: 27,
        },
      ]);
    });

    it("finds plain data reference", () => {
      expect(
        extractReferencesFromExpression(
          "${data.aws_s3_bucket.examplebucket.arn}",
          nodeIds
        )
      ).resolves.toEqual([
        {
          referencee: {
            id: "data.aws_s3_bucket.examplebucket",
            full: "data.aws_s3_bucket.examplebucket.arn",
          },
          useFqn: false,
          isVariable: false,
          start: 2,
          end: 38,
        },
      ]);
    });

    it("finds plain local reference", () => {
      expect(
        extractReferencesFromExpression("${local.service_name}", nodeIds)
      ).resolves.toEqual([
        {
          referencee: {
            id: "local.service_name",
            full: "local.service_name",
          },
          useFqn: false,
          isVariable: false,
          start: 2,
          end: 20,
        },
      ]);
    });

    it("finds plain resource reference", () => {
      expect(
        extractReferencesFromExpression(
          "${aws_s3_bucket.examplebucket.id}",
          nodeIds
        )
      ).resolves.toEqual([
        {
          referencee: {
            id: "aws_s3_bucket.examplebucket",
            full: "aws_s3_bucket.examplebucket.id",
          },
          useFqn: false,
          isVariable: false,
          start: 2,
          end: 32,
        },
      ]);
    });

    it("finds plain resource references in artihmetics", () => {
      expect(
        extractReferencesFromExpression(
          "${aws_s3_bucket.examplebucket.count + aws_s3_bucket.otherbucket.count }",
          nodeIds
        )
      ).resolves.toEqual([
        {
          referencee: {
            id: "aws_s3_bucket.examplebucket",
            full: "aws_s3_bucket.examplebucket.count",
          },
          useFqn: false,
          isVariable: false,
          start: 2,
          end: 35,
        },
        {
          referencee: {
            id: "aws_s3_bucket.otherbucket",
            full: "aws_s3_bucket.otherbucket.count",
          },
          useFqn: false,
          isVariable: false,
          start: 38,
          end: 69,
        },
      ]);
    });

    it("use fqn for splat reference", () => {
      expect(
        extractReferencesFromExpression(
          "${aws_s3_bucket.examplebucket.*.id}",
          nodeIds
        )
      ).resolves.toEqual([
        {
          referencee: {
            id: "aws_s3_bucket.examplebucket",
            full: "aws_s3_bucket.examplebucket",
          },
          useFqn: true,
          isVariable: false,
          start: 2,
          end: 29,
        },
      ]);
    });

    it("use no fqn if property is present on numeric access", () => {
      expect(
        extractReferencesFromExpression(
          "${aws_s3_bucket.examplebucket.network_interface.0.access_config.0.assigned_nat_ip}",
          nodeIds
        )
      ).resolves.toEqual([
        {
          referencee: {
            id: "aws_s3_bucket.examplebucket",
            full: "aws_s3_bucket.examplebucket.network_interface",
          },
          useFqn: false,
          isVariable: false,
          start: 2,
          end: 47,
        },
      ]);
    });

    it("detect splat reference within function", () => {
      expect(
        extractReferencesFromExpression(
          "${toset(aws_s3_bucket.examplebucket.*)}",
          nodeIds
        )
      ).resolves.toEqual([
        {
          referencee: {
            id: "aws_s3_bucket.examplebucket",
            full: "aws_s3_bucket.examplebucket",
          },
          useFqn: true,
          isVariable: false,
          start: 8,
          end: 35,
        },
      ]);
    });

    it("finds all resources in conditional", () => {
      expect(
        extractReferencesFromExpression(
          "${aws_kms_key.key.deletion_window_in_days > 3 ? aws_s3_bucket.examplebucket.id : []}",
          nodeIds
        )
      ).resolves.toEqual([
        {
          referencee: {
            id: "aws_kms_key.key",
            full: "aws_kms_key.key.deletion_window_in_days",
          },
          useFqn: false,
          isVariable: false,
          start: 2,
          end: 41,
        },
        {
          referencee: {
            id: "aws_s3_bucket.examplebucket",
            full: "aws_s3_bucket.examplebucket.id",
          },
          useFqn: false,
          isVariable: false,
          start: 48,
          end: 78,
        },
      ]);
    });

    it("finds all resources in functions", () => {
      expect(
        extractReferencesFromExpression(
          "${element(aws_s3_bucket.examplebucket, 0).id}",
          nodeIds
        )
      ).resolves.toEqual([
        {
          referencee: {
            id: "aws_s3_bucket.examplebucket",
            full: "aws_s3_bucket.examplebucket",
          },
          useFqn: true,
          isVariable: false,
          start: 10,
          end: 37,
        },
      ]);
    });

    it("finds all resources in functions with splat", () => {
      expect(
        extractReferencesFromExpression(
          "${element(aws_s3_bucket.examplebucket.*.id, 0)}",
          nodeIds
        )
      ).resolves.toEqual([
        {
          referencee: {
            id: "aws_s3_bucket.examplebucket",
            full: "aws_s3_bucket.examplebucket",
          },
          useFqn: true,
          isVariable: false,
          start: 10,
          end: 37,
        },
      ]);
    });

    it("finds all resources in for loops", () => {
      expect(
        extractReferencesFromExpression(
          "${{ for name, user in var.users : user.role => name...}}",
          nodeIds
        )
      ).resolves.toEqual([
        {
          referencee: { id: "var.users", full: "var.users" },
          useFqn: false,
          isVariable: true,
          start: 22,
          end: 31,
        },
      ]);
    });

    it("finds resources with property access", () => {
      expect(
        extractReferencesFromExpression(
          "${aws_s3_bucket.examplebucket[0].id}",
          nodeIds
        )
      ).resolves.toEqual([
        {
          referencee: {
            id: "aws_s3_bucket.examplebucket",
            full: "aws_s3_bucket.examplebucket",
          },
          useFqn: true,
          isVariable: false,
          start: 2,
          end: 35,
        },
      ]);
    });

    it("finds references within functions that use arrays and comments", () => {
      expect(
        extractReferencesFromExpression(
          `\${compact([
            # The example "bucket"
            aws_s3_bucket.examplebucket,
        
            # The "Learn" single page application. This is not configured in all environments.
            var.input,
          ])}`,
          nodeIds
        )
      ).resolves.toEqual([
        {
          referencee: {
            id: "aws_s3_bucket.examplebucket",
            full: "aws_s3_bucket.examplebucket",
          },
          useFqn: true,
          isVariable: false,
          start: 59,
          end: 86,
        },
        {
          referencee: {
            id: "var.input",
            full: "var.input",
          },
          useFqn: false,
          isVariable: true,
          start: 204,
          end: 213,
        },
      ]);
    });

    it("finds references for same referencees", () => {
      expect(
        extractReferencesFromExpression(
          `\${var.input == "test" ? "azure-ad-int" : "azure-ad-\${var.input}"}`,
          nodeIds
        )
      ).resolves.toEqual([
        {
          referencee: {
            id: "var.input",
            full: "var.input",
          },
          useFqn: false,
          isVariable: true,
          start: 2,
          end: 11,
        },
        {
          referencee: {
            id: "var.input",
            full: "var.input",
          },
          useFqn: false,
          isVariable: true,
          start: 53,
          end: 62,
        },
      ]);
    });
  });

  describe("#referenceToAst", () => {
    it("property access", () => {
      const scope: ProgramScope = {
        providerSchema: { format_version: "0.1" },
        providerGenerator: {},
        constructs: new Set<string>(),
        variables: {},
        hasTokenBasedTypeCoercion: false,
      };
      expect(
        generate(
          t.program([
            t.expressionStatement(
              referenceToAst(scope, {
                start: 0,
                end: 0,
                useFqn: false,
                isVariable: false,
                referencee: {
                  id: "aws_kms_key.key",
                  full: "aws_kms_key.key.deletion_window_in_days",
                },
              })
            ),
          ]) as any
        ).code
      ).toMatchInlineSnapshot(`"awsKmsKeyKey.deletionWindowInDays;"`);
    });
  });

  describe("#referencesToAst", () => {
    it("nested terraform expressions without space", async () => {
      const scope: ProgramScope = {
        providerSchema: { format_version: "0.1" },
        providerGenerator: {},
        constructs: new Set<string>(),
        variables: {},
        hasTokenBasedTypeCoercion: false,
      };
      const expr = `\${"\${each.value}\${var.azure_ad_domain_name}"}`;
      const references = await extractReferencesFromExpression(expr, [
        "var.azure_ad_domain_name",
      ]);
      expect(
        generate(
          t.program([
            t.expressionStatement(referencesToAst(scope, expr, references, [])),
          ]) as any
        ).code
      ).toMatchInlineSnapshot(
        `"\`\\\\\${\\"\\\\\${each.value}\\\\\${\${azureAdDomainName.value}}\\"}\`;"`
      );
    });
  });

  describe("#iteratorVariableToAst", () => {
    function run(value: string) {
      return generate(
        t.program([
          t.expressionStatement(
            iteratorVariableToAst(
              {
                forEachIteratorName: "myIterator",
              } as any,
              {
                start: 0,
                end: value.length,
                value,
              }
            )
          ),
        ]) as any
      ).code;
    }

    it("should convert iterator key accessor", () => {
      expect(run("each.key")).toMatchInlineSnapshot(`"myIterator.key;"`);
    });

    it("should convert iterator value accessor", () => {
      expect(run("each.value")).toMatchInlineSnapshot(`"myIterator.value;"`);
    });

    it("should convert iterator value deep accessor", () => {
      expect(run("each.value.list.map.name")).toMatchInlineSnapshot(
        `"cdktf.propertyAccess(myIterator.value, [\\"list\\", \\"map\\", \\"name\\"]);"`
      );
    });

    it("should convert iterator value with map access", () => {
      expect(run(`each.value[0]["map"]["name"]`)).toMatchInlineSnapshot(
        `"cdktf.propertyAccess(myIterator.value, [\\"0\\", \\"map\\", \\"name\\"]);"`
      );
    });
  });

  describe("#getPropertyAccessPath", () => {
    it.each([
      [".list.map.name", ["list", "map", "name"]],
      [`[0]["map"]["name"]`, ["0", "map", "name"]],
      [`[0].map["name"]`, ["0", "map", "name"]],
    ])("should return the correct path for %s", (input, expected) => {
      expect(getPropertyAccessPath(input)).toEqual(expected);
    });
  });
});
