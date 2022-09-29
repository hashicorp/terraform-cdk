#!/usr/bin/env python
from constructs import Construct
from cdktf import App, TerraformStack
from imports.docker.image import Image
from imports.docker.container import Container
from imports.docker.provider import DockerProvider
from imports.docker.data_docker_image import DataDockerImage


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        DockerProvider(self, "provider")

        data_image = DataDockerImage(self,
                                     id_="id",
                                     name='nginx:latest'
                                     )

        docker_image = Image(self, 'nginx-latest',
                             name=data_image.name,
                             keep_locally=False
                             )

        Container(self, 'nginx-cdktf', name='nginx-python-cdktf',
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


class MyStackInvalidTerraform(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        DockerProvider(self, "provider")

        docker_image = Image(self, 'nginx-latest',
                             name='wrong',
                             keep_locally=False,

                             )

        Container(self, 'nginx-cdktf', name='nginx-python-cdktf',
                  image=docker_image.name,
                  ports=[
                      {
                          'internal': 80,
                          'external': 8000
                      }
                  ],
                  privileged=False,
                  ).add_override(path="", value="")


app = App()
stack = MyStack(app, "stack")
app.synth()
