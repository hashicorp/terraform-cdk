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
        resource = Resource(self, "null-resource")

        resource.add_override('triggers', {'cluster_instance_ids': 'foo'})

        self.add_override('terraform.backend', {
            'remote': {
                'organization': 'test',
                'workspaces': {
                    'name': 'test'
                }
            }
        })


app = Testing.stub_version(App(stack_traces=False))
MyStack(app, "python-simple")

app.synth()
