package main

import (
	"os"

	"cdk.tf/go/stack/generated/scaleway/scaleway"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
)

func NewMyStack(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)

	scaleway.NewScalewayProvider(stack, jsii.String("scaleway"), &scaleway.ScalewayProviderConfig{
		Region:    jsii.String("fr-par"),
		Zone:      jsii.String("fr-par-1"),
		ProjectId: jsii.String(os.Getenv("SCW_DEFAULT_PROJECT_ID")),
	})

	reservedIp := scaleway.NewInstanceIp(stack, jsii.String("cdk-demo-ip"), &scaleway.InstanceIpConfig{})

	scaleway.NewInstanceServer(stack, jsii.String("cdk-demo-server"), &scaleway.InstanceServerConfig{
		Image: jsii.String("ubuntu_focal"),
		Type:  jsii.String("DEV1-S"),
		IpId:  reservedIp.Id(),
	})

	return stack
}

func main() {
	app := cdktf.NewApp(nil)

	NewMyStack(app, "go-scaleway")

	app.Synth()
}
