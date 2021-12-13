import { Construct } from "constructs";
import { TerraformStack, Fn, Token } from "../lib";
import {
  addOperation,
  andOperation,
  conditional,
  divOperation,
  eqOperation,
  gteOperation,
  gtOperation,
  lteOperation,
  ltOperation,
  modOperation,
  mulOperation,
  negateOperation,
  neqOperation,
  notOperation,
  orOperation,
  propertyAccess,
  ref,
  call,
  subOperation,
  Expression,
  rawString,
} from "../lib/tfExpression";
import { resolve } from "../lib/_tokens";

const appScope = new Construct(undefined as any, "randomScope");

const stack = new TerraformStack(appScope, "Stack");
const resolveExpression = (expr: Expression) => resolve(stack, expr);

test("can render reference", () => {
  expect(
    resolveExpression(ref("aws_s3_bucket.best.bucket_domain_name", stack))
  ).toMatchInlineSnapshot(`"\${aws_s3_bucket.best.bucket_domain_name}"`);
});

test("propertyAccess renders correctly", () => {
  expect(
    resolveExpression(
      propertyAccess(
        ref("some_resource.my_resource.some_attribute_array", stack),
        [0, "name"]
      )
    )
  ).toMatchInlineSnapshot(
    `"\${some_resource.my_resource.some_attribute_array[0][\\"name\\"]}"`
  );
});

test("propertyAccess resolves target properly", () => {
  expect(
    resolveExpression(
      propertyAccess(
        Fn.tolist(ref("some_resource.my_resource.some_attribute_array", stack)),
        [0, "name"]
      )
    )
  ).toMatchInlineSnapshot(
    `"\${tolist(some_resource.my_resource.some_attribute_array)[0][\\"name\\"]}"`
  );
});

test("conditional renders correctly", () => {
  expect(resolveExpression(conditional(true, 1, 0))).toMatchInlineSnapshot(
    `"\${true ? 1 : 0}"`
  );
});

test("notOperation renders correctly", () => {
  expect(resolveExpression(notOperation(true))).toMatchInlineSnapshot(
    `"\${!true}"`
  );
});
test("negateOperation renders correctly", () => {
  expect(resolveExpression(negateOperation(1))).toMatchInlineSnapshot(
    `"\${-1}"`
  );
});
test("mulOperation renders correctly", () => {
  expect(resolveExpression(mulOperation(2, 3))).toMatchInlineSnapshot(
    `"\${(2 * 3)}"`
  );
});
test("divOperation renders correctly", () => {
  expect(resolveExpression(divOperation(4, 2))).toMatchInlineSnapshot(
    `"\${(4 / 2)}"`
  );
});
test("modOperation renders correctly", () => {
  expect(resolveExpression(modOperation(5, 3))).toMatchInlineSnapshot(
    `"\${(5 % 3)}"`
  );
});
test("addOperation renders correctly", () => {
  expect(resolveExpression(addOperation(1, 1))).toMatchInlineSnapshot(
    `"\${(1 + 1)}"`
  );
});
test("subOperation renders correctly", () => {
  expect(resolveExpression(subOperation(1, 2))).toMatchInlineSnapshot(
    `"\${(1 - 2)}"`
  );
});
test("gtOperation renders correctly", () => {
  expect(resolveExpression(gtOperation(1, 2))).toMatchInlineSnapshot(
    `"\${(1 > 2)}"`
  );
});
test("gteOperation renders correctly", () => {
  expect(resolveExpression(gteOperation(1, 2))).toMatchInlineSnapshot(
    `"\${(1 >= 2)}"`
  );
});
test("ltOperation renders correctly", () => {
  expect(resolveExpression(ltOperation(1, 2))).toMatchInlineSnapshot(
    `"\${(1 < 2)}"`
  );
});
test("lteOperation renders correctly", () => {
  expect(resolveExpression(lteOperation(1, 2))).toMatchInlineSnapshot(
    `"\${(1 <= 2)}"`
  );
});
test("eqOperation renders correctly", () => {
  expect(resolveExpression(eqOperation(1, 1))).toMatchInlineSnapshot(
    `"\${(1 == 1)}"`
  );
});
test("neqOperation renders correctly", () => {
  expect(resolveExpression(neqOperation(1, 2))).toMatchInlineSnapshot(
    `"\${(1 != 2)}"`
  );
});
test("andOperation renders correctly", () => {
  expect(resolveExpression(andOperation(true, true))).toMatchInlineSnapshot(
    `"\${(true && true)}"`
  );
});
test("orOperation renders correctly", () => {
  expect(resolveExpression(orOperation(true, true))).toMatchInlineSnapshot(
    `"\${(true || true)}"`
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
      ])
    )
  ).toMatchInlineSnapshot(
    `"\${length(\\"\\\\nThis\\\\nis\\\\na\\\\nmulti\\\\nline\\\\nstring\\\\n  \\")}"`
  );
});

