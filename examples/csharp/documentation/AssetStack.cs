// DOCS_BLOCK_START:assets
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;
using aws.Provider;
using aws.S3Bucket;
using aws.S3BucketObject;

namespace Examples
{
    class MyAssetStack : TerraformStack
    {
        public MyAssetStack(Construct scope, string name) : base(scope, name)
        {

            new AwsProvider(this, "aws", new AwsProviderConfig {
                Region = "eu-central-1"
            });

            S3Bucket bucket = new S3Bucket(this, "bucket", new S3BucketConfig {
                Bucket = "demo"
            });

            TerraformAsset asset = new TerraformAsset(this, "lambda-asset", new TerraformAssetConfig {
                Path = Path.Join(Environment.CurrentDirectory, "lambda"),
                Type = AssetType.ARCHIVE
            });

            new S3BucketObject(this, "lambda-archive", new S3BucketObjectConfig {
                Bucket = bucket.Bucket,
                Key = asset.FileName,
                Source = asset.Path
            });
        }
    }
}
// DOCS_BLOCK_END:assets