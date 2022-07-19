package main

import (
	"cdk.tf/go/stack/generated/kreuzwerker/docker"

	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
)


func NewMyStack(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)

	// The code that defines your stack goes here
	docker.NewDockerProvider(stack, jsii.String("provider"), &docker.DockerProviderConfig{})

	dataImage := docker.NewDataDockerImage(stack, jsii.String("id"), &docker.DataDockerImageConfig{
		Name: jsii.String("nginx:latest"),
	})

	imageName := dataImage.Name()
	dockerImage := docker.NewImage(stack, jsii.String("nginxImage"), &docker.ImageConfig{
		Name: imageName,
		KeepLocally: jsii.Bool(false),
	})

	docker.NewContainer(stack, jsii.String("nginxContainer"), &docker.ContainerConfig{
		Image: dockerImage.Latest(),
		Name:  jsii.String("tutorial"),
		Ports: &[]*docker.ContainerPorts{{
			Internal: jsii.Number(80), External: jsii.Number(8000),
		}},
	})

	return stack
}

func NewMyStackInvalid(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)

	// The code that defines your stack goes here
	docker.NewDockerProvider(stack, jsii.String("provider"), &docker.DockerProviderConfig{})

	dataImage := docker.NewDataDockerImage(stack, jsii.String("id"), &docker.DataDockerImageConfig{
		Name: jsii.String("nginx:latest"),
	})

	imageName := dataImage.Name()
	dockerImage := docker.NewImage(stack, jsii.String("nginxImage"), &docker.ImageConfig{
		Name: imageName,
		KeepLocally: jsii.Bool(false),
	})

	type fails struct {}

	docker.NewContainer(stack, jsii.String("nginxContainer"), &docker.ContainerConfig{
		Image: dockerImage.Latest(),
		Name:  jsii.String("nginx-go-cdktf"),
		Ports: &[]*docker.ContainerPorts{{
			Internal: jsii.Number(80), External: jsii.Number(8000),
		}},
	}).AddOverride(jsii.String(""), &[]*fails{})

	return stack
}

func main() {
	app := cdktf.NewApp(nil)

	NewMyStack(app, "test-go")

	app.Synth()
}
