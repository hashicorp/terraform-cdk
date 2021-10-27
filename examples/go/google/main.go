package main

import (
	constructs "github.com/aws/constructs-go/constructs/v10"
	"github.com/hashicorp/terraform-cdk-go/cdktf"

	jsii "github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk/examples/go/google/generated/gkeAuth"
	"github.com/hashicorp/terraform-cdk/examples/go/google/generated/hashicorp/google"
	"github.com/hashicorp/terraform-cdk/examples/go/google/generated/hashicorp/helm"
	"github.com/hashicorp/terraform-cdk/examples/go/google/generated/hashicorp/kubernetes"
	"github.com/hashicorp/terraform-cdk/examples/go/google/generated/hashicorp/local"
)

func NewMyStack(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)
	google.NewGoogleProvider(stack, jsii.String("google"), &google.GoogleProviderConfig{
		Zone:    jsii.String("us-west1"),
		Project: jsii.String("dschmidt-cdk-test"),
	})
	local.NewLocalProvider(stack, jsii.String("local"), &local.LocalProviderConfig{})

	sa := google.NewServiceAccount(stack, jsii.String("sa"), &google.ServiceAccountConfig{
		AccountId:   jsii.String("cluster-admin"),
		DisplayName: jsii.String("Cluster Admin"),
	})

	cluster := google.NewContainerCluster(stack, jsii.String("cluster"), &google.ContainerClusterConfig{
		Name:                  jsii.String("cluster"),
		RemoveDefaultNodePool: jsii.Bool(true),
		InitialNodeCount:      jsii.Number(1),
	})

	google.NewContainerNodePool(stack, jsii.String("main-pool"), &google.ContainerNodePoolConfig{
		Name:    jsii.String("main"),
		Cluster: cluster.Name(),
		NodeConfig: &google.ContainerNodePoolNodeConfig{
			MachineType:    jsii.String("e2-medium"),
			Preemptible:    jsii.Bool(true),
			ServiceAccount: sa.Email(),
			OauthScopes:    &[]*string{jsii.String("https://www.googleapis.com/auth/cloud-platform")},
		},
	})

	auth := gkeAuth.NewGkeAuth(stack, jsii.String("auth"), &gkeAuth.GkeAuthOptions{
		ClusterName: cluster.Name(),
		Location:    cluster.Location(),
		ProjectId:   cluster.Project(),
	})

	local.NewFile(stack, jsii.String("kubeconfig"), &local.FileConfig{
		Filename: jsii.String("kubeconfig.yaml"),
		Content:  auth.KubeconfigRawOutput(),
	})

	kubernetes.NewKubernetesProvider(stack, jsii.String("kubernetes"), &kubernetes.KubernetesProviderConfig{
		ClusterCaCertificate: auth.ClusterCaCertificateOutput(),
		Host:                 auth.HostOutput(),
		Token:                auth.TokenOutput(),
	})

	namespaceName := "development"
	kubernetes.NewNamespace(stack, jsii.String("namespace"), &kubernetes.NamespaceConfig{
		Metadata: &kubernetes.NamespaceMetadata{
			Name: jsii.String(namespaceName),
		},
	})

	helm.NewHelmProvider(stack, jsii.String("helm"), &helm.HelmProviderConfig{
		Kubernetes: &helm.HelmProviderKubernetes{
			ClusterCaCertificate: auth.ClusterCaCertificateOutput(),
			Host:                 auth.HostOutput(),
			Token:                auth.TokenOutput(),
		},
	})

	helm.NewRelease(stack, jsii.String("cert-manager"), &helm.ReleaseConfig{
		Name:            jsii.String("cert-manager"),
		Repository:      jsii.String("https://charts.jetstack.io"),
		Chart:           jsii.String("cert-manager"),
		CreateNamespace: jsii.Bool(true),
		Namespace:       jsii.String("cert-manager"),
		Version:         jsii.String("v1.3.1"),
	})

	return stack
}

func main() {
	app := cdktf.NewApp(nil)

	NewMyStack(app, "google")

	app.Synth()
}
