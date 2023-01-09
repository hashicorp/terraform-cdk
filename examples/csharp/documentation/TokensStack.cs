
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;
using aws.Provider;
using vpc;
using eks;


namespace Examples
{
    class TokensStack : TerraformStack
    {
        public TokensStack(Construct scope, string name) : base(scope, name)
        {

            new AwsProvider(this, "aws", new AwsProviderConfig {
                Region = "eu-central-1"
            });
            // DOCS_BLOCK_START:tokens
            // Add this to your project's .csproj file:
            // <ItemGroup>
            //     <ProjectReference Include=".gen\vpc\vpc.csproj" />
            // </ItemGroup>
            // <ItemGroup>
            //     <ProjectReference Include=".gen\eks\eks.csproj" />
            // </ItemGroup>
            TerraformVariable clusterCreateTimeout = new TerraformVariable(this, "clusterCreateTimeout", new TerraformVariableConfig {
               Type = "number"
            });

            Vpc vpc = new Vpc(this, "vpc", new VpcOptions {
                Name = "vpc",
                PublicSubnets = new string[] {"10.0.1.0/24", "10.0.2.0/24"}
            });

            new Eks(this, "eks", new EksOptions {
                ClusterName = "my-kubernetes-cluster",
                Subnets = Token.AsList(vpc.PublicSubnetsOutput),
                VpcId = vpc.VpcIdOutput,
                ClusterCreateTimeout = clusterCreateTimeout.NumberValue
            });
            // DOCS_BLOCK_END:tokens
        }
    }
}
