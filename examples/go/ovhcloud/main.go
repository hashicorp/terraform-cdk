package main

import (
	"os"
	"path"

	"cdk.tf/go/stack/generated/hashicorp/local/file"
	local "cdk.tf/go/stack/generated/hashicorp/local/provider"
	"cdk.tf/go/stack/generated/ovh/ovh/cloudprojectkube"
	"cdk.tf/go/stack/generated/ovh/ovh/cloudprojectkubenodepool"

	ovh "cdk.tf/go/stack/generated/ovh/ovh/provider"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
)

func NewMyStack(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)

	// Initialize the OVH provider
	ovh.NewOvhProvider(stack, jsii.String("ovh"), &ovh.OvhProviderConfig{
		Endpoint: jsii.String("ovh-eu"), //required
		//ApplicationKey:    jsii.String(""),       //required OVH_APPLICATION_KEY
		//ApplicationSecret: jsii.String(""),       //required OVH_APPLICATION_SECRET
		//ConsumerKey:       jsii.String(""),       //required OVH_CONSUMER_KEY
	})

	// Initialize the Local provider
	local.NewLocalProvider(stack, jsii.String("local"), &local.LocalProviderConfig{})

	// Get serviceName from the env var OVH_CLOUD_PROJECT_SERVICE
	serviceName := os.Getenv("OVH_CLOUD_PROJECT_SERVICE")

	// Deploy a new Kubernetes cluster
	kube := cloudprojectkube.NewCloudProjectKube(stack, jsii.String("my_desired_cluster"), &cloudprojectkube.CloudProjectKubeConfig{
		ServiceName: jsii.String(serviceName),
		Name:        jsii.String("my_desired_cluster"),
		Region:      jsii.String("GRA5"),
	})

	cdktf.NewTerraformOutput(stack, jsii.String("cluster_version"), &cdktf.TerraformOutputConfig{
		Value: kube.Version(),
	})

	//Save the kubeconfig file in your current directory
	pwd, _ := os.Getwd()
	file.NewFile(stack, jsii.String("kubeconfig"), &file.FileConfig{
		Filename: jsii.String(path.Join(pwd, "kubeconfig.yaml")),
		Content:  kube.Kubeconfig(),
	})

	// Deploy a Node Pool
	nodePool := cloudprojectkubenodepool.NewCloudProjectKubeNodepool(stack, jsii.String("my-pool"), &cloudprojectkubenodepool.CloudProjectKubeNodepoolConfig{
		ServiceName:  kube.ServiceName(),
		KubeId:       kube.Id(),
		Name:         jsii.String("my-pool"),
		DesiredNodes: jsii.Number(1),
		MaxNodes:     jsii.Number(3),
		MinNodes:     jsii.Number(1),
		FlavorName:   jsii.String("b2-7"),
	})

	cdktf.NewTerraformOutput(stack, jsii.String("nodePoolID"), &cdktf.TerraformOutputConfig{
		Value: nodePool.Id(),
	})

	return stack
}

func main() {
	app := cdktf.NewApp(nil)

	NewMyStack(app, "ovhcloud")

	app.Synth()
}
