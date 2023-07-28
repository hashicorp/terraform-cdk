// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

package main

import (
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
)

func NewFunctionsOtherStack(scope constructs.Construct, name string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &name)

	// DOCS_BLOCK_START:functions-lookup
	v := cdktf.NewTerraformVariable(stack, jsii.String("complex-object"), &cdktf.TerraformVariableConfig{
		Type: jsii.String("object({users: list(object({name: string}))})"),
	})
	cdktf.NewTerraformOutput(stack, jsii.String("users"), &cdktf.TerraformOutputConfig{
		Value: cdktf.Fn_Lookup(v.Value(), jsii.String("users"), nil),
	})
	cdktf.NewTerraformOutput(stack, jsii.String("first-user-name"), &cdktf.TerraformOutputConfig{
		Value: cdktf.Fn_LookupNested(v.Value(), &[]interface{}{"users", 0, "name"}),
	})
	// DOCS_BLOCK_END:functions-lookup

	// DOCS_BLOCK_START:functions-raw-string
	cdktf.NewTerraformOutput(stack, jsii.String("quotes"), &cdktf.TerraformOutputConfig{
		Value: cdktf.Fn_RawString(jsii.String("\"b\"")),
	})
	cdktf.NewTerraformOutput(stack, jsii.String("template"), &cdktf.TerraformOutputConfig{
		Value: cdktf.Fn_RawString(jsii.String("${TEMPLATE}")),
	})
	// DOCS_BLOCK_END:functions-raw-string

	return stack
}
