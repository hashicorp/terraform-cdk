package main

import (
	"testing"
	"cdk.tf/go/stack/generated/kreuzwerker/docker"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
	"github.com/aws/jsii-runtime-go"
)

var app = cdktf.Testing_App(nil)
var stack = NewMyStack(app, "stack")
var synth = cdktf.Testing_Synth(stack)
var fullSynth = cdktf.Testing_FullSynth(stack)

var stackInvalid = NewMyStackInvalid(app, "stack-invalid")
var fullSynthInvalid = cdktf.Testing_FullSynth(stackInvalid)


func TestToHaveResourcePass(t *testing.T){
	assertion := cdktf.Testing_ToHaveResource(synth, docker.Container_TfResourceType())

	if !*assertion.Pass() {
		t.Error(assertion.Message())
	}
}

func TestToHaveResourceFail(t *testing.T){
	assertion := cdktf.Testing_ToHaveResource(synth, docker.Config_TfResourceType())

	if *assertion.Pass() {
		t.Error(assertion.Message())
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

	if !*assertion.Pass() {
		t.Error(assertion.Message())
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

	if *assertion.Pass() {
		t.Error(assertion.Message())
	}
}

func TestToHaveDataPass(t *testing.T){
	assertion := cdktf.Testing_ToHaveDataSource(synth, docker.DataDockerImage_TfResourceType())

	if !*assertion.Pass() {
		t.Error(assertion.Message())
	}
}
func TestToHaveDataFail(t *testing.T){
	assertion := cdktf.Testing_ToHaveDataSource(synth, docker.DataDockerNetwork_TfResourceType())

	if *assertion.Pass() {
		t.Error(assertion.Message())
	}
}
func TestToHaveDataWithPropertiesPass(t *testing.T){
	properties := map[string]interface{}{
		"name": "nginx:latest",
	}
	assertion := cdktf.Testing_ToHaveDataSourceWithProperties(synth, docker.DataDockerImage_TfResourceType(), &properties)

	if !*assertion.Pass() {
		t.Error(assertion.Message())
	}
}
func TestToHaveDataWithPropertiesFail(t *testing.T){
	properties := map[string]interface{}{
		"name": "wrong",
	}
	assertion := cdktf.Testing_ToHaveDataSourceWithProperties(synth, docker.DataDockerImage_TfResourceType(), &properties)

	if *assertion.Pass() {
		t.Error(assertion.Message())
	}
}
func TestToBeValidTerraformPass(t *testing.T){
	assertion := cdktf.Testing_ToBeValidTerraform(fullSynth)

	if !*assertion.Pass() {
		t.Error(assertion.Message())
	}
}

func TestToBeValidTerraformFail(t *testing.T){
	assertion := cdktf.Testing_ToBeValidTerraform(fullSynthInvalid)

	if *assertion.Pass() {
		t.Error(assertion.Message())
	}
}