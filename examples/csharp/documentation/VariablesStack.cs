
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
    class VariablesStack : TerraformStack
    {
        public VariablesStack(Construct scope, string name) : base(scope, name)
        {

            new AwsProvider(this, "aws", new AwsProviderConfig {
                Region = "eu-central-1"
            });

            // DOCS_BLOCK_START:var-out-input-variables
            TerraformVariable imageId = new TerraformVariable(this, "imageId", new TerraformVariableConfig {
                Type = "string",
                Default = "ami-abcde123",
                Description = "What AMI to use to create an instance",
            });

            new Instance(this, "hello", new InstanceConfig {
                Ami = imageId.StringValue,
                InstanceType = "t2.micro",
            });
            // DOCS_BLOCK_END:var-out-input-variables

        
        }
    }
}