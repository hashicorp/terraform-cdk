module github.com/hashicorp/terraform-cdk/examples/go/docker

go 1.16

require (
	github.com/aws/constructs-go/constructs/v10 v10.0.5
	github.com/aws/jsii-runtime-go v1.29.0
	github.com/hashicorp/terraform-cdk-go/cdktf v0.0.0
)

// only required when running example against terraform-cdk repo locally
replace github.com/hashicorp/terraform-cdk-go/cdktf => ../../../packages/cdktf/dist/go/cdktf
