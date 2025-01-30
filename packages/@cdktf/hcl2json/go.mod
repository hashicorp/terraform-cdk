module github.com/hashicorp/terraform-cdk/hcl2json

go 1.22.0

toolchain go1.23.4 // This is because of tmccombs/hcl2json

require (
	github.com/hashicorp/hcl/v2 v2.23.0
	github.com/tmccombs/hcl2json v0.6.5
	github.com/zclconf/go-cty v1.15.1
)

require (
	github.com/agext/levenshtein v1.2.3 // indirect
	github.com/apparentlymart/go-textseg/v15 v15.0.0 // indirect
	github.com/mitchellh/go-wordwrap v1.0.1 // indirect
	golang.org/x/mod v0.22.0 // indirect
	golang.org/x/sync v0.10.0 // indirect
	golang.org/x/text v0.21.0 // indirect
	golang.org/x/tools v0.28.0 // indirect
)
