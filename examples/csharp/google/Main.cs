using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using google;
using Constructs;
using Hashicorp.Cdktf;


namespace MyCompany.MyApp
{
    class MyApp : TerraformStack
    {
        public MyApp(Construct scope, string id) : base(scope, id)
        {
            string credentials = File.ReadAllText("google.json", Encoding.UTF8);

            new GoogleProvider(this, "Google", new GoogleProviderConfig {
                Region = "us-central1",
                Zone = "us-central1-c",
                Project = "terraform-cdk",
                Credentials = credentials
            });

            ComputeNetwork network = new ComputeNetwork(this, "Network", new ComputeNetworkConfig {
                Name = "cdktf-network"
            });

            new ComputeInstance(this, "ComputeInstance", new ComputeInstanceConfig {
                Name = "cdktf-instance",
                MachineType = "f1-micro",
                BootDisk = new List<ComputeInstanceBootDisk> {
                    new ComputeInstanceBootDisk(new ComputeInstanceBootDiskConfig {
                        InitializeParams = new List<ComputeInstanceBootDiskInitializeParams> {
                            new ComputeInstanceBootDiskInitializeParams(new ComputeInstanceBootDiskInitializeParamsConfig {
                                Image = "debian-cloud/debian-9"
                            })
                        }
                    })
                },
                NetworkInterface = new List<ComputeInstanceNetworkInterface> {
                    new ComputeInstanceNetworkInterface(new ComputeInstanceNetworkInterfaceConfig {
                        Network = network.Name
                    })
                },
                Tags = new List<string> {
                    "web",
                    "dev"
                },
                DependsOn = new List<ITerraformDependable> {
                    network
                }
            });
        }

        public static void Main(string[] args)
        {
            App app = new App();
            new MyApp(app, "google");
            app.Synth();
            Console.WriteLine("App synth complete");
        }
    }
}