// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

package main

// DOCS_BLOCK_START:hcl-interop
import (
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/random/pet"
	random "github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/random/provider"
)

func NewHclInteropStack(scope constructs.Construct, name string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &name)

	random.NewRandomProvider(stack, jsii.String("default"), &random.RandomProviderConfig{})

	petNameLength := cdktf.NewTerraformVariable(stack, jsii.String("petNameLength"), &cdktf.TerraformVariableConfig{
		Type:        jsii.String("number"),
		Default:     jsii.Number(2),
		Description: jsii.String("Pet name length"),
	})

	myPet := pet.NewPet(stack, jsii.String("example"), &pet.PetConfig{
		Length: petNameLength.NumberValue(),
	})

	cdktf.NewTerraformOutput(stack, jsii.String("name"), &cdktf.TerraformOutputConfig{
		Value: myPet.Id(),
	})

	return stack
}

// DOCS_BLOCK_END:hcl-interop
