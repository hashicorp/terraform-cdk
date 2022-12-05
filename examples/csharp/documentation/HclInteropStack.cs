// DOCS_BLOCK_START:hcl-interop
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
    class HclInteropStack : TerraformStack
    {
        public HclInteropStack(Construct scope, string name) : base(scope, name)
        {
            new RandomProvider(this, "default", new RandomProviderConfig {});
          
            var petNameLength = new TerraformVariable(this, "petNameLength", new TerraformVariableConfig {
                Type = "number",
                Default = 2,
                Description = "Pet name length"
            });

            var myPet = new Pet(this, "example", new PetConfig {
                Length = petNameLength.NumberValue
            });

            new TerraformOutput(this, "name", new TerraformOutputConfig {
                Value = myPet.Id
            });
        }
    }
}
// DOCS_BLOCK_END:hcl-interop