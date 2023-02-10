// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

package main

// DOCS_BLOCK_START:operators,functions-raw
import (
	"fmt"

	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/dataawsavailabilityzones"
	aws "github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/provider"
)

// DOCS_BLOCK_END:operators,functions-raw

func NewOperatorsAndFunctionsRawStack(scope constructs.Construct, name string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &name)

	aws.NewAwsProvider(stack, jsii.String("aws"), &aws.AwsProviderConfig{
		Region: jsii.String("use-west-2"),
	})
	// DOCS_BLOCK_START:operators,functions-raw
	zones := dataawsavailabilityzones.NewDataAwsAvailabilityZones(stack, jsii.String("zones"),
		&dataawsavailabilityzones.DataAwsAvailabilityZonesConfig{
			State: jsii.String("available"),
		},
	)

	// DOCS_BLOCK_END:functions-raw
	cdktf.NewTerraformOutput(stack, jsii.String("half-of-the-zone"), &cdktf.TerraformOutputConfig{
		Value: cdktf.Op_Div(
			cdktf.Fn_LengthOf(cdktf.Token_AsAny(zones.Names())),
			jsii.Number(2),
		),
	})
	// DOCS_BLOCK_END:operators

	// DOCS_BLOCK_START:functions-raw
	cdktf.NewTerraformOutput(stack, jsii.String("half-of-the-zone-raw"), &cdktf.TerraformOutputConfig{
		Value: jsii.String(
			fmt.Sprintf("${length(%s.names) / 2}",
				*cdktf.Token_AsString(zones.Names(), &cdktf.EncodingOptions{}),
			),
		),
	})
	// DOCS_BLOCK_END:functions-raw

	return stack
}
