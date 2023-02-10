// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

// DOCS_BLOCK_START:aspects-validation
package main

import (
	"strings"

	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
	aws "github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/provider"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/s3bucket"
)

type S3Bucket interface {
	GetBucketInput() *string
}

type ValidateS3IsPrefixedAspect struct {
	Prefix string
}

func (vpa ValidateS3IsPrefixedAspect) Visit(node constructs.IConstruct) {
	if bucket, ok := node.(s3bucket.S3Bucket); ok && strings.HasPrefix(*bucket.BucketInput(), vpa.Prefix) {
		cdktf.Annotations_Of(node).AddError(jsii.String("Each S3 Bucket name needs to start with " + vpa.Prefix))
	}
}

func NewValidateS3IsPrefixedAspect(prefix string) *ValidateS3IsPrefixedAspect {
	return &ValidateS3IsPrefixedAspect{Prefix: prefix}
}

func NewPrefixAspectsStack(scope constructs.Construct, name string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &name)

	aws.NewAwsProvider(stack, jsii.String("aws"), &aws.AwsProviderConfig{
		Region: jsii.String("us-east-1"),
	})

	s3bucket.NewS3Bucket(stack, jsii.String("bucket"), &s3bucket.S3BucketConfig{
		Bucket: jsii.String("myPrefixDemo"),
	})

	cdktf.Aspects_Of(stack).Add(NewValidateS3IsPrefixedAspect("myPrefix"))

	return stack
}

// DOCS_BLOCK_END:aspects-validation
