#!/usr/bin/env python
import os
from constructs import Construct
from cdktf import App, TerraformStack, Testing, TerraformAsset, AssetType
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

        TerraformAsset(self, 'fixture', path=os.path.abspath("./fixture.txt"))
        TerraformAsset(self, 'fixtures', path=os.path.abspath("./fixtures"), type=AssetType.ARCHIVE)

app = Testing.stub_version(App(stack_traces=False))
MyStack(app, "python-assets")

app.synth()