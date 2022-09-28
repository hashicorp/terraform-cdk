using System;
using System.Collections.Generic;
using System.Linq;
using aws.Provider;
using aws.DataAwsRegion;
using aws.DynamodbTable;
using aws.SnsTopic;
using Constructs;
using HashiCorp.Cdktf;


namespace MyCompany.MyApp
{
    class MyApp : TerraformStack
    {
        public MyApp(Construct scope, string id) : base(scope, id)
        {
            new AwsProvider(this, "aws", new AwsProviderConfig {
                Region = "eu-central-1"
            });

            DataAwsRegion region = new DataAwsRegion(this, "region");

            DynamodbTable table = new DynamodbTable(this, "Hello", new DynamodbTableConfig {
                Name = $"my-first-table-{region.Name}",
                HashKey = "temp",
                Attribute = new [] {
                    new DynamodbTableAttribute {
                        Name = "id",
                        Type = "S"
                    }
                },
                BillingMode = "PAY_PER_REQUEST"
            });

            table.AddOverride("hash_key", "id");
            table.AddOverride("lifecycle", new Dictionary<string, object> { ["create_before_destroy"] = true });

            const int topicCount = 1;
            List<SnsTopic> topics = Enumerable.Range(0, topicCount).Select(i => new SnsTopic(this, $"Topic{i}", new SnsTopicConfig {
                DisplayName = $"my-first-sns-topic{i}"
            })).ToList();

            new TerraformOutput(this, "table_name", new TerraformOutputConfig {
                Value = table.Name
            });

            for (int i = 0; i < topics.Count; i++) {
                new TerraformOutput(this, $"sns_topic{i}", new TerraformOutputConfig {
                    Value = topics[i].Name
                });
            }
        }

        public static void Main(string[] args)
        {
            App app = new App();
            new MyApp(app, "aws");
            app.Synth();
            Console.WriteLine("App synth complete");
        }
    }
}