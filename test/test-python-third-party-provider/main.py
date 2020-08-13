#!/usr/bin/python3 -tt
from constructs import Construct
from cdktf import App, TerraformStack, Testing
from imports.docker import Image, Container, DockerProvider

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        DockerProvider(self, "provider")

        docker_image = Image(self, 'nginx-latest', name='nginx:latest', keep_locally=False)

        Container(self, 'nginx-cdktf', name='nginx-python-cdktf',
                  image=docker_image.name, ports=[
                      {
                          'internal': 80,
                          'external': 8000
                      }], privileged=False)


app = Testing.stub_version(App(stack_traces=False))
MyStack(app, "python-third-party-provider")

app.synth()
