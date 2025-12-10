// Copyright IBM Corp. 2019, 2025
// SPDX-License-Identifier: MPL-2.0


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

            new AwsProvider(this, "aws", new AwsProviderConfig
            {
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
            TerraformVariable cloudwatchLogGroupRetentionInDays = new TerraformVariable(this, "cloudwatchLogGroupRetentionInDays", new TerraformVariableConfig
            {
                Type = "number"
            });

            Vpc vpc = new Vpc(this, "vpc", new VpcConfig
            {
                Name = "vpc",
                PublicSubnets = new string[] { "10.0.1.0/24", "10.0.2.0/24" }
            });

            new Eks(this, "eks", new EksConfig
            {
                ClusterName = "my-kubernetes-cluster",
                SubnetIds = Token.AsList(vpc.PublicSubnetsOutput),
                VpcId = vpc.VpcIdOutput,
                CloudwatchLogGroupRetentionInDays = cloudwatchLogGroupRetentionInDays.NumberValue
            });
            // DOCS_BLOCK_END:tokens
        }
    }
}
