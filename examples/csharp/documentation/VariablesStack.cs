
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

        
        // const commonTags = new TerraformLocal(this, "common_tags", {
        // Service: "service_name",
        // Owner: "owner",
        // });

        // new Instance(this, "example", {
        // ami: "ami-abcde123",
        // instanceType: "t2.micro",
        // tags: commonTags.expression,
        // });
        // DOCS_BLOCK_START:var-out-define-local
        TerraformLocal commonTags = new TerraformLocal(this, "common_tags", new Dictionary<string, string> {
            { "Service", "service_name" },
            { "Owner", "owner" },
        });
        new Instance(this, "example", new InstanceConfig {
            Ami = "ami-abcde123",
            InstanceType = "t2.micro",
            Tags = Token.AsStringMap(commonTags.Expression),
        });
        // DOCS_BLOCK_END:var-out-define-local
        }
    }
}