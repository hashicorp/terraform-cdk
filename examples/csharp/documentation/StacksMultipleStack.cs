using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;
using aws.Provider;
using aws.Instance;


// import { Construct } from "constructs";
// import { App, TerraformStack } from "cdktf";
// import { AwsProvider } from "@cdktf/provider-aws/lib/aws-provider";
// import { Instance } from "@cdktf/provider-aws/lib/instance";

// interface MyMultiStackConfig {
//   environment: string;
//   region?: string;
// }

// class MyMultiStack extends TerraformStack {
//   constructor(scope: Construct, id: string, config: MyMultiStackConfig) {
//     super(scope, id);

//     const { region = "us-east-1" } = config;

//     new AwsProvider(this, "aws", {
//       region,
//     });

//     new Instance(this, "Hello", {
//       ami: "ami-2757f631",
//       instanceType: "t2.micro",
//       tags: {
//         environment: config.environment,
//       },
//     });
//   }
// }

// const multiStackApp = new App();
// new MyMultiStack(multiStackApp, "multiple-stacks-dev", {
//   environment: "dev",
// });
// new MyMultiStack(multiStackApp, "multiple-stacks-staging", {
//   environment: "staging",
// });
// new MyMultiStack(multiStackApp, "multiple-stacks-production-us", {
//   environment: "production",
//   region: "us-east-1",
// });
// new MyMultiStack(multiStackApp, "multiple-stacks-production-eu", {
//   environment: "production",
//   region: "eu-central-1",
// });
// multiStackApp.synth();
namespace Examples
{
    // DOCS_BLOCK_START:multiple-stacks
    public interface IMyMultiStackConfig
    {
        string Environment { get; set; }
        string Region { get; set; }
    }

    public class MyMultiStackConfig : IMyMultiStackConfig
    {
        public string Environment { get; set; }
        public string Region { get; set; } = "us-east-1";
    }

    class MyMultiStack : TerraformStack
    {
        public MyMultiStack(Construct scope, string name, IMyMultiStackConfig config) : base(scope, name)
        {

            new AwsProvider(this, "aws", new AwsProviderConfig {
                Region = config.Region,
            });

            new Instance(this, "instance", new InstanceConfig {
                Ami = "ami-2757f631",
                InstanceType = "t2.micro",
                Tags = new Dictionary<string, string> {
                    { "environment", config.Environment }
                }
            });
        }
        // DOCS_BLOCK_END:multiple-stacks

        /*
        // DOCS_BLOCK_START:multiple-stacks
        public static void Main(string[] args)
        {
            App app = new App();
            new MyMultiStack(app, "multiple-stacks-dev", new MyMultiStackConfig {
                Environment = "dev",
            });
            new MyMultiStack(app, "multiple-stacks-staging", new MyMultiStackConfig {
                Environment = "staging",
            });

            new MyMultiStack(app, "multiple-stacks-production-us", new MyMultiStackConfig {
                Environment = "production",
                Region = "us-east-1",
            });

            new MyMultiStack(app, "multiple-stacks-production-eu", new MyMultiStackConfig {
                Environment = "production",
                Region = "eu-central-1",
            });
            
            app.Synth();
            Console.WriteLine("App synth complete");
        }
        // DOCS_BLOCK_END:multiple-stacks
        */
        // DOCS_BLOCK_START:multiple-stacks
    }
    // DOCS_BLOCK_END:multiple-stacks
}