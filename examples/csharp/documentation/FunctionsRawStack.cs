
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
    class FunctionsRawStack : TerraformStack
    {
        public FunctionsRawStack(Construct scope, string name) : base(scope, name)
        {
            new AwsProvider(this, "aws", new AwsProviderConfig {
                Region = "eu-central-1"
            });


            // DOCS_BLOCK_START:functions-raw
            DataAwsAvailabilityZones zones = new DataAwsAvailabilityZones(this, "zones", new DataAwsAvailabilityZonesConfig {
                State = "available"
            });

            new TerraformOutput(this, "half-of-the-zone", new TerraformOutputConfig {
                Value = $"${{length({zones.Fqn}.names) / 2}}"
            });
            // DOCS_BLOCK_END:functions-raw
        }
    }
}
