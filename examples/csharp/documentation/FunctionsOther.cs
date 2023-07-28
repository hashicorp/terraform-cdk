// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0


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
    class FunctionsOtherStack : TerraformStack
    {
        public FunctionsOtherStack(Construct scope, string name) : base(scope, name)
        {
            new AwsProvider(this, "aws", new AwsProviderConfig
            {
                Region = "eu-central-1"
            });


            // DOCS_BLOCK_START:functions-raw
            DataAwsAvailabilityZones zones = new DataAwsAvailabilityZones(this, "zones", new DataAwsAvailabilityZonesConfig
            {
                State = "available"
            });

            new TerraformOutput(this, "half-of-the-zone", new TerraformOutputConfig
            {
                Value = $"${{length({zones.Fqn}.names) / 2}}"
            });
            // DOCS_BLOCK_END:functions-raw

            // DOCS_BLOCK_START:functions-lookup
            TerraformVariable v = new TerraformVariable(this, "complex_object", TerraformVariableConfig.builder()
                    .type("object({users: list(object({name: string}))})")
                    .build());
            new TerraformOutput(this, "users", new TerraformOutputConfig
            {
                Value = Fn.Lookup(v.Value, "users")
            });
            new TerraformOutput(this, "first-user-name", new TerraformOutputConfig
            {
                Value = Fn.LookupNested(v.Value, new() { "users", "0", "name" })
            });
            // DOCS_BLOCK_END:functions-lookup

            // DOCS_BLOCK_START:functions-raw-string
            new TerraformOutput(this, "quotes", new TerraformOutputConfig
            {
                Value = Fn.RawString("\"b\"")
            });
            new TerraformOutput(this, "template", new TerraformOutputConfig
            {
                Value = Fn.RawString("${TEMPLATE}")
            });
            // DOCS_BLOCK_END:functions-raw-string
        }
    }
}
