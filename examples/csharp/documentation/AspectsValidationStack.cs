// DOCS_BLOCK_START:aspect-validation
using System.Collections.Generic;
using Constructs;
using HashiCorp.Cdktf;
using aws.S3Bucket;
using aws.Provider;
using Amazon.JSII.Runtime;

namespace Examples
{
    public class ValidateS3IsPrefixed: Amazon.JSII.Runtime.Deputy.DeputyBase, IAspect
    {
        private readonly string prefix;

        public ValidateS3IsPrefixed(string prefix)
        {
            this.prefix = prefix;
        }

        public void Visit(IConstruct node)
        {
            if (node is S3Bucket bucket)
            {
                if (bucket.BucketInput != null && !bucket.BucketInput.StartsWith(this.prefix))
                {
                    Annotations.Of(node).AddError($"Each S3 Bucket name needs to start with {this.prefix}");
                }
            }
        }
    }

    class MyAspectsValidationStack : TerraformStack
    {
        public MyAspectsValidationStack(Construct scope, string name) : base(scope, name)
        {   
            new AwsProvider(this, "Aws", new AwsProviderConfig {
                Region = "us-east-1"
            });
            S3Bucket bucket = new S3Bucket(this, "bucket", new S3BucketConfig {
                Bucket = "myPrefixDemo"
            });

            Aspects.Of(this).Add(new ValidateS3IsPrefixed("myPrefix"));
        }
    }
}
// DOCS_BLOCK_END:aspect-validation