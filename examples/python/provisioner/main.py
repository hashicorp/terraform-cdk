#!/usr/bin/env python

from constructs import Construct
from cdktf import App, TerraformStack
from imports.null.provider import NullProvider
from imports.null.resource import Resource


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        NullProvider(self, "provider")

        Resource(self, "resource", provisioners=[{
            "type": "local-exec",
            "command": "echo 'hello world'"
        }])


app = App()
MyStack(app, "python-provisioner")

app.synth()
