package main

import (
	"cdk.tf/go/stack/generated/kreuzwerker/docker/container"
	"cdk.tf/go/stack/generated/kreuzwerker/docker/datadockerimage"
	"cdk.tf/go/stack/generated/kreuzwerker/docker/image"
	docker "cdk.tf/go/stack/generated/kreuzwerker/docker/provider"

	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
)

// Dummy functions used for unit testing documentation 

func NewMyStack(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)

	// The code that defines your stack goes here
	docker.NewDockerProvider(stack, jsii.String("provider"), &docker.DockerProviderConfig{})

	dataImage := datadockerimage.NewDataDockerImage(stack, jsii.String("id"), &datadockerimage.DataDockerImageConfig{
		Name: jsii.String("ubuntu:latest"),
	})

	imageName := dataImage.Name()
	dockerImage := image.NewImage(stack, jsii.String("ubuntuImage"), &image.ImageConfig{
		Name:        imageName,
		KeepLocally: jsii.Bool(false),
	})

	container.NewContainer(stack, jsii.String("ubuntuContainer"), &container.ContainerConfig{
		Image: dockerImage.Latest(),
		Name:  jsii.String("tutorial"),
		Ports: &[]*container.ContainerPorts{{
			Internal: jsii.Number(80), External: jsii.Number(8000),
		}},
	})

	return stack
}

func main() {
	app := cdktf.NewApp(nil)

	NewMyStack(app, "test-go")

	app.Synth()
}