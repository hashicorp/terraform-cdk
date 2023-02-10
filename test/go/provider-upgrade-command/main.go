// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

package main

import (
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
)

func NewMyStack(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)
	return stack
}

func main() {
	app := cdktf.Testing_StubVersion(cdktf.NewApp(&cdktf.AppConfig{StackTraces: jsii.Bool(false)}))

	NewMyStack(app, "go-simple")

	app.Synth()
}
