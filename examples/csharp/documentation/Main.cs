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
            app.Synth();
            Console.WriteLine("App synth complete");
        }
    }
}
