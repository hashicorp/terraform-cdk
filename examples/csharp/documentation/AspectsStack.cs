// DOCS_BLOCK_START:aspect-tagging
using System.Collections.Generic;
using Constructs;
using HashiCorp.Cdktf;
using aws.S3Bucket;
using aws.Provider;
using Amazon.JSII.Runtime;

namespace Examples
{
    public class TagsAddingAspect: Amazon.JSII.Runtime.Deputy.DeputyBase, IAspect
    {
        private readonly IDictionary<string, string> tagsToAdd;

        public TagsAddingAspect(IDictionary<string, string> tagsToAdd)
        {
            this.tagsToAdd = tagsToAdd;
        }

        public void Visit(IConstruct node)
        {
            var nodeType = node.GetType();
            var tagsProperty = nodeType.GetProperty("Tags");
            var tagsInputProperty = nodeType.GetProperty("TagsInput");
            if (tagsProperty != null && tagsInputProperty != null)
            {
                var inputTags = (IDictionary<string, string>) tagsInputProperty.GetValue(node);

                IDictionary<string, string> newTags;
                if (inputTags == null)
                {
                    newTags = tagsToAdd;
                }
                else
                {
                    newTags = new Dictionary<string, string>(tagsToAdd);
                    foreach ((string key, string value) in inputTags)
                    {
                        newTags[key] = value;
                    }
                }
                
                tagsProperty.SetValue(node, newTags);
            }
        }
    }

    class MyAspectsStack : TerraformStack
    {
        public MyAspectsStack(Construct scope, string name) : base(scope, name)
        {   
            new AwsProvider(this, "Aws", new AwsProviderConfig {
                Region = "us-east-1"
            });
            S3Bucket bucket = new S3Bucket(this, "bucket", new S3BucketConfig {
                Bucket = "demo"
            });

            Aspects.Of(this).Add(new TagsAddingAspect(new Dictionary<string, string> {
                { "createdBy", "cdktf" }
            }));
        }
    }
}
// DOCS_BLOCK_END:aspect-tagging