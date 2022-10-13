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

func NewMyStack(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)

	// The code that defines your stack goes here
	docker.NewDockerProvider(stack, jsii.String("provider"), &docker.DockerProviderConfig{})

	dataImage := datadockerimage.NewDataDockerImage(stack, jsii.String("id"), &datadockerimage.DataDockerImageConfig{
		Name: jsii.String("nginx:latest"),
	})

	imageName := dataImage.Name()
	dockerImage := image.NewImage(stack, jsii.String("nginxImage"), &image.ImageConfig{
		Name:        imageName,
		KeepLocally: jsii.Bool(false),
	})

	container.NewContainer(stack, jsii.String("nginxContainer"), &container.ContainerConfig{
		Image: dockerImage.Latest(),
		Name:  jsii.String("tutorial"),
		Ports: &[]*container.ContainerPorts{{
			Internal: jsii.Number(80), External: jsii.Number(8000),
		}},
	})

	return stack
}

func NewMyStackInvalid(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)

	// The code that defines your stack goes here
	docker.NewDockerProvider(stack, jsii.String("provider"), &docker.DockerProviderConfig{})

	dataImage := datadockerimage.NewDataDockerImage(stack, jsii.String("id"), &datadockerimage.DataDockerImageConfig{
		Name: jsii.String("nginx:latest"),
	})

	imageName := dataImage.Name()
	dockerImage := image.NewImage(stack, jsii.String("nginxImage"), &image.ImageConfig{
		Name:        imageName,
		KeepLocally: jsii.Bool(false),
	})

	type fails struct{}

	container.NewContainer(stack, jsii.String("nginxContainer"), &container.ContainerConfig{
		Image: dockerImage.Latest(),
		Name:  jsii.String("nginx-go-cdktf"),
		Ports: &[]*container.ContainerPorts{{
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
