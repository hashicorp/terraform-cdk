module github.com/hashicorp/terraform-cdk/examples/go/google-cloudrun

go 1.16

require github.com/aws/constructs-go/constructs/v10 v10.1.94

require (
	github.com/aws/jsii-runtime-go v1.67.0
	github.com/hashicorp/cdktf-provider-google-go/google v0.0.0
	github.com/hashicorp/terraform-cdk-go/cdktf v0.12.0
)

replace github.com/hashicorp/terraform-cdk-go/cdktf => ../../../packages/cdktf/dist/go/cdktf
