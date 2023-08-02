module github.com/hashicorp/terraform-cdk/hcl2json

go 1.16

require (
	github.com/hashicorp/hcl/v2 v2.17.0
	github.com/tmccombs/hcl2json v0.5.0
	github.com/zclconf/go-cty v1.13.2
)

replace github.com/tmccombs/hcl2json v0.5.0 => github.com/cdktf/hcl2json v0.0.0-20230802082848-0832c8890775
