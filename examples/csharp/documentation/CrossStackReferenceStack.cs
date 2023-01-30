using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;
using aws.Provider;
using aws.Instance;

namespace Examples
{
    // DOCS_BLOCK_START:cross-stack-reference

    public interface IVpcStackConfig
    {
        string Region { get; set; }
    }

    public class VpcStackConfig : IVpcStackConfig
    {
        public string Region { get; set; } = "us-east-1";
    }

    class VpcStack : TerraformStack
    {
        public VpcStack(Construct scope, string name, IVpcStackConfig config) : base(scope, name)
        {

            new AwsProvider(this, "aws", new AwsProviderConfig {
                Region = config.Region,
            });

            Vpc = new Vpc(this, "vpc", new Dictionary<string, string> { });
        }

        public Vpc Vpc { get; }
    }

    public interface IBackendStackConfig
    {
        string DockerImage { get; set; }
        string Region { get; set; }
        string VpcId { get; set; }
    }

    public class BackendStackConfig : IBackendStackConfig
    {
        public string DockerImage { get; set; }
        public string Region { get; set; } = "us-east-1";
        public string VpcId { get; set; }
    }

    class BackendStack : TerraformStack
    {
        public BackendStack(Construct scope, string name, IBackendStackConfig config) : base(scope, name)
        {

            new AwsProvider(this, "aws", new AwsProviderConfig {
                Region = config.Region,
            });

            new DockerBackend(this, "docker-backend", new Dictionary<string, string> {
                { "vpc_id", config.VpcId },
                { "docker_image", config.DockerImage },
            });
        }
        // DOCS_BLOCK_END:cross-stack-reference

        /*
        // DOCS_BLOCK_START:cross-stack-reference
        public static void Main(string[] args)
        {
            App app = new App();
            
            VpcStack origin = new VpcStack(app, "origin-stack", new VpcStackConfig {
                Region = "us-east-1",
            });
            new BackendStack(app, "target-stack", new BackendStackConfig {
                Region = origin.Region,
                VpcId = origin.Id,
                DockerImage = "org/my-image:latest",
            });

            app.Synth();
            Console.WriteLine("App synth complete");
        }
        // DOCS_BLOCK_END:cross-stack-reference
        */
        // DOCS_BLOCK_START:cross-stack-reference
    }
    // DOCS_BLOCK_END:cross-stack-reference
}