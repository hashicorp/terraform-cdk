module github.com/hashicorp/terraform-cdk/examples/go/aws

go 1.16

require (
	github.com/aws/constructs-go/constructs/v3 v3.3.75
	github.com/aws/jsii-runtime-go v1.29.0
	github.com/hashicorp/terraform-cdk-go/cdktf v0.0.0
	github.com/hashicorp/terraform-cdk-provider-hashicorp-aws-go/aws v0.0.0
)

// use for local testing
// replace github.com/hashicorp/terraform-cdk-go/cdktf => ../../../packages/cdktf/dist/go/cdktf

replace github.com/hashicorp/terraform-cdk-provider-hashicorp-aws-go/aws => ./.gen/hashicorp/aws
