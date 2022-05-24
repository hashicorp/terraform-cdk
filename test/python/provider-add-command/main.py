#!/usr/bin/env python
from constructs import Construct
from cdktf import App, TerraformStack, Testing, LocalBackend

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

app = Testing.stub_version(App(stack_traces=False))
MyStack(app, "python-simple")

app.synth()