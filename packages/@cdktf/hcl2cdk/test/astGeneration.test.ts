import { convertToTypescript } from "../lib";
import schema from "./__fixtures__/schemas/astGeneration";

describe("generate typescript", () => {
  it("generates a simple templated expression", async () => {
    const input = ` 
      resource "aws_subnet" "changeme_spot_and_fargate_subnet_private" {
        vpc_id            = "id"
        cidr_block        = ""
        availability_zone = "eu-west-1"
        count             = 3
      }

      resource "aws_eks_node_group" "foo" {
        subnet_ids      = aws_subnet.changeme_spot_and_fargate_subnet_private.*.id
      }`;

    const schemaJson = JSON.parse(schema);
    const { code } = await convertToTypescript(
      input,
      schemaJson,
      "cdktf.TerraformStack"
    );
    expect(code).toMatchInlineSnapshot(`
      "const awsSubnetChangemeSpotAndFargateSubnetPrivate = new aws.subnet.Subnet(
        this,
        \\"changeme_spot_and_fargate_subnet_private\\",
        {
          availabilityZone: \\"eu-west-1\\",
          cidrBlock: \\"\\",
          vpcId: \\"id\\",
        }
      );
      /*In most cases loops should be handled in the programming language context and 
      not inside of the Terraform context. If you are looping over something external, e.g. a variable or a file input
      you should consider using a for loop. If you are looping over something only known to Terraform, e.g. a result of a data source
      you need to keep this like it is.*/
      awsSubnetChangemeSpotAndFargateSubnetPrivate.addOverride(\\"count\\", 3);
      new aws.eksNodeGroup.EksNodeGroup(this, \\"foo\\", {
        subnetIds: cdktf.Token.asList(
          \`\\\\\${\${awsSubnetChangemeSpotAndFargateSubnetPrivate.fqn}.*.id}\`
        ),
      });
      "
    `);
  });

  it("generates a simple templated expression", async () => {
    const input = ` 
      data "aws_availability_zones" "changeme_az_list_ebs_snapshot" {
        state = "available"
      }

      resource "aws_ebs_volume" "changeme_ebs_volume_snapshot" {
        availability_zone = data.aws_availability_zones.changeme_az_list_ebs_snapshot.names[0]
        size              = 10
        type              = "standard"
        encrypted         = false
        tags = {
          Name = "changeme_ebs_volume_tag"
        }
      }`;

    const schemaJson = JSON.parse(schema);
    const { code } = await convertToTypescript(
      input,
      schemaJson,
      "cdktf.TerraformStack"
    );
    expect(code).toMatchInlineSnapshot(`
      "const dataAwsAvailabilityZonesChangemeAzListEbsSnapshot =
        new aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones(
          this,
          \\"changeme_az_list_ebs_snapshot\\",
          {
            state: \\"available\\",
          }
        );
      new aws.ebsVolume.EbsVolume(this, \\"changeme_ebs_volume_snapshot\\", {
        availabilityZone: \`\\\\\${\${dataAwsAvailabilityZonesChangemeAzListEbsSnapshot.fqn}.names[0]}\`,
        encrypted: false,
        size: 10,
        tags: {
          Name: \\"changeme_ebs_volume_tag\\",
        },
        type: \\"standard\\",
      });
      "
    `);
  });

  it("generates a simple templated expression", async () => {
    const input = `variable "bucket_name" {
        type    = string
        default = "demo"
      }
      
      data "aws_s3_bucket" "examplebucket" {
        bucket = var.bucket_name
      }
      
      resource "aws_s3_bucket_object" "examplebucket_object" {
        key        = "someobject"
        bucket     = data.aws_s3_bucket.examplebucket.arn
        source     = "index.html"
      }`;

    const schemaJson = JSON.parse(schema);
    const { code } = await convertToTypescript(
      input,
      schemaJson,
      "cdktf.TerraformStack"
    );
    expect(code).toMatchInlineSnapshot(`
      "/*Terraform Variables are not always the best fit for getting inputs in the context of Terraform CDK.
      You can read more about this at https://cdk.tf/variables*/
      const bucketName = new cdktf.TerraformVariable(this, \\"bucket_name\\", {
        default: \\"demo\\",
      });
      const dataAwsS3BucketExamplebucket = new aws.dataAwsS3Bucket.DataAwsS3Bucket(
        this,
        \\"examplebucket\\",
        {
          bucket: bucketName.stringValue,
        }
      );
      new aws.s3BucketObject.S3BucketObject(this, \\"examplebucket_object\\", {
        bucket: dataAwsS3BucketExamplebucket.arn,
        key: \\"someobject\\",
        source: \\"index.html\\",
      });
      "
    `);
  });
});
