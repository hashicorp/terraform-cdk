
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
    class IteratorStack : TerraformStack
    {
        public IteratorStack(Construct scope, string name) : base(scope, name)
        {
            new AwsProvider(this, "aws", new AwsProviderConfig {
                Region = "eu-central-1"
            });

            // DOCS_BLOCK_START:iterators-define-iterators
            TerraformVariable list = new TerraformVariable(this, "list", new TerraformVariableConfig {
                Type = "list(string)"
            });
            
            ListTerraformIterator iterator = ListTerraformIterator.FromList(list.ListValue);
            S3Bucket s3Bucket = new S3Bucket(this, "bucket", new S3BucketConfig {
                ForEach = iterator,
                Bucket = Token.AsString(iterator.Value)
            });
            // DOCS_BLOCK_END:iterators-define-iterators


            // DOCS_BLOCK_START:iterators-iterators-complex-types
            // We need a local to be able to pass the list to the iterator
            TerraformLocal listLocal = new TerraformLocal(this, "listLocal",  new [] {
                new Dictionary<string, object> {
                    { "name", "website-static-files" },
                    { "tags", new Dictionary<string, string> {
                        { "app", "website" }
                    }}
                },
                new Dictionary<string, object> {
                    { "name", "images" },
                    { "tags", new Dictionary<string, string> {
                        { "app", "image-converter" }
                    }}
                }
            });
            ListTerraformIterator listIterator = ListTerraformIterator.FromList(listLocal.AsList);
            new S3Bucket(this, "listBucket", new S3BucketConfig {
                ForEach = listIterator,
                Bucket = listIterator.GetString("name"),
                Tags = listIterator.GetStringMap("tags")
            });
            // DOCS_BLOCK_END:iterators-iterators-complex-types
        }
    }
}
