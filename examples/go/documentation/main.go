package main

import (
	"github.com/hashicorp/terraform-cdk/examples/go/aws/generated/hashicorp/aws"

	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
)

func NewExampleCdktfDocumentationStack(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)

	aws.NewAwsProvider(stack, jsii.String("aws"), &aws.AwsProviderConfig{
		Region: jsii.String("us-east-1"),
	})

	bucket := aws.S3.NewS3Bucket(this, jsii.String("bucket"), &aws.s3.S3BucketConfig{
		bucket: jsii.String("demo"),
	})

	asset := cdktf.NewTerraformAsset(this, jsii.String("lambda-asset"), &cdktf.TerraformAssetConfig{
		path: path.resolve(__dirname, jsii.String("../lambda")),
		type: cdktf.AssetType_ARCHIVE,
	})

	aws.S3.NewS3BucketObject(this, jsii.String("lambda-archive"), &aws.s3.S3BucketObjectConfig{
		bucket: bucket.bucket,
		key: asset.fileName,
		source: asset.path,
	})


	return stack
}

func main() {
	app := cdktf.NewApp(nil)

	NewExampleCdktfDocumentationStack(app, "go-documentation")

	app.Synth()
}
