using System;
using Constructs;
using HashiCorp.Cdktf;

namespace MyCompany.MyApp
{
    class MyApp : TerraformStack
    {
        public MyApp(Construct scope, string id) : base(scope, id)
        {}

        public static void Main(string[] args)
        {
            App app = Testing.StubVersion(new App(new AppConfig { StackTraces = false }));
            new MyApp(app, "csharp-simple");
            app.Synth();
        }
    }
}