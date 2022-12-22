// DOCS_BLOCK_START:aspect-tagging
package main

import (
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
	aws "github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/provider"
	"github.com/hashicorp/terraform-cdk/examples/go/documentation/generated/hashicorp/aws/s3bucket"
	"golang.org/x/exp/maps"
)

type Taggable interface {
	TagsInput() *map[string]*string
	SetTags(val *map[string]*string)
}

type TagsAddingAspect struct {
	Tags *map[string]*string
}

func (taa TagsAddingAspect) Visit(node constructs.IConstruct) {
	if taggable, ok := node.(Taggable); ok {
		existing := *taggable.TagsInput()
		tags := *taa.Tags
		maps.Copy(existing, tags) // requires Go 1.18
		taggable.SetTags(&existing)
	}
}

func NewTagsAddingAspect(tags *map[string]*string) cdktf.IAspect {
	return TagsAddingAspect{Tags: tags}
}

func NewAspectsStack(scope constructs.Construct, name string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &name)

	aws.NewAwsProvider(stack, jsii.String("aws"), &aws.AwsProviderConfig{
		Region: jsii.String("us-east-1"),
	})

	s3bucket.NewS3Bucket(stack, jsii.String("bucket"), &s3bucket.S3BucketConfig{
		Bucket: jsii.String("demo"),
		Tags: &map[string]*string{
			"owner": jsii.String("cdktf"),
		},
	})

	cdktf.Aspects_Of(stack).Add(
		NewTagsAddingAspect(&map[string]*string{"createdBy": jsii.String("cdktf")}),
		// FIXME: this currently fails with an JSII error
	)

	return stack
}

// DOCS_BLOCK_END:aspect-tagging
