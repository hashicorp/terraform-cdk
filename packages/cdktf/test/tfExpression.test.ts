import { ref } from "../lib/tfExpression";

test("can render reference", () => {
  expect(
    ref("aws_s3_bucket.best.bucket_domain_name").resolve()
  ).toMatchInlineSnapshot(`"\${aws_s3_bucket.best.bucket_domain_name}"`);
});
