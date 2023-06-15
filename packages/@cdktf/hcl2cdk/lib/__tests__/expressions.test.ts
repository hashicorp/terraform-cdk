// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import generate from "@babel/generator";
import * as t from "@babel/types";
import { dynamicVariableToAst } from "../expressions";
import { ProgramScope, Reference } from "../types";
import {
  extractReferencesFromExpression,
  referenceToVariableName,
} from "../references";
import { getExpressionAst } from "@cdktf/hcl2json";
import { TFExpressionSyntaxTree as tex } from "@cdktf/hcl2json";
import { camelCase } from "../utils";

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

// Transforms a path with segments into literals describing the path
function getPropertyAccessPath(input: string): string[] {
  return input
    .split(/(\[|\]|\.)/g)
    .filter((p) => p.length > 0 && p !== "." && p !== "[" && p !== "]")
    .map((p) => (p.startsWith(`"`) && p.endsWith(`"`) ? p.slice(1, -1) : p));
}

export function referenceToAst(scope: ProgramScope, ref: Reference) {
  const [resource, , ...selector] = ref.referencee.full.split(".");

  const variableReference = t.identifier(
    camelCase(referenceToVariableName(scope, ref))
  );

  if (resource === "data") {
    selector.shift(); // remove the data part so that the name is not used in the selector
  }

  const accessor = selector.reduce(
    (carry, member, index) =>
      t.memberExpression(
        carry,
        t.identifier(
          index === 0 && resource === "module"
            ? camelCase(member + "Output")
            : camelCase(member)
        )
      ),
    variableReference as t.Expression
  );

  if (ref.useFqn) {
    return t.memberExpression(accessor, t.identifier("fqn"));
  }

  if (ref.isVariable) {
    return t.memberExpression(accessor, t.identifier("value"));
  }
  return accessor;
}

describe("expressions", () => {
  describe("#extractReferencesFromExpression", () => {
    it("finds no references in literals", () => {
      return expect(
        extractReferencesFromExpression("nothingtobeseen", nodeIds)
      ).resolves.toEqual([]);
    });

    it("finds no references in literals with functions", () => {
      return expect(
        extractReferencesFromExpression("${foo(nothingtobeseen)}", nodeIds)
      ).resolves.toEqual([]);
    });

    it("finds no references in literals with functions and artihmetics", () => {
      return expect(
        extractReferencesFromExpression(
          "${foo(nothingtobeseen - 2) + 3}",
          nodeIds
        )
      ).resolves.toEqual([]);
    });

    it("finds plain var reference", () => {
      return expect(
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
      return expect(
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
      return expect(
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
      return expect(
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
      return expect(
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
      return expect(
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
      return expect(
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
      return expect(
        extractReferencesFromExpression(
          "${aws_s3_bucket.examplebucket.network_interface.0.access_config.0.assigned_nat_ip}",
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
          end: 81,
        },
      ]);
    });

    it("detect splat reference within function", () => {
      return expect(
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
      return expect(
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
      return expect(
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
          useFqn: false,
          isVariable: false,
          start: 10,
          end: 37,
        },
      ]);
    });

    it("finds all resources in functions with splat", () => {
      return expect(
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
      return expect(
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
      return expect(
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
      return expect(
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
          useFqn: false,
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
      return expect(
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
        nodeIds: [],
        importables: [],
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

  describe("#iteratorVariableToAst", () => {
    async function run(value: string) {
      const ast = await getExpressionAst("main.tf", value);
      return generate(
        t.program([
          t.expressionStatement(
            dynamicVariableToAst(
              ast!.children[0] as tex.ScopeTraversalExpression,
              "myIterator"
            )
          ),
        ]) as any
      ).code;
    }

    it("should convert iterator key accessor", async () => {
      expect(await run('"${each.key}"')).toMatchInlineSnapshot(
        `"myIterator.key;"`
      );
    });

    it("should convert iterator value accessor", async () => {
      expect(await run('"${each.value}"')).toMatchInlineSnapshot(
        `"myIterator.value;"`
      );
    });

    it("should convert iterator value deep accessor", async () => {
      expect(await run('"${each.value.list.map.name}"')).toMatchInlineSnapshot(
        `"cdktf.propertyAccess(myIterator.value, ["list", "map", "name"]);"`
      );
    });

    it("should convert iterator value with map access", async () => {
      expect(
        await run('"${each.value[0]["map"]["name"]}"')
      ).toMatchInlineSnapshot(
        `"cdktf.propertyAccess(myIterator.value, ["[0]", "[\\"map\\"]", "[\\"name\\"]"]);"`
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
