// DOCS_BLOCK_START:aspect
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;
using aws.S3Bucket;


namespace Examples
{
    class TagsAddingAspect : IAspect {
        Dictionary<string, string> tagsToAdd;
        public TagsAddingAspect(Dictionary<string, string> tagsToAdd) {
            this.tagsToAdd = tagsToAdd;
        }

        // This method is called on every Construct within the specified scope (resources, data sources, etc.).
        public void Visit(IConstruct node) {
            if ((node.GetType().GetProperty("tags") != null) && (node.GetType()GetProperty("tagsInput") != null)) {
                // We need to take the input value to not create a circular reference
                node.tagsInput = node.tagsInput.Concat(this.tagsToAdd).ToDictionary(kvp => kvp.Key, kvp => kvp.Value);
            }
        }
    }


    class MyAspectsStack : TerraformStack
    {
        public MyAspectsStack(Construct scope, string name) : base(scope, name)
        {   
            S3Bucket bucket = new S3Bucket(this, "bucket", new S3BucketConfig {
                Bucket = "demo"
            });

            Aspects.Of(this).Add(new TagsAddingAspect(new Dictionary<string, string> {
                { "createdBy", "cdktf" }
            }));
        }
    }
}
// DOCS_BLOCK_END:aspect