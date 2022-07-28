module github.com/hashicorp/terraform-cdk/examples/go/google

go 1.16

require github.com/aws/constructs-go/constructs/v10 v10.0.5

require (
	github.com/aws/jsii-runtime-go v1.29.0
	github.com/hashicorp/terraform-cdk-go/cdktf v0.0.0
)

replace github.com/hashicorp/terraform-cdk-go/cdktf => ../../../packages/cdktf/dist/go/cdktf
