package main

// DOCS_BLOCK_START:modules-install,modules-local,modules-create
import (
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"

	// DOCS_BLOCK_END:modules-local
	aws "github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/provider"
	// DOCS_BLOCK_END:modules-create
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/terraform-aws-modules/aws/vpc"
	// DOCS_BLOCK_END:modules-install
	// DOCS_BLOCK_START:modules-create
	// This module can come from a registry or through a local / remote reference
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/my_local_module"
	// DOCS_BLOCK_START:modules-install,modules-local
)

func NewModulesStack(scope constructs.Construct, name string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &name)

	// DOCS_BLOCK_END:modules-local
	provider := aws.NewAwsProvider(stack, jsii.String("aws"), &aws.AwsProviderConfig{
		Region: jsii.String("us-west-2"),
	})

	// DOCS_BLOCK_END:modules-create
	vpc.NewVpc(stack, jsii.String("MyVpc"), &vpc.VpcConfig{
		Name:             jsii.String("my-vpc"),
		Cidr:             jsii.String("10.0.0.0/16"),
		Azs:              jsii.Strings("us-west-2a", "us-west-2b", "us-west-2c"),
		PrivateSubnets:   jsii.Strings("10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"),
		PublicSubnets:    jsii.Strings("10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"),
		EnableNatGateway: jsii.Bool(true),
	})
	// DOCS_BLOCK_END:modules-install
	// DOCS_BLOCK_START:modules-create
	// create a list with the AWS provider construct to pass to the module
	providers := append(make([]interface{}, 0), provider)

	cdktf.NewTerraformHclModule(stack, jsii.String("Vpc"), &cdktf.TerraformHclModuleConfig{
		Source: jsii.String("terraform-aws-modules/vpc/aws"),
		// Variables takes any input - please consult the docs of the module
		// to ensure the arguments are correct
		Variables: &map[string]interface{}{
			"name":               "my-vpc",
			"cidr":               "10.0.0.0/16",
			"azs":                []string{"us-west-2a", "us-west-2b", "us-west-2c"},
			"private_subnets":    []string{"10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"},
			"public_subnets":     []string{"10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"},
			"enable_nat_gateway": true,
		},
		Providers: &providers,
	})
	// DOCS_BLOCK_END:modules-create

	// DOCS_BLOCK_START:modules-local
	localModule := my_local_module.NewMyLocalModule(stack, jsii.String("local-module"), &my_local_module.MyLocalModuleConfig{
		IpAddress: jsii.String("127.0.0.1"),
	})

	cdktf.NewTerraformOutput(stack, jsii.String("dns-server"), &cdktf.TerraformOutputConfig{
		Value: localModule.DnsServerOutput(),
	})
	// DOCS_BLOCK_START:modules-install,modules-create

	return stack
}

// DOCS_BLOCK_END:modules-install,modules-local,modules-create
