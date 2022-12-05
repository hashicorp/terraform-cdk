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
            new Examples.FunctionStack(app, "function");
            new Examples.DataSourceStack(app, "data-sources");
            new Examples.RemoteStateDataSourceStack(app, "remote-state-data-sources");
            new Examples.HclInteropStack(app, "hcl-interop");
            app.Synth();
            Console.WriteLine("App synth complete");
        }
    }
}
