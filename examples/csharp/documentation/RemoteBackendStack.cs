// DOCS_BLOCK_START:remote-backend-define
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;

namespace Examples
{
    class CloudBackendStack : TerraformStack
    {
        public CloudBackendStack(Construct scope, string name) : base(scope, name)
        {
            new CloudBackend(this, new CloudBackendProps
            {
                Hostname = "app.terraform.io",
                Organization = "company",
                Workspaces = new NamedCloudWorkspace("my-app-prod")
            });

            new TerraformOutput(this, "dns-server", new TerraformOutputConfig
            {
                Value = "hello-world"
            });   
        }
    }
}
// DOCS_BLOCK_END:remote-backend-define