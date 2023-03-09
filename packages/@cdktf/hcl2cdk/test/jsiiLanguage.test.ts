import { convert } from "../lib";

const targetLanguages = ["typescript", "python", "csharp", "java", "go"];
describe("JSII Language Support", () => {
  it.each(targetLanguages)("supports %s", async (language) => {
    const hcl = `
      resource "aws_kms_key" "examplekms" {
        description             = "KMS key 1"
        deletion_window_in_days = 7
      }
      
      resource "aws_s3_bucket" "examplebucket" {
        bucket = "examplebuckettftest"
        acl    = "private"
      }
      
      resource "aws_s3_bucket_object" "examplebucket_object" {
        key        = "someobject"
        bucket     = element(aws_s3_bucket.examplebucket, 0).id
        source     = "index.html"
        kms_key_id = aws_kms_key.examplekms.arn
      }
      `;
    expect(
      (
        await convert(hcl, {
          language: language as any,
          providerSchema: {},
        })
      ).all
    ).toMatchSnapshot();
  });
});
