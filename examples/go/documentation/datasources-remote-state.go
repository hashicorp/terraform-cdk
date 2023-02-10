// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

package main

// DOCS_BLOCK_START:remote-state-datasources
import (
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/instance"
	aws "github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/provider"
)

func RemoteStateDataSourceStack(scope constructs.Construct, name string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &name)

	aws.NewAwsProvider(stack, jsii.String("aws"), &aws.AwsProviderConfig{
		Region: jsii.String("eu-central-1"),
	})

	remote_state := cdktf.NewDataTerraformRemoteState(stack, jsii.String("remote_state"), &cdktf.DataTerraformRemoteStateRemoteConfig{
		Organization: jsii.String("hashicorp"),
		Workspaces:   cdktf.NewNamedRemoteWorkspace(jsii.String("vpc-prod")),
	})

	instance.NewInstance(stack, jsii.String("region"), &instance.InstanceConfig{
		SubnetId: remote_state.GetString(jsii.String("subnet_id")),
	})

	return stack
}

// DOCS_BLOCK_END:remote-state-datasources
