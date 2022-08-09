using System;
using System.Collections.Generic;
using System.Linq;
using aws;
using aws.S3;
using kubernetes;
using Constructs;
using HashiCorp.Cdktf;
using MyConstructs;

namespace MyCompany.MyApp
{
    class MyApp : TerraformStack
    {
        public MyApp(Construct scope, string id) : base(scope, id)
        {
            new AwsProvider(this, "aws", new AwsProviderConfig {
                Region = "eu-central-1"
            });

            // concepts/assets.mdx
            S3Bucket bucket = new S3Bucket(this, "bucket", new S3BucketConfig {
                Bucket = "demo"
            });

            TerraformAsset asset = new TerraformAsset(this, "lambda-asset", new TerraformAssetConfig {
                Path = Resolve(__dirname, "../lambda"),
                Type = AssetType.ARCHIVE
            });

            new S3BucketObject(this, "lambda-archive", new S3BucketObjectConfig {
                Bucket = bucket.Bucket,
                Key = asset.FileName,
                Source = asset.Path
            });

            // concepts/constructs.mdx
            new KubernetesProvider(this, "kind", new KubernetesProviderConfig {
                ConfigPath = Join(Environment.CurrentDirectory, "../kubeconfig.yaml")
            });
            new KubernetesWebAppDeployment(this, "deployment", new Dictionary<string, object> {
                { "image", "nginx:latest" },
                { "replicas", 2 },
                { "app", "myapp" },
                { "component", "frontend" },
                { "environment", "dev" }
            });
        }

        public static void Main(string[] args)
        {
            App app = new App();
            new MyApp(app, "csharp-documentation");
            app.Synth();
            Console.WriteLine("App synth complete");
        }
    }
}