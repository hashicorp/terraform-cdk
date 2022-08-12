module github.com/hashicorp/terraform-cdk/examples/go/documentation

go 1.16

require (
	github.com/aws/constructs-go/constructs/v10 v10.1.70
	github.com/aws/jsii-runtime-go v1.63.2
	github.com/hashicorp/terraform-cdk-go/cdktf v0.0.0
)

// only required when running example against terraform-cdk repo locally
replace github.com/hashicorp/terraform-cdk-go/cdktf => ../../../packages/cdktf/dist/go/cdktf
