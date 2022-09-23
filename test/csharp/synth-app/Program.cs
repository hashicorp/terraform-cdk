using System;
using Providers.Null.Provider;
using Providers.Null.Resource;
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
            Resource resource = new Resource(this, "null", new ResourceConfig {});
        }

        public static void Main(string[] args)
        {
            App app = Testing.StubVersion(new App(new AppOptions { StackTraces = false }));
            new MyApp(app, "csharp-simple");
            app.Synth();
        }
    }
}