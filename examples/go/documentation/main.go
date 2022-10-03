// DOCS_BLOCK_START:assets,constructs
package main

import (
	// DOCS_BLOCK_END:assets,constructs
	// DOCS_BLOCK_START:assets
	aws "github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/provider"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/s3bucket"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/s3bucketobject"
	// DOCS_BLOCK_END:assets
	// DOCS_BLOCK_START:constructs
	kubernetes "github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/kubernetes/provider"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/myconstructs"
	// DOCS_BLOCK_END:constructs

	// DOCS_BLOCK_START:assets,constructs
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"

	"os"
	"path"
)

func NewExampleCdktfDocumentationStack(scope constructs.Construct, name string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &name)

	cwd, _ := os.Getwd()

	// DOCS_BLOCK_END:assets,constructs
	// DOCS_BLOCK_START:assets
	aws.NewAwsProvider(stack, jsii.String("aws"), &aws.AwsProviderConfig{
		Region: jsii.String("us-east-1"),
	})

	bucket := s3bucket.NewS3Bucket(stack, jsii.String("bucket"), &s3bucket.S3BucketConfig{
		Bucket: jsii.String("demo"),
	})

	asset := cdktf.NewTerraformAsset(stack, jsii.String("lambda-asset"), &cdktf.TerraformAssetConfig{
		Path: jsii.String(path.Join(cwd, "lambda")),
		Type: cdktf.AssetType_ARCHIVE,
	})

	s3bucketobject.NewS3BucketObject(stack, jsii.String("lambda-archive"), &s3bucketobject.S3BucketObjectConfig{
		Bucket: bucket.Bucket(),
		Key:    asset.FileName(),
		Source: asset.Path(),
	})

	// DOCS_BLOCK_END:assets
	// DOCS_BLOCK_START:constructs
	kubernetes.NewKubernetesProvider(stack, jsii.String("kind"), &kubernetes.KubernetesProviderConfig{
		ConfigPath: jsii.String(path.Join(cwd, "kubeconfig.yaml")),
	})
	myconstructs.NewKubernetesWebAppDeployment(stack, "deployment", map[string]interface{}{
		"image":       jsii.String("nginx:latest"),
		"replicas":    jsii.Number(2),
		"app":         jsii.String("myapp"),
		"component":   jsii.String("frontend"),
		"environment": jsii.String("dev"),
	})
	// DOCS_BLOCK_END:constructs
	// DOCS_BLOCK_START:assets,constructs

	return stack
}

func main() {
	app := cdktf.NewApp(nil)

	NewExampleCdktfDocumentationStack(app, "demo")

	app.Synth()
}

// DOCS_BLOCK_END:assets,constructs
