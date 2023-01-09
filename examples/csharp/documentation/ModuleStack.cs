// DOCS_BLOCK_START:modules-install-modules
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;
using vpc;

namespace Examples
{
    class ModuleStack : TerraformStack
    {
        public ModuleStack(Construct scope, string name) : base(scope, name)
        {
            // Add this to your project's .csproj file:
            // <ItemGroup>
            //     <ProjectReference Include=".gen\vpc\vpc.csproj" />
            // </ItemGroup>
            new Vpc(this, "vpc", new VpcOptions {
                Name = "my-vpc",
                Cidr = "10.0.0.0/16",
                Azs = new [] { "us-west-2a", "us-west-2b", "us-west-2c" },
                PrivateSubnets = new [] { "10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24" },
                PublicSubnets = new [] { "10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24" },
                EnableNatGateway = true
            });
        }
    }
}
// DOCS_BLOCK_END:modules-install-modules

