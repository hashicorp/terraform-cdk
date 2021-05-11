module github.com/hashicorp/terraform-cdk/examples/go/docker

go 1.16

require (
	github.com/aws/constructs-go/constructs/v3 v3.3.75
	github.com/aws/jsii-runtime-go v1.29.0
	github.com/hashicorp/terraform-cdk-go/cdktf v0.0.0
	github.com/hashicorp/terraform-cdk-provider-kreuzwerker-docker-go/docker v0.0.0
)

replace github.com/hashicorp/terraform-cdk-go/cdktf => ../../../packages/cdktf/dist/go/cdktf

replace github.com/hashicorp/terraform-cdk-provider-kreuzwerker-docker-go/docker => ./.gen/kreuzwerker/docker
