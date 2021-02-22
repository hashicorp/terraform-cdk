using System;
using aws;
using Constructs;
using HashiCorp.Cdktf;

namespace MyCompany.MyApp
{
    class MyApp : TerraformStack
    {
        public MyApp(Construct scope, string id) : base(scope, id)
        {
            new AwsProvider(this, "Aws", new AwsProviderConfig {
                Region = "eu-central-1"
            });

            SnsTopic topic = new SnsTopic(this, "Topic", new SnsTopicConfig {
                DisplayName = "overwritten"
            });
            topic.AddOverride("display_name", "my-first-sns-topic");
        }

        public static void Main(string[] args)
        {
            App app = Testing.StubVersion(new App(new AppOptions { StackTraces = false }));
            new MyApp(app, "csharp-simple");
            app.Synth();
        }
    }
}