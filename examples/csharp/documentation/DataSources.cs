// DOCS_BLOCK_START:datasources
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;
using aws.Provider;
using aws.DataAwsRegion;

namespace Examples
{
    class DataSourceStack : TerraformStack
    {
        public DataSourceStack(Construct scope, string name) : base(scope, name)
        {

            new AwsProvider(this, "aws", new AwsProviderConfig {
                Region = "eu-central-1"
            });

            DataAwsRegion region = new DataAwsRegion(this, "region", new DataAwsRegionConfig {
                Name = "eu-central-1"
            });
        }
    }
}
// DOCS_BLOCK_END:datasources