// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

package main

// DOCS_BLOCK_START:outputs

import (
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
)

type OutputsStackConfig struct {
	MyDomain string
}

func NewOutputsStack(scope constructs.Construct, name string, config OutputsStackConfig) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &name)

	cdktf.NewTerraformOutput(stack, jsii.String("my-domain"), &cdktf.TerraformOutputConfig{
		Value: &config.MyDomain,
	})

	return stack
}

// DOCS_BLOCK_END:outputs

/*
We fake the methods name to be "main"
DOCS_BLOCK_START:outputs
func main() {
DOCS_BLOCK_END:outputs
*/
func SynthOutputs() {
	// DOCS_BLOCK_START:outputs
	app := cdktf.NewApp(nil)

	NewOutputsStack(app, "outputs", OutputsStackConfig{
		MyDomain: "example.com",
	})

	app.Synth()
}

// DOCS_BLOCK_END:outputs
