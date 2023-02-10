// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

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
            AwsProvider provider = new AwsProvider(this, "aws", new AwsProviderConfig
            {
                Region = "eu-east-1"
            });

            new TerraformHclModule(this, "vpc", new TerraformHclModuleConfig
            {
                Source = "terraform-aws-modules/vpc/aws",
                // Note: Variables has no types for its inputs.
                // When using this for other modules consult the docs of the module
                // to ensure the arguments are correct.
                Variables = new Dictionary<string, object> {
                    { "name", "my-vpc" },
                    { "cidr", "10.0.0.0/16" },
                    { "azs", new [] { "us-west-2a", "us-west-2b", "us-west-2c" } },
                    { "private_subnets", new [] { "10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24" } },
                    { "public_subnets", new [] { "10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24" } },
                    { "enable_nat_gateway", true }
                },
                Providers = new[] { provider }
            });
        }
    }
}
// DOCS_BLOCK_END:modules-create-modules

