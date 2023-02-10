// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

package main

import (
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"

	"github.com/hashicorp/terraform-cdk-go/cdktf"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/kubernetes/deployment"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/kubernetes/namespace"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/kubernetes/provider"
)

func NewResourcesReferencesStack(scope constructs.Construct, name string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &name)

	provider.NewKubernetesProvider(stack, jsii.String("kubernetes"), &provider.KubernetesProviderConfig{})

	// DOCS_BLOCK_START:resources-references
	exampleNamespace := namespace.NewNamespace(stack, jsii.String("tf-cdk-example"), &namespace.NamespaceConfig{
		Metadata: &namespace.NamespaceMetadata{
			Name: jsii.String("tf-cdk-example"),
		},
	})

	deployment.NewDeployment(stack, jsii.String("nginx-deployment"), &deployment.DeploymentConfig{
		Metadata: &deployment.DeploymentMetadata{
			Name:      jsii.String("nginx"),
			Namespace: exampleNamespace.Metadata().Name(), // Reference the name property
			Labels: &map[string]*string{
				"app": jsii.String("my-app"),
			},
		},
		Spec: &deployment.DeploymentSpec{
			Template: &deployment.DeploymentSpecTemplate{
				Metadata: &deployment.DeploymentSpecTemplateMetadata{
					Labels: &map[string]*string{
						"app": jsii.String("my-app"),
					},
				},
				Spec: &deployment.DeploymentSpecTemplateSpec{
					Container: []deployment.DeploymentSpecTemplateSpecContainer{
						{
							Name:  jsii.String("nginx"),
							Image: jsii.String("nginx:1.7.9"),
						},
					},
				},
			},
		},
	})
	// DOCS_BLOCK_END:resources-references

	return stack
}
