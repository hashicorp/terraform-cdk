package main

// DOCS_BLOCK_START:providers-import-providers,providers-import-classes
import (
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"

	// DOCS_BLOCK_END:providers-import-providers
	dnsimple "github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/dnsimple/dnsimple/provider"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/dnsimple/dnsimple/record"

	// DOCS_BLOCK_START:providers-import-providers
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/instance"
	aws "github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/provider"
)

func NewProvidersStack(scope constructs.Construct, name string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &name)

	aws.NewAwsProvider(stack, jsii.String("aws"), &aws.AwsProviderConfig{
		Region: jsii.String(("us-east-1")),
	})

	instance := instance.NewInstance(stack, jsii.String("hello"), &instance.InstanceConfig{
		Ami:          jsii.String("ami-2757f631"),
		InstanceType: jsii.String("t2.micro"),
	})
	// DOCS_BLOCK_END:providers-import-providers

	dnsimpleToken := cdktf.NewTerraformVariable(stack, jsii.String("dnsimpleToken"), &cdktf.TerraformVariableConfig{
		Type:        jsii.String("string"),
		Description: jsii.String("dnsimple token"),
		Sensitive:   jsii.Bool(true),
	})

	dnsimpleAccount := cdktf.NewTerraformVariable(stack, jsii.String("dnsimpleAccount"), &cdktf.TerraformVariableConfig{
		Type:        jsii.String("string"),
		Description: jsii.String("dnsimple account"),
		Sensitive:   jsii.Bool(true),
	})

	dnsimple.NewDnsimpleProvider(stack, jsii.String("dnsimple"), &dnsimple.DnsimpleProviderConfig{
		Token:   dnsimpleToken.StringValue(),
		Account: dnsimpleAccount.StringValue(),
	})

	record.NewRecord(stack, jsii.String("web-www"), &record.RecordConfig{
		Domain: jsii.String("example.com"),
		Name:   jsii.String("web"),
		Value:  instance.PublicIp(),
		Type:   jsii.String("A"),
	})

	// DOCS_BLOCK_START:providers-import-providers
	return stack
}

// DOCS_BLOCK_END:providers-import-providers,providers-import-classes
