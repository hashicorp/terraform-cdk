// DOCS_BLOCK_START:providers-import-classes
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;
using aws.Provider;
using aws.Instance;
using dnsimple.Provider;
using dnsimple.Record;


namespace Examples
{
    class ProviderClassesStack : TerraformStack
    {
        public ProviderClassesStack(Construct scope, string name) : base(scope, name)
        {
            // Add this to your project's .csproj file:
            // <ItemGroup>
            //     <ProjectReference Include=".gen\aws\aws.csproj" />
            // </ItemGroup>
            // <ItemGroup>
            //     <ProjectReference Include=".gen\dnsimple\dnsimple.csproj" />
            // </ItemGroup>

            new AwsProvider(this, "aws", new AwsProviderConfig {
                Region = "eu-east-1"
            });

            Instance instance = new Instance(this, "instance", new InstanceConfig {
                Ami = "ami-2757f631",
                InstanceType = "t2.micro"
            });

            new DnsimpleProvider(this, "dnsimple", new DnsimpleProviderConfig {
                Token = Token.AsString(Environment.GetEnvironmentVariable("DNSIMPLE_TOKEN")),
                Account = Token.AsString(Environment.GetEnvironmentVariable("DNSIMPLE_ACCOUNT"))
            });

            new Record(this, "web-www", new RecordConfig {
                Domain = "example.com",
                Name = "web",
                Value = instance.PublicIp,
                Type = "A"
            });
        }
    }
}
// DOCS_BLOCK_END:providers-import-classes