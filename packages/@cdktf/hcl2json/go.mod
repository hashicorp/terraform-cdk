module github.com/hashicorp/terraform-cdk/hcl2json

go 1.22

require (
	github.com/hashicorp/hcl/v2 v2.17.0
	github.com/tmccombs/hcl2json v0.5.0
	github.com/zclconf/go-cty v1.13.2
)

require (
	github.com/agext/levenshtein v1.2.3 // indirect
	github.com/apparentlymart/go-textseg/v13 v13.0.0 // indirect
	github.com/mitchellh/go-wordwrap v1.0.1 // indirect
	golang.org/x/text v0.7.0 // indirect
)

replace github.com/tmccombs/hcl2json v0.5.0 => github.com/cdktf/hcl2json v0.0.0-20230802082848-0832c8890775
