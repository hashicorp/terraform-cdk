package main

import (
	"cdk.tf/go/stack/generated/hashicorp/random"
	"github.com/aws/constructs-go/constructs/v3"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
)

func NewMyStack(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)

	random.NewRandomProvider(stack, jsii.String("provider"), &random.RandomProviderConfig{})

	random.NewPet(stack, jsii.String("pet"), &random.PetConfig{Prefix: jsii.String("my")})

	return stack
}

func main() {
	app := cdktf.Testing_StubVersion(cdktf.NewApp(&cdktf.AppOptions{StackTraces: jsii.Bool(false)}))

	NewMyStack(app, "go-simple")

	app.Synth()
}