test("functions escape terraform reference like strings", () => {
  expect(resolveExpression(call("length", [`\${}`]))).toMatchInlineSnapshot(
    `"\${length(\\"$\${}\\")}"`
  );
});

test("functions don't escape terraform references", () => {
  expect(
    resolveExpression(call("length", [ref("docker_container.foo.bar", stack)]))
  ).toMatchInlineSnapshot(`"\${length(docker_container.foo.bar)}"`);
});

test("functions don't escape terraform references that have been tokenized", () => {
  expect(
    resolveExpression(
      call("length", [Token.asString(ref("docker_container.foo.bar", stack))])
    )
  ).toMatchInlineSnapshot(`"\${length(docker_container.foo.bar)}"`);
});

test("functions escape string markers", () => {
  expect(
    resolveExpression(call("length", [rawString(`"`)]))
  ).toMatchInlineSnapshot(`"\${length(\\"\\\\\\"\\")}"`);
});

test("string index expression argument renders correctly", () => {
  expect(
    resolveExpression(orOperation(true, { a: "foo", b: "bar " }))
  ).toMatchInlineSnapshot(`"\${(true || {a = \\"foo\\", b = \\"bar \\"})}"`);
});

test("null expression argument renders correctly", () => {
  expect(resolveExpression(orOperation(true, null))).toMatchInlineSnapshot(
    `"\${(true || undefined)}"`
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
            referenceB
          )}`,
          referenceC, // this is a plain reference
          `${referenceD} woop woop`,
        ],
      ])
    )
  ).toMatchInlineSnapshot(
    `"\${join(\\", \\", [\\"one ref is plain \${docker_container.foo.barA} and the other one as well: \${docker_container.foo.barB}\\", docker_container.foo.barC, \\"\${docker_container.foo.barD} woop woop\\"])}"`
  );
});

test("a reference within a function needs no Terraform Expression wrapper", () => {
  expect(
    resolveExpression(call("length", [ref("docker_container.foo.bar", stack)]))
  ).toMatchInlineSnapshot(`"\${length(docker_container.foo.bar)}"`);
});

test("a reference within a string in a function needs a Terraform Expression wrapper", () => {
  expect(
    resolveExpression(
      call("length", [
        `this is the ref: ${ref("docker_container.foo.bar", stack)}`,
      ])
    )
  ).toMatchInlineSnapshot(
    `"\${length(\\"this is the ref: \${docker_container.foo.bar}\\")}"`
  );
});

test("a reference used within a function and within a string only has a Terraform Expression wrapper for the string", () => {
  const reference = ref("docker_container.foo.bar", stack);

  expect(
    resolveExpression(call("x", [reference, `this is the ref: ${reference}`]))
  ).toMatchInlineSnapshot(
    `"\${x(docker_container.foo.bar, \\"this is the ref: \${docker_container.foo.bar}\\")}"`
  );
});

test("nesting can undo the wrapping", () => {
  const reference = ref("docker_container.foo.bar", stack);

  expect(
    resolveExpression(
      call("x", [
        reference,
        `this is the ref: ${call("y", [`my ref: ${reference}`, reference])}`,
      ])
    )
  ).toMatchInlineSnapshot(
    `"\${x(docker_container.foo.bar, \\"this is the ref: \${y(\\"my ref: \${docker_container.foo.bar}\\", docker_container.foo.bar)}\\")}"`
  );
});
