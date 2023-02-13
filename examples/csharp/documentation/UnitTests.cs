using System;
using Constructs;
using HashiCorp.Cdktf;
using docker.Provider;
using docker.Container;
using docker.Image;
using docker.DataDockerImage;

namespace MyCompany.ApplicationsAbstraction
{
    public class MyApplicationsAbstraction : TerraformStack
    {
        public MyApplicationsAbstraction(Construct scope, string id) : base(scope, id)
        {

            new DockerProvider(this, "provider", new DockerProviderConfig{});

            new Container(this, "ubuntu-cdktf", new ContainerConfig{
                Name = "ubuntu-dotnet-cdktf",
                Image = new Image(this, "image", new ImageConfig{
                    Name = new DataDockerImage(this, "data", new DataDockerImageConfig{
                                    Name = "ubuntu:latest",
                                }).Name
                            }).Name,
                DnsOpts = new string[]{"1", "2", "3"}
            });
        }
    }
}