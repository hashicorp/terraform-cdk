package main

import (
	"github.com/aws/constructs-go/constructs/v3"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
)

func NewExampleCdktfGoAwsStack(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)

	return stack
}

func main() {
	app := cdktf.NewApp(nil)

	NewExampleCdktfGoAwsStack(app, "ExampleCdktfGoAwsStack")

	app.Synth()
}
