module github.com/hashicorp/terraform-cdk/examples/go/documentation

go 1.18

require (
	github.com/aws/constructs-go/constructs/v10 v10.1.167
	github.com/aws/jsii-runtime-go v1.71.0
	github.com/hashicorp/terraform-cdk-go/cdktf v0.0.0
	golang.org/x/exp v0.0.0-20221217163422-3c43f8badb15 // indirect
)

// only required when running example against terraform-cdk repo locally
// replace github.com/hashicorp/terraform-cdk-go/cdktf => ../../../packages/cdktf/dist/go/cdktf
