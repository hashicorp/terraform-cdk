// Copyright IBM Corp. 2019, 2025
// SPDX-License-Identifier: MPL-2.0

package main

import (
	constructs "github.com/aws/constructs-go/constructs/v10"
	"github.com/hashicorp/terraform-cdk-go/cdktf"

	jsii "github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk/examples/go/google/generated/gkeAuth"
	"github.com/hashicorp/terraform-cdk/examples/go/google/generated/hashicorp/google/containercluster"
	"github.com/hashicorp/terraform-cdk/examples/go/google/generated/hashicorp/google/containernodepool"
	google "github.com/hashicorp/terraform-cdk/examples/go/google/generated/hashicorp/google/provider"
	"github.com/hashicorp/terraform-cdk/examples/go/google/generated/hashicorp/google/serviceaccount"
	helm "github.com/hashicorp/terraform-cdk/examples/go/google/generated/hashicorp/helm/provider"
	"github.com/hashicorp/terraform-cdk/examples/go/google/generated/hashicorp/helm/release"
	"github.com/hashicorp/terraform-cdk/examples/go/google/generated/hashicorp/kubernetes/namespace"
	kubernetes "github.com/hashicorp/terraform-cdk/examples/go/google/generated/hashicorp/kubernetes/provider"
	"github.com/hashicorp/terraform-cdk/examples/go/google/generated/hashicorp/local/file"
	local "github.com/hashicorp/terraform-cdk/examples/go/google/generated/hashicorp/local/provider"
)

func NewMyStack(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)
	google.NewGoogleProvider(stack, jsii.String("google"), &google.GoogleProviderConfig{
		Zone:    jsii.String("us-west1"),
		Project: jsii.String("dschmidt-cdk-test"),
	})
	local.NewLocalProvider(stack, jsii.String("local"), &local.LocalProviderConfig{})

	sa := serviceaccount.NewServiceAccount(stack, jsii.String("sa"), &serviceaccount.ServiceAccountConfig{
		AccountId:   jsii.String("cluster-admin"),
		DisplayName: jsii.String("Cluster Admin"),
	})

	cluster := containercluster.NewContainerCluster(stack, jsii.String("cluster"), &containercluster.ContainerClusterConfig{
		Name:                  jsii.String("cluster"),
		RemoveDefaultNodePool: jsii.Bool(true),
		InitialNodeCount:      jsii.Number(1),
	})

	containernodepool.NewContainerNodePool(stack, jsii.String("main-pool"), &containernodepool.ContainerNodePoolConfig{
		Name:    jsii.String("main"),
		Cluster: cluster.Name(),
		NodeConfig: &containernodepool.ContainerNodePoolNodeConfig{
			MachineType:    jsii.String("e2-medium"),
			Preemptible:    jsii.Bool(true),
			ServiceAccount: sa.Email(),
			OauthScopes:    &[]*string{jsii.String("https://www.googleapis.com/auth/cloud-platform")},
		},
	})

	auth := gkeAuth.NewGkeAuth(stack, jsii.String("auth"), &gkeAuth.GkeAuthConfig{
		ClusterName: cluster.Name(),
		Location:    cluster.Location(),
		ProjectId:   cluster.Project(),
	})

	file.NewFile(stack, jsii.String("kubeconfig"), &file.FileConfig{
		Filename: jsii.String("kubeconfig.yaml"),
		Content:  auth.KubeconfigRawOutput(),
	})

	kubernetes.NewKubernetesProvider(stack, jsii.String("kubernetes"), &kubernetes.KubernetesProviderConfig{
		ClusterCaCertificate: auth.ClusterCaCertificateOutput(),
		Host:                 auth.HostOutput(),
		Token:                auth.TokenOutput(),
	})

	namespaceName := "development"
	namespace.NewNamespace(stack, jsii.String("namespace"), &namespace.NamespaceConfig{
		Metadata: &namespace.NamespaceMetadata{
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

	release.NewRelease(stack, jsii.String("cert-manager"), &release.ReleaseConfig{
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
