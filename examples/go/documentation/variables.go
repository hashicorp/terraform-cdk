package main

import (
	"fmt"

	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/eksnodegroup"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/instance"
	aws "github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/provider"
)

func NewVariablesStack(scope constructs.Construct, name string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &name)

	aws.NewAwsProvider(stack, jsii.String("aws"), &aws.AwsProviderConfig{
		Region: jsii.String("eu-central-1"),
	})

	// DOCS_BLOCK_START:variables
	imageId := cdktf.NewTerraformVariable(stack, jsii.String("imageId"), &cdktf.TerraformVariableConfig{
		Type:        jsii.String("string"),
		Default:     jsii.String("ami-abcde123"),
		Description: jsii.String("What AMI to use to create an instance"),
	})
	instance.NewInstance(stack, jsii.String("hello"), &instance.InstanceConfig{
		Ami:          imageId.StringValue(),
		InstanceType: jsii.String("t2.micro"),
	})
	// DOCS_BLOCK_END:variables

	// DOCS_BLOCK_START:variables-complex
	nodeGroupConfig := cdktf.NewTerraformVariable(stack, jsii.String("node-group-config"), &cdktf.TerraformVariableConfig{
		Type: cdktf.VariableType_Object(&map[string]*string{
			"node_group_name": cdktf.VariableType_STRING(),
			"instance_types":  cdktf.VariableType_List(cdktf.VariableType_STRING()),
			"min_size":        cdktf.VariableType_NUMBER(),
			"desired_size":    cdktf.VariableType_NUMBER(),
			"max_size":        cdktf.VariableType_NUMBER(),
		}),
		Nullable:    jsii.Bool(false),
		Description: jsii.String("Node group configuration"),
	})

	eksnodegroup.NewEksNodeGroup(stack, jsii.String("node-group"), &eksnodegroup.EksNodeGroupConfig{
		ClusterName:   jsii.String("my-cluster"),
		NodeRoleArn:   jsii.String("arn:::::dummy"),
		SubnetIds:     jsii.Strings("id-1234"),
		NodeGroupName: jsii.String(fmt.Sprintf("${%s.node_group_name}", *nodeGroupConfig.Fqn())),
		InstanceTypes: cdktf.Token_AsList(fmt.Sprintf("${%s.instance_types}", *nodeGroupConfig.Fqn()), &cdktf.EncodingOptions{}),
		ScalingConfig: &eksnodegroup.EksNodeGroupScalingConfig{
			DesiredSize: cdktf.Token_AsNumber(fmt.Sprintf("${%s.desired_size}", *nodeGroupConfig.Fqn())),
			MinSize:     cdktf.Token_AsNumber(fmt.Sprintf("${%s.min_size}", *nodeGroupConfig.Fqn())),
			MaxSize:     cdktf.Token_AsNumber(fmt.Sprintf("${%s.max_size}", *nodeGroupConfig.Fqn())),
		},
	})
	// DOCS_BLOCK_END:variables-complex

	// DOCS_BLOCK_START:locals
	commonTags := cdktf.NewTerraformLocal(stack, jsii.String("common_tags"), map[string]string{
		"Service": "service_name",
		"Owner":   "owner",
	})
	instance.NewInstance(stack, jsii.String("example"), &instance.InstanceConfig{
		Ami:          jsii.String("ami-abcde123"),
		InstanceType: jsii.String("t2.micro"),
		Tags:         commonTags.AsStringMap(),
	})
	// DOCS_BLOCK_END:locals

	return stack
}
