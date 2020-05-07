#!/usr/bin/env python
from constructs import Construct
from cdktf import App, TerraformStack
from imports.aws import SnsTopic

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        SnsTopic(self, 'Topic', display_name='my-first-sns-topic')


app = App()
MyStack(app, "python-simple")

app.synth()