// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { TerraformStack, Fn, Token, Testing } from "../lib";
import {
  conditional,
  propertyAccess,
  ref,
  call,
  Expression,
  rawString,
} from "../lib/tfExpression";
import { resolve } from "../lib/_tokens";
import { Op } from "../lib/terraform-operators";
import { TestResource } from "./helper";

const appScope = new Construct(undefined as any, "randomScope");

const stack = new TerraformStack(appScope, "Stack");
const resolveExpression = (expr: Expression) => resolve(stack, expr);

test("can render reference", () => {
  expect(
    resolveExpression(ref("aws_s3_bucket.best.bucket_domain_name", stack)),
  ).toMatchInlineSnapshot(`"\${aws_s3_bucket.best.bucket_domain_name}"`);
});

describe("propertyAccess", () => {
  it("for resource with count using literal attribute name", () => {
    expect(
      resolveExpression(propertyAccess(ref("aws_s3_bucket.bucket"), [0, "id"])),
    ).toEqual(`\${aws_s3_bucket.bucket.0.id}`);
  });

  it("for resource with count using expression for count index", () => {
    expect(
      resolveExpression(
        propertyAccess(ref("aws_s3_bucket.bucket"), [ref("count.index"), "id"]),
      ),
    ).toEqual(`\${aws_s3_bucket.bucket[count.index].id}`);
  });

  it("for resource with count using expression for attribute", () => {
    expect(
      resolveExpression(
        propertyAccess(ref("aws_s3_bucket.bucket"), [0, ref("var.id_field")]),
      ),
    ).toEqual(`\${aws_s3_bucket.bucket.0[var.id_field]}`);
  });

  it("for resource with count using expression for count index and attribute", () => {
    expect(
      resolveExpression(
        propertyAccess(ref("aws_s3_bucket.bucket"), [
          ref("count.index"),
          Fn.max([0, 1]),
        ]),
      ),
    ).toEqual(`\${aws_s3_bucket.bucket[count.index][max(0, 1)]}`);
  });

  it("for resource with count using splat expression", () => {
    expect(
      resolveExpression(
        propertyAccess(ref("aws_s3_bucket.bucket"), ["*", "id"]),
      ),
    ).toEqual(`\${aws_s3_bucket.bucket[*].id}`);
  });

  it("for resource with count using splat expression and expression for attribute", () => {
    expect(
      resolveExpression(
        propertyAccess(ref("aws_s3_bucket.bucket"), [
          "*",
          ref("var.id_property"),
        ]),
      ),
    ).toEqual(`\${aws_s3_bucket.bucket[*][var.id_property]}`);
  });

  it("for resource attribute using literal attribute name", () => {
    expect(
      resolveExpression(propertyAccess(ref("some_resource.this"), ["list"])),
    ).toEqual(`\${some_resource.this.list}`);
  });

  it("for resource attribute using expression for attribute name", () => {
    expect(
      resolveExpression(
        propertyAccess(ref("some_resource.this"), [ref("var.list_property")]),
      ),
    ).toEqual(`\${some_resource.this[var.list_property]}`);
  });

  it("for map with an attribute name containing a colon", () => {
    expect(
      resolveExpression(propertyAccess(ref("local.map"), ["My:Key"])),
    ).toEqual(`\${local.map[\"My:Key\"]}`);
  });
});

test("propertyAccess resolves target properly", () => {
  expect(
    resolveExpression(
      propertyAccess(
        Fn.tolist(ref("some_resource.my_resource.some_attribute_array", stack)),
        [0, "name"],
      ),
    ),
  ).toMatchInlineSnapshot(
    `"\${tolist(some_resource.my_resource.some_attribute_array).0.name}"`,
  );
});

test("propertyAccess renders splat access correctly", () => {
  expect(
    resolveExpression(
      propertyAccess(ref("some_resource.my_resource", stack), ["*", "name"]),
    ),
  ).toMatchInlineSnapshot(`"\${some_resource.my_resource[*].name}"`);
});

test("propertyAccess handles construct as target", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "stack");
  const resource = new TestResource(stack, "resource", {
    name: "foo",
  });
  expect(
    resolveExpression(propertyAccess(resource, ["*", "name"])),
  ).toMatchInlineSnapshot(`"\${test_resource.resource[*].name}"`);
});

test("conditional renders correctly", () => {
  expect(resolveExpression(conditional(true, 1, 0))).toMatchInlineSnapshot(
    `"\${true ? 1 : 0}"`,
  );
});

