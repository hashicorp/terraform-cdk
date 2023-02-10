// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

package main

// DOCS_BLOCK_START:functions
import (
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/dataawsavailabilityzones"
	aws "github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/provider"
)

func NewFunctionsStack(scope constructs.Construct, name string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &name)

	aws.NewAwsProvider(stack, jsii.String("aws"), &aws.AwsProviderConfig{
		Region: jsii.String("use-west-2"),
	})

	zones := dataawsavailabilityzones.NewDataAwsAvailabilityZones(stack, jsii.String("zones"), &dataawsavailabilityzones.DataAwsAvailabilityZonesConfig{
		State: jsii.String("available"),
	})

	cdktf.NewTerraformOutput(stack, jsii.String("first-zone"), &cdktf.TerraformOutputConfig{
		Value: cdktf.Fn_Element(cdktf.Token_AsAny(zones.Names()), jsii.Number(0)),
	})

	return stack
}

// DOCS_BLOCK_END:functions
