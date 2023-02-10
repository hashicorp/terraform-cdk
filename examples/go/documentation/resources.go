// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

package main

// DOCS_BLOCK_START:resources-define
import (
	"fmt"

	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/dataawsregion"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/dynamodbtable"
	aws "github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/provider"

	// DOCS_BLOCK_END:resources-define
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/securitygroup"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/snstopic"
	// DOCS_BLOCK_START:resources-define
)

func NewResourcesStack(scope constructs.Construct, name string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &name)

	aws.NewAwsProvider(stack, jsii.String("aws"), &aws.AwsProviderConfig{
		Region: jsii.String("eu-central-1"),
	})

	region := dataawsregion.NewDataAwsRegion(stack, jsii.String("region"), &dataawsregion.DataAwsRegionConfig{})

	dynamodbtable.NewDynamodbTable(stack, jsii.String("first-table"), &dynamodbtable.DynamodbTableConfig{
		Name:    jsii.String(fmt.Sprintf("my-first-table-%s", *region.Name())),
		HashKey: jsii.String("id"),
		Attribute: []map[string]string{
			{"name": "id", "type": "S"},
		},
		BillingMode: jsii.String("PAY_PER_REQUEST"),
	})

	// DOCS_BLOCK_END:resources-define
	// DOCS_BLOCK_START:resources-escape-hatch
	tableName := "my-second-table"
	table := dynamodbtable.NewDynamodbTable(stack, jsii.String("second-table"), &dynamodbtable.DynamodbTableConfig{
		Name:    &tableName,
		HashKey: jsii.String("id"),
		Attribute: []map[string]string{
			{"name": "id", "type": "S"},
		},
	})
	table.AddOverride(jsii.String("provisioner"), []map[string]map[string]string{
		{"local-exec": {
			"command": fmt.Sprintf(
				"aws dynamodb create-backup --table-name %s --backup-name %s-backup",
				tableName,
				tableName,
			),
		}},
	})
	// DOCS_BLOCK_END:resources-escape-hatch

	// DOCS_BLOCK_START:resources-override-attribute
	topic := snstopic.NewSnsTopic(stack, jsii.String("Topic"), &snstopic.SnsTopicConfig{
		DisplayName: jsii.String("will-be-overwritten"),
	})
	topic.AddOverride(jsii.String("display_name"), jsii.String("my-topic"))
	// DOCS_BLOCK_END:resources-override-attribute

	// DOCS_BLOCK_START:resources-escape-hatch-dynamic-block
	portsList := cdktf.NewTerraformVariable(stack, jsii.String("ports"), &cdktf.TerraformVariableConfig{
		Type:    jsii.String("list"),
		Default: []int{22, 80, 443, 5432},
	})
	sg := securitygroup.NewSecurityGroup(stack, jsii.String("security1"), &securitygroup.SecurityGroupConfig{
		Name:  jsii.String("security1"),
		VpcId: jsii.String("vpcs"),
		Egress: &[]securitygroup.SecurityGroupEgress{
			{
				FromPort:   jsii.Number(0),
				ToPort:     jsii.Number(0),
				CidrBlocks: &[]*string{jsii.String("0.0.0.0/0")},
				Protocol:   jsii.String("-1"),
			},
		},
	})
	sg.AddOverride(jsii.String("dynamic.ingress"), &map[string]interface{}{
		"for_each": portsList.ListValue(),
		"content": &map[string]interface{}{
			"from_port":   "${ingress.value}",
			"to_port":     "${ingress.value}",
			"cidr_blocks": []string{"0.0.0.0/0"},
			"protocol":    "-1",
		},
	})
	// DOCS_BLOCK_END:resources-escape-hatch-dynamic-block

	// DOCS_BLOCK_START:resources-escape-loop-thru-ports
	ports := []float64{22, 80, 443, 5432}
	ingress := make([]securitygroup.SecurityGroupIngress, 0)
	for _, port := range ports {
		ingress = append(ingress, securitygroup.SecurityGroupIngress{
			FromPort:   jsii.Number(port),
			ToPort:     jsii.Number(port),
			CidrBlocks: &[]*string{jsii.String("0.0.0.0/0")},
			Protocol:   jsii.String("-1"),
		})
	}

	securitygroup.NewSecurityGroup(stack, jsii.String("security2"), &securitygroup.SecurityGroupConfig{
		Name:  jsii.String("security2"),
		VpcId: jsii.String("vpcs"),
		Egress: &[]securitygroup.SecurityGroupEgress{
			{
				FromPort:   jsii.Number(0),
				ToPort:     jsii.Number(0),
				CidrBlocks: &[]*string{jsii.String("0.0.0.0/0")},
				Protocol:   jsii.String("-1"),
			},
		},
		Ingress: &ingress,
	})
	// DOCS_BLOCK_END:resources-escape-loop-thru-ports

	// DOCS_BLOCK_START:resources-define

	return stack
}

// DOCS_BLOCK_END:resources-define
