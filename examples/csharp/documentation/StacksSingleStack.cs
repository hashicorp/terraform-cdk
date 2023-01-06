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
    // DOCS_BLOCK_START:single-stack
    class MySingleStack : TerraformStack
    {
        public MySingleStack(Construct scope, string name) : base(scope, name)
        {

            new AwsProvider(this, "aws", new AwsProviderConfig {
                Region = "eu-central-1"
            });

            new Instance(this, "instance", new InstanceConfig {
                Ami = "ami-2757f631",
                InstanceType = "t2.micro",
            });
        }
        // DOCS_BLOCK_END:single-stack

        /*
        // DOCS_BLOCK_START:single-stack
        public static void Main(string[] args)
        {
            App app = new App();
            new MySingleStack(app, "a-single-stack");
            
            app.Synth();
            Console.WriteLine("App synth complete");
        }
        // DOCS_BLOCK_END:single-stack
        */
        // DOCS_BLOCK_START:single-stack
    }
    // DOCS_BLOCK_END:single-stack
}