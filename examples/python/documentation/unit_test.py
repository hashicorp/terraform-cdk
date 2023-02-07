#!/usr/bin/env python
from constructs import Construct
from cdktf import App, TerraformStack
from imports.docker.image import Image
from imports.docker.container import Container
from imports.docker.provider import DockerProvider
from imports.docker.data_docker_image import DataDockerImage


class MyApplicationsAbstraction(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        DockerProvider(self, "provider")

        data_image = DataDockerImage(self,
                                     id_="id",
                                     name='ubuntu:latest'
                                     )

        docker_image = Image(self, 'ubuntu-image',
                             name=data_image.name,
                             keep_locally=False
                             )

        Container(self, 'ubuntu-container', name='ubuntu-python-cdktf',
                  image=docker_image.name,
                  ports=[
                      {
                          'internal': 80,
                          'external': 8000,
                          'ip': "0.0.0.0",
                          'protocol': "tcp",
                      }
                  ],
                  privileged=False,
                  )

app = App()
stack = MyApplicationsAbstraction(app, "stack")
app.synth()