// DOCS_BLOCK_START:unit-tests
package main

import (
	"testing"
	"cdk.tf/go/stack/generated/kreuzwerker/docker/image"
	"cdk.tf/go/stack/generated/kreuzwerker/docker/container"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
	"github.com/aws/jsii-runtime-go"
)

var stack = NewMyApplicationsAbstraction(cdktf.Assertions_App(nil), "stack")
var synth = cdktf.Assertions_Synth(stack)

func TestShouldContainContainer(t *testing.T){
	assertion := cdktf.Assertions_ToHaveResource(synth, container.Container_TfResourceType())

	if !*assertion  {
		t.Error(assertion.Message())
	}
}

func TestShouldUseUbuntuImage(t *testing.T){
	properties := map[string]interface{}{
		"name": "ubuntu:latest",
	}
	assertion := cdktf.Assertions_ToHaveResourceWithProperties(synth, image.Image_TfResourceType(), &properties)

	if !*assertion  {
		t.Error(assertion.Message())
	}
}
// DOCS_BLOCK_END:unit-tests