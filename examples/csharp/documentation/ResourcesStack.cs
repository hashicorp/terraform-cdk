// DOCS_BLOCK_START:resources-define
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;
using aws.Provider;
using aws.DataAwsRegion;
using aws.DynamodbTable;

namespace Examples
{
    class ResourcesStack : TerraformStack
    {
        public ResourcesStack(Construct scope, string name) : base(scope, name)
        {

            new AwsProvider(this, "aws", new AwsProviderConfig {
                Region = "eu-central-1"
            });
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
        }
    }
}
// DOCS_BLOCK_END:resources-define