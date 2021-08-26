package main

import (
	eks "github.com/hashicorp/terraform-cdk/examples/go/aws/generated/aws_eks_module"
	"github.com/hashicorp/terraform-cdk/examples/go/aws/generated/hashicorp/aws"

	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
)

func NewExampleCdktfGoAwsStack(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)

	aws.NewAwsProvider(stack, jsii.String("aws"), &aws.AwsProviderConfig{
		Region: jsii.String("us-east-1"),
	})

	aws.NewInstance(stack, jsii.String("Hello"), &aws.InstanceConfig{
		Ami:          jsii.String("ami-2757f631"),
		InstanceType: jsii.String("t2.micro"),
		Tags: &map[string]*string{
			"environment": jsii.String("development"),
		},
	})

	eks.NewAwsEksModule(stack, jsii.String("EKS"), &eks.AwsEksModuleOptions{
		ClusterName:    jsii.String("my-eks"),
		Subnets:        jsii.Strings("a", "b"),
		VpcId:          jsii.String("id"),
		ClusterVersion: jsii.String("1.17"),
	})

	return stack
}

func main() {
	app := cdktf.NewApp(nil)

	NewExampleCdktfGoAwsStack(app, "ExampleCdktfGoAwsStack")

	app.Synth()
}
