// DOCS_BLOCK_START:providers-import-providers
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
    class ProviderStack : TerraformStack
    {
        public ProviderStack(Construct scope, string name) : base(scope, name)
        {
            // Add this to your project's .csproj file:
            // <ItemGroup>
            //     <ProjectReference Include=".gen\aws\aws.csproj" />
            // </ItemGroup>

            new AwsProvider(this, "aws", new AwsProviderConfig {
                Region = "eu-central-1"
            });

            new Instance(this, "instance", new InstanceConfig {
                Ami = "ami-2757f631",
                InstanceType = "t2.micro"
            });
        }
    }
}
// DOCS_BLOCK_END:providers-import-providers