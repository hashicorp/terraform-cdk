#!/usr/bin/env python
from constructs import Construct
from cdktf import App, TerraformStack, Testing, LocalBackend
from imports.null.provider import NullProvider
from imports.null.resource import Resource


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)
        LocalBackend(self, path="terraform.tfstate")

        NullProvider(self, "null")
        Resource(self, "null-resource")


app = Testing.stub_version(App(stack_traces=False))
MyStack(app, "python-simple-one")
MyStack(app, "python-simple-two")

app.synth()