test("functions escape newlines", () => {
  expect(
    resolveExpression(
      call("length", [
        `
This
is
a
multi
line
string
  `,
      ]),
    ),
  ).toMatchInlineSnapshot(
    `"\${length("\\nThis\\nis\\na\\nmulti\\nline\\nstring\\n  ")}"`,
  );
});

test("functions escape terraform reference like strings", () => {
  expect(resolveExpression(call("length", [`\${}`]))).toMatchInlineSnapshot(
    `"\${length("$\${}")}"`,
  );
});

test("functions don't escape terraform references", () => {
  expect(
    resolveExpression(call("length", [ref("docker_container.foo.bar", stack)])),
  ).toMatchInlineSnapshot(`"\${length(docker_container.foo.bar)}"`);
});

test("functions don't escape terraform references that have been tokenized", () => {
  expect(
    resolveExpression(
      call("length", [Token.asString(ref("docker_container.foo.bar", stack))]),
    ),
  ).toMatchInlineSnapshot(`"\${length(docker_container.foo.bar)}"`);
});

test("functions escape string markers", () => {
  expect(
    resolveExpression(call("length", [rawString(`"`)])),
  ).toMatchInlineSnapshot(`"\${length("\\"")}"`);
});

test("functions escape object keys", () => {
  expect(
    resolveExpression(
      call("keys", [{ "key:with:colons": "value", normal_key: "value" }]),
    ),
  ).toMatchInlineSnapshot(
    `"\${keys({"key:with:colons" = "value", "normal_key" = "value"})}"`,
  );
});

test("string index expression argument renders correctly", () => {
  expect(
    resolveExpression(Op.or(true, { a: "foo", b: "bar " })),
  ).toMatchInlineSnapshot(`"\${(true || {"a" = "foo", "b" = "bar "})}"`);
});

test("null expression argument renders correctly", () => {
  expect(resolveExpression(Op.or(true, null))).toMatchInlineSnapshot(
    `"\${(true || undefined)}"`,
  );
});

test("reference inside a string literal inside a terraform function adds extra terraform expression", () => {
  const referenceA = ref("docker_container.foo.barA", stack);
  const referenceB = ref("docker_container.foo.barB", stack);
  const referenceC = ref("docker_container.foo.barC", stack);
  const referenceD = ref("docker_container.foo.barD", stack);

  expect(
    resolveExpression(
      call("join", [
        ", ",
        [
          `one ref is plain ${referenceA} and the other one as well: ${Token.asString(
            referenceB,
          )}`,
          referenceC, // this is a plain reference
          `${referenceD} woop woop`,
        ],
      ]),
    ),
  ).toMatchInlineSnapshot(
    `"\${join(", ", ["one ref is plain \${docker_container.foo.barA} and the other one as well: \${docker_container.foo.barB}", docker_container.foo.barC, "\${docker_container.foo.barD} woop woop"])}"`,
  );
});

test("a reference within a function needs no Terraform Expression wrapper", () => {
  expect(
    resolveExpression(call("length", [ref("docker_container.foo.bar", stack)])),
  ).toMatchInlineSnapshot(`"\${length(docker_container.foo.bar)}"`);
});

test("a reference within a string in a function needs a Terraform Expression wrapper", () => {
  expect(
    resolveExpression(
      call("length", [
        `this is the ref: ${ref("docker_container.foo.bar", stack)}`,
      ]),
    ),
  ).toMatchInlineSnapshot(
    `"\${length("this is the ref: \${docker_container.foo.bar}")}"`,
  );
});

test("a reference used within a function and within a string only has a Terraform Expression wrapper for the string", () => {
  const reference = ref("docker_container.foo.bar", stack);

  expect(
    resolveExpression(call("x", [reference, `this is the ref: ${reference}`])),
  ).toMatchInlineSnapshot(
    `"\${x(docker_container.foo.bar, "this is the ref: \${docker_container.foo.bar}")}"`,
  );
});

test("nesting can undo the wrapping", () => {
  const reference = ref("docker_container.foo.bar", stack);

  expect(
    resolveExpression(
      call("x", [
        reference,
        `this is the ref: ${call("y", [`my ref: ${reference}`, reference])}`,
      ]),
    ),
  ).toMatchInlineSnapshot(
    `"\${x(docker_container.foo.bar, "this is the ref: \${y("my ref: \${docker_container.foo.bar}", docker_container.foo.bar)}")}"`,
  );
});

test("expressions correctly resolve string wrapped objects", () => {
  const expr = call("keys", [Token.asString({ a: "b" })]);
  expect(resolveExpression(expr)).toMatchInlineSnapshot(
    `"\${keys({"a" = "b"})}"`,
  );
});
