using System;
using System.Collections.Generic;
using azurerm;
using Constructs;
using HashiCorp.Cdktf;


namespace MyCompany.MyApp
{
    class MyApp : TerraformStack
    {
        public MyApp(Construct scope, string id) : base(scope, id)
        {
            new AzurermProvider(this, "AzureRm", new AzurermProviderConfig {
                Features = new AzurermProviderFeatures()
            });

            new VirtualNetwork(this, "TfVnet", new VirtualNetworkConfig {
                Location = "uksouth",
                AddressSpace = new [] {"10.0.0.0/24"},
                Name = "TerraformVNet",
                ResourceGroupName = "<YOUR_RESOURCE_GROUP_NAME>"
            });
        }

        public static void Main(string[] args)
        {
            App app = new App();
            new MyApp(app, "azure");
            app.Synth();
            Console.WriteLine("App synth complete");
        }
    }
}