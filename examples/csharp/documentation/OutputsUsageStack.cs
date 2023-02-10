// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

// DOCS_BLOCK_START:var-out-define-output-values
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;
using random.Provider;
using random.Pet;

namespace Examples
{
    class OutputsUsageStack : TerraformStack
    {
        public OutputsUsageStack(Construct scope, string name) : base(scope, name)
        {
            new RandomProvider(this, "random", new RandomProviderConfig());
            var pet = new Pet(this, "pet", new PetConfig());
            new TerraformOutput(this, "random-pet", new TerraformOutputConfig
            {
                Value = pet.Id,
            });
        }
        // DOCS_BLOCK_END:var-out-define-output-values
        /*
        // DOCS_BLOCK_START:var-out-define-output-values
                public static void Main(string[] args)
                {
                    App app = new App();
                    new OutputsUsageStack(app, "outputs-usage");
                    app.Synth();
                }
        // DOCS_BLOCK_END:var-out-define-output-values
        */
        // DOCS_BLOCK_START:var-out-define-output-values
    }

}
// DOCS_BLOCK_END:var-out-define-output-values
