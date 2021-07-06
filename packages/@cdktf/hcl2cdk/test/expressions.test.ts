import { extractReferencesFromExpression } from "../lib/expressions";

describe("expressions", () => {
  describe("#extractReferencesFromExpression", () => {
    it("finds no references in literals", () => {
      expect(extractReferencesFromExpression("nothingtobeseen")).toEqual([]);
    });

    it("finds no references in literals with functions", () => {
      expect(
        extractReferencesFromExpression("${foo(nothingtobeseen)}")
      ).toEqual([]);
    });

    it("finds no references in literals with functions and artihmetics", () => {
      expect(
        extractReferencesFromExpression("${foo(nothingtobeseen - 2) + 3}")
      ).toEqual([]);
    });

    it("finds plain var reference", () => {
      expect(extractReferencesFromExpression("${var.input}")).toEqual([
        {
          referencee: { id: "var.input", full: "var.input" },
          start: 2,
          end: 11,
        },
      ]);
    });

    it("finds plain module reference", () => {
      expect(
        extractReferencesFromExpression("${module.vpc.public_subnets}")
      ).toEqual([
        {
          referencee: {
            id: "module.vpc",
            full: "module.vpc.public_subnets",
          },
          start: 2,
          end: 27,
        },
      ]);
    });

    it("finds plain data reference", () => {
      expect(
        extractReferencesFromExpression(
          "${data.aws_s3_bucket.examplebucket.arn}"
        )
      ).toEqual([
        {
          referencee: {
            id: "data.aws_s3_bucket.examplebucket",
            full: "data.aws_s3_bucket.examplebucket.arn",
          },
          start: 2,
          end: 38,
        },
      ]);
    });

    it("finds plain resource reference", () => {
      expect(
        extractReferencesFromExpression("${aws_s3_bucket.examplebucket.id}")
      ).toEqual([
        {
          referencee: {
            id: "aws_s3_bucket.examplebucket",
            full: "aws_s3_bucket.examplebucket.id",
          },
          start: 2,
          end: 32,
        },
      ]);
    });

    it("finds plain resource references in artihmetics", () => {
      expect(
        extractReferencesFromExpression(
          "${aws_s3_bucket.examplebucket.count + aws_s3_bucket.otherbucket.count }"
        )
      ).toEqual([
        {
          referencee: {
            id: "aws_s3_bucket.examplebucket",
            full: "aws_s3_bucket.examplebucket.count",
          },
          start: 2,
          end: 35,
        },
        {
          referencee: {
            id: "aws_s3_bucket.otherbucket",
            full: "aws_s3_bucket.otherbucket.count",
          },
          start: 38,
          end: 69,
        },
      ]);
    });

    it.skip("use fqn for splat reference", () => {
      expect(
        extractReferencesFromExpression("${aws_s3_bucket.examplebucket.*.id}")
      ).toEqual([
        {
          referencee: {
            id: "aws_s3_bucket.examplebucket",
            full: "aws_s3_bucket.examplebucket",
          },
          useFqn: true,
          start: 6,
          end: 7,
        },
      ]);
    });

    it("finds all resources in conditional", () => {
      expect(
        extractReferencesFromExpression(
          "${aws_kms_key.key.deletion_window_in_days > 3 ? aws_s3_bucket.examplebucket.id : []}"
        )
      ).toEqual([
        {
          referencee: {
            id: "aws_kms_key.key",
            full: "aws_kms_key.key.deletion_window_in_days",
          },
          start: 2,
          end: 41,
        },
        {
          referencee: {
            id: "aws_s3_bucket.examplebucket",
            full: "aws_s3_bucket.examplebucket.id",
          },
          start: 48,
          end: 78,
        },
      ]);
    });

    it("finds all resources in functions", () => {
      expect(
        extractReferencesFromExpression(
          "${element(aws_s3_bucket.examplebucket, 0).id}"
        )
      ).toEqual([
        {
          referencee: {
            id: "aws_s3_bucket.examplebucket",
            full: "aws_s3_bucket.examplebucket",
          },
          start: 10,
          end: 37,
        },
      ]);
    });

    it.skip("finds all resources in functions with splat", () => {
      expect(
        extractReferencesFromExpression(
          "${element(aws_s3_bucket.examplebucket.*.id, 0)}"
        )
      ).toEqual([
        {
          referencee: {
            id: "aws_s3_bucket.examplebucket",
            full: "aws_s3_bucket.examplebucket",
          },
          useFqn: true,
          start: 6,
          end: 7,
        },
      ]);
    });

    it("finds all resources in for loops", () => {
      expect(
        extractReferencesFromExpression(
          "${{ for name, user in var.users : user.role => name...}}"
        )
      ).toEqual([
        {
          referencee: { id: "var.users", full: "var.users" },
          start: 22,
          end: 31,
        },
      ]);
    });
  });
});
