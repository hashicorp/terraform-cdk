package main

import (
	"testing"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
	"github.com/aws/jsii-runtime-go"
)

// The tests below are example tests, you can find more information at
// https://cdk.tf/testing

/*
var stack = NewMyApplicationsAbstraction(cdktf.Assertions_App(nil), "stack")
var synth = cdktf.Assertions_Synth(stack)

func TestShouldContainContainer(t *testing.T){
	assertion := cdktf.Assertions_ToHaveResource(synth, docker.Container_TfResourceType())

	if !*assertion  {
		t.Error(assertion.Message())
	}
}

func TestShouldUseUbuntuImage(t *testing.T){
	properties := map[string]interface{}{
		"name": "ubuntu:latest",
	}
	assertion := cdktf.Assertions_ToHaveResourceWithProperties(synth, docker.Image_TfResourceType(), &properties)

	if !*assertion  {
		t.Error(assertion.Message())
	}
}

func TestCheckValidity(t *testing.T){
	assertion := cdktf.Testing_ToBeValidTerraform(cdktf.Testing_FullSynth(stack))

	if !*assertion  {
		t.Error(assertion.Message())
	}
}
*/