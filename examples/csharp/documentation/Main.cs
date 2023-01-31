using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;
using Examples;



namespace MyCompany.MyApp
{
    class MyApp : TerraformStack
    {
        public MyApp(Construct scope, string name) : base(scope, name)
        {

        }

        public static void Main(string[] args)
        {
            App app = new App();
            new Examples.MyAspectsStack(app, "aspects");
            new Examples.MyAspectsValidationStack(app, "aspectsValidation");
            new Examples.MyAssetStack(app, "assets");
            new Examples.MyConstructsStack(app, "constructs");
            new Examples.ConstructsScopeStack(app, "constructs-scope");
            new Examples.FunctionStack(app, "function");
            new Examples.DataSourceStack(app, "data-sources");
            new Examples.RemoteStateDataSourceStack(app, "remote-state-data-sources");
            new Examples.HclInteropStack(app, "hcl-interop");
            new Examples.ProviderStack(app, "providers");
            new Examples.ProviderClassesStack(app, "provider-classes");
            new Examples.ModuleStack(app, "modules");
            new Examples.LocalModuleStack(app, "local-modules");
            new Examples.TerraformHclModuleStack(app, "terraform-hcl-modules");
            new Examples.IteratorStack(app, "iterators");
            new Examples.TokensStack(app, "tokens");
            new Examples.CloudBackendStack(app, "remote-backend-cloud");
            new Examples.LocalBackendStack(app, "remote-backend-local");
            new Examples.ResourcesStack(app, "resources");
            new Examples.ReferencesStack(app, "references");
            new Examples.MySingleStack(app, "single-stack");
            new Examples.MyMultiStack(app, "multiple-stacks-dev", new Examples.MyMultiStackConfig {
                Environment = "dev",
            });
            new Examples.MyMultiStack(app, "multiple-stacks-staging", new Examples.MyMultiStackConfig {
                Environment = "staging",
            });
            new Examples.MyMultiStack(app, "multiple-stacks-production-us", new Examples.MyMultiStackConfig {
                Environment = "production",
                Region = "us-east-1",
            });
            new Examples.MyMultiStack(app, "multiple-stacks-production-eu", new Examples.MyMultiStackConfig {
                Environment = "production",
                Region = "eu-central-1",
            });
            new Examples.VariablesStack(app, "variables");

            TerraformStack stack = new TerraformStack(app, "stack-escape-hatches");
            // DOCS_BLOCK_START:stack-escape-hatches
            stack.AddOverride("terraform.backend", new Dictionary<string, object> {
                {"local", null}, // delete the default local backend
                {"remote", new Dictionary<string, object> {
                    {"organization", "terraform.tfstate"},
                    {"workspaces", new Dictionary<string, string> {
                        {"name", "test"}
                    }}
                }}
            });
            // DOCS_BLOCK_END:stack-escape-hatches

            app.Synth();
            Console.WriteLine("App synth complete");
        }
    }
}
