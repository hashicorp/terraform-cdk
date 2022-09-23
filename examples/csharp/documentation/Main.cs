// DOCS_BLOCK_START:assets,constructs
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;
// DOCS_BLOCK_END:assets,constructs
// DOCS_BLOCK_START:assets
using aws.Provider;
using aws.S3Bucket;
using aws.S3BucketObject;
// DOCS_BLOCK_END:assets
// DOCS_BLOCK_START:constructs
using kubernetes.Provider;
using MyConstructs;
// DOCS_BLOCK_END:constructs

// DOCS_BLOCK_START:assets,constructs
namespace MyCompany.MyApp
{
    class MyApp : TerraformStack
    {
        public MyApp(Construct scope, string name) : base(scope, name)
        {

            // DOCS_BLOCK_END:assets,constructs
            // DOCS_BLOCK_START:assets
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
            // DOCS_BLOCK_END:assets
            // DOCS_BLOCK_START:constructs
            new KubernetesProvider(this, "kind", new KubernetesProviderConfig {
                ConfigPath = Path.Join(Environment.CurrentDirectory, "../kubeconfig.yaml")
            });
            new KubernetesWebAppDeployment(this, "deployment", new Dictionary<string, object> {
                { "image", "nginx:latest" },
                { "replicas", 2 },
                { "app", "myapp" },
                { "component", "frontend" },
                { "environment", "dev" }
            });
            // DOCS_BLOCK_END:constructs
            // DOCS_BLOCK_START:assets,constructs
        }

        public static void Main(string[] args)
        {
            App app = new App();
            new MyApp(app, "demo");
            app.Synth();
            Console.WriteLine("App synth complete");
        }
    }
}
// DOCS_BLOCK_END:assets,constructs