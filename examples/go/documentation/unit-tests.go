package main

import (

	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/kreuzwerker/docker/container"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/kreuzwerker/docker/image"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/kreuzwerker/docker/datadockerimage"
	docker "github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/kreuzwerker/docker/provider"

	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
)

// Dummy functions used for unit testing documentation 

func MyApplicationsAbstraction(scope constructs.Construct, id string) cdktf.TerraformStack {
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