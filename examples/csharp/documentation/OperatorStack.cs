
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
    class OperatorsStack : TerraformStack
    {
        public OperatorsStack(Construct scope, string name) : base(scope, name)
        {
            new AwsProvider(this, "aws", new AwsProviderConfig
            {
                Region = "eu-central-1"
            });

            /*
            // DOCS_BLOCK_START:operators
            DataAwsAvailabilityZones zones = new DataAwsAvailabilityZones(this, "zones", new DataAwsAvailabilityZonesConfig {
                State = "available"
            });

            // This does not work in CDKTF as of now, refer to
            // https://github.com/hashicorp/terraform-cdk/issues/2557
            new TerraformOutput(this, "half-of-the-zone", new TerraformOutputConfig {
                Value = Op.Div(Fn.LengthOf(zones.Names), 2)
            });
            // DOCS_BLOCK_END:operators
            */
        }
    }
}
