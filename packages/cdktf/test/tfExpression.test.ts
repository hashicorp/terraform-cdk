import { Token } from "../lib";
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
const resolveExpression = (expr: Expression) => resolve(null as any, expr);

test("can render reference", () => {
  expect(
    (ref("aws_s3_bucket.best.bucket_domain_name") as any).resolve()
  ).toMatchInlineSnapshot(`"\${aws_s3_bucket.best.bucket_domain_name}"`);
});

test("propertyAccess renders correctly", () => {
  expect(
    resolveExpression(
      propertyAccess(ref("some_resource.my_resource.some_attribute_array"), [
        0,
        "name",
      ])
    )
  ).toMatchInlineSnapshot(
    `"\${some_resource.my_resource.some_attribute_array[0][\\"name\\"]}"`
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
    resolveExpression(call("length", [ref("docker_container.foo.bar")]))
  ).toMatchInlineSnapshot(`"\${length(docker_container.foo.bar)}"`);
});

test("functions don't escape terraform references that have been tokenized", () => {
  expect(
    resolveExpression(
      call("length", [Token.asString(ref("docker_container.foo.bar"))])
    )
  ).toMatchInlineSnapshot(`"\${length(docker_container.foo.bar)}"`);
});

test("functions escape string markers", () => {
  expect(
    resolveExpression(call("length", [rawString(`"`)]))
  ).toMatchInlineSnapshot(`"\${length(\\"\\\\\\"\\")}"`);
});
