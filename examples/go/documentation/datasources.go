package main

// DOCS_BLOCK_START:datasources
import (
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/dataawsregion"
	aws "github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/provider"
)

func NewDatasourcesStack(scope constructs.Construct, name string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &name)

	aws.NewAwsProvider(stack, jsii.String("aws"), &aws.AwsProviderConfig{
		Region: jsii.String("eu-central-1"),
	})

	dataawsregion.NewDataAwsRegion(stack, jsii.String("region"), &dataawsregion.DataAwsRegionConfig{
		Name: jsii.String("eu-central-1"),
	})

	return stack
}

// DOCS_BLOCK_END:datasources
