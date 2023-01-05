
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;
using aws.Provider;
using aws.DataAwsRegion;
using aws.DynamodbTable;
using aws.SnsTopic;
using aws.SecurityGroup;

namespace Examples
{
    class ResourcesStack : TerraformStack
    {
        public ResourcesStack(Construct scope, string name) : base(scope, name)
        {

            new AwsProvider(this, "aws", new AwsProviderConfig {
                Region = "eu-central-1"
            });

            // DOCS_BLOCK_START:resources-define
            DataAwsRegion region = new DataAwsRegion(this, "region");

            new DynamodbTable(this, "first-table", new DynamodbTableConfig {
                Name = $"my-first-table-{region.Name}",
                HashKey = "temp",
                Attribute = new DynamodbTableAttribute[] {
                    new DynamodbTableAttribute {
                        Name = "id",
                        Type = "S"
                    }
                },
                BillingMode = "PAY_PER_REQUEST"
            });
            // DOCS_BLOCK_END:resources-define
            // DOCS_BLOCK_START:resources-override-attribute
            SnsTopic topic = new SnsTopic(this, "Topic", new SnsTopicConfig {
                DisplayName = "will-be-overwritten"
            });
            topic.AddOverride("display_name", "my-topic");
            // DOCS_BLOCK_END:resources-override-attribute

            // DOCS_BLOCK_START:resources-escape-hatch-dynamic-block
            TerraformVariable portsList = new TerraformVariable(this, "ports", new TerraformVariableConfig {
                Type = "list",
            });
            SecurityGroup sg = new SecurityGroup(this, "security1", new SecurityGroupConfig {
                Name = "security1",
                VpcId = "vpcs",
                Egress = new SecurityGroupEgress[] {
                    new SecurityGroupEgress {
                        FromPort = 0,
                        ToPort = 0,
                        CidrBlocks = new string[] { "0.0.0.0/0" },
                        Protocol = "-1"
                    }
                }
            });
            sg.AddOverride("dynamic.ingress", new Dictionary<string, object> {
                { "for_each", portsList.ListValue },
                { "content", new Dictionary<string, object> {
                    { "fromPort", "${ingress.value}" },
                    { "toPort", "${ingress.value}" },
                    { "cidrBlocks", new string[] { "0.0.0.0/0" } },
                    { "protocol", "-1" }
                }}
            });
            // DOCS_BLOCK_END:resources-escape-hatch-dynamic-block

        }
    }
}
