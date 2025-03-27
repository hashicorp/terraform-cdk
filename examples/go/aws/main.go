// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

package main

import (
	"github.com/hashicorp/terraform-cdk/examples/go/aws/generated/eks"
	"github.com/hashicorp/terraform-cdk/examples/go/aws/generated/hashicorp/aws/instance"
	"github.com/hashicorp/terraform-cdk/examples/go/aws/generated/hashicorp/aws/provider"

	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
)

func NewExampleCdktfGoAwsStack(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)

	provider.NewAwsProvider(stack, jsii.String("aws"), &provider.AwsProviderConfig{
		Region: jsii.String("us-east-1"),
	})

	instance.NewInstance(stack, jsii.String("Hello"), &instance.InstanceConfig{
		Ami:          jsii.String("ami-2757f631"),
		InstanceType: jsii.String("t2.micro"),
		Tags: &map[string]*string{
			"environment": jsii.String("development"),
		},
	})

	eks.NewEks(stack, jsii.String("EKS"), &eks.EksConfig{
		ClusterName:    jsii.String("my-eks"),
		SubnetIds:      jsii.Strings("a", "b"),
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
