// DOCS_BLOCK_START:constructs-scope
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;
using aws.Provider;
using aws.S3Bucket;

namespace Examples
{

    class PublicS3Bucket : Construct {
        public S3Bucket bucket;
        public PublicS3Bucket(Construct scope, string name) : base(scope, name) {
            // This bucket is in a different scope than the buckets
            // defined in `MyStack`. Therefore, it does not need a unique name.
            this.bucket = new S3Bucket(this, "bucket", new S3BucketConfig {
                BucketPrefix = name,
                Website = new S3BucketWebsite {
                    IndexDocument = "index.html",
                    ErrorDocument = "5xx.html"
                }
            });
        }
    }

    class ConstructsScopeStack : TerraformStack
    {
        public ConstructsScopeStack(Construct scope, string name) : base(scope, name)
        {
            new AwsProvider(this, "Aws", new AwsProviderConfig {
                Region = "us-east-1"
            });

            // Both buckets are inside of the same stack, meaning they share
            // the same scope. Therefore, their names must be unique.
            new PublicS3Bucket(this, "first-bucket");
            new PublicS3Bucket(this, "second-bucket");
        }
    }
}
// DOCS_BLOCK_END:constructs-scope