package main

import (
	"os"

	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
	"github.com/hashicorp/terraform-cdk/examples/go/ucloud/generated/ucloud/ucloud/dataucloudimages"
	"github.com/hashicorp/terraform-cdk/examples/go/ucloud/generated/ucloud/ucloud/instance"
	ucloudprovider "github.com/hashicorp/terraform-cdk/examples/go/ucloud/generated/ucloud/ucloud/provider"
)

func NewMyStack(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)

	ucloudprovider.NewUcloudProvider(stack, jsii.String("ucloud"), &ucloudprovider.UcloudProviderConfig{
		Region:    jsii.String("cn-bj2"),
		ProjectId: jsii.String(os.Getenv("UCLOUD_PROJECT_ID")),
	})

	images := dataucloudimages.NewDataUcloudImages(stack, jsii.String("images"), &dataucloudimages.DataUcloudImagesConfig{
		AvailabilityZone: jsii.String("cn-bj2-04"),
		NameRegex:        jsii.String("^CentOS 8.2 64"),
		ImageType:        jsii.String("base"),
	})

	instance.NewInstance(stack, jsii.String("web"), &instance.InstanceConfig{
		AvailabilityZone: jsii.String("cn-bj2-04"),
		ImageId:          images.Images().Get(jsii.Number(0)).Id(),
		InstanceType:     jsii.String("n-basic-2"),
		RootPassword:     jsii.String("wA1234567"),
		Name:             jsii.String("cdktf-example-instance"),
		Tag:              jsii.String("tf-example"),
		BootDiskType:     jsii.String("cloud_ssd"),
	})
	return stack
}

func main() {
	app := cdktf.NewApp(nil)

	NewMyStack(app, "go-ucloud")

	app.Synth()
}
