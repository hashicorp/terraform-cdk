using System;
using Providers.Null;
using Constructs;
using HashiCorp.Cdktf;

namespace MyCompany.MyApp
{
    class MyApp : TerraformStack
    {
        public MyApp(Construct scope, string id) : base(scope, id)
        {
            new LocalBackend(this, new LocalBackendProps {
                Path = "terraform.tfstate"
            });
            new NullProvider(this, "Null");
            Providers.Null.Resource resource = new Providers.Null.Resource(this, "null", new Providers.Null.ResourceConfig {});
        }

        public static void Main(string[] args)
        {
            App app = Testing.StubVersion(new App(new AppOptions { StackTraces = false }));
            new MyApp(app, "csharp-simple");
            app.Synth();
        }
    }
}