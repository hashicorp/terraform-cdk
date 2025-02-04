module github.com/hashicorp/terraform-cdk/examples/go/documentation

go 1.18

require (
	github.com/aws/constructs-go/constructs/v10 v10.1.167
	github.com/aws/jsii-runtime-go v1.71.0
	github.com/hashicorp/terraform-cdk-go/cdktf v0.0.0
	golang.org/x/exp v0.0.0-20221217163422-3c43f8badb15
)

require (
	github.com/Masterminds/semver/v3 v3.1.1 // indirect
	github.com/aws/constructs-go/constructs/v3 v3.3.75 // indirect
	github.com/mattn/go-isatty v0.0.16 // indirect
	github.com/yuin/goldmark v1.4.13 // indirect
	golang.org/x/lint v0.0.0-20210508222113-6edffad5e616 // indirect
	golang.org/x/mod v0.6.0 // indirect
	golang.org/x/sys v0.1.0 // indirect
	golang.org/x/tools v0.2.0 // indirect
)

// only required when running example against terraform-cdk repo locally
// replace github.com/hashicorp/terraform-cdk-go/cdktf => ../../../packages/cdktf/dist/go/cdktf
