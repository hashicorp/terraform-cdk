package main

// DOCS_BLOCK_START:tokens
import (
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/terraform-aws-modules/aws/eks"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/terraform-aws-modules/aws/vpc"
)

func NewTokensStack(scope constructs.Construct, name string, vpcName string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &name)

	logRetention := cdktf.NewTerraformVariable(stack, jsii.String("logRetentionInDays"), &cdktf.TerraformVariableConfig{
		Type: jsii.String("number"),
	})

	vpc := vpc.NewVpc(stack, &vpcName, &vpc.VpcConfig{
		Name:          &vpcName,
		PublicSubnets: &[]*string{jsii.String("10.0.1.0/24"), jsii.String("10.0.2.0/24")},
	})

	eks.NewEks(stack, jsii.String("EksModule"), &eks.EksConfig{
		ClusterName:                       jsii.String("my-kubernetes-cluster"),
		SubnetIds:                         cdktf.Token_AsList(vpc.PublicSubnetsOutput(), nil),
		CloudwatchLogGroupRetentionInDays: logRetention.NumberValue(),
	})

	return stack
}

// DOCS_BLOCK_END:tokens
