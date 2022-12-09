// DOCS_BLOCK_START:modules-create-modules
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;
using aws.Provider;

namespace Examples
{
    class TerraformHclModuleStack : TerraformStack
    {
        public TerraformHclModuleStack(Construct scope, string name) : base(scope, name)
        {
            AwsProvider provider = new AwsProvider(this, "aws", new AwsProviderConfig {
                Region = "eu-east-1"
            });
            
            new TerraformHclModule(this, "vpc", new TerraformHclModuleOptions {
                Source = "terraform-aws-modules/vpc/aws",
                Variables = new Dictionary<string, object> {
                    { "name", "my-vpc" },
                    { "cidr", "10.0.0.0/16" },
                    { "azs", new [] { "us-west-2a", "us-west-2b", "us-west-2c" } },
                    { "privateSubnets", new [] { "10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24" } },
                    { "publicSubnets", new [] { "10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24" } },
                    { "enableNatGateway", true }
                },
                Providers = new [] { provider }
            });
        }
    }
}
// DOCS_BLOCK_END:modules-create-modules

