module github.com/hashicorp/terraform-cdk/examples/go/google

go 1.22

require github.com/aws/constructs-go/constructs/v10 v10.3.0

require (
	github.com/aws/jsii-runtime-go v1.102.0
	github.com/hashicorp/terraform-cdk-go/cdktf v0.0.0
)

require (
	github.com/Masterminds/semver/v3 v3.2.1 // indirect
	github.com/fatih/color v1.17.0 // indirect
	github.com/mattn/go-colorable v0.1.13 // indirect
	github.com/mattn/go-isatty v0.0.20 // indirect
	github.com/yuin/goldmark v1.4.13 // indirect
	golang.org/x/lint v0.0.0-20210508222113-6edffad5e616 // indirect
	golang.org/x/mod v0.19.0 // indirect
	golang.org/x/sync v0.7.0 // indirect
	golang.org/x/sys v0.22.0 // indirect
	golang.org/x/tools v0.23.0 // indirect
)

replace github.com/hashicorp/terraform-cdk-go/cdktf => ../../../packages/cdktf/dist/go/cdktf
