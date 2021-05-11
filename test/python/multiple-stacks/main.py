#!/usr/bin/env python
from constructs import Construct
from cdktf import App, TerraformStack, Testing
from imports.aws import SnsTopic, AwsProvider

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        AwsProvider(self, 'Aws', region='eu-central-1')
        topic = SnsTopic(self, 'Topic', display_name='overwritten')
        topic.add_override('display_name', 'my-first-sns-topic')

        self.add_override('terraform.backend', {
            'remote': {
                'organization': 'test',
                'workspaces': {
                    'name': 'test'
                }
            }
        })

app = Testing.stub_version(App(stack_traces=False))
MyStack(app, "python-simple-one")
MyStack(app, "python-simple-two")

app.synth()