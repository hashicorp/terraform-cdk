import { renderExpression, ref } from "../lib/tfExpression";

test("can render reference", () => {
  expect(
    renderExpression(ref("aws_s3_bucket.best.bucket_domain_name"))
  ).toMatchInlineSnapshot(`"\${aws_s3_bucket.best.bucket_domain_name}"`);
});
