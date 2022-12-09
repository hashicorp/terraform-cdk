
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;
using aws.Provider;
using vpc;
using eks;

// const logRetention = new TerraformVariable(this, "logRetentionInDays", {
//   type: "number",
// });

// const vpc = new Vpc(this, vpcName, {
//   name: vpcName,
//   publicSubnets: ["10.0.1.0/24", "10.0.2.0/24"],
// });

// new Eks(this, "EksModule", {
//   clusterName: "my-kubernetes-cluster",
//   subnets: Token.asList(vpc.publicSubnetsOutput),
//   clusterLogRetentionInDays: logRetention.numberValue,
// });
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
            TerraformVariable logRetention = new TerraformVariable(this, "logRetentionInDays", new TerraformVariableConfig {
               Type = "number"
            });

            Vpc vpc = new Vpc(this, "vpc", new VpcConfig {
                Name = "vpc",
                PublicSubnets = new string[] {"10.0.1.0/24", "10.0.2.0/24"}
            });

            new Eks(this, "EksModule", new EksConfig {
                ClusterName = "my-kubernetes-cluster",
                Subnets = Token.AsList(vpc.PublicSubnetsOutput),
                ClusterLogRetentionInDays = logRetention.NumberValue
            });
            // DOCS_BLOCK_END:tokens
        }
    }
}
