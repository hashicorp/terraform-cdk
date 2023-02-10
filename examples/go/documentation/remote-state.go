// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

package main

// DOCS_BLOCK_START:remote-state

import (
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/random/pet"
	random "github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/random/provider"
)

func NewProducerStack(scope constructs.Construct, name string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &name)

	cdktf.NewCloudBackend(stack, &cdktf.CloudBackendConfig{
		Organization: jsii.String("hashicorp"),
		Workspaces:   cdktf.NewNamedCloudWorkspace(jsii.String("producer")),
	})

	random.NewRandomProvider(stack, jsii.String("random"), &random.RandomProviderConfig{})

	pet := pet.NewPet(stack, jsii.String("pet"), &pet.PetConfig{})
	cdktf.NewTerraformOutput(stack, jsii.String("random-pet"), &cdktf.TerraformOutputConfig{
		Value: pet.Id(),
	})

	return stack
}

func NewConsumerStack(scope constructs.Construct, name string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &name)

	cdktf.NewCloudBackend(stack, &cdktf.CloudBackendConfig{
		Organization: jsii.String("hashicorp"),
		Workspaces:   cdktf.NewNamedCloudWorkspace(jsii.String("consumer")),
	})

	remoteState := cdktf.NewDataTerraformRemoteState(stack, jsii.String("remote-pet"), &cdktf.DataTerraformRemoteStateRemoteConfig{
		Organization: jsii.String("hashicorp"),
		Workspaces:   cdktf.NewNamedCloudWorkspace(jsii.String("producer")),
	})

	cdktf.NewTerraformOutput(stack, jsii.String("random-remote-pet"), &cdktf.TerraformOutputConfig{
		Value: remoteState.GetString(jsii.String("random-pet")),
	})

	return stack
}

// DOCS_BLOCK_END:remote-state

/*
We fake the methods name to be "main"
DOCS_BLOCK_START:remote-state
func main() {
DOCS_BLOCK_END:remote-state
*/
func SynthRemoteState() {
	// DOCS_BLOCK_START:remote-state
	app := cdktf.NewApp(nil)

	NewProducerStack(app, "cdktf-producer")
	NewConsumerStack(app, "cdktf-consumer")

	app.Synth()
}

// DOCS_BLOCK_END:remote-state
