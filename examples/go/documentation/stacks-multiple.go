// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

package main

// DOCS_BLOCK_START:multiple-stacks

import (
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/instance"
	aws "github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/provider"
)

type MultiStackConfig struct {
	Environment string
	Region      *string
}

func NewMultiStack(scope constructs.Construct, name string, config MultiStackConfig) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &name)

	region := config.Region
	if region == nil {
		region = jsii.String("us-east-1")
	}

	aws.NewAwsProvider(stack, jsii.String("aws"), &aws.AwsProviderConfig{
		Region: region,
	})

	instance.NewInstance(stack, jsii.String("Hello"), &instance.InstanceConfig{
		Ami:          jsii.String("ami-2757f631"),
		InstanceType: jsii.String("t2.micro"),
		Tags: &map[string]*string{
			"environment": &config.Environment,
		},
	})

	return stack
}

// DOCS_BLOCK_END:multiple-stacks

/*
We fake the methods name to be "main"
DOCS_BLOCK_START:multiple-stacks
func main() {
DOCS_BLOCK_END:multiple-stacks
*/
func SynthMultiStack() {
	// DOCS_BLOCK_START:multiple-stacks
	app := cdktf.NewApp(nil)

	NewMultiStack(app, "multiple-stacks-dev", MultiStackConfig{
		Environment: "dev",
	})
	NewMultiStack(app, "multiple-stacks-staging", MultiStackConfig{
		Environment: "staging",
	})
	NewMultiStack(app, "multiple-stacks-production-us", MultiStackConfig{
		Environment: "production",
		Region:      jsii.String("us-east-1"),
	})
	NewMultiStack(app, "multiple-stacks-production-eu", MultiStackConfig{
		Environment: "production",
		Region:      jsii.String("eu-central-1"),
	})

	app.Synth()
}

// DOCS_BLOCK_END:multiple-stacks
