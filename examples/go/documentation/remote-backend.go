// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

package main

// DOCS_BLOCK_START:remote-backend-define
import (
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
)

func NewCloudBackendStack(scope constructs.Construct, name string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &name)

	cdktf.NewCloudBackend(stack, &cdktf.CloudBackendConfig{
		Hostname:     jsii.String("app.terraform.io"),
		Organization: jsii.String("company"),
		Workspaces:   cdktf.NewNamedCloudWorkspace(jsii.String("my-app-prod")),
	})

	cdktf.NewTerraformOutput(stack, jsii.String("dns-server"), &cdktf.TerraformOutputConfig{
		Value: "hello-world",
	})

	return stack
}

// DOCS_BLOCK_END:remote-backend-define

// DOCS_BLOCK_START:remote-backend-migrate

func NewLocalBackendStack(scope constructs.Construct, name string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &name)

	cdktf.NewTerraformOutput(stack, jsii.String("dns-server"), &cdktf.TerraformOutputConfig{
		Value: "local",
	})

	return stack
}

// DOCS_BLOCK_END:remote-backend-migrate

/*
We fake the methods name to be "main"
DOCS_BLOCK_START:remote-backend-migrate
func main() {
DOCS_BLOCK_END:remote-backend-migrate
*/
func SynthLocalBackend() {
	// DOCS_BLOCK_START:remote-backend-migrate
	app := cdktf.NewApp(nil)

	stack := NewLocalBackendStack(app, "hello-terraform")
	cdktf.NewCloudBackend(stack, &cdktf.CloudBackendConfig{
		Hostname:     jsii.String("app.terraform.io"),
		Organization: jsii.String("company"),
		Workspaces:   cdktf.NewNamedCloudWorkspace(jsii.String("my-app-prod")),
	})

	// DOCS_BLOCK_END:remote-backend-migrate
	// DOCS_BLOCK_START:remote-backend-escape-hatches
	stack.AddOverride(jsii.String("terraform.backend"), &map[string]map[string]string{
		"atlas": {
			"name":    "example_corp/networking-prod",
			"address": "https://app.terraform.io",
		},
	})
	// DOCS_BLOCK_END:remote-backend-escape-hatches
	// DOCS_BLOCK_START:remote-backend-migrate
	app.Synth()
}

// DOCS_BLOCK_END:remote-backend-migrate
