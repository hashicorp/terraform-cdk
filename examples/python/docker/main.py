#!/usr/bin/python3 -tt
from constructs import Construct
from cdktf import App, TerraformStack
from imports.docker import Image, Container


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)
        
        docker_image = Image(self, 'nginx-latest', name='nginx:latest', keep_locally=False)
        
        Container(self, 'nginx-cdktf', name='nginx-python-cdktf',
                  image=docker_image.name, ports=[
                      {
                          'internal': 80,
                          'external': 8000
                      }], privileged=False)


app = App()
MyStack(app, "python-docker")

app.synth()
