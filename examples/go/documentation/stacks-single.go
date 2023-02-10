// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

package main

// DOCS_BLOCK_START:single-stack

import (
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/instance"
	aws "github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/provider"
)

func NewSingleStack(scope constructs.Construct, name string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &name)

	aws.NewAwsProvider(stack, jsii.String("aws"), &aws.AwsProviderConfig{
		Region: jsii.String("us-east-1"),
	})

	instance.NewInstance(stack, jsii.String("Hello"), &instance.InstanceConfig{
		Ami:          jsii.String("ami-2757f631"),
		InstanceType: jsii.String("t2.micro"),
	})

	return stack
}

// DOCS_BLOCK_END:single-stack

/*
We fake the methods name to be "main"
DOCS_BLOCK_START:single-stack
func main() {
DOCS_BLOCK_END:single-stack
*/
func SynthSingleStack() {
	// DOCS_BLOCK_START:single-stack
	app := cdktf.NewApp(nil)

	stack := NewSingleStack(app, "a-single-stack")

	// DOCS_BLOCK_END:single-stack
	// DOCS_BLOCK_START:stack-escape-hatches
	stack.AddOverride(jsii.String("terraform.backend"), map[string]interface{}{
		"local": cdktf.Token_NullValue(), // delete the default local backend
		"remote": map[string]interface{}{
			"organization": "test",
			"workspaces": map[string]string{
				"name": "test",
			},
		},
	})
	// DOCS_BLOCK_END:stack-escape-hatches
	// DOCS_BLOCK_START:single-stack

	app.Synth()
}

// DOCS_BLOCK_END:single-stack
