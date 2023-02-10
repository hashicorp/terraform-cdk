// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

package main

// DOCS_BLOCK_START:cross-stack-reference

import (
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
	aws "github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/provider"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/myconstructs"
)

type VPCStack struct {
	Region *string
	VPC    *myconstructs.VPC
}

func NewVPCStack(scope constructs.Construct, name string, region *string) *VPCStack {
	stack := cdktf.NewTerraformStack(scope, &name)

	if region == nil {
		region = jsii.String("us-east-1")
	}

	aws.NewAwsProvider(stack, jsii.String("aws"), &aws.AwsProviderConfig{
		Region: region,
	})

	vpc := myconstructs.NewVPC(stack, *jsii.String("vpc"))

	return &VPCStack{
		VPC:    vpc,
		Region: region,
	}
}

type BackendStackConfig struct {
	Region      string
	VPCId       string
	DockerImage string
}

func NewBackendStack(scope constructs.Construct, name string, config BackendStackConfig) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &name)

	aws.NewAwsProvider(stack, jsii.String("aws"), &aws.AwsProviderConfig{
		Region: &config.Region,
	})

	myconstructs.NewDockerBackend(stack, *jsii.String("docker-backend"), myconstructs.DockerBackendConfig{
		VPCId:       config.VPCId,
		DockerImage: config.DockerImage,
	})

	return stack
}

// DOCS_BLOCK_END:cross-stack-reference

/*
We fake the methods name to be "main"
DOCS_BLOCK_START:cross-stack-reference
func main() {
DOCS_BLOCK_END:cross-stack-reference
*/
func SynthCrossStackReference() {
	// DOCS_BLOCK_START:cross-stack-reference
	app := cdktf.NewApp(nil)

	origin := NewVPCStack(app, "origin-stack", nil)
	NewBackendStack(app, "target-stack", BackendStackConfig{
		Region:      *origin.Region,
		VPCId:       origin.VPC.Id,
		DockerImage: "org/my-image:latest",
	})

	app.Synth()
}

// DOCS_BLOCK_END:cross-stack-reference
