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
  subOperation,
} from "../lib/tfExpression";
import { resolve } from "../lib/_tokens";

test("can render reference", () => {
  expect(
    (ref("aws_s3_bucket.best.bucket_domain_name") as any).resolve()
  ).toMatchInlineSnapshot(`"\${aws_s3_bucket.best.bucket_domain_name}"`);
});

test("propertyAccess renders correctly", () => {
  expect(
    resolve(
      null as any,
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
  expect(resolve(null as any, conditional(true, 1, 0))).toMatchInlineSnapshot(
    `"\${true ? 1 : 0}"`
  );
});

test("notOperation renders correctly", () => {
  expect(resolve(null as any, notOperation(true))).toMatchInlineSnapshot(
    `"\${!true}"`
  );
});
test("negateOperation renders correctly", () => {
  expect(resolve(null as any, negateOperation(1))).toMatchInlineSnapshot(
    `"\${-1}"`
  );
});
test("mulOperation renders correctly", () => {
  expect(resolve(null as any, mulOperation(2, 3))).toMatchInlineSnapshot(
    `"\${(2 * 3)}"`
  );
});
test("divOperation renders correctly", () => {
  expect(resolve(null as any, divOperation(4, 2))).toMatchInlineSnapshot(
    `"\${(4 / 2)}"`
  );
});
test("modOperation renders correctly", () => {
  expect(resolve(null as any, modOperation(5, 3))).toMatchInlineSnapshot(
    `"\${(5 % 3)}"`
  );
});
test("addOperation renders correctly", () => {
  expect(resolve(null as any, addOperation(1, 1))).toMatchInlineSnapshot(
    `"\${(1 + 1)}"`
  );
});
test("subOperation renders correctly", () => {
  expect(resolve(null as any, subOperation(1, 2))).toMatchInlineSnapshot(
    `"\${(1 - 2)}"`
  );
});
test("gtOperation renders correctly", () => {
  expect(resolve(null as any, gtOperation(1, 2))).toMatchInlineSnapshot(
    `"\${(1 > 2)}"`
  );
});
test("gteOperation renders correctly", () => {
  expect(resolve(null as any, gteOperation(1, 2))).toMatchInlineSnapshot(
    `"\${(1 >= 2)}"`
  );
});
test("ltOperation renders correctly", () => {
  expect(resolve(null as any, ltOperation(1, 2))).toMatchInlineSnapshot(
    `"\${(1 < 2)}"`
  );
});
test("lteOperation renders correctly", () => {
  expect(resolve(null as any, lteOperation(1, 2))).toMatchInlineSnapshot(
    `"\${(1 <= 2)}"`
  );
});
test("eqOperation renders correctly", () => {
  expect(resolve(null as any, eqOperation(1, 1))).toMatchInlineSnapshot(
    `"\${(1 == 1)}"`
  );
});
test("neqOperation renders correctly", () => {
  expect(resolve(null as any, neqOperation(1, 2))).toMatchInlineSnapshot(
    `"\${(1 != 2)}"`
  );
});
test("andOperation renders correctly", () => {
  expect(resolve(null as any, andOperation(true, true))).toMatchInlineSnapshot(
    `"\${(true && true)}"`
  );
});
test("orOperation renders correctly", () => {
  expect(resolve(null as any, orOperation(true, true))).toMatchInlineSnapshot(
    `"\${(true || true)}"`
  );
});
