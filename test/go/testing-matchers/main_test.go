package main

import (
	"testing"
	"cdk.tf/go/stack/generated/kreuzwerker/docker"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
	"github.com/aws/jsii-runtime-go"
)

var app = cdktf.Testing_App(nil)
var stack = NewMyStack(app, "stack")
var synth = cdktf.Testing_Synth(stack, jsii.Bool(false))
var fullSynth = cdktf.Testing_FullSynth(stack)

var stackInvalid = NewMyStackInvalid(app, "stack-invalid")
var fullSynthInvalid = cdktf.Testing_FullSynth(stackInvalid)


func TestToHaveResourcePass(t *testing.T){
	assertion := cdktf.Testing_ToHaveResource(synth, docker.Container_TfResourceType())

	if !*assertion  {
		t.Error("Assertion Failed")
	}
}

func TestToHaveResourceFail(t *testing.T){
	assertion := cdktf.Testing_ToHaveResource(synth, docker.Config_TfResourceType())

	if *assertion  {
		t.Error("Assertion Failed")
	}
}

func TestToHaveResourceWithPropertiesPass(t *testing.T){
	properties := map[string]interface{}{
		"ports": &[]*docker.ContainerPorts{{
			Internal: jsii.Number(80), 
			External: jsii.Number(8000),
		}},
	}
	assertion := cdktf.Testing_ToHaveResourceWithProperties(synth, docker.Container_TfResourceType(), &properties)

	if !*assertion  {
		t.Error("Assertion Failed")
	}
}

func TestToHaveResourceWithPropertiesFail(t *testing.T){
	properties := map[string]interface{}{
		"ports": &[]*docker.ContainerPorts{{
			Internal: jsii.Number(100), 
			External: jsii.Number(1000),
		}},
	}
	assertion := cdktf.Testing_ToHaveResourceWithProperties(synth, docker.Container_TfResourceType(), &properties)

	if *assertion  {
		t.Error("Assertion Failed")
	}
}

func TestToHaveDataPass(t *testing.T){
	assertion := cdktf.Testing_ToHaveDataSource(synth, docker.DataDockerImage_TfResourceType())

	if !*assertion  {
		t.Error("Assertion Failed")
	}
}
func TestToHaveDataFail(t *testing.T){
	assertion := cdktf.Testing_ToHaveDataSource(synth, docker.DataDockerNetwork_TfResourceType())

	if *assertion  {
		t.Error("Assertion Failed")
	}
}
func TestToHaveDataWithPropertiesPass(t *testing.T){
	properties := map[string]interface{}{
		"name": "nginx:latest",
	}
	assertion := cdktf.Testing_ToHaveDataSourceWithProperties(synth, docker.DataDockerImage_TfResourceType(), &properties)

	if !*assertion  {
		t.Error("Assertion Failed")
	}
}
func TestToHaveDataWithPropertiesFail(t *testing.T){
	properties := map[string]interface{}{
		"name": "wrong",
	}
	assertion := cdktf.Testing_ToHaveDataSourceWithProperties(synth, docker.DataDockerImage_TfResourceType(), &properties)

	if *assertion  {
		t.Error("Assertion Failed")
	}
}
func TestToBeValidTerraformPass(t *testing.T){
	assertion := cdktf.Testing_ToBeValidTerraform(fullSynth)

	if !*assertion  {
		t.Error("Assertion Failed")
	}
}

func TestToBeValidTerraformFail(t *testing.T){
	assertion := cdktf.Testing_ToBeValidTerraform(fullSynthInvalid)

	if *assertion  {
		t.Error("Assertion Failed")
	}
}