// DOCS_BLOCK_START:modules-examples
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;
using my_local_module;


namespace Examples
{
    class LocalModuleStack : TerraformStack
    {
        public LocalModuleStack(Construct scope, string name) : base(scope, name)
        {
            // Add this to your project's .csproj file:
            // <ItemGroup>
            //     <ProjectReference Include=".gen\my_local_module\my_local_module.csproj" />
            // </ItemGroup>
            MyLocalModule localModule = new MyLocalModule(this, "local-module", new MyLocalModuleOptions {
                IpAddress = "127.0.0.1",
            });

            new TerraformOutput(this, "dns-server", new TerraformOutputConfig {
                Value = localModule.DnsServerOutput
            });
            
        }
    }
}
// DOCS_BLOCK_END:modules-examples

