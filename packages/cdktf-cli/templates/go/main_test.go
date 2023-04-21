package main

import (
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
	"testing"
)

// The tests below are example tests, you can find more information at
// https://cdk.tf/testing

/*
var stack = NewMyApplicationsAbstraction(cdktf.Testing_App(nil), "stack")
var synth = cdktf.Testing_Synth(stack)

func TestShouldContainContainer(t *testing.T){
	assertion := cdktf.Testing_ToHaveResource(synth, docker.Container_TfResourceType())

	if !*assertion  {
		t.Error("Assertion Failed")
	}
}

func TestShouldUseUbuntuImage(t *testing.T){
	properties := map[string]interface{}{
		"name": "ubuntu:latest",
	}
	assertion := cdktf.Testing_ToHaveResourceWithProperties(synth, docker.Image_TfResourceType(), &properties)

	if !*assertion  {
		t.Error("Assertion Failed")
	}
}

func TestCheckValidity(t *testing.T){
	assertion := cdktf.Testing_ToBeValidTerraform(cdktf.Testing_FullSynth(stack))

	if !*assertion  {
		t.Error("Assertion Failed")
	}
}
*/
