package main

import (
	"cdk.tf/go/stack/generated/hashicorp/random/pet"
	random "cdk.tf/go/stack/generated/hashicorp/random/provider"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
)

func NewMyStack(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)
	cdktf.NewLocalBackend(stack, &cdktf.LocalBackendProps{
		Path: jsii.String("terraform.tfstate"),
	})

	random.NewRandomProvider(stack, jsii.String("provider"), &random.RandomProviderConfig{})

	pet.NewPet(stack, jsii.String("pet"), &pet.PetConfig{Prefix: jsii.String("my")})

	return stack
}

func main() {
	app := cdktf.Testing_StubVersion(cdktf.NewApp(&cdktf.AppOptions{StackTraces: jsii.Bool(false)}))

	NewMyStack(app, "go-simple")

	app.Synth()
}
