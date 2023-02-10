// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

package main

import (
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
	aws "github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/provider"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/s3bucket"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/integrations/github/datagithuborganization"
	github "github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/integrations/github/provider"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/integrations/github/team"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/integrations/github/teammembers"
)

func NewIteratorsStack(scope constructs.Construct, name string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &name)

	aws.NewAwsProvider(stack, jsii.String("aws"), &aws.AwsProviderConfig{
		Region: jsii.String("us-west-2"),
	})

	// DOCS_BLOCK_START:iterators
	list := cdktf.NewTerraformVariable(stack, jsii.String("list"), &cdktf.TerraformVariableConfig{
		Type: cdktf.VariableType_LIST_STRING(),
	})

	simpleIterator := cdktf.TerraformIterator_FromList(list.ListValue())

	s3bucket.NewS3Bucket(stack, jsii.String("iterator-bucket"), &s3bucket.S3BucketConfig{
		ForEach: simpleIterator,
		Bucket:  cdktf.Token_AsString(simpleIterator.Value(), nil),
	})
	// DOCS_BLOCK_END:iterators

	// DOCS_BLOCK_START:iterators-complex-types
	complexList := cdktf.NewTerraformLocal(stack, jsii.String("complex-list-local"), []map[string]interface{}{
		{
			"name": "website-static-files",
			"tags": map[string]string{"app": "website"},
		},
		{
			"name": "images",
			"tags": map[string]string{"app": "image-converter"},
		},
	})

	complexIterator := cdktf.TerraformIterator_FromList(complexList.Expression())

	s3bucket.NewS3Bucket(stack, jsii.String("complex-iterator-bucket"), &s3bucket.S3BucketConfig{
		ForEach: complexIterator,
		Bucket:  complexIterator.GetString(jsii.String("name")),
		Tags:    complexIterator.GetStringMap(jsii.String("tags")),
	})
	// DOCS_BLOCK_END:iterators-complex-types

	// DOCS_BLOCK_START:iterators-list-attributes
	orgName := "my-org"

	github.NewGithubProvider(stack, jsii.String("github"), &github.GithubProviderConfig{
		Organization: &orgName,
	})

	team := team.NewTeam(stack, jsii.String("core-team"), &team.TeamConfig{
		Name: jsii.String("core"),
	})

	orgMembers := datagithuborganization.NewDataGithubOrganization(stack, jsii.String("org"), &datagithuborganization.DataGithubOrganizationConfig{
		Name: &orgName,
	})

	orgMemberIterator := cdktf.TerraformIterator_FromList(orgMembers.Members())

	teammembers.NewTeamMembers(stack, jsii.String("members"), &teammembers.TeamMembersConfig{
		TeamId: team.Id(),
		Members: orgMemberIterator.Dynamic(&map[string]interface{}{
			"username": orgMemberIterator.Value(),
			"role":     jsii.String("maintainer"),
		}),
	})
	// DOCS_BLOCK_END:iterators-list-attributes

	return stack
}
