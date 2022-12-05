// DOCS_BLOCK_START:functions
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;
using aws.Provider;
using aws.DataAwsAvailabilityZones;

namespace Examples
{
    class FunctionStack : TerraformStack
    {
        public FunctionStack(Construct scope, string name) : base(scope, name)
        {

            new AwsProvider(this, "aws", new AwsProviderConfig {
                Region = "eu-central-1"
            });

            DataAwsAvailabilityZones zones = new DataAwsAvailabilityZones(this, "zones", new DataAwsAvailabilityZonesConfig {
                State = "available"
            });

            new TerraformOutput(this, "first-zone", new TerraformOutputConfig {
                Value = Fn.Element(zones.Names, 0)
            });
        }
    }
}
// DOCS_BLOCK_END:functions