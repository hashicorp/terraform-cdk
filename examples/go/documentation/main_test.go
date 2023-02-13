// DOCS_BLOCK_START:unit-tests
package main

import (
	"testing"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/kreuzwerker/docker/container"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/kreuzwerker/docker/image"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
	jsii "github.com/aws/jsii-runtime-go"
)

var app = cdktf.Testing_App(nil)
var stack = MyApplicationsAbstraction(app, "stack")
var synth = cdktf.Testing_Synth(stack, jsii.Bool(false))

func TestShouldContainContainer(t *testing.T){
	assertion := cdktf.Testing_ToHaveResource(synth, container.Container_TfResourceType())

	if *assertion {
		t.Error("Assertion Failed")
	}
}

func TestShouldUseUbuntuImage(t *testing.T){
	properties := map[string]interface{}{
		"name": "ubuntu:latest",
	}
	assertion := cdktf.Testing_ToHaveResourceWithProperties(synth, image.Image_TfResourceType(), &properties)

	if *assertion {
		t.Error("Assertion Failed")
	}
}
// DOCS_BLOCK_END:unit-tests