using System;
using System.Collections.Generic;
using Constructs;
using HashiCorp.Cdktf;
using docker.Provider;
using docker.Container;
using docker.Image;
using docker.DataDockerImage;

namespace MyCompany.MyApp
{
    public class MyApp : TerraformStack
    {
        public MyApp(Construct scope, string id) : base(scope, id)
        {

            new DockerProvider(this, "provider", new DockerProviderConfig{});

            new Container(this, "nginx-cdktf", new ContainerConfig{
                Name = "nginx-dotnet-cdktf",
                Image = new Image(this, "image", new ImageConfig{
                    Name = new DataDockerImage(this, "data", new DataDockerImageConfig{
                                    Name = "nginx:latest",
                                }).Name
                            }).Name,
                DnsOpts = new string[]{"1", "2", "3"}
            });
        }

        public class MyAppInvalid : TerraformStack{

            public MyAppInvalid(Construct scope, string id): base(scope, id) {

                new DockerProvider(this, "provider", new DockerProviderConfig{});

                new Container(this, "nginx-cdktf", new ContainerConfig{
                    Name = "nginx-dotnet-cdktf",
                    Image = new Image(this, "image", new ImageConfig{
                    Name = new DataDockerImage(this, "data", new DataDockerImageConfig{
                                    Id = "id",
                                    Name = "nginx:latest",
                                }).Name
                            }).Name,
                    DnsOpts = new string[]{"1", "2", "3"}
                }).AddOverride("", "");
                
            }
        }

        public static void Main(string[] args)
        {
            App app = new App();
            new MyApp(app, "test-c2");
            app.Synth();
            Console.WriteLine("App synth complete");
        }
    }
}