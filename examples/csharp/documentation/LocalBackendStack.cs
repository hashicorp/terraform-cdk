// DOCS_BLOCK_START:remote-backend-migrate
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;

namespace Examples
{
    class LocalBackendStack : TerraformStack
    {
        public LocalBackendStack(Construct scope, string name) : base(scope, name)
        {
            new TerraformOutput(this, "dns-server", new TerraformOutputConfig
            {
                Value = "local"
            });   
        }
    }
}

// DOCS_BLOCK_END:remote-backend-migrate
/*
// DOCS_BLOCK_START:remote-backend-migrate
App app = new App();
LocalBackendStack stack = new LocalBackendStack(app, "local-to-cloud-backend");
new CloudBackend(stack, new CloudBackendProps {
    Hostname = "app.terraform.io",
    Organization = "company",
    Workspaces = new NamedCloudWorkspace("my-app-prod")
});

app.Synth();
// DOCS_BLOCK_END:remote-backend-migrate

// DOCS_BLOCK_START:remote-backend-escape-hatches
stack.AddOverride("terraform.backend", new Dictionary<String, Object> {
  { "atlas", new Dictionary<String, Object> {
    { "name", "example_corp/networking-prod" },
    { "address", "https://app.terraform.io" }
  }
});
// DOCS_BLOCK_END:remote-backend-escape-hatches
*/

